import express from 'express';
import mongoose from 'mongoose';
import data from './data.js';
import custRouter from './routers/custRouter.js';
import empRouter from './routers/empRouter.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:3000/supreme_musical',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}); 

app.get('/api/products', (req,res) =>{
    res.send(data.products);
});

app.use('/api/customers', custRouter);
app.use('/api/employees', empRouter);   

app.get('/', (req, res) => {
    res.send('server is ready');
});

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});

const port = 3000;
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});