const { Walker } = require("../models");

const walkerData = [
  {
    id: "SP20XG0Q9NW6N2HT6JZHXX6S5XZGS01P3QSVTTCMV",
    first_name: "Rebekkah",
    last_name: "Walker",
    email: "email@s.com",
    password: "password",
  },
  {
    id: "SP206YJ9G14C3FD0JZE3C92KZ3V35JVNVW93Q0VKQ",
    first_name: "John",
    last_name: "Walker",
    email: "email@v.com",
    password: "password",
  },
  {
    id: "SP1J0C3N0K7492QTXYABY24P1YRSGBB7366W3F9NE",
    first_name: "Brian",
    last_name: "Walker",
    email: "brian@abc.com",
    password: "password",
  },
  {
    id: "SP3MZ2H39NNKJ09YYRX6P92V8PTR7ERNC13P0BQ9M",
    first_name: "David",
    last_name: "Walker",
    email: "davidc453@abc.com",
    password: "password",
  },
];

const seedWalker = () => Walker.bulkCreate(walkerData);

module.exports = seedWalker;
