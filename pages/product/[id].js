import Center from "@/Components/Center";
import Header from "@/Components/Header";
import Title from "@/Components/Title";
import { mongooseConenct } from "@/lib/mongoose";
import Products from "@/models/Products";

export default function ProductPage({products}){
    return (
        <>
        
        <Header />
        <Center>
            <Title>{products}</Title>
        </Center>
        
        </>
    )
}

export async function getServerSideProps(context){
    await mongooseConenct();

    const {id} = context.query;
    const product = await Products.findById(id);

    return {
        props: {
            product: JSON.parse(JSON.stringify(product)),
        }
    }


}