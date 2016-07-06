Template.creditCounter.helpers({
	'credits' : function() {
		return Session.get('credits');
	},
	'maxCredits' : function() {
		return Session.get('maxCredits');
	},

})