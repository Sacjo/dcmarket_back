import {} from "sequelize";
import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Productos = sequelize.define("productos",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      barcode: {
        type: DataTypes.STRING,
      },
      descripcion: {
        type: DataTypes.STRING,
      },
      categoria: {
        type: DataTypes.STRING,
      },
      preciocompra: {
        type: DataTypes.INTEGER,
      },
      precioventa: {
        type: DataTypes.INTEGER,
      },
      totalentrada: {
        type: DataTypes.INTEGER,
      },
      totalsalida: {
        type: DataTypes.INTEGER,
      },
      totalstock: {
        type: DataTypes.INTEGER,
      },
})