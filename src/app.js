import express from "express";

import proveedoresRoutes from "./routes/proveedores.route.js";

const app = express();

//middlewares
app.use(express.json());

app.use(proveedoresRoutes);

export default app;
