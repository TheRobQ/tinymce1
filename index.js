'use strict';
const express = require('express')
const app = express()
const port = process.env.PORT || '3001'
const bodyParser = require('body-parser')
app.use(express.static('public'))


app.listen(port, () => {
  console.log(`you are now tunned to ${port} "the bees knees"`)
})

module.exports = app;
