import { Productos } from "../models/Productos.js";

//Listar productos
export const getProductos = async (req, res) => {
  try {
    const productos = await Productos.findAll();
    res.json(productos);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Listar Productos por ID
export const getProductId = async (req, res) => {
  try {
    const { id } = req.params;
    const productos = await Productos.findOne({
      where: {
        id,
      },
    });
    res.json(productos);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Crear Productos
export const createProductos = async (req, res) => {
  try {
    //Declaramos en constantes los datos que recimibimos en el req.body
    const {
      barcode,
      descripcion,
      categoria,
      preciocompra,
      precioventa,
      totalentrada,
      totalsalida,
      totalstock,
    } = req.body;

    const newProductos = await Productos.create({
      barcode,
      descripcion,
      categoria,
      preciocompra,
      precioventa,
      totalentrada,
      totalsalida,
      totalstock,
    });
    res.json({
      message: "Productos Creado",
      newProductos,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Actualizar productos
export const updateProductos = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      barcode,
      descripcion,
      categoria,
      preciocompra,
      precioventa,
      totalentrada,
      totalsalida,
      totalstock,
    } = req.body;
    const productos = await Productos.findByPk(id);
    console.log(productos);

    productos.barcode = barcode;
    productos.descripcion = descripcion;
    productos.categoria = categoria;
    productos.preciocompra = preciocompra;
    productos.precioventa = precioventa;
    productos.totalentrada = totalentrada;
    productos.totalsalida = totalsalida;
    productos.totalstock = totalstock;

    await productos.save();
    res.json({
      message: "productos Actualizado",
      productos,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Eliminar productos
export const deleteProductos = async (req, res) => {
  try {
    const { id } = req.params;
    await Productos.destroy({
      where: {
        id,
      },
    });
    res.json({ message: "productos eliminado" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
