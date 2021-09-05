const express = require('express');
const app = express();
const port = 3000;
app.get('/', function (req,res) {
	res.sendFile(__dirname + '/templates/landing_page.html');
});
app.use(express.static(__dirname + '/'));
app.listen(port, () => console.log('server is running'));
