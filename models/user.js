const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {
    //   checkPassword(loginPw) {
    //     return bcrypt.compareSync(loginPw, this.password);
    //   }
}

// define table columns and configuration
User.init(
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            unique: true,
            validate: {
                len: [2]
            }
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },

        isWalker: {
            type: DataTypes.BOOLEAN,
            allowNull: false

        },
        isOwner: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },


        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
            }


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
        //   {
        //     hooks: {
        //       // set up beforeCreate "hook"
        //       async beforeCreate(newUserData) {
        //         newUserData.password = await bcrypt.hash(newUserData.password, 10);
        //         return newUserData;
        //       },
        //     // set up beforeUpdate "hook"
        //       async beforeUpdate(updatedUserData) {
        //         updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        //         return updatedUserData;
        //       }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);


module.exports = User;
