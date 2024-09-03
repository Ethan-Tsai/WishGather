import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TextInput, Pressable } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, AntDesign } from '@expo/vector-icons';  // Import Expo icon library
import { Color, Border, FontFamily, FontSize } from "../../GlobalStyles";
import Counter from "../../components/Counter";

const { width, height } = Dimensions.get('window');

const ProductPage = ({ route }) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const { imageSource, title, price, description } = route.params;
  const [quantity, setQuantity] = useState(1);
  const [remark, setRemark] = useState('');

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    navigation.navigate('HomePage1', { selectedQuantity: quantity, itemTitle: title });
  };

  return (
    <SafeAreaProvider>
      <View style={{
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          backgroundColor: "white",
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right 
        }}>  
        
        <Pressable style={styles.closeButton} onPress={() => navigation.navigate('HomePage1')}>
          <AntDesign name="left" size={28} color="black" />
        </Pressable>
        
        <Image style={styles.image} source={imageSource} />
        
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>$ {price}</Text>
        {description && <Text style={styles.description}>備注 : {description}</Text>}
        
        <View style={styles.remarkContainer}>
            <Text style={styles.remark}>特殊指示 : </Text>
            <TextInput
              style={styles.remarkInput}
              placeholder="請輸入指示..."
              value={remark}
              onChangeText={setRemark}
            />
        </View>

        <View style={styles.counterContainer}>
          <Counter quantity={quantity} onIncrease={handleIncrease} onDecrease={handleDecrease} />
        </View>

        <Pressable style={styles.addToCartButton} onPress={handleAddToCart}>
          <Text style={styles.addToCartText}>新增至購物車</Text>
        </Pressable>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Color.colorWhite,
  },
  image: {
    width: width,
    height: height * 0.35,
    alignSelf: 'center',
    marginBottom: 20,
  },
  closeButton: {
    zIndex: 1,
    borderRadius: 20,
    width: 38,
    height: 38,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginLeft: 20,
    marginTop: 20,
  },
  price: {
    fontSize: 20,
    fontWeight: '500',
    color: "gray",
    marginLeft: 20,
    marginVertical: 5,
  },
  description: {
    fontSize: 18,
    color: Color.colorGray_500,
    marginLeft: 20,
    marginVertical: 5,
  },
  remarkContainer: {
    width: width * 0.9,
    borderTopWidth: 1, 
    borderColor: "#E0E0E0",
    marginTop: 20,
    alignSelf: 'center',
  },
  remark: {
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 20,
    marginVertical: 10,
  },
  remarkInput: {
    width: "90%",
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: FontSize.size_md,
    fontFamily: FontFamily.interRegular,
    alignSelf: 'center',
    marginBottom: 10,
  },
  counterContainer: {
    width: width,
    alignItems: 'center',
    borderTopWidth: 1, 
    borderColor: "#E0E0E0",
    marginTop: 20,
    paddingTop: 10,
  },
  addToCartButton: {
    position: 'absolute',
    bottom: 20,
    left: width * 0.1,
    width: width * 0.8,
    height: 50,
    backgroundColor: "#FFA500",
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToCartText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProductPage;
