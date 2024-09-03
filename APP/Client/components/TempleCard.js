import React, { useState } from "react";
import { Pressable, View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const TempleCard = ({ imageSource, title, distance, onPress, onSave }) => {
  const [isSaved, setIsSaved] = useState(false);

  const handleSavePress = () => {
    const newSaveState = !isSaved;
    setIsSaved(newSaveState);
    onSave(newSaveState); // Call the onSave function with the new save state
  };

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image style={styles.image} source={imageSource} />
      <View style={styles.textContainer}>
        <Text style={{ lineHeight: 25 }}>
          <Text style={styles.title}>{title}{'\n'}</Text>
          <Text style={styles.distance}>{distance}</Text>
        </Text>
      </View>
      <Pressable style={styles.savedStateIcon} onPress={handleSavePress}>
        <MaterialCommunityIcons
          name={isSaved ? "heart" : "heart-outline"}
          size={38}
          color={isSaved ? "orange" : "gray"}
        />
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.95,
    height: 140,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
    position: 'relative',
  },
  image: {
    width: 100,
    height: 100,
  },
  textContainer: {
    flex: 1,
    paddingLeft: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4F4F4F',
  },
  distance: {
    fontSize: 16,
    color: 'gray',
  },
  savedStateIcon: {
    padding: 3,
  },
});

export default TempleCard;
