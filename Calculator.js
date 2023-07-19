import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';


const Calculator = () => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState('');

  const handleNumberPress = (number) => {
    if (result !== '') {
      clearResult();
    }

    if (operation === '') {
      setNumber1((prevNumber) => prevNumber + number.toString());
    } else {
      setNumber2((prevNumber) => prevNumber + number.toString());
    }
  };

  const handleOperationPress = (operationType) => {
    if (result !== '') {
      clearResult();
    }

    setOperation(operationType);
  };

  const handleCalculate = () => {
    if (number1 !== '' && number2 !== '' && operation !== '') {
      const num1 = parseFloat(number1);
      const num2 = parseFloat(number2);

      let calculatedResult;
      switch (operation) { 
        case '+':
          calculatedResult = num1 + num2;
          break;
        case '-':
          calculatedResult = num1 - num2;
          break;
        case '*':
          calculatedResult = num1 * num2;
          break;
        case '/':
          calculatedResult = num1 / num2;
          break;
        default:
          break;
      }

      setResult(calculatedResult.toString());
    }
  };

  const clearNumbers = () => {
    setNumber1('');
    setNumber2('');
    setOperation('');
    clearResult();
  };

  const clearResult = () => {
    setResult('');
  };

  const renderButton = (number, onPress, buttonType) => (
    <TouchableOpacity style={[styles.button, buttonType]} onPress={onPress}>
      <Text style={styles.buttonText}>{number}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Número 1"
          value={number1}
          onChangeText={setNumber1}
        />
        <Text style={styles.operationText}>{operation}</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Número 2"
          value={number2}
          onChangeText={setNumber2}
        />
      </View>

      <View style={styles.buttonContainer}>
        {renderButton(1, () => handleNumberPress(1), styles.numberButton)}
        {renderButton(2, () => handleNumberPress(2), styles.numberButton)}
        {renderButton(3, () => handleNumberPress(3), styles.numberButton)}
        {renderButton('+', () => handleOperationPress('+'), styles.operationButton)}
      </View>

      <View style={styles.buttonContainer}>
        {renderButton(4, () => handleNumberPress(4), styles.numberButton)}
        {renderButton(5, () => handleNumberPress(5), styles.numberButton)}
        {renderButton(6, () => handleNumberPress(6), styles.numberButton)}
        {renderButton('-', () => handleOperationPress('-'), styles.operationButton)}
      </View>

      <View style={styles.buttonContainer}>
        {renderButton(7, () => handleNumberPress(7), styles.numberButton)}
        {renderButton(8, () => handleNumberPress(8), styles.numberButton)}
        {renderButton(9, () => handleNumberPress(9), styles.numberButton)}
        {renderButton('*', () => handleOperationPress('*'), styles.operationButton)}
      </View>

      <View style={styles.buttonContainer}>
        {renderButton(0, () => handleNumberPress(0), styles.numberButton)}
        {renderButton('/', () => handleOperationPress('/'), styles.operationButton)}
        {renderButton('=', handleCalculate, styles.calculateButton)}
      </View>

      <View style={styles.clearButtonContainer}>
        <TouchableOpacity style={styles.clearButton} onPress={clearNumbers}>
          <Text style={styles.clearButtonText}>Borrar</Text>
        </TouchableOpacity>
      </View>

      {result !== '' && (
        <Text style={styles.resultText}>Resultado: {result}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    width: 100,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginRight: 10,
    paddingHorizontal: 5,
  },
  operationText: {
    fontSize: 24,
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  button: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  numberButton: {
    backgroundColor: 'lightgray',
  },
  operationButton: {
    backgroundColor: 'orange',
  },
  calculateButton: {
    backgroundColor: 'green',
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
  },
  clearButtonContainer: {
    alignItems: 'center',
  },
  clearButton: {
    backgroundColor: 'red',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  clearButtonText: {
    fontSize: 18,
    color: 'white',
  },
  resultText: {
    fontSize: 24,
    marginTop: 20,
  },
});

export default Calculator;
