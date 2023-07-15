import { prisma } from '@/utils/database';



export const retrievByCustomerIdAsync = async (customerId) =>{
    const allcheckouts = await prisma.orders.findMany({
        where:{
            customerId:customerId
            
        },
        include:{
            customer:true
        }
    });

    return allcheckouts;
}

export const createAsync = async ({customerId,streetAddress,city,state,paymentMethod,total}) =>{
    const createditem = await prisma.orders.create({
        data: {
            customerId: customerId,
            streetAddress:streetAddress,
            city:city,
            state:state,
            paymentMethod:paymentMethod,
            total,total
          },
    });

    return createditem;
}


