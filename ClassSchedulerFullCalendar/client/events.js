Template.events.onCreated( () => {
  let template = Template.instance();
  template.subscribe( 'events' );
});

Template.events.onRendered( () => {
  $( '#events-calendar' ).fullCalendar({
    defaultView: 'agendaWeek',
    defaultDate: Session.get('fullWeek'),
    aspectRatio: 2,
    // overlap: false,
    // scrolltime: "8:00am",
    // contentHeight: 6000,
    header: {
        left: 'prev,next today',
        center: 'title',
        right: 'agendaWeek basicWeek month', //'printCalendar printScheduleDoc',//'month,agendaWeek,agendaDay'
      },
    events( start, end, timezone, callback ) {
      let data = events.find().fetch().map( ( event ) => {
        event.editable = false;
        return event;
      });
      if ( data ) {
        callback( data );
        Session.set('credits', function() {
          return events.find().fetch().reduce(function(previousValue, currentValue) {
            return previousValue + currentValue.credits;
          }, 0.0)
        }())
      }
    },
    eventRender: function(event, element) {
      element.bind('dblclick', function() {    
        Meteor.call( 'removeEvent', event.id, ( error ) => {
          if ( error ) {
            Bert.alert( error.reason, 'danger' );
          } else {
            Bert.alert( 'Event deleted!', 'success' );
            Session.set('credits', Session.get('credits') - event.credits);
          }
        });
      });
      return (Session.get('ranges').filter(function(range){
          return (event.start.isBefore(range.end) &&
                  event.end.isAfter(range.start));       
      })).length > 0;
    },
    eventAfterRender:function( event, element, view ) { 
      $(element).attr("data-crn", "" + event.id);
    },
  });

  Tracker.autorun( () => {
    events.find().fetch();
    $( '#events-calendar' ).fullCalendar( 'refetchEvents' );
  });
});

Template.events.helpers({

})

Template.events.events({

});