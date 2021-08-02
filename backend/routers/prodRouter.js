import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Product from '../models/prodModel.js';

const prodRouter = express.Router();

prodRouter.get('/', expressAsyncHandler(async(req,res) =>{
    const products = await Product.find({});
    res.send({ products }); 
}));

prodRouter.get('/category', expressAsyncHandler(async(req, res) =>{
      const category = await Product.find().distinct('category');
      res.send(category);
}));

prodRouter.get('/seed', expressAsyncHandler(async(req,res) =>{
    const createdProducts = await Product.insertMany(data.products);
    res.send({ createdProducts });
}));

export default prodRouter;