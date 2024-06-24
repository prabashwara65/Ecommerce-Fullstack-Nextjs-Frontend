import Featured from '@/Components/Featured'
import Header from '@/Components/Header'
import React from 'react'
import { mongooseConenct } from "@/lib/mongoose";
import Products from '@/models/Products';
import NewProducts from '@/Components/NewProducts';

export default function index({featuredProduct,newProducts}){
  return (
    <div>
        <Header />
        <Featured product={featuredProduct} />
        <NewProducts products={newProducts}/>
    </div>
  )
}


export async function getServerSideProps() {
    const featuredProductId = '667994e7993ef7a5b259d922'; 
    await mongooseConenct();
    const featuredProduct = await Products.findById(featuredProductId);
    
    const newProducts = await Products.find({}, null, {sort: {'_id':-1}, limit:10});
    console.log(newProducts)
    return {
      props: {
        featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
        newProducts: JSON.parse(JSON.stringify(newProducts)),
      },
    };
  }
