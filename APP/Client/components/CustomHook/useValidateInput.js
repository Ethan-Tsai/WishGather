import { React, useState } from 'react'

export function useValidation(){
  const [userNameError, setUserNameError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [userEmailError, setUserEmailError] = useState('');
  const [userPasswordError, setUserPasswordError] = useState('');
  const [userRoleError, setUserRoleError] = useState('');

  const validateUserName = (userName) => {
    if (!userName.trim()) {
      setUserNameError('請輸入姓名');
      return false;
    } else if (userName.trim().length > 50) {
      setUserNameError('姓名不得超過25個字元');
      return false;
    } else {
      setUserNameError('');
      return true;
    }
  };

  const validatePhoneNumber = (phoneNumber) => {
    if (!phoneNumber.trim()) {
      setPhoneNumberError('請輸入電話號碼');
      return false;
    } else if (!phoneNumber.trim().startsWith('09')) {
      setPhoneNumberError('手機號碼應為09開頭');
      return false;
    } else if (phoneNumber.trim().length !== 10) {
      setPhoneNumberError('請確認手機號碼長度是否正確');
      return false;
    } else {
      setPhoneNumberError('');
      return true;
    }
  };

  const validateUserEmail = (userEmail) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!userEmail.trim()) {
      setUserEmailError('請輸入電子郵件');
      return false;
    } else if (!emailRegex.test(userEmail.trim())) {
      setUserEmailError('請輸入有效的電子郵件');
      return false;
    } else {
      setUserEmailError('');
      return true;
    }
  };

  const validateUserPassword = (userPassword) => {
    if (!userPassword.trim()) {
      setUserPasswordError('請輸入密碼');
      return false;
    } else {
      setUserPasswordError('');
      return true;
    }
  };

  const validateUserRole = (userRole) => {
    if (!userRole) {
      setUserRoleError('請選擇身份別');
      return false;
    } else {
      setUserRoleError('');
      return true;
    }
  };

  return {
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
  };
}


