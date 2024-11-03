import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Crear un nuevo cliente
    const { nombres, apellidos, genero, fecha_nacimiento, estado } = req.body;
    const cliente = await prisma.cliente.create({
      data: {
        nombres,
        apellidos,
        genero,
        fecha_nacimiento: new Date(fecha_nacimiento),
        estado,
      },
    });
    res.status(201).json(cliente);
  } else if (req.method === "GET") {
    // Listar todos los clientes
    const clientes = await prisma.cliente.findMany({
      orderBy: [
        { fecha_creacion: "asc" }, // Asegúrate de tener este campo en tu modelo o eliminar esta línea
        { apellidos: "asc" },
      ],
    });
    res.status(200).json(clientes);
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
