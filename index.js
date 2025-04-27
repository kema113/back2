const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
//local imports
const connectDb = require('./db.js')
const employeeRoutes = require('./controllers/employee.controller')
const app = express()
//middleware
app.use(bodyParser.json())
app.use(cors())
app.use('/api/employees1', employeeRoutes)


connectDb()
    .then(() => {
        console.log('db connection succeeded.')
        app.listen(3000,
            () => console.log('server started at 3000.'))
    })
    .catch(err => console.log(err))


app.get('/',(req,res)=> {
        res.send("Welcome in express-------")
    })