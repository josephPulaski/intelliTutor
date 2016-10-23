var AccessToken = require('twilio').AccessToken;

// Substitute your Twilio AccountSid and ApiKey details
var ACCOUNT_SID = 'accountSid';
var API_KEY_SID = 'apiKeySid';
var API_KEY_SECRET = 'apiKeySecret';

// Create an Access Token
var accessToken = new AccessToken(
  ACCOUNT_SID,
  API_KEY_SID,
  API_KEY_SECRET
);

// Set the Identity of this token
accessToken.identity = 'example-user';

// Grant access to Conversations
var grant = new AccessToken.ConversationsGrant();
grant.configurationProfileSid = 'configurationProfileSid';
accessToken.addGrant(grant);

// Serialize the token as a JWT
var jwt = accessToken.toJwt();
console.log(jwt);