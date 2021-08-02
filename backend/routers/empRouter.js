import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Employee from '../models/empModel.js';

const empRouter = express.Router();

empRouter.get('/', expressAsyncHandler(async(req, res) =>{
   await Employee.remove({});
   const createdEmployees = await Employee.insertMany(data.employees);
   res.send({ createdEmployees });
}));

export default empRouter;