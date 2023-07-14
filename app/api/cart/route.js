import { retrievByCustomerIdAsync } from "../_cartservice";


export const POST = async (req,res)=>{
    const customerId = await req.json();
    try {
        const existingcartItems = await retrievByCustomerIdAsync(customerId)
        return new Response(JSON.stringify(existingcartItems),{status:200})
    } catch (error) {
        console.log(error);
        return new Response("Failed to fetch all",{status:500})
    }
}