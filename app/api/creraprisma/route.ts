import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

prisma.user.create({
    data:{
        nombre:"Pepito",
        correo:"pepito@micorreo.com",
        post:{create:{
            titulo:"Pepito salva al mundo",
            contenido:"Algo"
        }},
        perfil:{
            create:{
                biografia:"Alguna bio"
            }
        }
    }
})