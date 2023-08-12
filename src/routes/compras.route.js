import { Router } from "express";
import {
  createCompras,
  getCompraId,
  getCompras,
  deleteCompra,
  updateCompras,
} from "../controllers/compras.controller.js";
import { deleteCliente } from "../controllers/clientes.controller.js";

const router = new Router();

router.get("/compras", getCompras);
router.post("/compras", createCompras);
router.put("/compras/:id", updateCompras);
router.delete("/compras/:id", deleteCompra);
router.get("/compras/:id", getCompraId);

export default router;
