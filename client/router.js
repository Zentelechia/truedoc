
Router.onBeforeAction(function() {
  if (! Meteor.userId()) {
    return false;
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
