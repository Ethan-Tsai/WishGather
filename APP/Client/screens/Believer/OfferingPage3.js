import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../../GlobalStyles";

const OfferingPage3 = () => {
  return (
    <View style={styles.offeringPage7}>
      <Image
        style={styles.incenseIcon}
        contentFit="cover"
        source={require("../assets/incense.png")}
      />
      <Text style={styles.text}>加載中...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  incenseIcon: {
    top: 297,
    left: 125,
    width: 180,
    height: 180,
    position: "absolute",
  },
  text: {
    top: 499,
    left: 101,
    fontSize: FontSize.size_11xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorWhite,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 229,
    height: 55,
    position: "absolute",
  },
  offeringPage7: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorOrange,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default OfferingPage3;
