import { Compras } from "../models/Compras.js";

//Listar Compras
export const getCompras = async (req, res) => {
  try {
    const compras = await Compras.findAll();
    res.json(compras);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Crear Compras
export const createCompras = async (req, res) => {
  try {
    const { montocompra, factura, formadepago, proveedorId } = req.body;
    const nuevaCompra = await Compras.create({
      montocompra,
      factura,
      formadepago,
      proveedorId,
    });
    res.json(nuevaCompra);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Obtener compra por ID
export const getCompraId = async (req, res) => {
  try {
    const { id } = req.params;
    const compras = await Compras.findByPk(id);
    res.json(compras);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Eliminar Compra
export const deleteCompra = async (req, res) => {
  try {
    const { id } = req.params;
    await Compras.destroy({
      where: {
        id,
      },
    });
    res.message("Compra Eliminada");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Actualizar Compras
export const updateCompras = async (req, res) => {
  try {
    const { id } = req.params;
    const compras = await Compras.findOne({ where: { id } });
    compras.set(req.body);
    await compras.save();
    res.json(compras);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
