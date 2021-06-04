module.exports = (sequelize, dataTypes) => {
  let alias= "Productos"
  let cols = {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: dataTypes.INTEGER
      },
    product_name: {
      type: dataTypes.STRING
    },
    product_description: {
      type: dataTypes.STRING
    },
    product_image: {
      type: dataTypes.STRING
    },
    category_id: {
      type: dataTypes.STRING
    },
    price: {
      type: dataTypes.STRING
    },
    product_stock: {
      type: dataTypes.STRING
    }
  }
  let config = {
    tableName: "products",
    timestamps: false
  }
  const Productos = sequelize.define(alias, cols, config);
  return Productos;
}
  
