import { retrievByCustomerIdAsync } from "../_cartservice";


export const GET = async (req,res)=>{
    
    try {
        const existingcartItems = await retrievByCustomerIdAsync(cartItem.customerId)


        return new Response(JSON.stringify(existingcartItems),{status:200})
    } catch (error) {
        console.log(error);
        return new Response("Failed to fetch all",{status:500})
    }
}