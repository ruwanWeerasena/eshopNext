import { getAuthData } from '../_authservice';



export const POST = async (req,res)=>{
    const customer = await req.json();
    try {
        
        
        const existingCustomer = await getAuthData(username)
        
     
        
        return new Response(JSON.stringify({

        }),{status:200})
    } catch (error) {
        console.log(error);
        return new Response("Failed to fetch all",{status:500})
    }
}