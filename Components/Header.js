import Link from 'next/link'
import styled from 'styled-components';
import React, { useContext, useState } from 'react'
import Center from './Center';
import { CartContext } from './CartContext';
import BarsIcon from './icons/Bars';

const StyledHeader = styled.header`
    background-color: #222;
    padding: 20px 0; /* Added padding to header */
`;

const Logo = styled.a`
    color: #fff;
    text-decoration: none;
    position: relative;
    z-index: 3;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center; /* Center items vertically */
`;

const StyledNav = styled.nav`
    ${props => props.mobileNavActive ? `
        display: block;
    ` : `
        display: none;
    `}
    gap: 15px;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 70px 20px 20px;
    background-color: #222;
    @media screen and (min-width: 768px) {
        display: flex;
        position: static;
        padding: 0;
    }
`;

const NavLink = styled(Link)`
    display: block;
    color: #aaa;
    text-decoration: none;
    padding: 10px 0;
    @media screen and (min-width: 768px) {
        padding: 0;
    }
`;

const NavButton = styled.button`
    background-color: transparent;
    width: 30px;
    height: 30px;
    border:0;
    color: white;
    cursor: pointer;
    position: relative;
    z-index: 3;
    @media screen and (min-width: 768px) {
        display: none;
    }
`;

const Header = () => {
    const { cartProducts } = useContext(CartContext);
    const [mobileNavActive,setMobileNavActive] = useState(false);

    // Defaulting cartProducts to an empty array if undefined
    const productsCount = cartProducts ? cartProducts.length : 0;

    return (
        <StyledHeader>
            <Center>
                <Wrapper>
                    <Logo href={'/'}>Ecommerce</Logo>
                    <StyledNav mobileNavActive={mobileNavActive}>
                        <NavLink href={'/'}> Home</NavLink>
                        <NavLink href={'/products'}> All Products</NavLink>
                        <NavLink href={'/categories'}> Categories</NavLink>
                        <NavLink href={'/account'}> Account</NavLink>
                        <NavLink href={'/cart'}> Cart ({productsCount})</NavLink>
                    </StyledNav>
                    <NavButton onClick={() => setMobileNavActive(prev => !prev)}>
                        <BarsIcon />
                    </NavButton>
                </Wrapper>
            </Center>
        </StyledHeader>
    );
}

export default Header;
