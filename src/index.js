import app from "./app.js";
import { sequelize } from "./database/database.js";
import "./models/Proveedores.js";

async function main() {
  try {
    await sequelize.sync();
    app.listen(3300);
    console.log("Server is listening on PORT: ", 3300);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

main();
