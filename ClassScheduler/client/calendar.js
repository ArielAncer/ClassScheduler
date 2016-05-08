Template.calendar.rendered = function () {
  $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });
};

Template.calendar.helpers({
  'calendar': function () {
    return calendar.find({}).fetch();
  },

  'currentMoreInfo': function () {
    return Session.get('currentMoreInfo');
  }
});

Template.calendar.events({
  'click a#more-info': function () {
    Session.set('currentMoreInfo', this);
    $('#modal1').openModal();
  },

  'click h5.title': function (e) {
    e.preventDefault();

    Session.set('eventObject', this);
    var eventObjectSession = Session.get('eventObject');
    var eventObject = {
      title: eventObjectSession.title,
      start: '2016-05-10 ' + eventObjectSession.time1start,
      end: '2016-05-10 ' + eventObjectSession.time1finish,
      allDay: false
    }
    console.log(eventObject)

    CalEvents.insert(eventObject);

    $('#calendar').fullCalendar('refetchEvents');
  }
});
