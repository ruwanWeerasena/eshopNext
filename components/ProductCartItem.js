import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { CartContext,UserContext } from "@/app/layout";
import { useRouter } from "next/navigation";



const ProductCartItem = ({ name, pictureFileName, pictureUri, price, id }) => {
    const router = useRouter()
    const { authdata } = useContext(UserContext);
    const {cart , setCart} = useContext(CartContext);
    console.log(cart);
    const handleAddtoCart = async()=>{
      if (authdata?.token) {
        const item = {
          customerId: authdata.customer.id,
          productId: id,
          quantity: 1,
        };
  
        if (cart.find((x) => x.productId == id)) {
          try {
            const responseforupdate = await fetch(`/api/cart/update`,{
              method:'PUT',
              headers:{
                'Content-Type':'application/json'
              },
              body:JSON.stringify(item)
    
            });
            const data = await response.json();

  
            
          } catch (error) {
            console.log(error);
          }
        

        } else {
          try {
            const responseforcreate = await fetch(`/api/cart/new`,{
              method:'POST',
              headers:{
                'Content-Type':'application/json'
              },
              body:JSON.stringify(item)
    
            });
  
           
          } catch (error) {
            console.log(error);
          }
        }

        const responseforall = await fetch(`/api/cart`,{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(authdata.customer.id)

        });
        const dataset = await responseforall.json();
        setCart(dataset);


      } else {
         router.push("/login");
      }
    }
  return (
    <>
      <Card  sx={{ maxWidth: 290 }}>
        <CardMedia
          sx={{ height: 190 }}
          image={pictureUri + pictureFileName}
          title="pic"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            LKR {price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={handleAddtoCart} size="small">
            Add to Cart
          </Button>
          <Button size="small">View</Button>
        </CardActions>
      </Card>
    </>
  )
}

export default ProductCartItem