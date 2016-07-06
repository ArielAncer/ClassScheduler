Meteor.methods({
  editEvent( event ) {
    check( event, {
      _id: String,
      title: Match.Optional( String ),
      start: String,
      end: String
    });

    try {
      return Events.update( event._id, {
        $set: event
      });
    } catch ( exception ) {
      throw new Meteor.Error( '500', `${ exception }` );
    }
  }
});