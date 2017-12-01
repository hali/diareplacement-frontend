//This file is mocking a web API by hitting hard coded data.
var posts = require('./dummyPosts').posts;
var _ = require('lodash');

//This would be performed on the server in a real app. Just stubbing in.
var _generateId = function(post) {
	return post.id;
};

var _clone = function(item) {
	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var PostApi = {
	getAllPosts: function() {
		return _clone(posts); 
	},

	getPostById: function(id) {
		var post = _.find(posts, {id: id});
		return _clone(post);
	},
	
	savePost: function(post) {
		//pretend an ajax call to web api is made here
		console.log('Pretend this just saved the post to the DB via AJAX call...');
		
		if (post.id) {
			var existingPostIndex = _.indexOf(posts, _.find(posts, {id: post.id})); 
			posts.splice(existingPostIndex, 1, post);
		} else {
			//Just simulating creation here.
			//The server would generate ids for new authors in a real app.
			//Cloning so copy returned is passed by value rather than by reference.
			post.id = 5;
			posts.push(_clone(post));
		}

		return post;
	},

	deletePost: function(id) {
		console.log('Pretend this just deleted the post from the DB via an AJAX call...');
		_.remove(posts, { id: id});
	}
};

module.exports = PostApi;