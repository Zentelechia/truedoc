
Router.onBeforeAction(function() {
  if (! Meteor.userId()) {
     this.render('login');
  } else {
    this.next();
  }
});

Router.route('/', 
  function () {
  this.render('uploadForm');
  this.next();
});
Router.route('login', {
		path: '/login',
    template: 'login'
});
