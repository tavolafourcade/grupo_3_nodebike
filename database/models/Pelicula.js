module.exports = (sequelize, dataType)=>{
  //El alias estila ser el nombre del modelo en plural
  let alias = 'Peliculas';
  //Vamos a especificar las columnas de la BD en un objeto literal
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: dataTypes.STRING
    },
    length: {
      type: dataTypes.INTEGER
    }
  };

  let config = {
    tableName: "movies",
    //timestamps para hacer seguimiento de la fecha de creación/actualización de los registros. Es fundamental poner esto si no se tienen columnas.
    timestamps: false
  }
  const Pelicula = sequelize.define(alias, cols, config);
  return Pelicula;
}