const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const Address = new Schema({
    addressLine1: String, 
    addressLine2: String, 
    city: String, 
    state: {
        type: String, 
        enum: ['CA', 'FL', 'GA', 'NC', 'NV', 'NY', 'PR'],
        default: 'GA'
    },
    zipcode: String,
    latitude: 0,
    longitude: 0
});

const Home = new Schema({
    img: String,
    description: String, 
    address: Address,
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
        type: Boolean,
        default: false
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
    },
    homes: [Home]
});

// const Availability = new Schema({
//     home: Home,
//     zipcode: String,
//     startDate: {
//         type: Date,
//         default: Date.now()
//     }, 
//     endDate: {
//         type: Date, 
//         default: Date.now()
//     }
// });

// Availability.pre('save', function(next) {
//    if (this.startDate > this.endDate) {
//        return next(new Error('Start date is after end date!'));
//    }
//     next();
// });

// const AvailabilityModel = mongoose.model('Availability', Availability);
const AddressModel = mongoose.model('Address', Address);
const HomeModel = mongoose.model('Home', Home);
const UserModel = mongoose.model('User', User);

module.exports = {
    User: UserModel,
    Home: HomeModel,
    Address: AddressModel
    // Availability: AvailabilityModel
};
