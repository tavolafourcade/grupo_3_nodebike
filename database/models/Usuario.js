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
      type: dataTypes.STRING
    },
    category_id: {
      type: dataTypes.STRING
    },
    avatar_image: {
      type: dataTypes.STRING
    }
  }
  let config = {
    tableName: "users",
    timestamps: false
  }
  const Usuarios = sequelize.define(alias, cols, config);
  return Usuarios;
}
  
