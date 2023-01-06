const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const port = 3000
const testPort = 8888

// where the app should look for each endpoints related resource files
app.use(express.static(__dirname + '/'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
/*
app.param('access_token', (req, res, next, token) => {
	console.log('*** access token param callback activated ***')
	console.log(req.body)
	console.log(req.params)
	next()
})
*/
// endpoint request handling (routing) with callback functions
app.get('/', function (req,res) {
	res.sendFile(__dirname + '/index.html')
	console.log('you have a visitor!')
})

app.get('/callback', function (req, res) {
	console.log('someone made a request!\n')
	///								////
	console.log(req + '\n')
	console.log(res + '\n')
	///								////
	console.log(req.body)
})

app.post('/callback', function (req, res) {
	console.log('someone made a request!\n')
	///								////
	console.log(req + '\n')
	console.log(res + '\n')
	///								////
	console.log(req.body)
})

/*
app.get('/callback/#access_token', (req,res) => {
	console.log('access token route activated')
	console.log(req.body)
	console.log(req.params)
	res.end()
})
*/
//start the server on the specified port
app.listen(testPort, () => console.log(`server is listening on port ${testPort} ...`))
