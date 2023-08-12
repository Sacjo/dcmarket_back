import {} from "sequelize";
import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Proveedores = sequelize.define("proveedores", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
  },
  ruc: {
    type: DataTypes.INTEGER,
  },
  direccion: {
    type: DataTypes.STRING,
  },
  ciudad: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  plazoentrega: {
    type: DataTypes.STRING,
  },
});
