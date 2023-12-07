
const bcryptjs = require('bcryptjs')
const salt = bcryptjs.genSaltSync(10);
const genericPassword = bcryptjs.hashSync("PruebasDev01.", salt);

const users = [...Array(1)].map((user) => (
  {
    firstName: "Esteban",
    lastName: "Londoño",
    email: "stebanlondo75@gmail.com",
    password: genericPassword,
    createdAt: new Date(),
    updatedAt: new Date()
  }
))

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', users, {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};