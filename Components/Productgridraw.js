import styled from "styled-components";
import ProductBox from "@/Components/ProductBox";

const StyledProductsGrid = styled.div`
  display: grid;
 
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export default function ProductsGrid({products}) {
  return (
    <StyledProductsGrid>
      {products?.length > 0 && products.map(product => (
       
      ))}
    </StyledProductsGrid>
  );
}
