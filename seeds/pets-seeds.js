const { Pets } = require('../models');

const petsData = [
    {
        id: 1,
        pet_name: 'Spot',
        owner_id: 'SP2Q6C1P00N04NBE5HF2H81R52S3VD04V4BCBW59K',
        pet_type: 'Dog',
        description: 'Energetic, young male dog who loves to play catch.'

    },
    {
        id: 2,
        pet_name: 'Peach',
        owner_id: 'SP2Q6C1P00N04NBE5HF2H81R52S3VD04V4BCBW59K',
        pet_type: 'Cat',
        description: 'The ultimate grumpy cat, can be won over with treats.'

    },
    {
        id: 3,
        pet_name: 'Chunk',
        owner_id: 'SP29AZWNBFXEHJGBQ2BMQ71W8R79DCA3NZQ7QJ367',
        pet_type: 'Guinea Pig',
        description: 'Chunk is easy to please with fresh water, hay, and carrots.'

    },
    {
        id: 4,
        pet_name: 'Bob',
        owner_id: 'SP29AZWNBFXEHJGBQ2BMQ71W8R79DCA3NZQ7QJ367',
        pet_type: 'Dog',
        description: 'Bob is a good boi'
    },
    {
        id: 6,
        pet_name: 'Oliver',
        owner_id: 'SP1J0C3N0K7492QTXYABY24P1YRSGBB7366W3F9NE',
        pet_type: 'Dog',
        description: 'White dog with brown paws.  His only crime is that he loves too much.'

    },
    {
        id: 7,
        pet_name: 'Calvin',
        owner_id: 'SP1J0C3N0K7492QTXYABY24P1YRSGBB7366W3F9NE',
        pet_type: 'Cat',
        description: 'Grey cat with a meow like thunder.  Keeps odd hours.'

    }

];

const seedPets = () => Pets.bulkCreate(petsData);

module.exports = seedPets;
