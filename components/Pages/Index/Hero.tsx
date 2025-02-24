import { Box, Button, Text, VStack, Image } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box
      position="relative"
      height="500px"
      bgImage="url('/hero.png')"
      bgSize="cover"
      bgPosition="center"
      display="flex"
      alignItems="center"
      justifyContent="center"
      color="white"
      textAlign="left"
      px={10}
    >
      <VStack align="start" spacing={2} maxW="1000px">
        <Image src="/logo.png" alt="Con Ciencia Financiera" height="60px" />
        <Text fontSize="7xl" fontWeight="bold" textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)">
  Con Ciencia Financiera
</Text>
        <Text fontSize="4xl">Haz crecer tus finanzas</Text>
        <Button colorScheme="orange" size="lg">AGENDA CITA</Button>
      </VStack>
    </Box>
  );
};

export default Hero;