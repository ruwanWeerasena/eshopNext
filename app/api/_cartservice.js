import { prisma } from '@/utils/database';

export const retrievByProductIdAndCustomerIdAsync = async (customerId,productId) =>{
    const allproducts = await prisma.cartDetails.findUnique({
        where:{
            customerId:customerId,
            productId:productId
        }
    });
    console.log(allproducts);

    return allproducts;
}


export const retrievByCustomerIdAsync = async (customerId) =>{
    const allproducts = await prisma.cartDetails.findMany({
        where:{
            customerId:customerId
        }
    });
    console.log(allproducts);

    return allproducts;
}

export const createAsync = async (cartDetail) =>{
    const createditem = await prisma.cartDetails.create(cartDetail);
    console.log(createditem);

    return createditem;
}

export const deleteAsync = async (id) =>{
    const deleteditem = await prisma.cartDetails.delete({
        where:{
            id:id
        }
    });
    console.log(deleteditem);

    return deleteditem;
}

export const UpdateAsync = async(id,quantity) =>{
    

    const updateditem = await prisma.cartDetails.update({
        where:{
            id:id
        },
        data:{
            quantity:quantity
        }
    });

    if(affected == 1) return c;

    return null;
}