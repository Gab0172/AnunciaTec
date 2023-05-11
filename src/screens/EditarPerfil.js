import React from "react";
import { Image } from "react-native";
import {
  NativeBaseProvider,
  Center,
  Box,
  FormControl,
  Stack,
  Text,
  Button,
  HStack,
  Input,
} from "native-base";

import DefaultProfileImage from "./assets/DefaultProfileImage.png";

const EditProfileScreen = () => {
  return (
    <NativeBaseProvider>
      <Box bg="blue.600" p={4}>
        <HStack justifyContent="space-between" alignItems="center">
          <Text color="white" fontWeight="bold" fontSize="lg">
            Editar información del perfil
          </Text>
        </HStack>
      </Box>
      <Center flex={1}>
        <Box maxWidth="90%" mx="auto">
          <Center>
            <Image
              source={DefaultProfileImage}
              style={{
                width: "50%",
                aspectRatio: 1,
                marginBottom: 20,
              }}
            />
          </Center>
          <FormControl>
            <Stack space={4} alignItems="center">
              <Text fontSize="xl">Nombre:</Text>
              <Input
                fontSize="md"
                placeholder="NOMBRE"
                defaultValue="Juan Pérez"
              />

              <Text fontSize="xl">Correo institucional:</Text>
              <Input
                fontSize="md"
                placeholder="CORREO"
                defaultValue="jperez@ejemplo.com"
              />

              <Text fontSize="xl">Rol:</Text>
              <Input
                fontSize="md"
                placeholder="ROL"
                defaultValue="Estudiante"
              />

              <Center>
                <Button colorScheme="blue" mt={4}>
                  Guardar cambios
                </Button>
              </Center>
            </Stack>
          </FormControl>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
};

export default EditProfileScreen;