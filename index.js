const config = require('./bin/config');


function startServer(options){
	options = {
		port: 8000,
		...options
	}
	config().then(r => {
		global.config = r;
	}).then(r => {
		console.log(`App has been started on Port ${options.port}`);
	}).catch(err=> {
		console.log("Error Setting up the project")
	})
}

module.exports = {
	listen: startServer
}