import { createGlobalStyle } from "styled-components";
import { CartContextProvider } from "@/Components/CartContext";

const GlobalStyles = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap');
    
    body{ 

        background-color: #eee;
        padding: 0;
        margin: 0;
        font-family: 'Roboto' , sans-serif;
    }
`;

export default function App({ Component, pageProps }) {

    return (
        <>
            <GlobalStyles />
            <CartContextProvider>
                <Component {...pageProps} />
            </CartContextProvider>
        </>

    );
}