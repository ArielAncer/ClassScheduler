sternClasses = new Mongo.Collection('sternclasses');
symsMenClasses = new Mongo.Collection('symsmenclasses');
ycClasses = new Mongo.Collection('ycclasses');
touroMenClasses = new Mongo.Collection('touromenclasses');
touroWomenClasses = new Mongo.Collection('tourowomenclasses');
events = new Mongo.Collection( 'events' );

events.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});
events.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});
let eventsSchema = new SimpleSchema({
  'id': {
    type: String,
    label: 'The Course CRN'
  },
  'title': {
    type: String,
    label: 'The title of this course.'
  },
  'start': {
    type: String,
    label: 'When this course will start.'
  },
  'end': {
    type: String,
    label: 'When this course will end.'
  },
  'dow': {
    type: [ Number ],
    label: 'Days of the week that this course will take place on.'
  },
  'credits': {
    type: Number,
    label: 'number of credits',
    decimal: true
  },
  'start2': {
    type: Number,
    label: 'overlap start',
    decimal: true
  },
  'end2': {
    type: Number,
    label: 'overlap end',
    decimal: true
  },
});
events.attachSchema( eventsSchema );