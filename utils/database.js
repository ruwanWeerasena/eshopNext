// import sql from 'mssql'

// const config = {
//     user:"eshoplogin",
//     password:"ruwan@2001",
//     server: 'RUWAN\\sqlexpress',
//     database: 'eShopv1',
//     port: 1433,
//     trustedconnection: true,
//     trustServerCertificate: true
    
// }

// export const connectToDb = async () =>{
//     try {
//         return  await sql.connect(config);
//         let products = await pool.request().query(query);
//         console.log(products.recordsets);
//         return products.recordsets;
//     }
//     catch (error) {
//         console.log(error);
//     }
// }

import { PrismaClient } from "@prisma/client"

export const prisma = new PrismaClient()

// if (process.env.NODE_ENV !== "production") global.prisma = prisma