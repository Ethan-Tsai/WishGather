import { ScrollView, StyleSheet, View, TextInput, Text, KeyboardAvoidingView, Platform, Pressable, Dimensions, Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { FontSize, Padding, FontFamily, Color, Border } from "../GlobalStyles";
import axios from 'axios';
import React, { useState } from 'react';

import GoBackButton1 from '../components/GoBackButton1';
import SetButton from '../components/Utility/SetButton';

const API=require('./DBconfig')

const { width, height } = Dimensions.get('window');

const UserPage4 = () => {

  const insets = useSafeAreaInsets();
  const [newName, setName] = useState('');
  const [newPhone, setPhone] = useState('');
  const [newEmail, setEmail] = useState('');
  const [newPassword, setPassword] = useState('');

  const handleRegisterUpdate = async () => {
    console.log('Current state before submission:', { newName, newPhone, newEmail, newPassword });

    if (!newName.trim()) {
      Alert.alert('Error', 'Name is required');
      return;
    }

    if (!newEmail.trim()) {
      Alert.alert('Error', 'Email is required');
      return;
    }

    if (!newPassword) {
      Alert.alert('Error', 'Password is required ');
      return;
    }

    //API後面放要作用的後端
    const api = `${API}/believersUpdate`;
    try {
      const user = {
        NAME: newName.trim(),
        PHONE: newPhone.trim(),
        EMAIL: newEmail.trim(),
        PASSWORD: newPassword,
      };

      console.log('User data being sent:', user);
      console.log('User data being sent:', JSON.stringify(user));

      const result = await axios.post(api, user
        ,{
          headers: {
            'Content-Type': 'application/json',
          },
    }
  );
      console.log('Registration successful:', result.data);
      Alert.alert('更新成功', '您的個資已更新!');
      navigation.navigate('SignIn');   //修改成功前往登入頁面


    } catch (error) {
      console.error('Registration error:', error);
      if (error.response) {
        console.log('Error data:', error.response.data);
        console.log('Error status:', error.response.status);
        Alert.alert('Registration Failed', error.response.data.error || 'Unknown error');
      } else if (error.request) {
        console.log('No response received:', error.request);
        Alert.alert('Connection Error', 'No response from server. Check your connection.');
      } else {
        console.log('Error', error.message);
        Alert.alert('Error', 'An unexpected error occurred.');
      }
    }
  };

  const navigation = useNavigation();

  {/* Style */}
  return (
    <SafeAreaProvider>
      <View style={{
          flex: 1,
          backgroundColor: "white",
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right
        }}>
          
        <GoBackButton1  destination="UserPage" />

        <View style={styles.titleContainer}>
            <Text style={styles.pageTitle}>個資維護</Text>

            {/* 待修改 : 增加更換照片功能 */}
            <Image
            style={styles.userImage}
            contentFit="cover"
            source={require("../assets/ellipse-2.png")}
            />
        </View>
       
        {/* TextInput */}
        <View style={styles.formContainer}>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>姓名 :</Text>
              <TextInput 
              placeholder=" 中文姓名" 
              style={styles.input} 
              value={newName}
              onChangeText={setName}/>
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>電子郵件 :</Text>
              <TextInput
              placeholder=" 電子郵件" 
              style={styles.input} 
              value={newEmail}
              onChangeText={setEmail}/>
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>密碼 :</Text>
              <TextInput 
              placeholder=" 密碼" 
              style={styles.input} 
              secureTextEntry 
              value={newPassword}
              onChangeText={setPassword}/>
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>連絡電話 :</Text>
              <TextInput 
              placeholder=" 連絡電話" 
              style={styles.input}
              value={newPhone}
              onChangeText={setPhone}
               />
            </View>
        </View>

        <View style={styles.buttonContainer}>
          <SetButton 
            btnText={'確認送出'} 
            btnStatus={'primary'} 
            onPress={handleRegisterUpdate}
          />
        </View>

          

          {/* 確認送出按钮 */}
          {/* <Pressable
            style={[styles.confirmButton, styles.confirmLayout]}
            onPress={handleRegisterUpdate}
          >
            <Image
              style={[styles.confirmButtonChild, styles.confirmLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-91.png")}
            />
            <Text style={[styles.buttontext, styles.confirmLayout]}>確認送出</Text>
          </Pressable> */}

          {/* 確認送出連接資料庫的地方 */}
      </View>
    </SafeAreaProvider> 
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    width: width*0.95,
    justifyContent: "center",
    alignItems: 'center',
    alignSelf:'center',      
    paddingHorizontal: 10,
    marginBottom: 25

    // borderWidth:1
  },
  pageTitle: {
    fontSize: 28,
    color: "#4F4F4F",
    fontWeight: "bold",
    textAlign: 'left',
    marginBottom:20,
  },
  userImage: {
    width: 150,
    height: 150,
    borderRadius: 50,
  },
  formContainer:{
    width: width*0.95,
    justifyContent:'center',
    alignSelf:'center',
    paddingHorizontal: 15
  },
  label: {
    fontSize: 16,
    fontWeight:'bold',
    color: '#4F4F4F',
    marginBottom: 10,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  buttonContainer: {
    width: width,
    justifyContent: "center",
    alignItems: 'center',
    position: 'absolute',
    bottom: 60,
  },
 
  

  
});

export default UserPage4;
