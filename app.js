const routes = require('./routes/routes')
const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.use('/public',express.static(path.join(__dirname, '/public')));

app.use('', routes);

//App running
app.listen(port, () => console.log(`App running on port ${port}!`))

