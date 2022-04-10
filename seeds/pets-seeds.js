const { Pets } = require('../models');

const petsData = [
    {
        id: 1,
        pet_name: 'Spot',
        owner_id: 1,
        pet_type: 'Dog',
        description: 'Energetic, young male dog who loves to play catch.'

    }
    // {
    //     id: '2',
    //     pet_name: 'Peach',
    //     owner_id: '2',
    //     pet_type: 'Cat',
    //     description: 'The ultimate grumpy cat, can be won over with treats.'

    // },
    // {
    //     id: '3',
    //     pet_name: 'Chunk',
    //     owner_id: '3',
    //     pet_type: 'Guinea Pig',
    //     description: 'Chunk is easy to please with fresh water, hay, and carrots.'

    // },
    // {
    //     id: '4',
    //     pet_name: 'Bob',
    //     owner_id: '4',
    //     pet_type: 'Dog',
    //     description: 'Bob is a good boi'
    // }

];

const seedPets = () => Pets.bulkCreate(petsData);

module.exports = seedPets;
