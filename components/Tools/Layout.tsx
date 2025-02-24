import { FC } from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box>
      <Navbar />
      <Box as="main" minH="80vh">{children}</Box>
      <Footer />
    </Box>
  );
};
export default Layout;