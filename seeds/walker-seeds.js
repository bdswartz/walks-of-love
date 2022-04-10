const { Walker } = require('../models');

const walkerData = [
    {
        id: "SP20XG0Q9NW6N2HT6JZHXX6S5XZGS01P3QSVTTCMV",
        first_name: 'Rebekkah',
        last_name: 'Walker',
        email: 'email',
        password: 'password'
    },
    {
        id: "SP206YJ9G14C3FD0JZE3C92KZ3V35JVNVW93Q0VKQ",
        first_name: 'John',
        last_name: 'Walker',
        email: 'email',
        password: 'password'
    }
];


    const seedWalker = () => Walker.bulkCreate(walkerData);

    module.exports = seedWalker;
    