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
        owner_id: 'SP2Q6C1P00N04NBE5HF2H81R52S3VD04V4BCBW59K',
        walker_id: null,
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
        owner_id: 'SP2Q6C1P00N04NBE5HF2H81R52S3VD04V4BCBW59K',
        walker_id: 'SP206YJ9G14C3FD0JZE3C92KZ3V35JVNVW93Q0VKQ',
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
        owner_id: 'SP29AZWNBFXEHJGBQ2BMQ71W8R79DCA3NZQ7QJ367',
        walker_id: 'SP206YJ9G14C3FD0JZE3C92KZ3V35JVNVW93Q0VKQ',
        animal_id: '3'

    },
    {
        id: '4',
        pay: '10',
        check_in: 'false',
        walk:'true',
        timeframe: '2022-04-17',
        location: '28210',
        completed: 'false',
        owner_id: 'SP1J0C3N0K7492QTXYABY24P1YRSGBB7366W3F9NE',
        walker_id: null,
        animal_id: '6'

    },
    {
        id: '5',
        pay: '10',
        check_in: 'true',
        walk:'false',
        timeframe: '2022-04-10',
        location: '28210',
        completed: 'false',
        owner_id: 'SP29AZWNBFXEHJGBQ2BMQ71W8R79DCA3NZQ7QJ367',
        walker_id: 'SP206YJ9G14C3FD0JZE3C92KZ3V35JVNVW93Q0VKQ',
        animal_id: '7'

    }

];

const seedJob = () => Job.bulkCreate(jobData);

module.exports = seedJob;
