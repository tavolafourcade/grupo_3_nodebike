module.exports = (sequelize, dataTypes) => {
  let alias= "Category"
  let cols = {
    category_id: {
      autoIncrement: true,
      primaryKey: true,
      type: dataTypes.INTEGER
      },
    category_name: {
      type: dataTypes.STRING
    }
  }
  let config = {
    tableName: "users_category",
    timestamps: false
  }
  const Category = sequelize.define(alias, cols, config);
//   Category.associate = (models) => {
//     Category.hasMany(models.Usuarios, {
//         as: "Usuarios",
//         foreignKey: "category_id"
//     });
// }
  return Category;
}
  
