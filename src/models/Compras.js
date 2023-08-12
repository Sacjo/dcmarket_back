import {} from "sequelize";
import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Compras = sequelize.define("compras", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  montocompra: {
    type: DataTypes.INTEGER,
  },
  factura: {
    type: DataTypes.STRING,
  },
  formadepago: {
    type: DataTypes.STRING,
  },
});
