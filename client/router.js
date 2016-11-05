
Router.onBeforeAction(function() {
  if (! Meteor.userId()) {
    this.render('login');
    this.next();
  } else {
    this.next();
  }
});

Router.route('/', function () {
});

});
Router.route('login', {
		path: '/login'
});
