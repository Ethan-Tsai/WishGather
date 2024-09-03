import React from 'react';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import SetButton from '../components/Utility/SetButton';

export default function Home({ navigation }) {
  return (
    
    <LinearGradient
      colors={['#EA7500', '#FFFAF4']}
      style={styles.container}
    >
      {/* Logo 決定再放上去*/}
      <View style={styles.iconLayout}>
        <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/logo.png")}
        />
      </View>
      
      {/* App Name */}
      <Text style={styles.title}>WishGather</Text>

      {/* Sign In/Up Button */}
      <Pressable style={styles.button} onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.buttonText}>登入</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.buttonText}>註冊</Text>
      </Pressable>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  iconLayout: {
    height: 100,
    width: 100,
    marginBottom:25,
  },
  icon:{
    width:"100%",
    height:"100%"

  },
  title: {
    fontSize: 40,
    fontWeight:"500",
    fontFamily:"Roboto",
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#FFA500',
    padding: 15,
    borderRadius: 15,
    marginVertical: 15,
    width: '80%',
    alignItems: 'center',
    //Shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight:"500"
  },
});
