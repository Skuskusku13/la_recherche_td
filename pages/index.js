import React from 'react';
import { Button, Text, useColorMode } from '@chakra-ui/react';

const Home = () => {
    
    const {toggleColorMode} = useColorMode()
    const {colorMode} = useColorMode()
    return (
        <>
            <Text>hello From Home</Text>
            <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? 'Dark' : 'Light'}
            </Button>
        </>
    );
};

export default Home;
