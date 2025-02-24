// components/NavbarMobile.tsx
import { Flex, Box, IconButton, Image, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, VStack, useDisclosure } from "@chakra-ui/react";
import { FaBars, FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const NavbarMobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex as="nav" bg="gray.900" color="white" p={4} align="center" w="full">
      <Box>
        <Image src="/logo.png" alt="Con Ciencia Financiera" height={10} width={20} />
      </Box>
      <IconButton aria-label="Open menu" icon={<FaBars />} onClick={onOpen} ml="auto" />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="gray.900" color="white">
          <DrawerCloseButton />
          <DrawerHeader>Menú</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="start">
              <Link href="/">INICIO</Link>
              <Link href="/servicios">SERVICIOS</Link>
              <Link href="/seguros">SEGUROS</Link>
              <Link href="/inversiones">INVERSIONES</Link>
              <Link href="/contacto">CONTACTO</Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

import NextLink from "next/link";
import { Link as ChakraLink } from "@chakra-ui/react"
const NavbarDesktop = () => {
  return (
    <Flex as="nav" bg="gray.900" color="white" p={4} align="center" w="full">
      <Box>
        <Image src="/logo.png" alt="Con Ciencia Financiera" height={50} width={130} />
      </Box>
      <Flex gap={6} ml="auto" align="center">
        <ChakraLink as={NextLink} href="/" _hover={{ color: "orange.300" }}>INICIO</ChakraLink>
        <ChakraLink as={NextLink} href="/servicios" _hover={{ color: "orange.300" }}>SERVICIOS</ChakraLink>
        <ChakraLink as={NextLink} href="/seguros" _hover={{ color: "orange.300" }}>SEGUROS</ChakraLink>
        <ChakraLink as={NextLink} href="/inversiones" _hover={{ color: "orange.300" }}>INVERSIONES</ChakraLink>
        <ChakraLink as={NextLink} href="/contacto" _hover={{ color: "orange.300" }}>CONTACTO</ChakraLink>
      </Flex>
      <Flex gap={3} ml={6}>
        <IconButton as="a" href="#" aria-label="WhatsApp" icon={<FaWhatsapp size="30px" />} colorScheme="transparent" />
        <IconButton as="a" href="#" aria-label="Facebook" icon={<FaFacebook size="30px" />} colorScheme="transparent" />
        <IconButton as="a" href="#" aria-label="Instagram" icon={<FaInstagram size="30px" />} colorScheme="transparent" />
      </Flex>
    </Flex>
  );
};




// components/Navbar.tsx
import { useBreakpointValue } from "@chakra-ui/react";

const Navbar = () => {
  const variant = useBreakpointValue({ base: "mobile", lg: "desktop" });
  return variant === "mobile" ? <NavbarMobile /> : <NavbarDesktop />;
};

export default Navbar;
