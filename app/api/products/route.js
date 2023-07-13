import { prisma } from "@/utils/database";
import { getAll } from "../_productservice";


export const GET = async (req,res)=>{

    try {
        const allproducts = await getAll()

        return new Response(JSON.stringify(allproducts),{status:200})
    } catch (error) {
        console.log(error);
        return new Response("Failed to fetch all",{status:500})
    }
}