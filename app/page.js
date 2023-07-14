"use client"


import { useContext, useEffect, useState } from "react"
import Grid from '@mui/material/Grid';
import ProductCartItem from "../components/ProductCartItem";
import { CartContext , UserContext } from "./layout";

const Products = () => {
  const [productList ,setproductlist] = useState([]);
  const {cart , setCart} = useContext(CartContext);
  const {authdata , setAuthdata} = useContext(UserContext);

    useEffect(()=>{
        const fetchProducts = async ()=>{
            const response = await fetch(`/api/products`);
            const data = await response.json();
            setproductlist(data)
        }
        fetchProducts();
    },[])

    useEffect(()=>{
      const fetchCart = async ()=>{
        const responseforall = await fetch(`/api/cart`,{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(authdata.customer.id)

        });
        const dataset = await responseforall.json();
        setCart(dataset);
      }
      authdata?.customer && fetchCart();
    },[authdata])

    console.log(productList);
    
  return (
<>
        <Grid container spacing={10}>
          
          {productList.map((product) => (
            <Grid item xs={3} key={product.id}>
                <ProductCartItem
                    name={product.nameame}
                    pictureFileName={product.pictureFileName}
                    pictureUri={product.pictureUri}
                    price={product.price}
                    id={product.id}
                />
            </Grid>
        ))}

        </Grid>
        
      </>
  )
}

export default Products