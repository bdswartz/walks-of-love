const { Job } = require('../models');

const jobData = [
    {
        id: '1',
        pay: '20',
        check_in: 'true',
        walk:'false',
        timeframe: '2022-04-22',
        location: '27707',
        completed: 'false',
        owner_id: '1',
        walker_id: '1',
        animal_id: '1'

    },
    {
        id: '2',
        pay: '30',
        check_in: 'false',
        walk:'true',
        timeframe: '2022-05-1',
        location: '27713',
        completed: 'false',
        owner_id: '2',
        walker_id: '2',
        animal_id: '2'

    },
    {
        id: '3',
        pay: '45',
        check_in: 'true',
        walk:'true',
        timeframe: '2022-04-12',
        location: '27705',
        completed: 'false',
        owner_id: '3',
        walker_id: '3',
        animal_id: '3'

    },
    {
        id: '4',
        pay: '10',
        check_in: 'true',
        walk:'false',
        timeframe: '2022-04-17',
        location: '27713',
        completed: 'false',
        owner_id: '4',
        walker_id: '4',
        animal_id: '4'

    },

];

const seedJob = () => Job.bulkCreate(jobData);

module.exports = seedJob;
