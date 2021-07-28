import mongoose from 'mongoose';

const prodSchema = new mongoose.Schema({
    name: {type: String, required: true},
    company: {type: String, required: true},
    category: {type: String, required: true},
    quantity: {type: Number, required: true},
    price: {type: Number, required: true},
    description: {type: String, required: true},
    },
    {
        timestamps: true,
    },
);

const Product = mongoose.Model('Product', prodSchema);
export default Product;