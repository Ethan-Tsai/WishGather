import { React, useState } from 'react'
import { View, Text, TextInput, StyleSheet, Dimensions, Button } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
function TextInputSet({ labelName, defaultValue, multiLine, placeholder}){
    const [text, onChangeText] =  useState(defaultValue);
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{labelName}</Text>
            <TextInput style={[styles.input, multiLine ? styles.multiLine : null]} 
                       placeholder={placeholder}
                       value={text} 
                       onChangeText={onChangeText}  
                       multiline={multiLine ? true : false}/>
        </View>
    )

}
let screenHeight = Dimensions.get("window").height;
let screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    container:{
        marginBottom: '5px',
    },
    label:{
        marginLeft: 10,
        fontSize: 20
    },
    input: {
        backgroundColor: '#dbdbdb',
        borderWidth: 1,
        borderColor: '#dbdbdb',
        borderRadius: 10,
        padding: 20,
        width: screenWidth * 0.9,
        height: 70,
        margin: 12,
        fontSize: 20,
        position: 'relative'
    },
    multiLine: {
        height: 150,
        paddingVertical: 20
    },
    icon:{
        position: 'fixed',
        right: 0,
    }
    
})

export default TextInputSet;