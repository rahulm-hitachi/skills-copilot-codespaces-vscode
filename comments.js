// Create web server
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const axios = require('axios')

// Create express app
const app = express()

// Use cors, body-parser
app.use(cors)