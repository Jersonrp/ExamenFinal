// pages/api/products/[id].js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === "GET") {
    // Obtener un producto por ID
    const product = await prisma.product.findUnique({
      where: { id: parseInt(id) },
    });
    return res.json(product);
  }

  if (req.method === "PUT") {
    // Actualizar un producto
    const { code, name, price } = req.body;
    const updatedProduct = await prisma.product.update({
      where: { id: parseInt(id) },
      data: { code, name, price },
    });
    return res.json(updatedProduct);
  }

  if (req.method === "DELETE") {
    // Eliminar un producto
    await prisma.product.delete({
      where: { id: parseInt(id) },
    });
    return res.status(204).send();
  }

  return res.status(405).end(); // Método no permitido
}
