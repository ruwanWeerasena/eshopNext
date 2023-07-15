import { retrievByCustomerIdAsync } from "../../_checkoutservice";


export const GET = async(req , {params})=>{
    
    try {
        const allOrders = await retrievByCustomerIdAsync(parseInt(params.id))
        console.log(allOrders);
        return new Response(JSON.stringify(allOrders),{status:201})
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify({failed:true}),{status:500})
    }

}

