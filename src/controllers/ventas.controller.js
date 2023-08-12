import { Ventas } from "../models/Ventas.js";

//Listar Ventas
export const getVentasAll = async (req, res) => {
  try {
    const ventas = await Ventas.findAll();
    res.json(ventas);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Listar Ventas por ID
export const getVentasID = async (req, res) => {
  try {
    const { id } = req.params;
    const ventas = await Ventas.findOne({ where: { id } });
    res.json(ventas);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//crear ventas

export const createVentas = async (req, res) => {
  try {
    //Declaramos en constantes los datos que recibimo en el req.body
    const { fechaventa, fk_id_cliente, totalventa, descuento } = req.body;
    const newVenta = await Ventas.create({
      fechaventa,
      fk_id_cliente,
      totalventa,
      descuento,
    });
    res.send("Nueva Venta Creada con exito");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Metodo para actualizar las ventas
export const updateVentas = async (req, res) => {
  try {
    const { id } = req.params;
    const { fechaventa, fk_id_cliente, totalventa, descuento } = req.body;
    const ventas = await Ventas.findByPk(id);

    console.log(ventas);

    ventas.fechaventa = fechaventa;
    ventas.fk_id_cliente = fk_id_cliente;
    ventas.totalventa = totalventa;
    ventas.descuento = descuento;

    await ventas.save();
    res.send("ventas actualizado");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Metodo para eliminar las ventas
export const deleteVentas = async (req, res) => {
  try {
    const { id } = req.params;
    await Ventas.destroy({ where: { id } });

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
