import express from "express";

import proveedoresRoutes from "./routes/proveedores.route.js";
import clientesRoutes from "./routes/clientes.route.js";

import productosRoutes from "./routes/productos.route.js";

import comprasRoutes from "./routes/compras.route.js";

import ventasRoutes from "./routes/ventas.route.js";

const app = express();

//middlewares
app.use(express.json());

app.use(proveedoresRoutes);
app.use(clientesRoutes);

app.use(productosRoutes);

app.use(comprasRoutes);

app.use(ventasRoutes);

export default app;
