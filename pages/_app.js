import theme from '../Theme/Theme';
import { ChakraProvider } from '@chakra-ui/react';
import LeftMenu from '../components/Left_Menu';
import NavBar from '../components/NavBar'

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <NavBar />
            <LeftMenu />
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;