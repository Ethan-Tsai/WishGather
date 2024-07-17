import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import KeyboardOverlay from "../components/KeyboardOverlay";
import { useNavigation } from "@react-navigation/native";
import AddressOverlay from "../components/AddressOverlay";
import Activity from "../components/Activity";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";
import Footer from "../components/footer";

const HomePage = () => {
  const [searchBarContainerVisible, setSearchBarContainerVisible] =
    useState(false);
  const [locationIconVisible, setLocationIconVisible] = useState(false);
  const [text1Visible, setText1Visible] = useState(false);
  const [mageeditIconVisible, setMageeditIconVisible] = useState(false);
  const navigation = useNavigation();

  const openSearchBarContainer = useCallback(() => {
    setSearchBarContainerVisible(true);
  }, []);

  const closeSearchBarContainer = useCallback(() => {
    setSearchBarContainerVisible(false);
  }, []);

  const openLocationIcon = useCallback(() => {
    setLocationIconVisible(true);
  }, []);

  const closeLocationIcon = useCallback(() => {
    setLocationIconVisible(false);
  }, []);

  const openText1 = useCallback(() => {
    setText1Visible(true);
  }, []);

  const closeText1 = useCallback(() => {
    setText1Visible(false);
  }, []);

  const openMageeditIcon = useCallback(() => {
    setMageeditIconVisible(true);
  }, []);

  const closeMageeditIcon = useCallback(() => {
    setMageeditIconVisible(false);
  }, []);

  return (
    <>
      <View style={styles.homePage1}>
        <Pressable
          style={[styles.searchBar, styles.searchLayout]}
          onPress={openSearchBarContainer}
        >
          <View style={[styles.searchBarChild, styles.menuPosition]} />
          <Text style={[styles.text, styles.textFlexBox]}>搜尋</Text>
          <Image
            style={[styles.searchIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/search-icon.png")}
          />
        </Pressable>
        <Footer />
        {/* <View style={[styles.footer, styles.menuLayout]}>
          <View style={[styles.footer1, styles.footer1Position]}>
            <View style={[styles.menu, styles.menuLayout]}>
              <View style={styles.homeIconParent}>
                <Image
                  style={styles.iconLayout}
                  contentFit="cover"
                  source={require("../assets/home-icon.png")}
                />
                <Image
                  style={[styles.templeIcon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/temple-icon.png")}
                />
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
                <Image
                  style={[styles.templeIcon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/user-icon.png")}
                />
              </View>
            </View>
          </View>
          <Image
            style={[styles.footerChild, styles.childLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-3.png")}
          />
        </View> */}
        <Pressable style={styles.locationIcon} onPress={openLocationIcon}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/location-icon.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.pressable, styles.mageeditPosition]}
          onPress={openText1}
        >
          <Text style={[styles.text1, styles.textFlexBox]}>
            <Text style={styles.txt}>
              <Text style={styles.text2}>當前位置: 高雄市鼓山區蓮海路</Text>
              <Text style={styles.text3}>70</Text>
              <Text style={styles.text2}>號</Text>
            </Text>
          </Text>
        </Pressable>
        <Pressable
          style={[styles.mageedit, styles.mageeditPosition]}
          onPress={openMageeditIcon}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/mageedit.png")}
          />
        </Pressable>
        <View style={styles.activity1Parent}>
          <Pressable
            style={styles.activityLayout}
            onPress={() => navigation.navigate("HomePage1")}
          >
            <Image
              style={[styles.locationIcon1, styles.childLayout]}
              contentFit="cover"
              source={require("../assets/location-icon1.png")}
            />
            <Image
              style={[styles.activity1Child, styles.childLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-2.png")}
            />
            <Text style={[styles.text5, styles.textFlexBox]}>
              <Text style={styles.txt}>
                <Text style={styles.text6}>
                  <Text
                    style={styles.text7}
                  >{`左營仁濟宮 燈花供養祈福           `}</Text>
                  <Text style={styles.text8}>{` `}</Text>
                </Text>
                <Text style={styles.text8}>
                  <Text style={styles.text10}>11公里</Text>
                </Text>
              </Text>
            </Text>
          </Pressable>
          <Activity
            rectangle2={require("../assets/rectangle-21.png")}
            prop="鳳邑雷府大將廟 犒軍儀式          "
          />
          <Activity
            rectangle2={require("../assets/rectangle-22.png")}
            prop="左營金鑾殿 工地動土科儀          "
          />
          <View style={[styles.activity5, styles.activityLayout]}>
            <Image
              style={[styles.locationIcon1, styles.childLayout]}
              contentFit="cover"
              source={require("../assets/location-icon1.png")}
            />
            <Image
              style={[styles.activity1Child, styles.childLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-2.png")}
            />
            <Text style={[styles.text5, styles.textFlexBox]}>
              <Text style={styles.txt}>
                <Text
                  style={styles.text12}
                >{`府城三山國王廟 巾山國王聖壽   `}</Text>
                <Text style={styles.text13}>34公里</Text>
              </Text>
            </Text>
          </View>
        </View>
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={searchBarContainerVisible}
      >
        <View style={styles.searchBarContainerOverlay}>
          <Pressable
            style={styles.searchBarContainerBg}
            onPress={closeSearchBarContainer}
          />
          <KeyboardOverlay onClose={closeSearchBarContainer} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={locationIconVisible}>
        <View style={styles.locationIconOverlay}>
          <Pressable
            style={styles.locationIconBg}
            onPress={closeLocationIcon}
          />
          <AddressOverlay onClose={closeLocationIcon} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={text1Visible}>
        <View style={styles.text1Overlay}>
          <Pressable style={styles.text1Bg} onPress={closeText1} />
          <AddressOverlay onClose={closeText1} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={mageeditIconVisible}>
        <View style={styles.mageeditIconOverlay}>
          <Pressable
            style={styles.mageeditIconBg}
            onPress={closeMageeditIcon}
          />
          <AddressOverlay onClose={closeMageeditIcon} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  searchLayout: {
    height: 60,
    width: 380,
    position: "absolute",
  },
  menuPosition: {
    left: 0,
    top: 0,
  },
  textFlexBox: {
    display: "flex",
    textAlign: "left",
    alignItems: "center",
  },
  iconLayout: {
    height: 40,
    width: 40,
  },
  menuLayout: {
    height: 66,
    width: 355,
    position: "absolute",
  },
  footer1Position: {
    left: "0%",
    top: "0%",
  },
  childLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  mageeditPosition: {
    top: 73,
    position: "absolute",
  },
  activityLayout: {
    height: 199,
    width: 380,
  },
  searchBarContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  searchBarContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  searchBarChild: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhitesmoke_300,
    height: 60,
    width: 380,
    position: "absolute",
  },
  text: {
    left: 68,
    fontSize: FontSize.size_6xl,
    color: Color.colorDarkgray_100,
    width: 300,
    alignItems: "center",
    fontFamily: FontFamily.interRegular,
    top: 0,
    display: "flex",
    textAlign: "left",
    height: 60,
    position: "absolute",
  },
  searchIcon: {
    top: 10,
    left: 15,
    position: "absolute",
  },
  searchBar: {
    top: 127,
    left: 25,
  },
  templeIcon: {
    marginLeft: 41,
  },
  icon: {
    height: "100%",
    width: "100%",
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
    left: 0,
    top: 0,
  },
  footer1: {
    width: "107.75%",
    right: "-7.75%",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    bottom: "0%",
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
  },
  footer: {
    top: 831,
    left: 38,
  },
  locationIconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  locationIconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  locationIcon: {
    left: 26,
    top: 65,
    width: 30,
    height: 30,
    position: "absolute",
  },
  text1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  text1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  text2: {
    fontFamily: FontFamily.robotoRegular,
  },
  text3: {
    fontFamily: FontFamily.interRegular,
  },
  txt: {
    width: "100%",
  },
  text1: {
    color: "#898989",
    width: 321,
    fontSize: FontSize.size_xl,
    height: 30,
    alignItems: "center",
  },
  pressable: {
    left: 61,
  },
  mageeditIconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  mageeditIconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  mageedit: {
    left: 382,
    width: 25,
    height: 25,
  },
  locationIcon1: {
    height: "15.08%",
    width: "7.89%",
    top: "84.92%",
    right: "91.58%",
    left: "0.53%",
    bottom: "0%",
  },
  activity1Child: {
    height: "80.4%",
    right: "0%",
    bottom: "19.6%",
    borderRadius: Border.br_3xs,
    opacity: 0.85,
    left: "0%",
    top: "0%",
    width: "100%",
  },
  text7: {
    color: Color.colorBlack,
  },
  text8: {
    color: Color.colorGray_300,
  },
  text6: {
    fontSize: FontSize.size_xl,
  },
  text10: {
    fontSize: FontSize.size_mini,
  },
  text5: {
    height: "16.08%",
    width: "89.47%",
    top: "83.42%",
    left: "8.95%",
    alignItems: "center",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  text12: {
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
  },
  text13: {
    fontSize: FontSize.size_mini,
    color: Color.colorGray_300,
  },
  activity5: {
    marginTop: 30,
  },
  activity1Parent: {
    top: 219,
    left: 4,
    width: 426,
    height: 612,
    alignItems: "center",
    position: "absolute",
  },
  homePage1: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default HomePage;
