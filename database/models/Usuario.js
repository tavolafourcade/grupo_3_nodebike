module.exports = (sequelize, dataTypes) => {
  const Usuario = sequelize.define(
  let alias: "Usuarios";
  let cols = {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: dataTypes.INTEGER
      },
    first_name: {
      allowNull: false,
      type: dataTypes.STRING
    },
    last_name: {
      allowNull: false,
      type: dataTypes.STRING
    };
      "email": "rplanque0@google.com.au",
      "password": "6Z4ZC0Z",
      "category": "user",
      "image": "user_1.jpg"

    let config = {
      tableName: "users",
      timeStamps: false
    }
  }
  
    );
  return Usuario;
}