import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize } from "../../GlobalStyles";

const HomePage5 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.homePage5, styles.homePage5Layout]}>
      <View style={styles.background}>
        <Image
          style={[styles.backgroundChild, styles.childPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-31.png")}
        />
        <Image
          style={styles.backgroundItem}
          contentFit="cover"
          source={require("../assets/rectangle-32.png")}
        />
        <Image
          style={[styles.backgroundInner, styles.backgroundLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-33.png")}
        />
        <Image
          style={styles.rectangleIcon}
          contentFit="cover"
          source={require("../assets/rectangle-34.png")}
        />
        <Image
          style={styles.backgroundChild1}
          contentFit="cover"
          source={require("../assets/rectangle-35.png")}
        />
        <Image
          style={[styles.backgroundChild2, styles.backgroundLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-36.png")}
        />
        <Image
          style={styles.backgroundChild3}
          contentFit="cover"
          source={require("../assets/rectangle-37.png")}
        />
        <Image
          style={[styles.backgroundChild4, styles.backgroundChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-39.png")}
        />
        <Image
          style={[styles.backgroundChild5, styles.backgroundChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-40.png")}
        />
        <Image
          style={[styles.backgroundChild6, styles.backgroundChildPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-42.png")}
        />
        <Image
          style={[styles.backgroundChild7, styles.backgroundChildPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-40.png")}
        />
        <Image
          style={[styles.backgroundChild8, styles.backgroundChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-41.png")}
        />
      </View>
      <View style={[styles.backgroungColor, styles.childPosition]} />
      <View style={styles.recieptBlock} />
      <FrameComponent />
      <Text style={[styles.text, styles.textTypo]}>收據</Text>
      <View style={[styles.confirmButton, styles.confirmLayout]}>
        <Image
          style={[styles.confirmButtonChild, styles.confirmLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-91.png")}
        />
        <Pressable
          style={[styles.pressable, styles.childPosition]}
          onPress={() => navigation.navigate("UserPage3")}
        >
          <Text style={[styles.text1, styles.confirmLayout]}>回上頁</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homePage5Layout: {
    height: 932,
    borderRadius: Border.br_21xl,
  },
  childPosition: {
    left: 0,
    position: "absolute",
  },
  backgroundLayout: {
    width: 163,
    position: "absolute",
  },
  backgroundChildLayout: {
    height: 76,
    width: 76,
    position: "absolute",
  },
  backgroundChildPosition: {
    left: 216,
    height: 76,
    width: 76,
    position: "absolute",
  },
  textTypo: {
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  confirmLayout: {
    height: 70,
    width: 300,
  },
  backgroundChild: {
    top: 540,
    width: 154,
    height: 153,
  },
  backgroundItem: {
    left: 343,
    width: 162,
    height: 176,
    top: 757,
    position: "absolute",
  },
  backgroundInner: {
    left: 10,
    height: 159,
    top: 0,
  },
  rectangleIcon: {
    top: 419,
    left: 376,
    width: 121,
    height: 121,
    position: "absolute",
  },
  backgroundChild1: {
    left: 350,
    width: 147,
    height: 149,
    top: 0,
    position: "absolute",
  },
  backgroundChild2: {
    left: 15,
    height: 170,
    top: 757,
  },
  backgroundChild3: {
    top: 625,
    left: 409,
    width: 68,
    height: 68,
    position: "absolute",
  },
  backgroundChild4: {
    top: 206,
    left: 20,
    height: 76,
    width: 76,
  },
  backgroundChild5: {
    top: 393,
    left: 20,
    height: 76,
    width: 76,
  },
  backgroundChild6: {
    top: 826,
  },
  backgroundChild7: {
    top: 42,
  },
  backgroundChild8: {
    top: 246,
    left: 401,
  },
  background: {
    top: 7,
    left: -39,
    width: 505,
    height: 933,
    position: "absolute",
  },
  backgroungColor: {
    backgroundColor: Color.colorLightsalmon,
    width: 430,
    top: 0,
    height: 932,
    borderRadius: Border.br_21xl,
  },
  recieptBlock: {
    top: 118,
    left: 57,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhitesmoke_100,
    width: 320,
    height: 720,
    position: "absolute",
  },
  text: {
    top: 134,
    left: 70,
    fontSize: FontSize.size_16xl,
    color: Color.colorBlack,
    textAlign: "left",
    width: 211,
    height: 61,
    position: "absolute",
  },
  confirmButtonChild: {
    borderRadius: Border.br_xl,
    top: 0,
    left: 0,
    position: "absolute",
  },
  text1: {
    fontSize: FontSize.size_11xl,
    color: Color.colorWhite,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  pressable: {
    top: 0,
  },
  confirmButton: {
    top: 753,
    left: 67,
    position: "absolute",
  },
  homePage5: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    width: "100%",
    overflow: "hidden",
  },
});

export default HomePage5;
