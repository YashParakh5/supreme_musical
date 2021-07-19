import mongoose from 'mongoose';

const custSchema = new mongoose.Schema({
    _id: {type: Number, required:true, unique:true},
    first_name: {type: String, required: true},
    second_name: {type: String, required: true},
    street: {type: String, required: true},
    city: {type: String, required: true},
    state: {type: String, required: true},
    mobile: {type: String, required: true, unique: true, validate: /^\d{10}$/},
    email: {type: String, required: true, unique: true, validate: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/},
    },
    {
        timestamps: true,
    }
);

const Customer = mongoose.model('User', custSchema);
export default Customer;