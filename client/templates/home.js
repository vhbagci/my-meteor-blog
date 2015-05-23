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
	postsList: function(){
		return  [
		            {
		                title:  'My Second entry',
		                description:  'Borem  sodum  color  sit  amet,  consetetur  sadipscing elitr.',
		                author:  'Fabian  Vogelsteller',
		                timeCreated:  moment().subtract(3,  'days').fromNow() // check http://momentjs.com/
		            },
		            {
		                title:  'My  First  entry',
						description:  'Lorem  ipsum  dolor  sit  amet,  consetetur  sadipscing  elitr.',
		                author:  'Fabian  Vogelsteller',
		                timeCreated:  moment().subtract(7,  'days').fromNow()
		            }
		        ];
	}
});