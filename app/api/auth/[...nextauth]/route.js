import { prisma } from "@/utils/database";
import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google'

const handler = NextAuth({
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    callbacks:{
        async session({session}){
            const sessionUser = await prisma.User.findUnique({

                where:{email:session.user.email}
            })
            session.user.id = sessionUser._id.toString();
            return session;
        },
        async signIn({profile}){
            try{
                
                
                //check if user already exist
                const userExists = await prisma.User.findUnique({
                    where: {email:profile.email}
                });
    
                //if not, create a new user
                if(!userExists){
                    await prisma.User.create({
                        data: {
                        email:profile.email,
                        username:profile.name.replace(" ","").toLowerCase(),
                        image:profile.picture
                        }
    
                    })
                }
    
                return true
            }catch(error){
                    console.log(error);
                    return false;
            }
        }

    }
   

    
})

export {handler as GET, handler as POST};