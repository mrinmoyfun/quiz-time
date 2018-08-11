'use strict';

var init = function () {

	
		
		return {
			db: {
				username: "medgag",
				password: "madhurima@123",
				host: "mds155461.mlab.com",
				port: 55461,
				name: "medgag"
			},
			sessionSecret: process.env.sessionSecret,
			facebook: {
				clientID: process.env.facebookClientID,
				clientSecret: process.env.facebookClientSecret,
				callbackURL: "/auth/facebook/callback",
				profileFields: ['id', 'displayName', 'photos']
			},
			twitter:{
				consumerKey: process.env.twitterConsumerKey,
				consumerSecret: process.env.twitterConsumerSecret,
				callbackURL: "/auth/twitter/callback",
				profileFields: ['id', 'displayName', 'photos']
			},
			redis: {
				host: "mriquiz.herokuapp.com",
				port: process.env.port | 3000,
				password: ""
			}
		}
	
	
}

module.exports = init();
