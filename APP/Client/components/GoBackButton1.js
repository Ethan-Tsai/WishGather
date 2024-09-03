import React from 'react';
import { Pressable, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const GoBackButton1 = ({ style, destination }) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate(destination)} style={[styles.backButton, style]}>
      <Image
        style={styles.goBackIcon}
        contentFit="cover"
        source={require("../assets/left-chevron.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  backButton: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  goBackIcon: {
    width: 28,
    height: 28,
    marginLeft: 10,
  },
});

export default GoBackButton1;
