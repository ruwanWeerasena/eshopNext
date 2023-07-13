import jwt from 'jsonwebtoken'
import { getAuthData } from '../_authservice';

const KEY = "bRhYJRlZvBj2vW4MrV5HVdPgIE6VMtCFB0kTtJ1m";
const JWTTOKENLIFESPAN = 360000;

export const POST = async (req,res)=>{
    const {username ,password } = await req.json();
    try {
        
        
        const existingCustomer = await getAuthData(username)
        
     
        
        return new Response(JSON.stringify({
            token:jwt.sign({
                username
            },KEY,{expiresIn:JWTTOKENLIFESPAN}),
            customer:existingCustomer,
            id:existingCustomer.id,
            TokenExpirationTime:Date.now()+JWTTOKENLIFESPAN

        }),{status:200})
    } catch (error) {
        console.log(error);
        return new Response("Failed to fetch all",{status:500})
    }
}