const sequelize = require('./dbconnect.js');
const { DataTypes } = require('sequelize');

const Usuario = sequelize.define('Usuario', {
    cpfusuario: {
        type: DataTypes.STRING(11),
        primaryKey: true,
        allowNull: false,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Usuario