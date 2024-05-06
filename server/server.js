const express = require('express')
const axios = require('axios')
const cors = require('cors')
require('dotenv').config()

const app = express()

const PORT = process.env.PORT || 5000

app.use(cors())

app.listen(PORT,() => console.log(`Server is listening on ${PORT}`))