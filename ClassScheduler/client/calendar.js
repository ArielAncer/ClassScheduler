Template.calendar.rendered = function () {
    var fc = $('#calendar');
    this.autorun(function () {
        //1) trigger event re-rendering when the collection is changed in any way
        //2) find all, because we've already subscribed to a specific range
        CalEvents.find();
        fc.fullCalendar('refetchEvents');
    });
};

Template.calendar.helpers({
  options: function () {
    return {
      defaultView: 'basicWeek',
      weekends: false,
      defaultView: 'agendaWeek',
      id: "calendar",
      events: CalEvents.find({}).fetch()
    };
  }
});
