const Owner = require("./owner");
const Walker = require("./walker");
const Pets = require("./pets");
const Job = require("./Job");

Owner.hasMany(Pets, {
  foreignKey: "owner_id",
});

Pets.belongsTo(Owner, {
  foreignKey: "owner_id",
  onDelete: "CASCADE",
});

Owner.hasMany(Job, {
  foreignKey: "owner_id",
});

Walker.hasMany(Job, {
  foreignKey: "walker_id",
});

Job.belongsTo(Walker, {
  foreignKey: "walker_id",
});

Job.belongsTo(Owner, {
  foreignKey: "owner_id",
});

// Need association between Pets and Jobs??
Pets.hasMany(Job, {
  foreignKey: "animal_id",
  constraints: false,
});

Job.belongsTo(Pets, {
  foreignKey: "animal_id",
  constraints: false,
});

module.exports = { Walker, Owner, Pets, Job };
