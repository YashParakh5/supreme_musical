import express from 'express';
import data from './data.js';

const app = express();

app.get('api/products', (req,res) =>{
    res.send(data.products);
});

app.get('/', (req, res) => {
    res.send('server is ready');
});

const port = 3000;
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});