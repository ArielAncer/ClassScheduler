Meteor.methods({
  addEvent( event ) {

    check( event, {
      id: String,
      credits: Number,
      dow: [Number],
      end: String,
      start: String,
      title: String,
      end2: Number,
      start2: Number,
    });

    var x = events.find({dow: { $in: event.dow }, 
                          $or: [{ start2: {$gt: event.start2 - .00001, $lt: event.end2} }, 
                                { end2: {$gt: event.start2, $lt: event.end2 + .00001} }]
                        }).fetch();
    if (!x.length) {
      try {    
        return events.insert( event );
      } catch ( exception ) {
        throw new Meteor.Error( '500', `${ exception }` );
      }
    }
    else {
      var str = x.reduce( function(previousValue, currentValue) {
            return previousValue + currentValue.title + (previousValue === ''? "" : ",");
          }, '');
      throw new Meteor.Error( '500', 'Conflict with the following courses: ' + str);
    }
  }
});
