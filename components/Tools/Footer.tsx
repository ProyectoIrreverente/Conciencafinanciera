import { Box, VStack, Text, Flex, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="gray.900" color="white" p={6} textAlign="center">
      <VStack spacing={2}>
        <Text fontSize="lg" fontWeight="bold">Información de contacto</Text>
        <Flex justify="space-between" w="full" maxW="600px">
          <Text color="orange.300">Teléfono:</Text>
          <Text>blablablablablablablablabla</Text>
        </Flex>
        <Flex justify="space-between" w="full" maxW="600px">
          <Text color="orange.300">Dirección:</Text>
          <Text>blablablablablablablablabla</Text>
        </Flex>
        <Text fontSize="sm">Power by: <Link href="https://proyectoirreverente.com" color="orange.300">proyectoirreverente.com</Link></Text>
        <Text fontSize="sm">Hecho con ❤️ en Querétaro</Text>
      </VStack>
    </Box>
  );
};

export default Footer;