import { HStack, IconButton, Text, useDisclosure } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import DeleteConfirm from "./DeleteConfirm";

const Item = ({ task, onToggleComplete, onDelete }) => {
  const {
    isOpen: isDeleteOpen,
    onOpen: onOpenDelete,
    onClose: onCloseDelete,
  } = useDisclosure();

  const cancelRef = useRef();
  const [taskToDelete, setTaskToDelete] = useState(null);

  const handleDeleteClick = () => {
    setTaskToDelete(task.id);
    onOpenDelete();
  };

  const handleConfirmDelete = () => {
    if (taskToDelete !== null) {
      onDelete(taskToDelete);
      setTaskToDelete(null);
    }
    onCloseDelete();
  };

  return (
    <>
      <HStack
        w="90%"
        maxW="600px"
        p="4"
        bg={task.color}
        borderRadius="md"
        justifyContent="space-between"
        align="center"
        mb={3}>
        <Text
          textDecoration={task.completed ? "line-through" : "none"}
          color={task.completed ? "gray.500" : "black"}
          fontStyle={task.completed ? "italic" : "normal"}
          fontWeight={task.completed ? "light" : "medium"}
          flex="1"
          fontSize="lg">
          {task.text}
        </Text>
        <IconButton
          icon={<FaCheck fontSize="22px" />}
          colorScheme="green"
          color="white"
          bg="green"
          onClick={() => onToggleComplete(task.id)}
          aria-label="Completar tarea"
        />
        <IconButton
          icon={<MdDelete fontSize="22px" />}
          colorScheme="red"
          color="white"
          bg="red"
          onClick={handleDeleteClick}
          aria-label="Eliminar tarea"
        />
      </HStack>

      <DeleteConfirm
        isOpen={isDeleteOpen}
        onClose={onCloseDelete}
        cancelRef={cancelRef}
        onConfirm={handleConfirmDelete}
      />
    </>
  );
};

export default Item;
