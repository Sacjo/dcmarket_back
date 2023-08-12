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
  fk_id_cliente: {
    type: DataTypes.INTEGER,
  },
  totalventa: {
    type: DataTypes.INTEGER,
  },
  descuento: {
    type: DataTypes.STRING,
  },
});
