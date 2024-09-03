import React from 'react';
import { StyleSheet, View, Text, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const ProductItem = ({ destination, imageSource, title, price }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate(destination)}
    >
      {/* Image */}
      <View style={styles.imageContainer}>
        <Image
          style={styles.productImage}
          source={imageSource}
        />
      </View>
      {/* Price */}
      {/* <Text style={[styles.price]}>{price}</Text> */}
      
      {/* title */}
      <View style={{width:'100%'}}>
        <Text style={[styles.title]}>{title}</Text>
      </View>
      
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 180,
    marginHorizontal: 0,
    alignItems: 'center',
    // borderWidth:1
  },
  imageContainer: {
    width: '100%',
    
  },
  productImage: {
    width: '100%',
    height: '100%',
    height: 120,
    
  },
  price: {
    marginTop: 15,
    fontSize: 16,
    color: 'orange',
    fontWeight: 'bold',
  },
  title: {
    width: '100%',
    marginTop: 8,
    fontSize: 14,
    fontWeight:'bold',
    color: '#4F4F4F',
    textAlign: 'center',
  },
});

export default ProductItem;
