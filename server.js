const express = require('express');
const app = express();
const connectDB = require('./config/db');


//DB connection
connectDB();


//iinit Middleware
app.use(express.json ({ extended: false}));

app.get( '/', (req, res) => res.send({ 'msg' : 'welcome to Contact Keeper API'}));


//Defining Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));


const PORT = process.env.PORT || 5000 ;

app.listen( PORT, () => console.log(`server started on ${PORT} `));
