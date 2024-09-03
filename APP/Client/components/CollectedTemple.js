import React from "react";
import { StyleSheet, View, Text, Pressable, Dimensions } from "react-native";
import { Image } from "expo-image";


const { width } = Dimensions.get('window');

const CollectedTemple = ({
  templeImage,
  templeName,
  address,
  onPressablePress,
}) => {
  return (
    <Pressable style={styles.pressable} onPress={onPressablePress}>
      <View style={styles.itemContainer}>
        <View>
          <Image
          style={styles.templeImage}
          contentFit="cover"
          source={templeImage}
          />
        </View>
        
        <View >
          <Text style={styles.textContainer}>
            <Text style={styles.templeName}>{templeName}{'\n'}</Text>
            <Text style={styles.address}>{address}</Text>
          </Text>
        </View>
      </View>  
    </Pressable>
  );
};

const styles = StyleSheet.create({
  itemContainer:{
    width: width * 0.95,
    height: 120,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
  },
  templeImage: {
    height: 100,
    width: 100,
    borderRadius: 15,
  },
  templeName: {
    fontSize: 24,
    fontWeight: "bold",
    color: '#4F4F4F',
  },
  address: {
    fontSize: 14,
    color: 'gray',
  },
  textContainer:{
    lineHeight: 25,
  },
});

export default CollectedTemple;
