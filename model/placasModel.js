const sequelize = require('sequelize');

const connection = require('../database/database');

const carros = connection.define(
    'tbl_placas',
    {
        placa_carro:{
            type: sequelize.STRING,
            allowNull: false
        },

        marca_carro:{
            type: sequelize.STRING,
            allowNull: false
        },

        modelo_carro:{
            type: sequelize.STRING,
            allowNull: false
        },

        ano_carro:{
            type: sequelize.STRING,
            allowNull: false
        }
    }
);

//carros.sync({force:true});

module.exports = carros;
