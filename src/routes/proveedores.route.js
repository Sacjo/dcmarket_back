 import { Router } from "express";
import {createProveedor,getProveedores} from "../controllers/proveedores.controller.js";


 const router = new Router()

 router.get('/proveedores', getProveedores)
 router.post('/proveedores',createProveedor)
 router.put('/proveedores/:id')
 router.delete('/proveedores/:id')
 router.get('/proveedores/:id')



 export default router