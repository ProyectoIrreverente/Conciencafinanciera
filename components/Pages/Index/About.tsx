import { Box, Text, Image, VStack, useBreakpointValue, Center } from "@chakra-ui/react";

import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { IconButton, HStack } from "@chakra-ui/react";

const VideoPlayer = () => {
  return (
    <Box as="video" controls width="100%" maxW="1000px" mt={6}>
      <source src="/video.mp4" type="video/mp4" />
      Tu navegador no soporta la reproducción de video.
    </Box>
  );
};

const AboutMobile = () => {
    return (
      <Box bg="gray.100" py={0} textAlign="left">
        <Box bg="#292929" py={6} px={4} textAlign="left" color="white">
          <VStack spacing={2} align="center" maxW="600px" mx="auto">
            <Text fontSize="3xl" fontWeight="bold">¿Qué es</Text>
            <Image src="/logo.png" alt="Con Ciencia Financiera" height="40px" />
          </VStack>
        </Box>
        <VStack spacing={4} align="center" maxW="600px" mx="auto" py={6} px={4}>
          <Text fontSize="lg" color="gray.700" textAlign="justify">
            Con Ciencia Financiera es un proyecto pensado para quienes buscan tomar decisiones financieras con inteligencia y fundamento.
            Aquí, combinamos experiencia y análisis para ofrecerte las mejores opciones en seguros, PPRs y fondos de inversión, siempre con
            una estrategia clara y adaptada a ti. Únete y construyamos juntos un futuro financiero sólido y seguro.
          </Text>
          <Box textAlign="center" mt={10}>
      <Image 
        src="/logosabout.png" 
        alt="Íconos de beneficios financieros" 
        width={300} 
        height={40} 
      />
    </Box>
          <Image src="/about.png" alt="Finanzas" maxW="400px" />
          <HStack spacing={4}>
            <IconButton as="a" href="#" aria-label="WhatsApp" icon={<FaWhatsapp />} colorScheme="orange" />
            <IconButton as="a" href="#" aria-label="Facebook" icon={<FaFacebook />} colorScheme="orange" />
            <IconButton as="a" href="#" aria-label="Instagram" icon={<FaInstagram />} colorScheme="orange" />
          </HStack>
        </VStack>
        <Box mt={6} textAlign="center">
          <VideoPlayer />
        </Box>
      </Box>
    );
  };


const AboutDesktop = () => {
    return (
      <Box bg="gray.100" py={0} textAlign="left">
        <Box bg="#292929" py={6} px={10} textAlign="left" color="white">
          <HStack spacing={2} align="center" maxW="1200px" mx="auto">
            <Text fontSize="4xl" fontWeight="bold">¿Qué es</Text>
            <Image src="/logo.png" alt="Con Ciencia Financiera" height="50px" />
            <Text fontSize="4xl" fontWeight="bold">?</Text>
          </HStack>
        </Box>
        <HStack spacing={0} align="start" maxW="2200px" mx="auto" py={10} px={0}>
          <VStack ml={50} textAlign={'justify'} justifyContent={'center'} spacing={0} maxW="2000px">
            <Text fontSize="xl" color="gray.700">
              Con Ciencia Financiera es un proyecto pensado para quienes buscan tomar decisiones financieras con inteligencia y fundamento.
              Aquí, combinamos experiencia y análisis para ofrecerte las mejores opciones en seguros, PPRs y fondos de inversión, siempre con
              una estrategia clara y adaptada a ti. Únete y construyamos juntos un futuro financiero sólido y seguro.
            </Text>
            <Box textAlign="center" mt={10}>
      <Image 
        src="/logosabout.png" 
        alt="Íconos de beneficios financieros" 
        width={500} 
        height={40} 
      />
    </Box>
          </VStack>
          <Image src="/about.png" mr={-250} alt="Finanzas" maxW="1000px" position="relative" style={{marginTop:-150}} />
        </HStack>
        <Center>
        <Box mt={6} textAlign="center">
          <VideoPlayer />
        </Box>
        </Center>
        <Center>
        <HStack spacing={4}>
              <IconButton as="a" href="#" aria-label="WhatsApp" icon={<FaWhatsapp />} colorScheme="orange" />
              <IconButton as="a" href="#" aria-label="Facebook" icon={<FaFacebook />} colorScheme="orange" />
              <IconButton as="a" href="#" aria-label="Instagram" icon={<FaInstagram />} colorScheme="orange" />
            </HStack>
            </Center>
      </Box>
    );
  };

  const AboutTablet = () => {
    return (
      <Box bg="gray.100" py={0} textAlign="left">
        <Box bg="#292929" py={6} px={6} textAlign="left" color="white">
          <HStack spacing={2} align="center" maxW="900px" mx="auto">
            <Text fontSize="3xl" fontWeight="bold">¿Qué es</Text>
            <Image src="/logo.png" alt="Con Ciencia Financiera" height="40px" />
          </HStack>
        </Box>
        <HStack spacing={6} align="start" maxW="900px" mx="auto" py={8} px={6}>
          <VStack align="start" spacing={4} maxW="450px" textAlign="justify">
            <Text fontSize="lg" color="gray.700">
              Con Ciencia Financiera es un proyecto pensado para quienes buscan tomar decisiones financieras con inteligencia y fundamento.
              Aquí, combinamos experiencia y análisis para ofrecerte las mejores opciones en seguros, PPRs y fondos de inversión, siempre con
              una estrategia clara y adaptada a ti. Únete y construyamos juntos un futuro financiero sólido y seguro.
            </Text>
            <Box textAlign="center" mt={10}>
      <Image 
        src="/logosabout.png" 
        alt="Íconos de beneficios financieros" 
        width={400} 
        height={30} 
      />
    </Box>
            <HStack spacing={4}>
              <IconButton as="a" href="#" aria-label="WhatsApp" icon={<FaWhatsapp />} colorScheme="orange" />
              <IconButton as="a" href="#" aria-label="Facebook" icon={<FaFacebook />} colorScheme="orange" />
              <IconButton as="a" href="#" aria-label="Instagram" icon={<FaInstagram />} colorScheme="orange" />
            </HStack>
          </VStack>
          <Image src="/about.png" alt="Finanzas" maxW="500px" />
        </HStack>
        <Box mt={6} textAlign="center">
          <VideoPlayer />
        </Box>
      </Box>
    );
  };
  const About = () => {
    const variant = useBreakpointValue({ base: "mobile", md: "tablet", lg: "desktop" });
    return variant === "mobile" ? <AboutMobile /> : variant === "tablet" ? <AboutTablet /> : <AboutDesktop />;
  };


export default About;