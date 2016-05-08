Template.calendar.rendered = function () {
    // setInterval(function() {
    //   $('#calendar').fullCalendar('removeEvents')
    //   $('#calendar').fullCalendar('refetchEvents');
    //   console.log(CalEvents.find({}).fetch());
    // }, 1000)
    $('#mycalendar').fullCalendar('removeEvents')
    $('#mycalendar').fullCalendar('refetchEvents');
    console.log(CalEvents.find({}).fetch())
    //$('#mycalendar').fullCalendar( 'renderEvent', {title: "Accounting Principles II", start: "2016-05-10 09:00", end: "2016-05-10 10:15"});
    //
    this.autorun(function () {
        //1) trigger event re-rendering when the collection is changed in any way
        //2) find all, because we've already subscribed to a specific range
        $('#mycalendar').fullCalendar('removeEvents')
        $('#mycalendar').fullCalendar('refetchEvents');
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
  },
    added: function(id) {
    $('#mycalendar').fullCalendar('refetchEvents');
  },

  removed: function(id) {
    $('#mycalendar').fullCalendar('refetchEvents');
  },

  changed: function(old, newd) {
    $('#mycalendar').fullCalendar('refetchEvents');
  }
});
