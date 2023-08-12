import { Router } from "express";
import {
  createProveedor,
  getProveedores,
  updateProveedor,
  deleteProveedor,
  getProveedor,
} from "../controllers/proveedores.controller.js";

const router = new Router();

router.get("/proveedores", getProveedores);
router.post("/proveedores", createProveedor);
router.put("/proveedores/:id", updateProveedor);
router.delete("/proveedores/:id", deleteProveedor);
router.get("/proveedores/:id", getProveedor);

export default router;
