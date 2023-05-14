const express = require('express');
const app = express();
const port = 5000;

const userRouter = require('./routers/userRouter');
const bookingRouter = require('./routers/bookingRouter');
const expertRouter = require('./routers/expertRouter');
const equipmentRouter = require('./routers/equipmentRouter');
const cors = require('cors');

app.use(cors({
    origin: [ 'http://localhost:3000']
}));


app.use(express.json());

app.use('/user', userRouter);
app.use('/booking', bookingRouter);
app.use('/expert', expertRouter);
app.use('/equipment', equipmentRouter);

app.use(express.static('./static/uploads'));

// routes
app.get('/', (req, res) => {
    res.send('Working Perfectly');
});

app.get('/home', (req, res) => {
    res.send('Response from Home');
});

app.get('/add', (req, res) => {
    res.send('Response from Add');
})

app.listen( port, () => { console.log('server started') } );