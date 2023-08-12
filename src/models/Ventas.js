import {} from "sequelize";
import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Ventas = sequelize.define("ventas", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fechaventa: {
    type: DataTypes.STRING,
  },
  totalventa: {
    type: DataTypes.INTEGER,
  },
  descuento: {
    type: DataTypes.STRING,
  },
});
