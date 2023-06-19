const sequelize = require('sequelize');

const connection = require('../database/database');
const placas = require('./placasModel')

const user = connection.define(
    'tbl_User',
    {
        name_User:{
            type: sequelize.STRING,
            allowNull: false
        },
        CPF_User:{
            type: sequelize.STRING,
            allowNull: false
        },
        status_User:{
            type: sequelize.BOOLEAN,
            allowNull: false
        }
    }
);

placas.hasMany(user);

user.belongsTo(placas);

//user.sync({force:true});

module.exports = user;