import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";
// import { ScrollView } from "react-native-gesture-handler";
import Footer from "../components/footer";

const OfferingPage6 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.offeringPage2}>
      <Pressable
        style={[styles.goBackButton, styles.iconLayout]}
        onPress={() => navigation.navigate("OfferingPage4")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/go-back-button.png")}
        />
      </Pressable>
      <View style={styles.scrollViewWrapper}>
      {/* <ScrollView contentContainerStyle={styles.scrollView} flex={1}> */}
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.offeringPage2Inner}>
        
        <View style={[styles.parent, styles.menuPosition]}>
          <Pressable
            style={styles.view4Layout}
            onPress={() => navigation.navigate("OfferingPage5")}
          >
            <View style={styles.child} />
            <Image
              style={[styles.item, styles.itemLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-214.png")}
            />
            <Text style={[styles.text, styles.textFlexBox]}>
              <Text style={styles.text1}>{`大甲 鎮瀾宮媽祖廟
`}</Text>
              <Text style={styles.text2}>222公里</Text>
            </Text>
            <Image
              style={[styles.savedStateIcon, styles.savedIconPosition]}
              contentFit="cover"
              source={require("../assets/saved-state1.png")}
            />
          </Pressable>
          <View style={styles.view4Layout}>
            <View style={styles.child} />
            <Image
              style={[styles.rectangleIcon, styles.itemLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-215.png")}
            />
            <Text style={[styles.text3, styles.textFlexBox]}>
              <Text style={styles.text1}>{`左營 仁濟宮
`}</Text>
              <Text style={styles.text2}>11公里</Text>
            </Text>
            <Image
              style={[styles.savedStateIcon1, styles.savedIconPosition]}
              contentFit="cover"
              source={require("../assets/saved-state2.png")}
            />
          </View>
          <View style={styles.view4Layout}>
            <View style={styles.child} />
            <Image
              style={[styles.rectangleIcon, styles.itemLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-216.png")}
            />
            <Text style={[styles.text3, styles.textFlexBox]}>
              <Text style={styles.text7}>{`鳳邑 雷府大將廟
`}</Text>
              <Text style={styles.text2}>12公里</Text>
            </Text>
            <Image
              style={[styles.savedStateIcon1, styles.savedIconPosition]}
              contentFit="cover"
              source={require("../assets/saved-state2.png")}
            />
          </View>
          <View style={styles.view4Layout}>
            <View style={styles.child} />
            <Image
              style={[styles.rectangleIcon, styles.itemLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-217.png")}
            />
            <Text style={[styles.text3, styles.textFlexBox]}>
              <Text style={styles.text7}>{`左營 金鑾殿
`}</Text>
              <Text style={styles.text2}>12公里</Text>
            </Text>
            <Image
              style={[styles.savedStateIcon1, styles.savedIconPosition]}
              contentFit="cover"
              source={require("../assets/saved-state2.png")}
            />
          </View>
          <View style={styles.view4Layout}>
            <View style={styles.child} />
            <Image
              style={[styles.rectangleIcon, styles.itemLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-218.png")}
            />
            <Text style={[styles.text3, styles.textFlexBox]}>
              <Text style={styles.text7}>{`朝元宮 鐵路媽祖
`}</Text>
              <Text style={styles.text2}>8.2公里</Text>
            </Text>
            <Image
              style={[styles.savedStateIcon1, styles.savedIconPosition]}
              contentFit="cover"
              source={require("../assets/saved-state2.png")}
            />
          </View>
          <View style={[styles.view4, styles.view4Layout]}>
            <View style={styles.child} />
            <Image
              style={[styles.rectangleIcon, styles.itemLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-219.png")}
            />
            <Text style={[styles.text3, styles.textFlexBox]}>
              <Text style={styles.text7}>{`東照山 關帝廟
`}</Text>
              <Text style={styles.text2}>24公里</Text>
            </Text>
            <Image
              style={[styles.savedStateIcon1, styles.savedIconPosition]}
              contentFit="cover"
              source={require("../assets/saved-state2.png")}
            />
          </View>
          <View style={styles.view4Layout}>
            <View style={styles.child} />
            <Image
              style={[styles.rectangleIcon, styles.itemLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-2110.png")}
            />
            <Text style={[styles.text3, styles.textFlexBox]}>
              <Text style={styles.text19}>{`府城 三山國王廟
`}</Text>
              <Text style={styles.text2}>34公里</Text>
            </Text>
            <Image
              style={[styles.savedStateIcon1, styles.savedIconPosition]}
              contentFit="cover"
              source={require("../assets/saved-state2.png")}
            />
          </View>
          <View style={styles.view4Layout}>
            <View style={styles.child} />
            <Image
              style={[styles.item, styles.itemLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-2111.png")}
            />
            <Text style={[styles.text, styles.textFlexBox]}>
              <Text style={styles.text1}>{`車城 福安宮
`}</Text>
              <Text style={styles.text2}>82公里</Text>
            </Text>
            <Image
              style={[styles.savedStateIcon, styles.savedIconPosition]}
              contentFit="cover"
              source={require("../assets/saved-state1.png")}
            />
          </View>
        </View>
        </View>
        </ScrollView>
        </View>
      <Footer />
      {/*<View style={[styles.footer, styles.menuLayout]}>
        <View style={[styles.menu, styles.menuLayout]}>
          <View style={styles.homeIconParent}>
            <Pressable
              style={styles.iconLayout}
              onPress={() => navigation.navigate("HomePage")}
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/home-icon1.png")}
              />
            </Pressable>
            <Pressable
              style={[styles.templeIcon, styles.iconLayout]}
              onPress={() => navigation.navigate("OfferingPage4")}
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/temple-icon1.png")}
              />
            </Pressable>
            <Pressable
              style={[styles.templeIcon, styles.iconLayout]}
              onPress={() => navigation.navigate("CartPage")}
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/shopping-bag-icon.png")}
            />
            </Pressable>
            <Pressable
              style={[styles.templeIcon, styles.iconLayout]}
              onPress={() => navigation.navigate("UserPage")}
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/user-icon.png")}
              />
            </Pressable>
          </View>
        </View>
      </View>
      {/* <Image
        style={[styles.offeringPage2Child, styles.itemLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      /> */}
      <Text style={[styles.text24, styles.textFlexBox]}>線上點燈</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollViewWrapper: {
    flex: 1,
    marginTop: 50, 
    marginBottom: 66, 
  },
  scrollView: {
    paddingBottom: 140, 
  },

  iconLayout: {
    height: 40,
    width: 40,
  },
  menuPosition: {
    left: 0,
    top: 0,
  },
  itemLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  savedIconPosition: {
    bottom: "7.27%",
    top: "57.73%",
    height: "35%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  view4Layout: {
    height: 110,
    width: 420,
  },
  menuLayout: {
    height: 66,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  goBackButton: {
    left: 23,
    top: 80,
    position: "absolute",
  },
  child: {
    height: "109.09%",
    top: "0%",
    right: "0%",
    bottom: "-9.09%",
    left: "0%",
    borderStyle: "solid",
    borderColor: Color.colorDarkgray_100,
    borderBottomWidth: 1,
    borderRadius: Border.br_8xs,
    position: "absolute",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
  item: {
    width: "28.21%",
    right: "68.98%",
    left: "2.81%",
    bottom: "6.73%",
    top: "6.91%",
    height: "86.36%",
    maxHeight: "100%",
    maxWidth: "100%",
    borderRadius: Border.br_8xs,
  },
  text1: {
    fontSize: FontSize.size_8xl,
    color: Color.colorBlack,
  },
  text2: {
    fontSize: FontSize.size_xl,
    color: Color.colorGray_400,
  },
  text: {
    width: "60.02%",
    fontFamily: FontFamily.interRegular,
    left: "35.12%",
    top: "13.91%",
    height: "85.91%",
    textAlign: "left",
  },
  savedStateIcon: {
    width: "8.98%",
    right: "3.83%",
    left: "87.19%",
  },
  rectangleIcon: {
    width: "28.19%",
    right: "68.97%",
    left: "2.83%",
    bottom: "6.73%",
    top: "6.91%",
    height: "86.36%",
    maxHeight: "100%",
    maxWidth: "100%",
    borderRadius: Border.br_8xs,
  },
  text3: {
    width: "60%",
    fontFamily: FontFamily.interRegular,
    left: "35.12%",
    top: "13.91%",
    height: "85.91%",
    textAlign: "left",
  },
  savedStateIcon1: {
    width: "8.97%",
    right: "3.85%",
    left: "87.18%",
  },
  text7: {
    fontSize: FontSize.size_6xl,
    color: Color.colorBlack,
  },
  view4: {
    backgroundColor: Color.colorWhite,
  },
  text19: {
    fontSize: FontSize.size_9xl,
    color: Color.colorBlack,
  },
  parent: {
    height: 670,
    alignItems: "center",
    position: "absolute",
  },
  offeringPage2Inner: {
    top: 151,
    left: 5,
    height: 780,
    width: 420,
    position: "absolute",
  },
  templeIcon: {
    marginLeft: 41,
  },
  homeIconParent: {
    marginTop: -33,
    marginLeft: -177.5,
    top: "50%",
    left: "50%",
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorWhitesmoke_100,
    flexDirection: "row",
    paddingHorizontal: Padding.p_17xl,
    paddingVertical: Padding.p_smi,
    position: "absolute",
    overflow: "hidden",
  },
  menu: {
    width: 355,
    left: 0,
    top: 0,
  },
  footer: {
    top: 831,
    left: 38,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    width: 383,
  },
  offeringPage2Child: {
    height: "1.07%",
    width: "2.33%",
    top: "94.85%",
    right: "58.14%",
    bottom: "4.08%",
    left: "39.53%",
  },
  text24: {
    top: 68,
    left: 70,
    fontSize: FontSize.size_11xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    display: "flex",
    width: 195,
    height: 58,
    color: Color.colorBlack,
    alignItems: "center",
  },
  offeringPage2: {
    borderRadius: Border.br_21xl,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default OfferingPage6;
