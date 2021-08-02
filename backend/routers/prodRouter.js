import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Product from '../models/prodModel.js';

const prodRouter = express.Router();

prodRouter.get('/', expressAsyncHandler((req,res) =>{
    const products = await Product.find({});
    res.send({ products }); 
}));

prodRouter.get('/seed', expressAsyncHandler((req,res) =>{
    const createdProducts = await Product.insertMany(data.products);
    res.send({ createdProducts });
}));

export default prodRouter;