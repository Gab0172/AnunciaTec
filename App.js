import React from "react";
import 'react-native-gesture-handler';
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AuthStack } from './src/navigation/DrawerNavigation';
import { DrawerNavigation } from "./src/navigation/DrawerNavigation";
import { Conjunto } from "./src/navigation/DrawerNavigation";


const App = () =>{
  return(

      <Conjunto />
  )
}

export default App;