Template.postPage.helpers({
	currentPost: function() {
		returns Posts.findOne(Session.get('currentPostId'));
	}
});