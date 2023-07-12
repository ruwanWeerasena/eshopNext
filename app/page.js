"use client"


import { useEffect, useState } from "react"
import Grid from '@mui/material/Grid';
import ProductCartItem from "../components/ProductCartItem";

const Products = () => {

  const [productList ,setproductlist] = useState([]);
    useEffect(()=>{
        const fetchProducts = async ()=>{
            // const response = await fetch(`/api/products`);
            // const data = await response.json();
            // setproductlist(data)
        }
        fetchProducts();
    },[])
    
  return (
<>
        <Grid container spacing={10}>
          
          {productList.map((product) => (
            <Grid item xs={3} key={product.id}>
                <ProductCartItem
                    
                    name={product.Name}
                    pictureFileName={product.PictureFileName}
                    pictureUri={product.PictureUri}
                    price={product.Price}
                    id={product.ID}
                />
            </Grid>
        ))}

        </Grid>
        
      </>
  )
}

export default Products