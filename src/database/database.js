import Sequelize from "sequelize";

export const sequelize = new Sequelize("dcmarket", "postgres", "devx", {
  host: "18.191.33.127",
  dialect: "postgres",
});
