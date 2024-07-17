import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LogoutOverlay from "../components/LogoutOverlay";
import { Border, Color, Padding, FontSize, FontFamily } from "../GlobalStyles";
import Footer from "../components/footer";

const UserPage = () => {
  const [textVisible, setTextVisible] = useState(false);
  const navigation = useNavigation();

  const openText = useCallback(() => {
    setTextVisible(true);
  }, []);

  const closeText = useCallback(() => {
    setTextVisible(false);
  }, []);

  return (
    <>
      <View style={styles.userPage}>
        <Footer />
        <Image
          style={styles.userPageChild}
          contentFit="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <Image
          style={[styles.userPageItem, styles.userLayout]}
          contentFit="cover"
          source={require("../assets/line-2.png")}
        />
        <Image
          style={[styles.userPageInner, styles.userLayout]}
          contentFit="cover"
          source={require("../assets/line-2.png")}
        />
        <Pressable
          style={[styles.pressable, styles.pressablePosition]}
          onPress={openText}
        >
          <Text style={[styles.text, styles.textFlexBox]}>登出帳戶</Text>
        </Pressable>
        <Pressable
          style={[styles.pressable1, styles.pressablePosition]}
          onPress={() => navigation.navigate("UserPage2")}
        >
          <Text style={[styles.text, styles.textFlexBox]}>服務條款</Text>
        </Pressable>
        <Pressable
          style={[styles.pressable2, styles.pressablePosition]}
          onPress={() => navigation.navigate("UserPage3")}
        >
          <Text style={[styles.text, styles.textFlexBox]}>歷史訂單</Text>
        </Pressable>
        <Pressable
          style={[styles.pressable3, styles.pressablePosition]}
          onPress={() => navigation.navigate("UserPage21")}
        >
          <Text style={[styles.text, styles.textFlexBox]}>收藏清單</Text>
        </Pressable>
        <Pressable
          style={[styles.pressable4, styles.pressablePosition]}
          onPress={() => navigation.navigate("UserPage4")}
        >
          <Text style={[styles.text, styles.textFlexBox]}>個資維護</Text>
        </Pressable>
        <View style={styles.userIconParent}>
          <Image
            style={styles.userIcon1}
            contentFit="cover"
            source={require("../assets/user-icon2.png")}
          />
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/phheartbold.png")}
          />
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/materialsymbolsordersoutline.png")}
          />
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/mingcuteinformationline.png")}
          />
          <Image
            style={[styles.icroundLogOutIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icroundlogout.png")}
          />
        </View>
        <Text style={[styles.text5, styles.textFlexBox]}>
          <Text style={styles.txt}>
            <Text style={styles.text6}>{`小猴吱
`}</Text>
            <Text style={styles.text7}>普通會員</Text>
          </Text>
        </Text>
        <Pressable
          style={[styles.mingcuterightFill, styles.mingcuterightPosition]}
          onPress={() => navigation.navigate("UserPage4")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/mingcuterightfill.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.mingcuterightFill1, styles.mingcuterightPosition]}
          onPress={() => navigation.navigate("UserPage21")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/mingcuterightfill.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.mingcuterightFill2, styles.mingcuterightPosition]}
          onPress={() => navigation.navigate("UserPage3")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/mingcuterightfill.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.mingcuterightFill3, styles.mingcuterightPosition]}
          onPress={() => navigation.navigate("UserPage2")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/mingcuterightfill.png")}
          />
        </Pressable>
        {/* <Image
          style={styles.ellipseIcon}
          contentFit="cover"
          source={require("../assets/ellipse-31.png")}
        /> */}
      </View>

      <Modal animationType="fade" transparent visible={textVisible}>
        <View style={styles.textOverlay}>
          <Pressable style={styles.textBg} onPress={closeText} />
          <LogoutOverlay onClose={closeText} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  menuLayout: {
    height: 66,
    width: 355,
    position: "absolute",
  },
  iconLayout1: {
    width: 40,
    height: 40,
  },
  userLayout: {
    height: 1,
    width: 400,
    left: 15,
    position: "absolute",
  },
  pressablePosition: {
    left: 110,
    position: "absolute",
  },
  textFlexBox: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
  },
  iconLayout: {
    marginTop: 45,
    height: 45,
    width: 45,
  },
  mingcuterightPosition: {
    left: 344,
    height: 40,
    width: 40,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  homeIcon: {
    height: 40,
  },
  templeIcon: {
    marginLeft: 41,
    height: 40,
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
    top: 0,
    left: 0,
  },
  footer1: {
    width: "107.75%",
    top: "0%",
    right: "-7.75%",
    bottom: "0%",
    left: "0%",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
    height: "100%",
    position: "absolute",
  },
  footerChild: {
    height: "15.15%",
    width: "2.82%",
    top: "80.3%",
    right: "82.82%",
    bottom: "4.55%",
    left: "14.37%",
    maxWidth: "100%",
    maxHeight: "100%",
    display: "none",
    position: "absolute",
    overflow: "hidden",
  },
  footer: {
    top: 831,
    left: 38,
  },
  userPageChild: {
    top: 82,
    left: 33,
    width: 100,
    height: 100,
    position: "absolute",
  },
  userPageItem: {
    top: 738,
  },
  userPageInner: {
    top: 225,
  },
  textOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  textBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  text: {
    fontSize: FontSize.size_6xl,
    width: 300,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    height: 40,
  },
  pressable: {
    top: 638,
  },
  pressable1: {
    top: 546,
  },
  pressable2: {
    top: 456,
  },
  pressable3: {
    top: 368,
  },
  pressable4: {
    top: 271,
  },
  userIcon1: {
    width: 50,
    height: 50,
  },
  icroundLogOutIcon: {
    overflow: "hidden",
  },
  userIconParent: {
    top: 268,
    left: 46,
    position: "absolute",
  },
  text6: {
    fontSize: FontSize.size_11xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorBlack,
  },
  text7: {
    fontSize: FontSize.size_xl,
    color: Color.colorGray_200,
    fontFamily: FontFamily.interRegular,
  },
  txt: {
    width: "100%",
  },
  text5: {
    top: 98,
    left: 151,
    width: 250,
    height: 60,
    position: "absolute",
  },
  mingcuterightFill: {
    top: 273,
  },
  mingcuterightFill1: {
    top: 367,
  },
  mingcuterightFill2: {
    top: 454,
  },
  mingcuterightFill3: {
    top: 546,
  },
  ellipseIcon: {
    top: 884,
    left: 332,
    width: 10,
    height: 10,
    position: "absolute",
  },
  userPage: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default UserPage;
