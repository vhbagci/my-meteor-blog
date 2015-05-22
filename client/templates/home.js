Template.home.created	=	function(){
		console.log('Created	the	home	template');
};
Template.home.rendered	=	function(){
		console.log('Rendered	the	home	template');
		//this.$('p').html('We	just	replaced	that	text!');
};
Template.home.destroyed	=	function(){
		console.log('Destroyed	the	home	template');
};

Template.home.helpers({

		exampleHelper1:	function(){
				return	'This text came from a helper with some <strong>HTML</strong>.';
		},

		exampleHelper2:	function(){
				return	new	Spacebars.SafeString('This text came from a helper with some <strong>HTML</strong>.');
		},

		dataContextHelper: function(){
			return	{
						someText:	'This text was set using a helper of the parent template.',
						someNested:	{
								text:'That comes from "someNested.text"'
						}
				};
		}
});