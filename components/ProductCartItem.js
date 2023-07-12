import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { CartContext } from "@/app/layout";



const ProductCartItem = ({ name, pictureFileName, pictureUri, price, id }) => {

    const {cart , setCart} = useContext(CartContext);

    const handleAddtoCart = ()=>{
        
    }
  return (
    <>
      <Card  sx={{ maxWidth: 290 }}>
        <CardMedia
          sx={{ height: 140 }}
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