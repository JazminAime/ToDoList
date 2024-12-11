import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";
import React from "react";

// eslint-disable-next-line react/display-name
const DeleteConfirm = React.forwardRef(
  ({ isOpen, cancelRef, onClose, onConfirm }, ref) => {
    return (
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        finalFocusRef={ref}>
        <AlertDialogOverlay>
          <AlertDialogContent
            p={{ base: "2", md: "4" }}
            mx={{ base: "2", md: "auto" }}
            maxW={{ base: "90%", md: "500px" }}
            rounded="md"
            boxShadow="dark-lg">
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Confirmación
            </AlertDialogHeader>
            <AlertDialogBody>
              ¿Seguro que desea eliminar esta tarea?
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancelar
              </Button>
              <Button colorScheme="red" onClick={onConfirm} ml={3}>
                Eliminar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    );
  }
);

export default DeleteConfirm;
