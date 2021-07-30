const  mongoose= require('mongoose');

const URI = 'mongodb://localhost:27017/mern-tasks';

mongoose.connect(URI)
    .then(db => console.log('La base datos esta conectada'))
    .catch(err => console.error(err));