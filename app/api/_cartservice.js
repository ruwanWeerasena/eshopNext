import { prisma } from '@/utils/database';

export const retrievByProductIdAndCustomerIdAsync = async (customerId,productId) =>{
    const product = await prisma.cartDetails.findFirst({
        where:{
           
                customerId,
                productId
            }
            
    });

    return product;
}


export const retrievByCustomerIdAsync = async (customerId) =>{
    const allproducts = await prisma.cartDetails.findMany({
        where:{
            customerId:customerId
            
        },
        include: {
            product: true
          }
    });

    return allproducts;
}

export const createAsync = async ({productId,customerId,quantity}) =>{
    const createditem = await prisma.cartDetails.create({
        data: {
            productId: productId,
            customerId: customerId,
            quantity:quantity
          },
    });

    return createditem;
}

export const deleteByCustomerIdAsync = async (id) =>{
    const deleteditem = await prisma.cartDetails.deleteMany({
        where:{
            customerId:id
        }
    });

    return deleteditem;
}

export const UpdateAsync = async(oldid,oldquantity) =>{
    

    const updateditem = await prisma.cartDetails.update({
        where:{
            id:oldid
        },
        data:{
            quantity:++oldquantity
        }
    });

    

    return updateditem;
}