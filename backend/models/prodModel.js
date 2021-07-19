import mongoose from 'mongoose';

const prodSchema = new mongoose.Schema({
    _id: {type: Number, required:true, unique:true},
    name: {type: String, required: true},
    company: {type: String, required: true},
    category: {type: String, required: true},
    quantity: {type: Number, required: true},
    price: {type: Number, required: true},
    description: {type: String, required: true},
});

const Product = mongoose.Model('Product', prodSchema);
export default Product;