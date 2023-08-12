import {} from "sequelize";
import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Ventas } from "../models/Ventas.js";
export const Clientes = sequelize.define("clientes", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
  },
  ci: {
    type: DataTypes.INTEGER,
  },
  direccion: {
    type: DataTypes.STRING,
  },
  ciudad: {
    type: DataTypes.STRING,
  },
  telefono: {
    type: DataTypes.BIGINT,
  },
  email: {
    type: DataTypes.STRING,
  },
});

Clientes.hasMany(Ventas, {
  foreignKey: "clienteId",
  sourceKey: "id",
});

Ventas.belongsTo(Clientes, {
  foreignKey: "clienteId",
  targetId: "id",
});
