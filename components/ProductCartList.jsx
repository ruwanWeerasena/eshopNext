"use client"

import ProductCartItem from "./ProductCartItem";

const ProductCartList = ({productList})=>{

    console.log(productList);


    return (
        <div>
            {
                productList.map((item)=>{
                    return <ProductCartItem key={item.ID} item={item} />
                })
            }
        </div>
    );
}

export default ProductCartList;

