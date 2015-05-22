Template.contextExample.rendered = function(){

	console.log('Rendered	Context	Example',	this.data);
};

Template.contextExample.helpers({

	logContext: function() {

		console.log("Context log helper", this);
		return	Session.get('randomNumber');
	}
});

Template.contextExample.events({
		'click	button':	function(e,	template){
				Session.set('randomNumber',	Math.random(0,99));
		}
});