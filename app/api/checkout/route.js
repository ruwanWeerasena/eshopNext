import { deleteByCustomerIdAsync, retrievByCustomerIdAsync } from "../_cartservice"
import { createAsync } from "../_checkoutservice"
import { createOrderDetailsAsync } from "../_orderdetailservice"

export const POST = async(req , res)=>{
    
    const order = await req.json()
    try {
        const cartitems = await retrievByCustomerIdAsync(order.customerId)
        const createdOrder = await createAsync(order);
        cartitems.map(async(item)=>{
            await createOrderDetailsAsync({orderId:createdOrder.id,productId:item.product.id,quantity:item.quantity,price:item.product.price})
        })
        await deleteByCustomerIdAsync(order.customerId)
        return new Response(JSON.stringify({Success:true}),{status:201})
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify({}),{status:500})
    }

}

