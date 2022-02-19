import React, { useRef } from 'react';
import {
    Button,
    useDisclosure,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader, DrawerBody, Text, Divider
} from '@chakra-ui/react';

const LeftMenu = () => {
    
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();
    
    return (
        <>
            <Button
                ref = {btnRef}
                colorScheme = "teal"
                onClick = {onOpen}
            >
                Open
            </Button>
            <Drawer
                isOpen = {isOpen}
                placement = "left"
                onClose = {onClose}
                finalFocusRef = {btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerBody mt = {10}>
                        <DrawerHeader>Informatique</DrawerHeader>
                        <Text variant = "DrawerLink">PC portable</Text>
                        <Text variant = "DrawerLink">PC fixe</Text>
                        <Text variant = "DrawerLink">Boitier</Text>
                        <Text variant = "DrawerLink">Clavier</Text>
                        <Text variant = "DrawerLink">Souris</Text>
                        <Divider mt = {10} />
                        
                        <DrawerHeader>Electroménager</DrawerHeader>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default LeftMenu;
