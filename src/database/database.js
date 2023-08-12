import Sequelize from "sequelize";

export const sequelize = new Sequelize("dcmarket", "postgres", "devx", {
  host: "18.117.72.100",
  dialect: "postgres",
});
