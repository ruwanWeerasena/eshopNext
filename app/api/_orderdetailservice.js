import { prisma } from '@/utils/database';



// export const retrievByCustomerIdAsync = async (customerId) =>{
//     const allcheckouts = await prisma.orders.findMany({
//         where:{
//             customerId:customerId
            
//         }
//     });

//     return allcheckouts;
// }

export const createOrderDetailsAsync = async ({orderId,productId,quantity,price}) =>{
    const createditem = await prisma.orderDetails.create({
        data: {
            orderId: orderId,
            productId:productId,
            quantity:quantity,
            price:(price*quantity),

          },
    });

    return createditem;
}


