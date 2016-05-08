Template.calendar.helpers({
  options: function () {
    return {
      defaultView: 'basicWeek',
      weekends: false,
      defaultView: 'agendaWeek',
      events: CalEvents.find({}).fetch()
    };
  }
});
