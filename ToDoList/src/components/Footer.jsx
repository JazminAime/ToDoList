import {
  Heading,
  HStack,
  IconButton,
  Link,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const { colorMode } = useColorMode();
  return (
    <VStack
      bg={colorMode === "light" ? "custom.greenPastel" : "gray.400"}
      padding="25px">
      <Heading
        size="md"
        margin="auto"
        fontFamily="sans-serif"
        fontStyle="italic"
        color={colorMode === "light" ? "custom.pinkBold" : "black"}
        fontWeight="bold"
        mb={2}>
        Diseñado con ♡ por Jazmín
      </Heading>
      <HStack justify="center" spacing={4} marginTop="8px">
        <Link href="https://github.com/JazminAime" isExternal>
          <IconButton
            icon={<FaGithub fontSize="22px" />}
            aria-label="GitHub"
            bg="gray.800"
            color="white"
            _hover={{ bg: "gray.700" }}
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/jazm%C3%ADn-aim%C3%A9-59869b150/"
          isExternal>
          <IconButton
            icon={<FaLinkedin fontSize="22px" />}
            aria-label="LinkedIn"
            bg="blue.700"
            color="white"
            _hover={{ bg: "blue.800" }}
          />
        </Link>
      </HStack>
      <Text
        fontSize="md"
        color={colorMode === "light" ? "gray.600" : "gray.800"}
        mt={4}>
        © {new Date().getFullYear()} - Todos los derechos reservados.
      </Text>
    </VStack>
  );
};

export default Footer;
