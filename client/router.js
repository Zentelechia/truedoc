
Router.onBeforeAction(function() {
  if (! Meteor.userId()) {
    this.render('login');
    this.next();
  } else {
    this.next();
  }
});

Router.route('/', 
  function () {
  this.render('uploadForm');
  this.render('docs');
});
Router.route('login', {
		path: '/login',
    template: 'login'
});
