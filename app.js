
//write a config.js module file with the credentials (accountSid, authToken and from)
var config = require('./config'),
    faker = require('faker');

var client = require('twilio')(config.accountSid, config.authToken);

client.messages.create({
	to: "+5215525586067",
	from: config.from,
	body: "Hola " + faker.name.findName() + faker.lorem.words(3).join(' ') +". 4yopping.",
}, function(err, message) {
    if(err) return  console.info(err);

	console.info(message.sid);
});
