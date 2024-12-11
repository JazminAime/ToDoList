import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Select,
  Text,
  useColorMode,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import "@fontsource/dancing-script";
import { useState } from "react";
import List from "./List";
import fondo6 from "../assets/fondo6.jpg";
import modoOscuro from "../assets/dark.webp";

const TodoList = () => {
  const { colorMode } = useColorMode();
  const fondoImagen = useColorModeValue(fondo6, modoOscuro);

  const initialValue = JSON.parse(localStorage.getItem("tasks")) || [];
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState(initialValue);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("all");

  const getRandomColor = () => {
    const colors = [
      "#FFDA76",
      "#FF8C9E",
      "#D6E6F2",
      "#FFF1E1",
      "#FFD3B6",
      "#D1E2FF",
      "#FFE4D9",
      "#FFECF1",
      "#FFC2C7",
      "#FFCE7D",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const handleClick = () => {
    if (value.trim() === "") {
      setError("La tarea no debe estar vacía.");
      return;
    }

    const newTask = {
      id: Date.now(),
      text: value,
      color: getRandomColor(),
      completed: false,
    };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setValue(""); // Limpiar el input
    setError(""); // Limpiar mensaje de error
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  const handleToggleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <VStack
      w="100%"
      minHeight="100vh"
      spacing={6}
      align="center"
      paddingTop="50px"
      position="relative"
      color="gray.800">
      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        backgroundImage={`url(${fondoImagen})`}
        backgroundPosition="center center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundAttachment="fixed"
        filter={
          colorMode === "dark"
            ? "brightness(0.6) blur(4px)"
            : "brightness(0.8) blur(4px)"
        }
        zIndex="-1"
      />
      <Heading
        size={{ base: "lg", sm: "xl", md: "2xl", lg: "3xl", xl: "4xl" }}
        color={colorMode === "light" ? "custom.pinkBold" : "custom.pinkLight"}
        letterSpacing="wider"
        marginTop="20px"
        textShadow="2px 2px 4px rgba(0, 0, 0, 0.7)"
        fontFamily="'Dancing Script', cursive">
        <HStack
          spacing={{ base: "3", sm: "4", md: "6" }}
          justify="center"
          align="center">
          <FaHandHoldingHeart
            color={colorMode === "dark" ? "white" : "black"}
          />
          <span>Bienvenido a Mi Todo List</span>
          <FaTasks color={colorMode === "dark" ? "white" : "black"} />
        </HStack>
      </Heading>
      <HStack
        w="90%"
        maxW="4xl"
        spacing={4}
        flexDirection={{ base: "column", md: "row" }}>
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          flex="1"
          size="lg"
          placeholder="Ingresa una tarea"
          focusBorderColor="black"
          variant="filled"
          color="black"
          padding="10px"
          mb={{ base: 4, md: 0 }}
          _focus={{ bg: colorMode === "light" ? "wheat" : "pink.100" }}
          bg="white"
          _placeholder={{ color: "black" }}
          _hover={{
            bg: colorMode === "light" ? "gray.100" : "whiteAlpha.800",
            borderColor: colorMode === "light" ? "gray.500" : "pink.300",
          }}></Input>

        <Select
          value={filter}
          onChange={handleFilterChange}
          flex="1"
          size="lg"
          variant="filled"
          bg="white"
          placeholder="Seleccionar"
          _placeholder={{ color: "black" }}
          focusBorderColor="black"
          _focus={{ bg: colorMode === "light" ? "wheat" : "pink.100" }}
          _hover={{
            bg: colorMode === "light" ? "gray.100" : "whiteAlpha.800",
            borderColor: colorMode === "light" ? "gray.500" : "pink.300",
          }}>
          <option
            style={{ backgroundColor: "#FFDA76", color: "black" }}
            value="all">
            Todas
          </option>
          <option
            style={{ backgroundColor: "#68D391", color: "black" }}
            value="completed">
            Completadas
          </option>
          <option
            style={{ backgroundColor: "#FC8181", color: "black" }}
            value="pending">
            Pendientes
          </option>
        </Select>
      </HStack>
      <Button
        onClick={handleClick}
        marginTop="40px"
        size="lg"
        bg="custom.pink"
        _hover={{ bg: "custom.yellowPastel" }}
        color="black"
        rightIcon={<FaCircleArrowRight />}
        bgColor="custom.pinkLight"
        borderColor="black"
        variant="outline">
        Enviar
      </Button>
      {error && (
        <Text
          fontSize="xl"
          mt={2}
          fontWeight="bold"
          color={colorMode === "light" ? "black" : "white"}>
          {error}
        </Text>
      )}
      <List
        tasks={filteredTasks}
        onToggleComplete={handleToggleComplete}
        onDelete={handleDelete}
      />
    </VStack>
  );
};

export default TodoList;
