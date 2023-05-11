//Publicar aviso
import React, { useState } from "react";
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

const PublishAdScreen = () => {
  const [adText, setAdText] = useState("");

  const handlePublish = () => {
    
    console.log(adText);
  };

  return (
    <NativeBaseProvider>
      <Box bg="blue.600" p={4}>
        <HStack justifyContent="space-between" alignItems="center">
          <Text color="white" fontWeight="bold" fontSize="lg">
            Publicar nuevo aviso
          </Text>
        </HStack>
      </Box>
      <Center flex={1}>
        <Box maxWidth="90%" mx="auto">
          <FormControl>
            <Stack space={4} alignItems="center">
              <Text fontWeight="bold" fontSize="xl">
                ¿Qué desea publicar?
              </Text>
              <Input
                placeholder="Escriba su aviso aquí"
                value={adText}
                onChange={(value) => setAdText(value)}
                borderWidth={1}
                borderColor="blue.400"
                borderRadius={4}
                p={2}
                _focus={{ borderColor: "blue.600" }}
                multiline={true}
                minHeight={100}
              />

              <Button colorScheme="blue" mt={4} onPress={handlePublish}>
                Publicar
              </Button>
            </Stack>
          </FormControl>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
};

export default PublishAdScreen;
