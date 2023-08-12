import express from "express";

import proveedoresRoutes from "./routes/proveedores.route.js";
import clientesRoutes from "./routes/clientes.route.js";
<<<<<<< Updated upstream
import productosRoutes from "./routes/productos.route.js";
=======
import comprasRoutes from "./routes/compras.route.js";
>>>>>>> Stashed changes
const app = express();

//middlewares
app.use(express.json());

app.use(proveedoresRoutes);
app.use(clientesRoutes);
<<<<<<< Updated upstream
app.use(productosRoutes);
=======
app.use(comprasRoutes);
>>>>>>> Stashed changes

export default app;
