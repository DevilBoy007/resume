const express = require('express')
const app = express()
const port = 3000
app.get('/', function (req,res) {
	res.sendFile(__dirname + '/index.html')
	console.log('you have a visitor!')
})
app.use(express.static(__dirname + '/'))
app.listen(port, () => console.log('server is running...'))
