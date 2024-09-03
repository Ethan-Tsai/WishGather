import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, SafeAreaView, Alert ,Pressable} from 'react-native';

//儲存空間用來放token(類似php session那種感覺)
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
//連線axios

import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import Checkbox from 'expo-checkbox';
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import TempleTab from '../components/NavTab/TempleTab';
import NavigateBack from '../components/Utility/NavigateBack';
import TextInputBox from '../components/Utility/TextInputBox';
import { useAlertDialog } from '../components/CustomHook/useAlertDialog';
import { useValidation } from '../components/CustomHook/useValidateInput';

// 把API抓進來-都固定用專案教室IP
const API = require('./DBconfig');

function SignIn() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(null);
  const [role, setRole] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setChecked] = useState(false);

  const { showAlertDialog, renderAlertDialog } = useAlertDialog();
  const {
    validateUserEmail,
    validateUserPassword,
    userEmailError,
    userPasswordError,
  } = useValidation();

  useEffect(() => {
    AsyncStorage.getItem('userToken').then(value => {
      if (value) setToken(value);
    }).catch(error => {
      console.error('Error reading userToken from AsyncStorage', error);
    });
  }, []);

  useEffect(() => {
    if (token) {
      // 這裡應該根據token獲取用戶角色
      axios.get(`${API}/profile`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        const { role } = response.data;
        setRole(role);
        // 根據角色導航
        if (role === '信眾') {
          navigation.replace('BelieverTab');
        } else if (role === '社福') {
          navigation.replace('Charity');
        } else if (role === '廟方') {
          navigation.replace('TempleTab');
        } else {
          console.error('Unknown role:', role);
        }
      })
      .catch(error => {
        console.error('Error fetching profile', error);
        Alert.alert('Error', 'Failed to fetch user profile.');
      });
    }
  }, [token, navigation]);
  
  const handleSignIn = async () => {
    const isEmailValid = validateUserEmail(email.trim());
    const isPasswordValid = validateUserPassword(password);
    const signInApi = `${API}/signin`;
    
    if(isEmailValid && isPasswordValid){
      setIsLoading(true);
      const userData = {
        EMAIL: email,
        PASSWORD: password,
      };
      // 登入Server 
      try {
        const response = await axios.post(signInApi, userData, { // Ensure correct variable names
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const { token } = response.data;
        if (token) {
          setToken(token);
          await AsyncStorage.setItem('userToken', token);
          setIsLoading(false);
        } else {
          showAlertDialog('登入失敗', '請重新嘗試');
        }
      } catch (error) {
        console.error('Sign-in failed:', error);
        showAlertDialog('登入失敗', '請重新嘗試');
      } finally {
        setIsLoading(false);
      }
    }
  };

  // 登出設定
  const handleSignOut = async () => {
    setToken(null);
    setRole(null);
    await AsyncStorage.removeItem('userToken');
  };

  if (token && role) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.title}>登入成功！正在跳轉...</Text>
      </SafeAreaView>
    );
  }

  return (
    <LinearGradient
      colors={['#EA7500', '#FFFAF4']}
      style={styles.container}
    >
      <NavigateBack />
      <Text style={{ color: "#272727", fontSize: 35, marginBottom: 10, fontWeight: '500'}}>登入</Text>
      <Text style={{ color: "#272727", fontSize: 25, fontFamily:"Roboto", marginBottom: 50}}>Login</Text>

      <TextInputBox
          inputType='email'
          placeholder="輸入電子郵件"
          textValue={email}
          onChangeText={(text) => {
            setEmail(text);
            validateUserEmail(text);
          }}
          validState={!userEmailError}
          invalidInput={userEmailError || ''}
      />
      <TextInputBox
        inputType='password'
        placeholder="設定密碼"
        textValue={password}
        onChangeText={(text) => {
          setPassword(text);
          validateUserPassword(text);
        }}
        validState={!userPasswordError}
        invalidInput={userPasswordError || ''}
      />

    <View style={styles.rememberme}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#FFA500' : undefined}
        />
        <Text style={styles.paragraph}>記住我</Text>
    </View>

    <Pressable style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>登入</Text>
    </Pressable>

    <Pressable style={styles.button} onPress={() => navigation.navigate("SignUp")}>
        <Text style={styles.buttonText}>前往註冊</Text>
    </Pressable>
    
    {renderAlertDialog()}
    </LinearGradient>
    
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  input: {
    width: '90%',
    height: 50,
    backgroundColor: "#FFFAF4",
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  rememberme: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 18,
  },
  checkbox: {
    margin: 8,
  },
  button: {
    width: '35%',
    height: 50,
    backgroundColor: '#FFA500',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: '#FCFCFC',
    fontSize: 18, 
    fontWeight:'500'
  },
  debugContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
});

export default SignIn;