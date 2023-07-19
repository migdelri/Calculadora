import React from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function HomeScreen(props){
    //console.log(props);
    const {navigation} = props;
    const goApp = () =>{
        navigation.navigate("Calculadora");
    }
    return (
        <View style={styles.container}>
            
            <TouchableOpacity style={styles.startButton} onPress={goApp}>
            <Text style={styles.startButtonText}>Iniciar Calculadora</Text>
            </TouchableOpacity>
            <Text>Preciona el boton para abrir la calculadora</Text>
        </View>
    );
} 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    startButton: {
      backgroundColor: 'blue',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 5,
    },
    startButtonText: {
      fontSize: 18,
      color: 'white',
    },
  });