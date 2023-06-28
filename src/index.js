const { conn } = require('./DB_connection')
const server = require('./app');
require ('dotenv').config() 
const PORT = process.env.PORT || 3001


conn.sync({ alter: true})


server.listen(PORT, () => {console.log(`Server listening to juice wrld on port: ${PORT}`);});