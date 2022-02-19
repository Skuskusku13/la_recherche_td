import theme from '../Theme/Theme';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from '../components/navbar';
import "../css/navbar.css";

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <Navbar />
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;