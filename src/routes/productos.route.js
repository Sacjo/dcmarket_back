import { Router } from "express";
import {
    getProductos,
    createProductos,
    updateProductos,
    deleteProductos,
    getProductId
} from "../controllers/productos.controller.js";

const router = new Router()

router.get("/productos", getProductos);
router.post("/productos", createProductos);
router.put("/productos/:id", updateProductos);
router.delete("/productos/:id", deleteProductos);
router.get("/productos/:id", getProductId);

export default router