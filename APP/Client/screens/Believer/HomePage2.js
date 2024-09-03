import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../../GlobalStyles";

const HomePage2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homePage3}>
      <Component1
        counter={require("../assets/counter5.png")}
        rectangle11={require("../assets/rectangle-113.png")}
        prop="壽桃"
      />
      <Component1
        counter={require("../assets/counter1.png")}
        rectangle11={require("../assets/rectangle-114.png")}
        prop="紅龜粿"
        rectangleViewTop={168}
      />
      <Image
        style={styles.crossIcon}
        contentFit="cover"
        source={require("../assets/cross-icon.png")}
      />
      <Text style={[styles.text, styles.textLayout]}> 訂單</Text>
      <Pressable
        style={[styles.confirmOrder, styles.text1Layout]}
        onPress={() => navigation.navigate("HomePage3")}
      >
        <Pressable
          style={[styles.wrapper, styles.text1Layout]}
          onPress={() => navigation.navigate("HomePage3")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/rectangle-92.png")}
          />
        </Pressable>
        <Text style={[styles.text1, styles.textFlexBox]}>送出訂單</Text>
      </Pressable>
      <Text style={[styles.text2, styles.textTypo1]}>
        <Text style={styles.text3}>{`   共計 3 樣商品
`}</Text>
        <Text style={styles.text4}>{`    取貨地址：高雄市左營區左營新路17號
    取貨時間：`}</Text>
      </Text>
      <Pressable
        style={[styles.addButton, styles.addLayout]}
        onPress={() => navigation.navigate("HomePage1")}
      >
        <Image
          style={[styles.addButtonChild, styles.addLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-12.png")}
        />
        <Image
          style={styles.plusIcon}
          contentFit="cover"
          source={require("../assets/plus-icon.png")}
        />
        <Text style={[styles.text5, styles.textTypo1]}>新增商品</Text>
      </Pressable>
      <View style={styles.timer}>
        <View style={[styles.container, styles.frameLayout]}>
          <Text style={[styles.text6, styles.textTypo]}>{`55
00
05
10
15
20
25
30
35
40
45
50
500`}</Text>
        </View>
        <Text style={[styles.text7, styles.textTypo]}>:</Text>
        <View style={[styles.amPmWrapper, styles.frameLayout]}>
          <Text style={[styles.amPm, styles.textTypo]}>{`AM
AM
PM
PM
`}</Text>
        </View>
        <View style={[styles.frame, styles.frameLayout]}>
          <Text style={[styles.text8, styles.textTypo]}>{`11
00
01
02
03
04
05
06
07
08
09
10
11

00`}</Text>
        </View>
      </View>
      <Text style={[styles.text9, styles.textTypo2]}> 左營 仁濟宮</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textLayout: {
    width: 430,
    textAlign: "left",
    color: Color.colorBlack,
  },
  text1Layout: {
    height: 70,
    width: 360,
  },
  textFlexBox: {
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
  },
  textTypo1: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  addLayout: {
    height: 40,
    width: 140,
    position: "absolute",
  },
  frameLayout: {
    width: 40,
    backgroundColor: Color.colorWhitesmoke_300,
    height: 40,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    position: "absolute",
  },
  textTypo2: {
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    left: 0,
    position: "absolute",
  },
  crossIcon: {
    top: 46,
    left: 375,
    width: 30,
    height: 30,
    position: "absolute",
  },
  text: {
    top: 25,
    fontSize: FontSize.size_16xl,
    height: 80,
    alignItems: "center",
    display: "flex",
    width: 430,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    left: 0,
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
    position: "absolute",
  },
  text1: {
    color: Color.colorWhite,
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    left: 0,
    position: "absolute",
    top: 0,
    height: 70,
    width: 360,
  },
  confirmOrder: {
    top: 828,
    left: 33,
    position: "absolute",
  },
  text3: {
    fontSize: FontSize.size_4xl,
  },
  text4: {
    fontSize: FontSize.size_xl,
  },
  text2: {
    top: 567,
    width: 430,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: 0,
  },
  addButtonChild: {
    borderRadius: Border.br_31xl,
    top: 0,
    left: 0,
  },
  plusIcon: {
    top: 2,
    width: 32,
    height: 36,
    left: 10,
    position: "absolute",
  },
  text5: {
    top: 10,
    left: 34,
    color: Color.colorDimgray_100,
    width: 97,
    height: 24,
    fontSize: FontSize.size_xl,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
  },
  addButton: {
    top: 466,
    left: 280,
  },
  text6: {
    top: -37,
    left: -6,
    width: 53,
    height: 48,
  },
  container: {
    left: 55,
    top: 1,
    width: 40,
  },
  text7: {
    top: 5,
    left: 38,
    width: 26,
    height: 29,
  },
  amPm: {
    top: -26,
    left: -1,
    width: 42,
    height: 90,
  },
  amPmWrapper: {
    left: 97,
    top: 1,
    width: 40,
  },
  text8: {
    top: 102,
    width: 27,
    height: 224,
    left: 10,
  },
  frame: {
    top: -1,
    left: 3,
  },
  timer: {
    top: 649,
    left: 121,
    borderRadius: 15,
    width: 154,
    backgroundColor: Color.colorWhitesmoke_300,
    height: 40,
    position: "absolute",
    overflow: "hidden",
  },
  text9: {
    top: 111,
    height: 50,
    width: 430,
    textAlign: "left",
    color: Color.colorBlack,
    alignItems: "center",
    display: "flex",
  },
  homePage3: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default HomePage2;
