'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     return queryInterface.createTable('users', 
     {
       id: {type:Sequelize.INTEGER, unique: true , allowNull: false, primaryKey: true,  autoIncrement: true},
       user_name: {type:Sequelize.STRING, allowNull: false},
       password:{type:Sequelize.STRING, allowNull: false},
       email:{type:Sequelize.STRING, allowNull: false},
       number:{type:Sequelize.INTEGER, allowNull: false},
       gender: {type:Sequelize.STRING, allowNull: false},
       image: {type:Sequelize.STRING}
   })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     return queryInterface.dropTable('users');
  }
};
