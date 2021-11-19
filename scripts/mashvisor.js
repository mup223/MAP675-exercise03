const http = require("https");

const options = {
	"method": "GET",
	"hostname": "mashvisor-api.p.rapidapi.com",
	"port": null,
	"path": "/rental-rates?state=CA&source=traditional&city=Los%20Angeles",
	"headers": {
		"x-rapidapi-host": "mashvisor-api.p.rapidapi.com",
		"x-rapidapi-key": "42f01355f3msh753401c754c605bp18f7aajsn2bfde9e27a34",
		"useQueryString": true
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();