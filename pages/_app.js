import theme from '../Theme/Theme';
import { ChakraProvider } from '@chakra-ui/react';
import LeftMenu from '../components/Left_Menu';

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <LeftMenu />
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;
