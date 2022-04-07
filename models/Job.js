const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

// create our User model
class Job extends Model { }

// define table columns and configuration
Job.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        pay: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        check_in: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },

        walk: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },

        timeframe: {
            type:DataTypes.DATE,
            allowNull: false

        },

        location: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        completed: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },

        owner_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'owner',
                key: 'id'
            }
        },

        walker_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'walker',
                key: 'id'
            }
        },

        animal_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'pets',
                key: 'id'
            }
        }
    },

    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'job'
    }
);

module.exports = Job;
