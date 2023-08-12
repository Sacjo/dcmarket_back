import express from "express";

import proveedoresRoutes from "./routes/proveedores.route.js";
import clientesRoutes from "./routes/clientes.route.js";
const app = express();

//middlewares
app.use(express.json());

app.use(proveedoresRoutes);
app.use(clientesRoutes);

export default app;
