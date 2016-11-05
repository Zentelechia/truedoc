var login=function(){
		Meteor.loginWithPassword(llogin.value,ppassword.value,function(err){
		if(!err){
			Meteor.call("log");
			Router.go('/');
		}
		else {  	
			error_msg.innerText=err.reason;
		}
	});
}
Template.login.events({
'click #submit' : login,
'keydown #ppassword' : function(e){
        if(e.which==13){
		login();
	}
	}
});
Template.login.onRendered(function(){
//$('body').css('background','url("bg.jpg")');
});