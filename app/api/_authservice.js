import { prisma } from '@/utils/database';

// import { PrismaClient } from "@prisma/client"


export const  getAuthData = async(email)=>{
 
    

    const existingcustomer = await prisma.Customer.findUnique({

        where:{
            email:"ruwan@email.com"
        }
    })

    
    if(existingcustomer){
        return existingcustomer
    }else{
        return  null
    }
}

export const hashPassword = async(password)=>{

} 

export const verifyPassword = async(actualPassword,hashedPassword)=>{

}