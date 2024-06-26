import Header from "@/Components/Header";
import styled from "styled-components";
import Center from "@/Components/Center";
import { mongooseConenct } from "@/lib/mongoose";
import Products from "@/models/Products";
import ProductsGrid from "@/Components/ProductGrid";
import Title from "@/Components/Title";

export default function ProductsPage({products}) {
  return (
    <>
      <Header />
      <Center>
        <Title>All products</Title>
        <ProductsGrid products={products} />
      </Center>
    </>
  );
}

export async function getServerSideProps() {
  await mongooseConenct();
  const products = await Products.find({}, null, {sort:{'_id':-1}});
  return {
    props:{
      products: JSON.parse(JSON.stringify(products)),
    }
  };
}