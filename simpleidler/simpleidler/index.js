const moment = require('moment');
try {
	// Checking if module colors is installed
	colors = require('colors');
	// Checking if module steam-user is installed
	SteamUser = require('steam-user');
	// Checking if module steam-totp is installed
	SteamTotp = require('steam-totp');
} catch (ex) {
	// If modules are not installed showing an clear error message to user.
	console.log('| [Modules] |: Missing dependencies. Install a version with dependecies or use npm install.');
	console.log(ex);
	process.exit(1);
}

const user = new SteamUser();
const config = require('./config.js');

console.log('================================================');
console.log('================================================');
console.log('‎██╗░░██╗███████╗███████╗░░░ '.red);
console.log(' ╚██╗██╔╝╚════██║╚════██║░░░ '.red);
console.log(' ░╚███╔╝░░░███╔═╝░░███╔═╝░░░ '.red);
console.log(' ░██╔██╗░██╔══╝░░██╔══╝░░░░░ '.red);
console.log(' ██╔╝╚██╗███████╗███████╗██╗ '.red);
console.log(' ╚═╝░░╚═╝╚══════╝╚══════╝╚═╝ '.red);
console.log('================================================');
console.log('================================================\n\n\n');

console.log('This bot was developed by XZZ.'.rainbow);
console.log('Loading config file...'.yellow);
console.log('Starting bot...'.green);
console.log('If bot doesnt start in next 1 minute steam is down.'.red);
console.log(moment().format('MMMM Do YYYY, h:mm:ss a\n\n').red);

const logOnOptions = {
	accountName: config.accName,
	password: config.accPass
}

user.logOn(logOnOptions);

user.on('loggedOn', () => {
	console.log(logOnOptions.accountName + ' - Successfully logged on');
	user.setPersona(config.accStatus);          
	user.gamesPlayed(config.gameList);
});