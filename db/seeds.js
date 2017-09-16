require('dotenv').config();
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI, {
    keepAlive: true,
    reconnectTries: Number.MAX_VALUE,
    useMongoClient: true
});

//const Availability = require('../db/schema').Availability;
const Home = require('../db/schema').Home;
const User = require('../db/schema').User;
const Address = require('../db/schema').Address;

// Availability.remove({}, (err) => {
//     if(err) console.log(err);
// });
Home.remove({}, (err) => {
    if(err) console.log(err);
});
User.remove({}, (err) => {
    if(err) console.log(err);
});
Address.remove({}, (err) => {
    if(err) console.log(err);
});

const address1 = new Address(
    {
        addressLine1: '925 Canterbury Rd NE', 
        addressLine2: '', 
        city: 'Atlanta', 
        state: 'GA',
        zipcode: '30324',
        latitude: 33.8266543,
        longitude: -84.35714329999999
    }
);
const address2 = new Address(
    {
        addressLine1: '102 E Liberty St', 
        addressLine2: '', 
        city: 'Savannah', 
        state: 'GA',
        zipcode: '31401',
        latitude: 32.0746007,
        longitude: -81.0920649
    }
);

const home1 = new Home(
    {
        img: 'https://i.imgur.com/ycdWdDXl.jpg',
        description: 'Upscale home in Atlanta, close to many attractions.', 
        address: address1,
        rooms: 3, 
        guests: 7, 
        smoking: false,
        kids: true,
        pets: false
    }
);

const home2 = new Home(
    {
        img: 'https://i.imgur.com/Wr37V2al.jpg',
        description: 'Urban oasis in Historic Savannah.', 
        address: address2,
        rooms: 3, 
        guests: 6, 
        smoking: false,
        kids: true,
        pets: true
    }
);

const user1 = new User(
    {
        email: 'kelly@email.com', 
        password: 'hotsundae', 
        username: 'kelly',
        img: 'https://i.imgur.com/mbXJel2t.jpg',  
        isOwner: true,
        homes:[home1, home2]
    }
);

const user2 = new User(
    {
        email: 'zack@email.com', 
        password: 'zackattack', 
        username: 'zack',
        img: 'https://i.imgur.com/NxJ2jsNm.jpg',  
        isOwner: false,
        homes: []
    }
);

user1.save().then(() => {
    console.log('user saved!');
}).catch((err) => {
    console.log('error saving user', err);
});
 
user2.save().then(() => {
    console.log('user saved!');
}).catch((err) => {
    console.log('error saving user', err);
});


// const availability1 = new Availability(
//     {
//         home: home1,
//         zipcode: '30324',
//         startDate: Date.now(),
//         endDate: Date.now() + 1000 * 60 * 60 * 24 * 5
//     }
// );

// const availability2 = new Availability(
//     {
//         home: home2,
//         zipcode: '31401',
//         startDate: Date.now(),
//         endDate:  Date.now() + 1000 * 60 * 60 * 24 * 7
//     }
// );

// [availability1,availability2].map((availability) => {
//     availability.save().then((a) => {
//         console.log('availability is saved!');
//     }).catch((err) => {
//         console.log('error saving availability', err);
//     });
// });
mongoose.connection.close();