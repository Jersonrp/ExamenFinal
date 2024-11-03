import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Crear nueva información de cliente
    const { tipo_informacion, usuario_creador, estado_informacion, clienteId } =
      req.body;
    const informacion = await prisma.informacionCliente.create({
      data: {
        tipo_informacion,
        usuario_creador,
        estado_informacion,
        clienteId,
      },
    });
    res.status(201).json(informacion);
  } else if (req.method === "GET") {
    // Obtener información de cliente
    const informacion = await prisma.informacionCliente.findMany({
      orderBy: [{ fecha_creacion: "asc" }, { cliente: { apellidos: "asc" } }],
    });
    res.status(200).json(informacion);
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
