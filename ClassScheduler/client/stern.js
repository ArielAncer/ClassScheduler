Template.stern.rendered = function () {
  $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });

  Session.set('currentSearch')
};

Template.stern.helpers({
  'sternClasses': function () {
    return sternClasses.find({}, {sort: {title: 1}}).fetch();
  },

  'search': function() {
    return Session.get('currentSearch')
  },

  'currentMoreInfo': function () {
    return Session.get('currentMoreInfo');
  }
});
function isSlotSelected($slot) { return $slot.is('[data-selected]'); }
Template.stern.events({
  'keydown input.search' : function (event) {
    if (event.which == 13) { // 13 is the enter key event
      var searchTerm = $('input.search').val();
      var search = sternClasses.find({title:{$regex:"(^| )" + searchTerm + ".*", $options: 'i'}}, {sort: {title: 1}}).fetch();
      Session.set('currentSearch', search);

    }
  },
  'click a#more-info': function () {
    Session.set('currentMoreInfo', this);
    $('#modal1').openModal();
  },
  'click h5.title': function (event) {
    // obtain course information

    var day='', time = '';
    // obtain target table cells
    // change cell class and attributes
    for (letter in this.day1) {
      day = this.day1[letter];
      var $startSlot = $('td.time-slot[data-day*="' + day + '"][data-time="' + this.time1start + '"]');
      if (isSlotSelected($startSlot)) { 
        plugin.deselect($startSlot);
        $startSlot.text('');
      }
      else {  
        // if we are in selecting mode
        // then end of selection
        $startSlot.text(this.title);
        var currSlot = [parseInt(this.time1start.substring(0,this.time1start.indexOf(':'))), parseInt(this.time1start.slice(-4,-2)), this.time1start.slice('-2')];
        var finalSlot = [parseInt(this.time1finish.substring(0,this.time1finish.indexOf(':'))), parseInt(this.time1finish.slice(-4,-2)), this.time1finish.slice('-2')];
        getSelection($(slotSelectorGenerator(day, currSlot)), $(slotSelectorGenerator(day, finalSlot))).each(function() {
          this.setAttribute('data-selected', 'selected');
        });
        // var slotSelector = '', slot = '';
        // while (currSlot[0] !== finalSlot[0] || currSlot[1] !== finalSlot[1] || currSlot[2] !== finalSlot[2]) {
        //   slotSelector = slotSelectorGenerator(day, currSlot);
        //   slot = plugin.$el.find(slotSelector);
        //   // slot.addClass(newClass);
        //   document.querySelector(slotSelector).setAttribute('data-selected', 'selected')
        //   currSlot = increment(currSlot);
        // }
        // var collection = getSelection
        // plugin.$el.trigger('selected.artsy.dayScheduleSelector', [getSelection(plugin, 
        //                                                                           $('td.time-slot[data-day*="' + day + '"][data-time="' + this.time1finish + '"]'), startSlot)]);
      }
    }
  },
});
  function getSelection($a, $b) {
    var $slots, small, large, temp;
    if (!$a.hasClass('time-slot') || !$b.hasClass('time-slot') ||
        ($a.data('day') != $b.data('day'))) { return []; }
    $slots = $('.time-slot[data-day*="' + $a.data('day') + '"]');
    small = $slots.index($a); large = $slots.index($b);
    if (small > large) { temp = small; small = large; large = temp; }
    return $slots.slice(small, large + 1);
  }
  function slotSelectorGenerator(dayNum, slotArr) {
    return "td.time-slot[data-day*='" + dayNum + "'][data-time='" + slotArr[0] + ":" + 
                              (slotArr[1] < 10 ? "0" : "") + slotArr[1] + slotArr[2] + "']"
  }