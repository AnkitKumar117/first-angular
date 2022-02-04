const Sequelize = require('sequelize');


 const sequelize = new Sequelize('practice', 'root', 'Strong@1234', {
  host: '127.0.0.1',
  port:'3306',
  dialect: 'mysql' 
});


module.exports = sequelize