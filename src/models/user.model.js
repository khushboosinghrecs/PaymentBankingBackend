const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required:[true, 'Email is required'],
        trim: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, 'Please provide a valid email address'],
        unique: [true, 'Email already exists']
    },
    name:{
        type: String,
        required:[true, 'Name is required for creating account'],
        trim: true
    },
    password:{
        type: String,
        required:[true, 'Password is required for creating account'],
        minlength: [6, 'Password must be at least 6 characters long'],
        select: false
    }
},{
    timestamps: true
});

userSchema.pre('save', async function(next){
    if(!this.isModified('password')) return; //This runs automatically before a user document is saved to the database.

    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    return;
});

userSchema.methods.comparePassword = async function(password){
    return bcrypt.compare(password, this.password);
}

const userModel = mongoose.model('user', userSchema);
module.exports = userModel;