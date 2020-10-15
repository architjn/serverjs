require('dotenv/config');
const fs = require('fs');
const path = require('path');
const readline = require('readline');
const toCamelCase = require('../lib/operations');

var appDir = path.dirname(require.main.filename);
var data = {};

function parseVariables(envFile) {
	return new Promise((resolve, reject)=>{
		if (!fs.existsSync(envFile)) return;
		const file = readline.createInterface({
			input: fs.createReadStream(envFile),
			output: process.stdout,
			terminal: false
		});
		file.on('line', (line) => {
			var base = line.split("=");
			if (base.length <= 1) return;
			const keysplit = base[0].split("_");
			var actualKey = keysplit[0].toLowerCase();
			keysplit.shift();
			data[actualKey] = {};
			data[actualKey][toCamelCase(keysplit)] = base[1];
		});
		file.on("close", () => {
			resolve(data);
		})
	})
}

module.exports = function (options) {
	options = {
		envFile: ".env",
		...options
	}
	return parseVariables(path.join(appDir, options.envFile));
};