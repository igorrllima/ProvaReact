import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Inicio from "../screens/Inicio";
import CadastroCliente from "../screens/CadastroCliente";
/*import NovoPedido from "../screens/NovoPedido";*/
import novoPedidoAPI from "../screens/novoPedidoAPI";
import Pedidos from "../screens/Pedidos";
import CadastroItem from "../screens/CadastroItem";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="CadastroCliente" component={CadastroCliente} />
        <Stack.Screen name="NovoPedido" component={novoPedidoAPI} />
        <Stack.Screen name="Pedidos" component={Pedidos} />
        <Stack.Screen name="CadastroItem" component={CadastroItem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
