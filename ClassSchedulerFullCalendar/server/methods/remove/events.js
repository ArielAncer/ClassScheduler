Meteor.methods({
  removeEvent( event ) {
    // var x = event;
    check( event, String );

    try {
      return events.remove( {'id': event} );
    } catch ( exception ) {
      throw new Meteor.Error( '500', `${ exception }` );
    }
  }
});