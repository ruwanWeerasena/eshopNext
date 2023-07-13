import { UpdateAsync, retrievByProductIdAndCustomerIdAsync } from "../../_cartservice";


export const PUT = async (req,res)=>{
    const cartItem = await req.json();
    try {
        const existingcartItem = await retrievByProductIdAndCustomerIdAsync(cartItem.customerId,++cartItem.quantity)

        const updatedCartItem = await UpdateAsync(existingcartItem.id , existingcartItem.quantity)

        return new Response(JSON.stringify(updatedCartItem),{status:200})
    } catch (error) {
        console.log(error);
        return new Response("Failed to fetch all",{status:500})
    }
}