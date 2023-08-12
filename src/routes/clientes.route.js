import { Router } from "express";
import {
  createCliente,
  getClientes,
  updateCliente,
  deleteCliente,
  getCliente,
  getClientesventas,
} from "../controllers/clientes.controller.js";

const router = new Router();

router.get("/clientes", getClientes);
router.post("/clientes", createCliente);
router.put("/clientes/:id", updateCliente);
router.delete("/clientes/:id", deleteCliente);
router.get("/clientes/:id", getCliente);

router.get("/clientes/ventas/:id", getClientesventas);

export default router;
