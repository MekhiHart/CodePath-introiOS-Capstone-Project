const express = require("express")
const mongoose = require("mongoose")
const session = require("express-session")

const MongoStore = require("connect-mongo")

const app = express()

// DOTENV
require("dotenv").config()

// connection string
const dbString = `mongodb+srv://mekhihart:${process.env.DB_PASSWORD}@session.520mjt6.mongodb.net/`
const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

// creates connection between server and database
const connection = mongoose.createConnection(dbString, dbOptions)

//middle ware
app.use(express.json())
app.use(express.urlencoded({extended: true}))


// details where session is stored; which database and which collection from the DB
const sessionStore = new MongoStore({
    mongooseConnection: connection,
    mongoUrl: dbString,
    collection: "sessions"
})

// session middleware which checks the client's session ID 
app.use(session({
    secret: "some secret",
    resave: false,
    store: sessionStore,
    cookie:{
        maxAge: 1000 * 60 * 60 * 24
    }
}))


app.get("/", (req, res, next) =>{
    console.log(req.session)
    // changes made to the session is automatically perited in the db by the express-session
    if (req.session.visits){
        req.session.visits+= 1
    }
    else{
        req.session.visits = 1
    }
    res.send(`<h1> Number of visits ${req.session.visits}</h1>`)
})

app.listen(3000, () =>{
    console.log(`Server running on port 3000`)

})