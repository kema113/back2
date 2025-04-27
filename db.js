const mongoose = require('mongoose')

const dbUri = 'mongodb+srv://fgicentermm:CQYKZGKbAyOjIOXQ@cluster0.enokv.mongodb.net/BookStore?retryWrites=true&w=majority&appName=Cluster0'

mongoose.set('strictQuery', false)

module.exports = () => {
    return mongoose.connect(dbUri,
        { useNewUrlParser: true, useUnifiedTopology: true })
}