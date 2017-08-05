module.exports = function(sequelize, DataTypes){
  var Burger = sequelize.define("Burger", {
    id: {
      type: DataTypes.INTEGER(3),
      primaryKey: true
    },
    name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN
  });
  Burger.create({
    id: 1,
    name: "test1",
    devoured: false
  });
  return Burger;
}


//CREATE TABLE burgers (
//id int NOT NULL AUTO_INCREMENT,
//burger_name varchar(255) NOT NULL,
//devoured BOOL DEFAULT false,
//PRIMARY KEY (id)
//);