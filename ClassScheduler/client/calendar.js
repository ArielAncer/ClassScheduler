Template.calendar.rendered = function () {
  var eventsOrig = CalEvents.find({}).fetch();
  var events = [];

  for (var i = 0; i < eventsOrig.length; i++) {
    events.push({
      "title": eventsOrig[i].title,
      "start": eventsOrig[i].start,
      "end": eventsOrig[i].end,
      "allDay": false
    })
  }
  $('#calendar').fullCalendar({
    weekends: false,
    defaultView: 'agendaWeek',
    events: events
  })
};
