const Sequelize = require('sequelize');
const db = {};
var sequelize = new Sequelize('bce', 'root', 'ducDH#1234', {host: '35.193.144.126', dialect: 'mysql'});
db.sequelize = sequelize
db.Sequelize = Sequelize
module.exports = db

