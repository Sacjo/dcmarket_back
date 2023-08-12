import { Router } from "express";

import {
  getVentasAll,
  getVentasID,
  createVentas,
  updateVentas,
  deleteVentas,
} from "../controllers/ventas.controller.js";

const router = new Router();

router.get("/ventas", getVentasAll);
router.get("/ventas/:id", getVentasID);

router.post("/ventas", createVentas);

router.put("/ventas/:id", updateVentas);

router.delete("/ventas/:id", deleteVentas);

export default router;
