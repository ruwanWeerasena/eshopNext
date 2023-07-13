import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { CartContext,UserContext } from "@/app/layout";



const ProductCartItem = ({ name, pictureFileName, pictureUri, price, id }) => {
    const { authdata } = useContext(UserContext);
    const {cart , setCart} = useContext(CartContext);

    const handleAddtoCart = async()=>{
      if (authdata?.token) {
        const item = {
          customerId: authdata.customer.id,
          productId: id,
          Quantity: 1,
        };
  
        if (cart.find((x) => x.productId == id)) {
          try {
            const { data } = await fetch(
              `http://localhost:5000/cart/${id}`,
              item,
              {
                headers: {
                  Authorization: `bearer ${authdata.token}`,
                },
              }
            );
  
            var newList = cart.map((item) => {
                if (item.productId == data.productId) {
                  return {...item, quantity:data.quantity}
              } else {
                return item;
              }
            });
  
            //cart.push(data);
            setCart(newList);
          } catch (error) {
            console.log(error);
          }
        } else {
          try {
            const { data } = await axios.post(
              "http://localhost:5000/cart",
              item,
              {
                headers: {
                  Authorization: `bearer ${authdata.token}`,
                },
              }
            );
  
            //cart.push(data);
            setCart((items) => [...items, data]);
          } catch (error) {
            console.log(error);
          }
        }
      } else {
        // navigate("/signin");
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