const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const Availability = new Availability({
    startDate: {
        type: Date,
        default: Date.now()
    }, 
    endDate: {
        type: Date, 
        default: Date.now()
    }
});

const Address = new Schema({
    addressLine1: String, 
    addressLine2: String, 
    city: String, 
    state: {
        type: String, 
        enum: ['CA', 'FL', 'GA', 'NC', 'NV', 'NY', 'PR'],
        default: 'GA'
    }
});

const Home = new Home({
    img: String,
    description: String, 
    rooms: 0, 
    guests: 0, 
    smoking: {
        type: Boolean, 
        default: false
    },
    kids: {
        type: Boolean,
        default: false
    }, 
    pets: {
        type: Boolean
    }
});

const User = new Schema({
    email: String, 
    password: String, 
    username: String,
    img: String,  
    isOwner: {
        type: Boolean, 
        default: true
    }
});

Availability.pre('save', function(next) {
    now = new Date();
    this.updatedAt = now;
    if (!this.createdAt) {
        this.createdAt = now;
    }
    next();
});

Address.pre('save', function(next) {
    now = new Date();
    this.updatedAt = now;
    if (!this.createdAt) {
        this.createdAt = now;
    }
    next();
});

Home.pre('save', function(next) {
    now = new Date();
    this.updatedAt = now;
    if (!this.createdAt) {
        this.createdAt = now;
    }
    next();
});

User.pre('save', function(next) {
    now = new Date();
    this.updatedAt = now;
    if (!this.createdAt) {
        this.createdAt = now;
    }
    next();
});

const AvailabilityModel = mongoose.model('Availability', Availability);
const AddressModel = mongoose.model('Address', Address);
const HomeModel = mongoose.model('Home', Home);
const UserModel = mongoose.model('User', User);

module.exports = {
    User: UserModel,
    Home: HomeModel,
    Address: AddressModel,
    Availability: AvailabilityModel
};
