import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FrameComponent from "../components/FrameComponent";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const HomePage3 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.homePage4, styles.homePage4Layout]}
      onPress={() => navigation.navigate("HomePage4")}
    >
      <View style={styles.background}>
        <Image
          style={styles.backgroundChild}
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
      <View style={[styles.backgroungColor, styles.homePage4Layout]} />
      <View style={styles.recieptBlock} />
      <FrameComponent />
      <Text style={[styles.text, styles.textTypo]}>訂單成立</Text>
      <Pressable
        style={[styles.confirmButton, styles.text1Layout]}
        onPress={() => navigation.navigate("HomePage4")}
      >
        <Pressable
          style={[styles.wrapper, styles.text1Layout]}
          onPress={() => navigation.navigate("UserPage")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/rectangle-91.png")}
          />
        </Pressable>
        <Text style={[styles.text1, styles.text1Layout]}>回首頁</Text>
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  homePage4Layout: {
    height: 932,
    borderRadius: Border.br_21xl,
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
  text1Layout: {
    height: 70,
    width: 300,
    position: "absolute",
  },
  backgroundChild: {
    top: 540,
    width: 154,
    height: 153,
    left: 0,
    position: "absolute",
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
    left: 0,
    position: "absolute",
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
  icon: {
    borderRadius: Border.br_xl,
    height: "100%",
    width: "100%",
  },
  wrapper: {
    top: 0,
    left: 0,
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
    top: 0,
    left: 0,
  },
  confirmButton: {
    top: 753,
    left: 67,
  },
  homePage4: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    overflow: "hidden",
    width: "100%",
  },
});

export default HomePage3;
