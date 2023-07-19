import React from 'react'

import {createStackNavigator} from '@react-navigation/stack'

import HomeScreen from "./HomeScreen"
import Calculator from "./Calculator"

const Stack = createStackNavigator();


export default function NavigationStack(){
    return(
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name ="Inicio" component = {HomeScreen} />
            <Stack.Screen name ="Calculadora" component = {Calculator} />
        </Stack.Navigator>
    );
} 