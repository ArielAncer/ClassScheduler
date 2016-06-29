Template.touromen.rendered = function () {
  $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });

  Session.set('currentSearch')
};

Template.touromen.helpers({
  'touroMenClasses': function () {
    return touroMenClasses.find({}, {sort: {title: 1}}).fetch();
  },

  'search': function() {
    return Session.get('currentSearch')
  },

  'currentMoreInfo': function () {
    return Session.get('currentMoreInfo');
  }
});

Template.touromen.events({
  'keydown input.search' : function (event) {
    if (event.which == 13) { // 13 is the enter key event
      var searchTerm = $('input.search').val();
      var search = touroMenClasses.find({title:{$regex:"(^| )" + searchTerm + ".*", $options: 'i'}}, {sort: {title: 1}}).fetch();
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
      var startSlots = [];
      var endSlots = [];
      for (var num in this.time) {
        day = this.time[num].day;
        start = this.time[num].start;
        end = this.time[num].end;
        var $startSlot = $('td.time-slot[data-day*="' + day + '"][data-time="' + start + '"]');
        var $endSlot = $('td.time-slot[data-day*="' + day + '"][data-time="' + end + '"]');
        var a = this.crn;
        var b = $startSlot.data('crn');
        if (isSlotSelected($startSlot) || isSlotSelected($endSlot)) { 
          if (this.crn === "" + $startSlot.data('crn')) {
            $startSlot.text('');
            getSelection($startSlot, $endSlot).removeAttr('data-crn').removeAttr('data-selected');
            $(event.target.parentNode).removeClass('deep-purple lighten-4');
          }
          // else {
          //   findIntersection(getSelection($startSlot, $endSlot), )
          // }
        }
        else {
          $startSlot.text(this.title);
          getSelection($startSlot, $endSlot).attr('data-crn', this.crn).attr('data-selected', 'selected');
          $(event.target.parentNode).addClass('deep-purple lighten-4');
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
    function slotSelectorGenerator(slotArr) {
      return "td.time-slot[data-day*='" + slotArr[0] + "'][data-time='" + slotArr[1] + ":" + 
                                (slotArr[2] < 10 ? "0" : "") + "" + slotArr[2] + "" + slotArr[3] + "']";
    }
    function isSlotSelected($slot) { return $slot.is('[data-selected]'); }
