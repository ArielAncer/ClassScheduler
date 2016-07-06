Template.touromen.created = function() {
  Session.set('fullWeek', '2016-09-11');
  Session.set('ranges', [{start: '2016-09-01', end: '2017-01-15'}]);
  Session.set('maxCredits', 17);
};
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
  },
  'events': function() {
    return Template.events //FIND OUT WHAT IS GOING ON HERE
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
  'click div[data-crn]': function() {
    if (Session.get('credits') + this.credits > Session.get('maxCredits')) {
      Bert.alert('Too many credits!', 'danger')
    }
    else {
      var events = [], eventItem = {};
      for (i in this.time) {
        var eventItem  = {
          id: this.crn,
          title: this.title,
          credits: this.credits,
          start: moment(this.time[i].start, ["h:mma"]).format("HH:mm"),
          end: moment(this.time[i].end, ["h:mma"]).format("HH:mm"),
          // overlap: false,
          dow: this.time[i].day.split("").map(function(day) {
            switch(day) {
              case "S":
                return 0;
              case "M":
                return 1;
              case "T":
                return 2;
              case "W":
                return 3;
              case "R":
                return 4;
              case "F":
                return 5;
              case "A":
                return 6;
            }
          }),
          // ranges:  [{start: Session.get('firstDay'), end: Session.get('lastDay')}],
        };
        Meteor.call('addEvent', eventItem, ( error ) => {
          if ( error ) {
            Bert.alert( error.reason, 'danger' );
          } else {
            Bert.alert( 'Event added!', 'success' );
            Session.set('credits', Session.get('credits') + event.credits);          
          }
        });
      }
      
    }
  },

});