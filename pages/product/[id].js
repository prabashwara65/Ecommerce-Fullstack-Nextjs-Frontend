import Center from "@/Components/Center";
import Header from "@/Components/Header";
import Button from "@/Components/Button";
import ProductImages from "@/Components/ProductImages";
import Title from "@/Components/Title";
import WhiteBox from "@/Components/WhiteBox";
import { mongooseConenct } from "@/lib/mongoose";
import Products from "@/models/Products";
import styled from "styled-components";
import { useContext } from "react";
import { CartContext } from "@/Components/CartContext";


const ColWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    @media screen and (min-width: 768px){
        grid-template-columns: .8fr 1.2fr;
    }
    gap: 40px;
    margin: 40px 0;
`;

const PriceRow = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
`;

const Price = styled.span`
    font-size: 1.4rem;
`;


export default function ProductPage({ product }) {

    const { addProduct } = useContext(CartContext);

    return (
        <>

            <Header />
            <Center>
                <ColWrapper>
                    <WhiteBox>
                        <ProductImages images={product.images} />
                    </WhiteBox>

                    <div>
                        <Title>{product.title}</Title>
                        <p>{product.description}</p>

                        <PriceRow>
                            <div>
                                <Price>
                                    Rs: {product.price}
                                </Price>

                            </div>

                            <div>
                                <Button primary onClick={() => addProduct(product._id)} >
                                    Add to cart
                                </Button>
                            </div>
                        </PriceRow>

                    </div>

                </ColWrapper>

            </Center>

        </>
    )
}

export async function getServerSideProps(context) {
    await mongooseConenct();

    const { id } = context.query;
    const product = await Products.findById(id);

    return {
        props: {
            product: JSON.parse(JSON.stringify(product)),
        }
    }


}