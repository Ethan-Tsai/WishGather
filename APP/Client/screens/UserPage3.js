import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, SafeAreaView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';
import Component from "../components/Component1";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const UserPage3 = () => {
  const navigation = useNavigation();

  const onSwipe = (event) => {
    const { translationX } = event.nativeEvent;
    if (translationX < -50) {
      navigation.navigate("UserPage31");
    }
  };

  return (
    <GestureHandlerRootView style={styles.userPage3}>
      <PanGestureHandler onGestureEvent={onSwipe}>
        <SafeAreaView style={styles.userPage3}>
          <View style={styles.header}>
            <Pressable
              style={styles.goBackButton}
              onPress={() => navigation.navigate("UserPage")}
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/go-back-button.png")}
              />
            </Pressable>
            <Text style={styles.text}>歷史訂單</Text>
          </View>
          <View style={styles.tabBar}>
            <Pressable
              style={styles.tabFlexBox}
              onPress={() => navigation.navigate("UserPage3")}
            >
              <Text style={[styles.page11, styles.pageTypo]}>宮廟</Text>
              <View style={styles.tabStateChild} />
            </Pressable>
            <View style={[styles.tabState1, styles.tabFlexBox]}>
              <Text style={[styles.page1, styles.pageTypo]}>商家</Text>
            </View>
          </View>
          <Image
            style={styles.userPage3Child}
            contentFit="cover"
            source={require("../assets/line-4@3x.png")}
          />
          <Pressable
            style={[styles.pressable, styles.pressablePosition]}
            onPress={() => navigation.navigate("HomePage5")}
          >
            <View style={styles.child} />
            <Image
              style={[styles.item, styles.itemLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-211.png")}
            />
            <Text style={[styles.text1, styles.textTypo]}>
              <Text style={styles.text2}>{`左營 仁濟宮 
`}</Text>
              <Text style={styles.text3}>
                <Text style={styles.text4}>{`3 項捐贈品
2024/04/25 · `}</Text>
                <Text style={styles.text5}>待取貨</Text>
              </Text>
            </Text>
            <Image
              style={[styles.savedStateIcon, styles.itemLayout]}
              contentFit="cover"
              source={require("../assets/saved-state.png")}
            />
          </Pressable>
          <Component
            rectangle21={require("../assets/rectangle-212.png")}
            prop={`鳳邑 雷府大將廟 
`}
            prop1={`2 項捐贈品
2024/04/20 · 已完成`}
            savedStateIcon={false}
            onPressablePress={() => navigation.navigate("HomePage5")}
          />
        </SafeAreaView>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  pageTypo: {
    textAlign: "center",
    fontSize: FontSize.size_6xl,
  },
  tabFlexBox: {
    alignItems: "center",
    height: 58,
    width: 82,
    justifyContent: "center",
    flexDirection: "row",
  },
  textTypo: {
    display: "flex",
    fontFamily: FontFamily.interRegular,
    alignItems: "center",
    position: "absolute",
  },
  itemLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  goBackButton: {
    width: 40,
    height: 40,
  },
  page1: {
    color: Color.colorGray_400,
    textAlign: "center",
    fontSize: FontSize.size_6xl,
    fontFamily: FontFamily.interRegular,
  },
  page11: {
    color: Color.colorOrange,
    zIndex: 0,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    fontSize: FontSize.size_6xl,
  },
  tabStateChild: {
    marginLeft: -41,
    top: 45,
    backgroundColor: Color.colorOrange,
    width: 81,
    height: 5,
    zIndex: 1,
    left: "50%",
    position: "absolute",
  },
  tabState1: {
    marginLeft: 50,
  },
  tabBar: {
    marginLeft: -130,
    top: '12%',
    width: '100%',
    paddingHorizontal: 30,
    paddingVertical: 10,
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  userPage3Child: {
    top: '20%',
    left: 0,
    width: '100%',
    height: 1,
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    textAlign: "center",
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
  },
  userPage3: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorGray_100,
    flex: 1,
    overflow: "hidden",
    width: "100%",
  },
  pressablePosition: {
    left: 20,
    position: "absolute",
  },
  child: {
    height: "109.08%",
    top: "0%",
    right: "0%",
    bottom: "-9.08%",
    left: "0%",
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorDarkgray_100,
    borderBottomWidth: 1,
    borderRadius: Border.br_8xs,
    position: "absolute",
    width: "100%",
  },
  item: {
    height: "86.33%",
    width: "28.21%",
    top: "6.92%",
    right: "68.97%",
    bottom: "6.75%",
    left: "2.82%",
    borderRadius: Border.br_8xs,
  },
  text2: {
    fontSize: FontSize.size_8xl,
    color: Color.colorBlack,
  },
  text4: {
    color: Color.colorGray_400,
  },
  text5: {
    color: "#bd0202",
  },
  text3: {
    fontSize: FontSize.size_xl,
  },
  text1: {
    height: "85.92%",
    width: "60.03%",
    top: "13.92%",
    left: "35.13%",
  },
  savedStateIcon: {
    height: "35%",
    width: "8.97%",
    top: "57.75%",
    right: "3.85%",
    bottom: "7.25%",
    left: "87.18%",
    display: "none",
  },
  pressable: {
    top: 200,
    width: 390,
    height: 120,
  },
});

export default UserPage3;
