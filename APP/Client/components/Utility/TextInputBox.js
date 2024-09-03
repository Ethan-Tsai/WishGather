import { React, useState, useEffect, useRef } from 'react'
import { View, TextInput, Text, StyleSheet, Dimensions, Animated } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


function TextInputBox({inputType, placeholder, textValue, onChangeText, validState, invalidInput}){
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
      if(!validState) {
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true
        }).start()
      }
      else{
        fadeAnim.setValue(0);
      }
    }, [validState])
    return (
      <View style={styles}>
        <TextInput 
          style={[styles.textBox, !validState && styles.invalidTextBox]}
          placeholder={placeholder}
          value={textValue}
          onChangeText={onChangeText}
          keyboardType={inputType === 'email' ? 'email-address' : 'default'}
          secureTextEntry={inputType === 'password'}
        />
        {!validState && 
          <Animated.Text style={[styles.informText, { opacity: fadeAnim }]}>
            <MaterialCommunityIcons name="information-outline" size={16}/>
            請輸入{invalidInput}
          </Animated.Text>}
      </View>
    )
}

const screenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  textBoxContainer: {
    width: screenWidth,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: 10,
    gap: 8
  },
  textBox: {
    width: screenWidth * 0.8,
    height: 60,
    backgroundColor: '#FFFAF4',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 8,
    marginBottom: 8
  },
  invalidTextBox: {
    borderColor: '#f25738',
    borderWidth: 2,
  },    
  informText: {
    color: 'red',
    fontStyle: 'italic'
  }
})

export default TextInputBox;