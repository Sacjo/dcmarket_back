import { Proveedores } from "../models/Proveedores.js";

//Modificar error a 404 y brindar una respuesta personalizable
//Listar Proveedores
export const getProveedores = async (req, res) => {
  try {
    const proveedores = await Proveedores.findAll();
    res.json(proveedores);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Listar Proveedor por ID
export const getProveedor = async (req, res) => {
  try {
    const { id } = req.params;
    const proveedor = await Proveedores.findOne({
      where: {
        id,
      },
    });
    res.json(proveedor);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Crear Proveedor
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

    res.status(201).json({
      message: "Proveedor Creado: ",
      newProveedor: newProveedor.id,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Actualizar Proveedor
export const updateProveedor = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, ruc, direccion, ciudad, email, plazoentrega } = req.body;
    const proveedor = await Proveedores.findByPk(id);
    console.log(proveedor);

    proveedor.nombre = nombre;
    proveedor.ruc = ruc;
    proveedor.direccion = direccion;
    proveedor.ciudad = ciudad;
    proveedor.email = email;
    proveedor.plazoentrega = plazoentrega;

    await proveedor.save();

    res.send("Proveedor Actualizado");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Eliminar Proveedor
export const deleteProveedor = async (req, res) => {
  try {
    const { id } = req.params;
    await Proveedores.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
