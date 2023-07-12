

export const GET = async (req,res)=>{

    try {
        // const conpool = await connectToDb();
        // let products = await conpool.request().query("select * from products");

        
        return new Response(JSON.stringify({}),{status:200})
    } catch (error) {
        console.log();
        return new Response("Failed to fetch all",{status:500})
    }
}