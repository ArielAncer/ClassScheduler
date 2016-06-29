(function ($) {
  'use strict';

  var DayScheduleSelector = function (el, options) {
    this.$el = $(el);
    if (this.$el['0']['id'] === 'day-schedule'){
      this.options = $.extend({}, DayScheduleSelector.DEFAULTS, options);
      this.render();
    }
    // else if (this.$el['0']['id'] === 'course-listing-schedule') {
    //   this.$cal_slots = $('.time-slot');
    // }
    this.attachEvents();
    this.$selectingStart = null;
  }

  DayScheduleSelector.DEFAULTS = {
    days        : ['S', 'M', 'T', 'W', 'R', 'F'],  // Sun - Sat
    startTime   : '08:00',                // HH:mm format
    endTime     : '23:30',                // HH:mm format
    interval    : 5,                     // minutes
    stringDays  : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    template    : '<div class="day-schedule-selector">'         +
                    '<table class="schedule-table striped centered responsive">'            +
                      '<thead class="schedule-header"></thead>' +
                      '<tbody class="schedule-rows"></tbody>'   +
                    '</table>'                                  +
                  '<div>'
  };

  /**
   * Render the calendar UI
   * @public
   */
  DayScheduleSelector.prototype.render = function () {
    this.$el.html(this.options.template);
    this.renderHeader();
    this.renderRows();
  };

  /**
   * Render the calendar header
   * @public
   */
  DayScheduleSelector.prototype.renderHeader = function () {
    var stringDays = this.options.stringDays
      , days = this.options.days
      , html = '';

    $.each(days, function (i, _) { html += '<th>' + (stringDays[i] || '') + '</th>'; });
    this.$el.find('.schedule-header').html('<tr><th></th>' + html + '</tr>');
  };

  /**
   * Render the calendar rows, including the time slots and labels
   * @public
   */
  DayScheduleSelector.prototype.renderRows = function () {
    var start = this.options.startTime
      , end = this.options.endTime
      , interval = this.options.interval
      , days = this.options.days
      , $el = this.$el.find('.schedule-rows');

    $.each(generateDates(start, end, interval), function (i, d) {
      var daysInARow = $.map(new Array(days.length), function (_, i) {
        return '<td class="time-slot" data-time="' + hmmAmPm(d) + '" data-day="' + days[i] + '"></td>'
      }).join();
      if (hmmAmPm(d).indexOf("00") > 0 || hmmAmPm(d).indexOf("30") > 0) {
        $el.append('<tr><td class="time-label">' + hmmAmPm(d) + '</td>' + daysInARow + '</tr>');
      }
      else {
        $el.append('<tr><td class="time-label"></td>' + daysInARow + '</tr>'); 
      }
    });
    $el.prepend('<br><br>')
  };

  /**
   * Is the day schedule selector in selecting mode?
   * @public
   */
  DayScheduleSelector.prototype.isSelecting = function () {
    return !!this.$selectingStart;
  }

  DayScheduleSelector.prototype.select = function ($slot) { $slot.attr('data-selected', 'selected'); }
  DayScheduleSelector.prototype.deselect = function ($slot) { 
    var currSlot = this.time1start.split(/(:|am|pm)/);
    var finalSlot = this.time1finish.split(/(:|am|pm)/);
    while (currSlot[0] !== finalSlot[0] || currSlot[1] !== finalSlot[1] || currSlot[2] !== finalSlot[2]) {
      plugin.$el.find('td[data-day*="' + dayNum + '"][data-time="' + currSlot[0] + ":" + currSlot[1] + currSlot[2] + '"]').removeAttr('data-selected').removeClass(this.crn);
      currSlot = increment(currSlot);
    }
  }

  function isSlotSelected($slot) { return $slot.is('[data-selected]'); }
  function isSlotSelecting($slot) { return $slot.is('[data-selecting]'); }
 
  /**
   * Get the selected time slots given a starting and a ending slot
   * @private
   * @returns {Array} An array of selected time slots
   */
  function getSelection(plugin, $a, $b) {
    var $slots, small, large, temp;
    if (!$a.hasClass('time-slot') || !$b.hasClass('time-slot') ||
        ($a.data('day') != $b.data('day'))) { return []; }
    $slots = plugin.$el.find('.time-slot[data-day*="' + $a.data('day') + '"]');
    small = $slots.index($a); large = $slots.index($b);
    if (small > large) { temp = small; small = large; large = temp; }
    return $slots.slice(small, large + 1);
  }

  DayScheduleSelector.prototype.attachEvents = function () {
    var plugin = this;
    // if (this.$el['0']['id'] === 'day-schedule') {
    this.$el.on('click', '.time-slot', function () {
      if (isSlotSelected($(this))) { 
        // plugin.deselect($(this)); 
        var crn = this.getAttribute('data-crn');
        $(".deep-purple.lighten-4[data-crn='" + crn + "']").removeClass("deep-purple lighten-4");
        var $slots = $(".time-slot[data-crn='" + crn + "']").removeAttr('data-selected').removeAttr('data-crn').first().text('');
      }
    });
    // }
  }
  function slotSelectorGenerator(dayNum, slotArr) {
    return "td.time-slot[data-day*='" + dayNum + "'][data-time='" + slotArr[0] + ":" + 
                              (slotArr[1] < 10 ? "0" : "") + slotArr[1] + slotArr[2] + "']"
  }
  function increment(arr) {
    arr[1] = arr[1] + 5;
    if (arr[1] >= 60) {
      arr[1] = 0;
      arr[0] = arr[0] + 1;
      if (arr[0] > 12) {
        arr[0] = 1;
        arr[2] = (arr[2] === "am" ? "pm" : "am");
      }
    }
    return arr;
  }

  /**
   * Serialize the selections
   * @public
   * @returns {Object} An object containing the selections of each day, e.g.
   *    {
   *      0: [],
   *      1: [["15:00", "16:30"]],
   *      2: [],
   *      3: [],
   *      5: [["09:00", "12:30"], ["15:00", "16:30"]],
   *      6: []
   *    }
   */
  DayScheduleSelector.prototype.serialize = function () {
    var plugin = this
      , selections = {};

    $.each(this.options.days, function (_, v) {
      var start, end;
      start = end = false; selections[v] = [];
      plugin.$el.find(".time-slot[data-day='" + v + "']").each(function () {
        // Start of selection
        if (isSlotSelected($(this)) && !start) {
          start = $(this).data('time');
        }

        // End of selection (I am not selected, so select until my previous one.)
        if (!isSlotSelected($(this)) && !!start) {
          end = $(this).data('time');
        }

        // End of selection (I am the last one :) .)
        if (isSlotSelected($(this)) && !!start && $(this).is(".time-slot[data-day='" + v + "']:last")) {
          end = secondsSinceMidnightToHhmm(
            hhmmToSecondsSinceMidnight($(this).data('time')) + plugin.options.interval * 60);
        }

        if (!!end) { selections[v].push([start, end]); start = end = false; }
      });
    })
    return selections;
  };

  /**
   * Deserialize the schedule and render on the UI
   * @public
   * @param {Object} schedule An object containing the schedule of each day, e.g.
   *    {
   *      0: [],
   *      1: [["15:00", "16:30"]],
   *      2: [],
   *      3: [],
   *      5: [["09:00", "12:30"], ["15:00", "16:30"]],
   *      6: []
   *    }
   */
  DayScheduleSelector.prototype.deserialize = function (schedule) {
    var plugin = this, i;
    $.each(schedule, function(d, ds) {
      var $slots = plugin.$el.find('.time-slot[data-day="' + d + '"]');
      $.each(ds, function(_, s) {
        for (i = 0; i < $slots.length; i++) {
          if ($slots.eq(i).data('time') >= s[1]) { break; }
          if ($slots.eq(i).data('time') >= s[0]) { plugin.select($slots.eq(i)); }
        }
      })
    });
  };

  // DayScheduleSelector Plugin Definition
  // =====================================

  function Plugin(option) {
    return this.each(function (){
      var $this   = $(this)
        , data    = $this.data('artsy.dayScheduleSelector')
        , options = typeof option == 'object' && option;

      if (!data) {
        $this.data('artsy.dayScheduleSelector', (data = new DayScheduleSelector(this, options)));
      }
    });
  }

  $.fn.dayScheduleSelector = Plugin;

  /**
   * Generate Date objects for each time slot in a day
   * @private
   * @param {String} start Start time in HH:mm format, e.g. "08:00"
   * @param {String} end End time in HH:mm format, e.g. "21:00"
   * @param {Number} interval Interval of each time slot in minutes, e.g. 30 (minutes)
   * @returns {Array} An array of Date objects representing the start time of the time slots
   */
  function generateDates(start, end, interval) {
    var numOfRows = Math.ceil(timeDiff(start, end) / interval);
    return $.map(new Array(numOfRows), function (_, i) {
      // need a dummy date to utilize the Date object
      return new Date(new Date(2000, 0, 1, start.split(':')[0], start.split(':')[1]).getTime() + i * interval * 60000);
    });
  }

  /**
   * Return time difference in minutes
   * @private
   */
  function timeDiff(start, end) {   // time in HH:mm format
    // need a dummy date to utilize the Date object
    return (new Date(2000, 0, 1, end.split(':')[0], end.split(':')[1]).getTime() -
            new Date(2000, 0, 1, start.split(':')[0], start.split(':')[1]).getTime()) / 60000;
  }

  /**
   * Convert a Date object to time in H:mm format with am/pm
   * @private
   * @returns {String} Time in H:mm format with am/pm, e.g. '9:30am'
   */
  function hmmAmPm(date) {
    var hours = date.getHours()
      , minutes = date.getMinutes()
      , ampm = hours >= 12 ? 'pm' : 'am';
    return (hours>=13? hours - 12 : hours) + ':' + ('0' + minutes).slice(-2) + ampm;
  }

  /**
   * Convert a Date object to time in HH:mm format
   * @private
   * @returns {String} Time in HH:mm format, e.g. '09:30'
   */
  function hhmm(date) {
    var hours = date.getHours()
      , minutes = date.getMinutes();
    return ('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2);
  }

  function hhmmToSecondsSinceMidnight(hhmm) {
    var h = hhmm.split(':')[0]
      , m = hhmm.split(':')[1];
    return parseInt(h, 10) * 60 * 60 + parseInt(m, 10) * 60;
  }

  /**
   * Convert seconds since midnight to HH:mm string, and simply
   * ignore the seconds.
   */
  function secondsSinceMidnightToHhmm(seconds) {
    var minutes = Math.floor(seconds / 60);
    return ('0' + Math.floor(minutes / 60)).slice(-2) + ':' +
           ('0' + (minutes % 60)).slice(-2);
  }

  // Expose some utility functions
  window.DayScheduleSelector = {
    ssmToHhmm: secondsSinceMidnightToHhmm,
    hhmmToSsm: hhmmToSecondsSinceMidnight
  };
})($);
