import { UpdateAsync, createAsync, retrievByProductIdAndCustomerIdAsync } from "../../_cartservice";


export const POST = async (req,res)=>{
    const cartItem = await req.json();
    try {
        const newcartItem = await createAsync(cartItem)

        

        return new Response(JSON.stringify(newcartItem),{status:200})
    } catch (error) {
        console.log(error);
        return new Response("Failed to fetch all",{status:500})
    }
}