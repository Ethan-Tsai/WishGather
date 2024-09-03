import React, { useState } from 'react';

import { View, TextInput, Pressable, StyleSheet, Alert, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import NavigateBack from '../components/Utility/NavigateBack';
import TextInputBox from '../components/Utility/TextInputBox';
import { useValidation } from '../components/CustomHook/useValidateInput';
import { useAlertDialog } from '../components/CustomHook/useAlertDialog';
const API = require('./DBconfig');

const SignUp = () => {
  //宣告要用到的變數
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const navigation = useNavigation();
  const { showAlertDialog, renderAlertDialog } = useAlertDialog();
  const {
    validateUserName,
    validatePhoneNumber,
    validateUserEmail,
    validateUserPassword,
    validateUserRole,
    userNameError,
    phoneNumberError,
    userEmailError,
    userPasswordError,
    userRoleError,
  } = useValidation();
  
  const believersAPI = `${API}/believers`;
  const handleRegister = async () => {
    const isUserNameValid = validateUserName(name);
    const isPhoneNumberValid = validatePhoneNumber(phone);
    const isEmailValid = validateUserEmail(email.trim());
    const isPasswordValid = validateUserPassword(password);
    const isRoleValid = validateUserRole(role);

    const userInputData = {
      NAME: name,
      PHONE: phone,
      EMAIL: email.trim(),
      PASSWORD: password,
      ROLE: role
    }
    if(!isRoleValid){
      showAlertDialog('輸入錯誤', '請選擇身份別');
    }
    if(isUserNameValid && isPhoneNumberValid && isEmailValid && isPasswordValid && isRoleValid){
      axios.post(believersAPI, userInputData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
          showAlertDialog('註冊成功', '歡迎登入');
          // TODO: 直接登入？
          navigation.navigate('SignIn');
      })
      .catch((error) => {
        if(error.response){
          showAlertDialog('註冊失敗', '請重新註冊');
        }
      })
    }

  }
  return (
    <LinearGradient
      colors={['#EA7500','#FFFAF4']}
      style={styles.container}
    >
      <NavigateBack />
      {/* Logo設計好可以考慮放上去 */}
      <Text style={{color:"#272727", fontSize: 35, marginBottom: 15, fontWeight: '500'}}>註冊</Text>
      <Text style={{color:"#272727", fontSize: 25, marginBottom: 50}}>Registration</Text>
      <View style={styles.formContainer}>
        <TextInputBox
          inputType='text'
          placeholder="輸入姓名"
          textValue={name}
          onChangeText={(text) => {
            setName(text);
            validateUserName(text);
          }}
          validState={!userNameError}
          invalidInput={userNameError || ''}
        />
        <TextInputBox
          inputType='text'
          placeholder="輸入電話號碼"
          textValue={phone}
          onChangeText={(text) => {
            setPhone(text);
            validatePhoneNumber(text);
          }}
          validState={!phoneNumberError}
          invalidInput={phoneNumberError || ''}
        />
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
      </View>

      {/* Role Selection Buttons */}
      <View style={styles.roleContainer}>
        <TouchableOpacity
          style={[
            styles.roleButton,
            role === '信眾' && styles.roleButtonSelected,
          ]}
          onPress={() => setRole('信眾')}
        >
          <Text style={styles.roleButtonText}>信眾</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.roleButton,
            role === '廟方' && styles.roleButtonSelected,
          ]}
          onPress={() => setRole('廟方')}
        >
          <Text style={styles.roleButtonText}>廟方</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.roleButton,
            role === '社福' && styles.roleButtonSelected,
          ]}
          onPress={() => setRole('社福')}
        >
          <Text style={styles.roleButtonText}>社福</Text>
        </TouchableOpacity>
      </View>

      <Pressable style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>確認送出</Text>
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
  title: {
    fontSize: 30,
    fontFamily:"Roboto",
    marginBottom: 5,

    color: '#272727',
    fontSize: 35,
    marginBottom: 15,
    fontWeight: '500',

  },
  formContainer: {
    flexDirection: 'column',
    gap: 10,
    marginBottom: 25

  },
  roleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    marginBottom: 15,
  },
  roleButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#FFA500',
    borderRadius: 20,
  },
  roleButtonSelected: {
    backgroundColor: '#FF8500',
  },
  roleButtonText: {
    color: '#FCFCFC',
    fontSize: 16,
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

    color : '#FCFCFC',

    fontSize: 18, 
    fontWeight:'500'
  },
  debugContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f0f0f0',

    color: '#FCFCFC',
    fontSize: 18,
    fontWeight: '500',
  },
});

export default SignUp;

