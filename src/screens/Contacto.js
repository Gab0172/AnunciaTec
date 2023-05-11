import React from "react";
import { Image, Text } from "react-native";
import {
  NativeBaseProvider,
  Center,
  Box,
} from "native-base";

import Logotipo from "../images/Logotipo.png";

const ContactScreen = () => {
  return (
    <NativeBaseProvider>
      <Box bg="blue.600" p={4}>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: "lg" }}>
          Contacto
        </Text>
      </Box>
      <Center flex={1}>
        <Box maxWidth="90%" mx="auto">
          <Center>
            <Image
              source={Logotipo}
              style={{
                width: "100%",
                aspectRatio: 1,
                marginBottom: 50,
              }}
            />
          </Center>
          <Text style={{ fontSize: 18, textAlign: "center", marginBottom: 20 }}>
            Correo electrónico: Anunciatec@gmail.com {"\n"}
            Teléfono: 45454545
          </Text>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
};

export default ContactScreen;