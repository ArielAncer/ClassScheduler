Template.calendar.rendered = function () {
  var events = CalEvents.find({}).fetch();
  $('#calendar').fullCalendar({
    weekends: false,
    defaultView: 'agendaWeek',
    events: events
  })
};
