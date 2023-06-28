require('dotenv').config();
const { Sequelize } = require('sequelize');
const UserModel = require('./models/User');
const FavoriteModel = require('./models/Favorite');
const {
   DB_USER, DB_PASSWORD, DB_HOST, DB_DEPLOY,
 } = process.env;
// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
 const sequelize = new Sequelize(DB_DEPLOY, {
   logging: false, // set to console.log to see the raw SQL queries
   native: false, // lets Sequelize know we can use pg-native for ~30% more speed
 });

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.
FavoriteModel(sequelize)
//
UserModel(sequelize)
//

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!

const { User, Favorite } = sequelize.models;
User.belongsToMany(Favorite, {through: "user_favorite", timestamps: false});
Favorite.belongsToMany(User, {through: "user_favorite", timestamps: false});
module.exports = {
   User,
   Favorite,
   conn: sequelize,
};
