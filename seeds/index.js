const seedPets = require('./pets-seeds');
const seedOwner = require('./owner-seeds');
const seedWalker = require('./walker-seeds');
const seedJob = require('./job-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedOwner();
  console.log('\n----- Owner SEEDED -----\n');
  
  await seedWalker();
  console.log('\n----- Walker SEEDED -----\n');
  
  await seedPets();
  console.log('\n----- Pets SEEDED -----\n');
  
  await seedJob();
  console.log('\n----- Jobs SEEDED -----\n');
  process.exit(0);
};

seedAll();


