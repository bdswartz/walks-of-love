const { Owner } = require('../models');

const ownerData = [
    {
        id: "SP2Q6C1P00N04NBE5HF2H81R52S3VD04V4BCBW59K",
        first_name: 'Rebekkah',
        last_name: 'Owner',
        email: 'email',
        password: 'password'
    },
    {
        id: "SP29AZWNBFXEHJGBQ2BMQ71W8R79DCA3NZQ7QJ367",
        first_name: 'John',
        last_name: 'Owner',
        email: 'email',
        password: 'password'
    }

];


const seedOwner = () => Owner.bulkCreate(ownerData);

module.exports = seedOwner;
