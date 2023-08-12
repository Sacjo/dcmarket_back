import { Proveedores } from "../models/Proveedores.js";

//Listar proveedores
export const getProveedores = async (req, res) => {
  try {
    const proveedores = await Proveedores.findAll();
    res.json(proveedores);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Crear un nuevo proveedor

export const createProveedor = async (req, res) => {
  try {
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

    res.json(newProveedor);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
