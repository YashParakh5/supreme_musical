import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Customer from'../models/custModel.js';

const custRouter = express.Router();

custRouter.get('/', expressAsyncHandler(async(req, res) =>{
    await Customer.remove({});
    const createdCustomers = await Customer.insertMany(data.customers);
    res.send({ createdCustomers });
}));

export default custRouter;