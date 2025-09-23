// we create the json server here
// import json-server using import or require

const jsonServer = require('json-server')


// import cors import stmt all at top
const cors = require('cors')


// create a server using json-server
const server = jsonServer.create()



// setup a middleware
const middleware = jsonServer.defaults()


// setup routes
const route = jsonServer.router('db.json')


// implementing Use
server.use(cors())
server.use(middleware)
server.use(route)


// create a PORT
const PORT = process.env.PORT || 3000

// start server
server.listen(PORT,()=>{
    console.log("server running on port:",PORT);
})