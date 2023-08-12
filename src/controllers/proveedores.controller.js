import { Proveedores } from "../models/Proveedores.js";

export const getProveedores = (req, res) => {
  res.send("getting proveedores");
};
export const createProveedor = async (req, res) => {
  //Declaramos en constantes los datos que recimibimos en el req.body
  const { nombre, ruc, direccion, ciudad, email, plazoentrega } = req.body;

  const newProveedor = await Proveedores.create({
    nombre,
    ruc,
    direccion,
    ciudad,
    email,
    plazoentrega,
  });

  res.send("Proveedor Creado");

  //Ver en consola el objeto que recibimos e insertamos en base de datos
  console.log(newProveedor);
};
