module.exports = (sequelize, dataTypes) => {
  let alias= "Usuarios"
  let cols = {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: dataTypes.INTEGER
      },
    first_name: {
      type: dataTypes.STRING
    },
    last_name: {
      type: dataTypes.STRING
    },
    email: {
      type: dataTypes.STRING
    },
    password: {

    },
    category: {
      type: dataTypes.STRING
    },
    image: {
      type: dataTypes.STRING
    }
  }
  let config = {
    tableName: "users",
    timeStamps: false
  }
}
  
const User = sequelize.define(alias, cols, config);
  return Usuario;