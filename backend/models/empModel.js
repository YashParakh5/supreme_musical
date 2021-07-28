import mongoose from 'mongoose';

const empSchema = new mongoose.Schema({
    first_name: {type: String, required: true},
    second_name: {type: String, required: true},
    department: {type: String, required: true},
    post: {type: String, required: true},
    street: {type: String, required: true},
    city: {type: String, required: true},
    state: {type: String, required: true},
    mobile: {type: String, required: true, unique: true, validate: /^\d{10}$/},
    email: {type: String, required: true, unique: true, validate: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/},
    password: {type: String, required: true, validate:/^.{6,9}$/},
    },
    {
        timestamps: true,
    },
);

const Employee = mongoose.model('Employee', empSchema);
export default Employee;