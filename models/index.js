const Owner = require('./owner');
const Walker = require('./walker');
const Pets = require('./pets');
const Job = require('./job');

Owner.hasMany(Pets, {
    foreignKey: 'owner_id'
  });
  
  Pets.belongsTo(Owner, {
    foreignKey: 'owner_id',
    onDelete: 'CASCADE'
  });
  
  Owner.hasMany(Job,{
    foreignKey: 'owner_id',
  })
  
  Walker.hasMany(Job, {
      foreignKey: 'walker_id'
    });
  
  Job.belongsTo(Walker, {
    foreignKey: 'walker_id'
  });
  
  Job.belongsTo(Owner, {
    foreignKey: 'owner_id'
  });

  Pets.hasMany(Job, {
    foreignKey: 'job_id',
    
  })

  Job.belongsTo(Pets, {
    foreignKey: 'animal_id',
    constraints: false
  })
 
  // Pets.belongsTo(Job, {
  //   foreignKey: 'id'
  // });

module.exports = { Walker, Owner, Pets, Job };