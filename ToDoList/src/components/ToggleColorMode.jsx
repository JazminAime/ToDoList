import { Button, useColorMode } from "@chakra-ui/react";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

const ToggleColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button
      onClick={toggleColorMode}
      position="absolute"
      top="0" // A 50% desde la parte superior
      left="50%" // A 50% desde la izquierda
      transform="translate(-50%, -50%)" // Centra el botón en ambas direcciones
      marginTop="30px"
      zIndex="9999">
      {colorMode === "light" ? (
        <MdSunny fontSize="22px" />
      ) : (
        <FaMoon fontSize="22px" />
      )}
    </Button>
  );
};

export default ToggleColorMode;
