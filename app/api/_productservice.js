import { prisma } from '@/utils/database';

export const getAll = async () =>{
    const allproducts = await prisma.product.findMany();

    return allproducts;
}