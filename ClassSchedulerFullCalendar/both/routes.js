// Router.configure({
//   // the default layout
//   layoutTemplate: 'index'
// });

Router.route('/', function () {
  Session.set('route', 'home');
  this.render('/main');
  //Set session to return true for nav bar change in 'navigation.html/js'
});

Router.route('/stern', function () {
  Session.set('route', 'details');
  this.render('stern');
});

Router.route('/syms', function () {
  Session.set('route', 'details');
  this.render('syms');
});

Router.route('/yc', function () {
  Session.set('route', 'details');
  this.render('yc');
});

Router.route('/touromen', function () {
  Session.set('route', 'details');
  this.render('touromen');
});

Router.route('/tourowomen', function () {
  Session.set('route', 'details');
  this.render('tourowomen');
});