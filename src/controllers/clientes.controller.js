import { Clientes } from "../models/Clientes.js";

//Listar Clientes
export const getClientes = async (req, res) => {
  try {
    const clientes = await Clientes.findAll();
    res.json(clientes);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Listar Cliente por ID
export const getCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const cliente = await Clientes.findOne({
      where: {
        id,
      },
    });
    res.json(cliente);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Crear Cliente
export const createCliente = async (req, res) => {
  try {
    //Declaramos en constantes los datos que recimibimos en el req.body
    const { nombre, ci, direccion, ciudad, telefono, email } = req.body;

    const newCliente = await Clientes.create({
      nombre,
      ci,
      direccion,
      ciudad,
      telefono,
      email,
    });

    res.send("Cliente Creado");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Actualizar Cliente
export const updateCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, ci, direccion, ciudad, telefono, email } = req.body;
    const cliente = await Clientes.findByPk(id);
    console.log(cliente);

    cliente.nombre = nombre;
    cliente.ci = ci;
    cliente.direccion = direccion;
    cliente.ciudad = ciudad;
    cliente.telefono = telefono;
    cliente.email = email;

    await cliente.save();

    res.send("Cliente Actualizado");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Eliminar Cliente
export const deleteCliente = async (req, res) => {
  try {
    const { id } = req.params;
    await Clientes.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
