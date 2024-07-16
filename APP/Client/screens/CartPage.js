import * as React from "react";
import { StyleSheet, View, Text, Pressable, ScrollView, } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import CartItem from "../components/CartItem";
import { FontFamily, Border, FontSize, Color, Padding } from "../GlobalStyles";

const CartPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.cartPage}>

    <View style={[styles.fixedHeader, { zIndex: 1 }]}>
      {/*歷史訂單按鈕*/}
      <Pressable
        style={[styles.pastOrder, styles.pastLayout]}
        onPress={() => navigation.navigate("UserPage3")}
      >
        <View style={[styles.pastOrderChild, styles.pastLayout]} />
        <Text style={[styles.text, styles.textFlexBox]}>歷史訂單</Text>
        <Image
          style={styles.materialSymbolsordersOutlinIcon}
          contentFit="cover"
          source={require("../assets/materialsymbolsordersoutline1.png")}
        />
      </Pressable>


      <Text style={[styles.text1, styles.textTypo]}>購物車</Text>
    </View>
    <View style={styles.scrollViewWrapper}>
    <ScrollView contentContainerStyle={styles.scrollView} flex={1}>
      <View style={[styles.cartPageInner, styles.cartPageInnerPosition, { flexDirection: 'column' }]}>
        <CartItem
              onPress={() => navigation.navigate("OfferingPage")}
              imageSource={require("../assets/ellipse-6.png")}
              orderTitle={`大甲 鎮瀾宮媽祖廟\n`}
              orderDetails="3 項商品 · NT$1040"
            />
            <CartItem
              onPress={() => navigation.navigate("OfferingPage")}
              imageSource={require("../assets/ellipse-61.png")}
              orderTitle={`鳳邑 雷府大將廟\n`}
              orderDetails="2 項捐贈品"
            />
            <CartItem
              onPress={() => navigation.navigate("OfferingPage")}
              imageSource={require("../assets/ellipse-62.png")}
              orderTitle={`左營 金鑾殿\n`}
              orderDetails="1 項捐贈品"
            />
            <CartItem
              onPress={() => navigation.navigate("OfferingPage")}
              imageSource={require("../assets/ellipse-6.png")}
              orderTitle={`大甲 鎮瀾宮媽祖廟\n`}
              orderDetails="1 項商品 · NT$800"
            />
            <CartItem
              onPress={() => navigation.navigate("OfferingPage")}
              imageSource={require("../assets/ellipse-63.png")}
              orderTitle={`艋舺 龍山寺\n`}
              orderDetails="2 項商品 · NT$1500"
            />
            <CartItem
              onPress={() => navigation.navigate("OfferingPage")}
              imageSource={require("../assets/ellipse-64.png")}
              orderTitle={`台北 行天宮\n`}
              orderDetails="1 項商品 · NT$300"
            />
      </View>
    </ScrollView>
    </View>
    
      <View style={[styles.footer, styles.menuLayout]}>
        <View style={[styles.menu, styles.menuLayout]}>
          <View style={[styles.homeIconParent, styles.iconPosition]}>
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
                source={require("../assets/temple-icon.png")}
              />
            </Pressable>
            <Image
              style={[styles.templeIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/shopping-bag-icon2.png")}
            />
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
      <Image
        style={[styles.cartPageChild, styles.innerLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  scrollViewWrapper: {
    flex: 1,
    marginTop: 140, 
    marginBottom: 66, 
  },
  scrollView: {
    paddingBottom: 140, 
  },

  fixedHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor:'#ffffff',
    zIndex: 1, 
  },
  pastLayout: {
    height: 35,
    width: 132,
    position: "absolute",
  },
  textFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  textTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  cartPageInnerPosition: {
    width: 430,
    left: 0,
    display:'flex',
    flexDirection:'column',
  },
  itemPosition: {
    left: "33.76%",
    position: "absolute",
  },
  innerLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition: {
    top: "50%",
    position: "absolute",
  },
  menuLayout: {
    height: 66,
    position: "absolute",
  },
  iconLayout: {
    height: 40,
    width: 40,
  },
  pastOrderChild: {
    backgroundColor: "rgba(238, 238, 238, 0.93)",
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  text: {
    left: 44,
    fontSize: FontSize.size_lg,
    justifyContent: "center",
    width: 82,
    height: 34,
    alignItems: "center",
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    top: 0,
    position: "absolute",
  },
  materialSymbolsordersOutlinIcon: {
    top: 3,
    left: 12,
    width: 30,
    height: 30,
    position: "absolute",
  },
  pastOrder: {
    top: 72,
    left: 282,
  },
  text1: {
    top: 63,
    left: 25,
    fontSize: FontSize.size_16xl,
    color: "rgba(0, 0, 0, 0.7)",
    width: 212,
    height: 51,
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    zIndex: 10, 
  },
  child: {
    width: "95.12%",
    top: "0%",
    right: "4.88%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.colorWhitesmoke_200,
    height: "100%",
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  item: {
    height: "24.12%",
    width: "57.5%",
    top: "61.76%",
    right: "8.74%",
    bottom: "14.12%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGoldenrod,
  },
  inner: {
    height: "58.82%",
    width: "25%",
    top: "8.24%",
    right: "69%",
    bottom: "32.94%",
    left: "6%",
  },
  text2: {
    height: "18.24%",
    width: "43.76%",
    top: "67.06%",
    left: "41.74%",
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
    textAlign: "center",
  },
  text3: {
    fontSize: FontSize.size_8xl,
    color: Color.colorBlack,
  },
  nt10401: {
    color: Color.colorGray_400,
    fontSize: FontSize.size_xl,
  },
  nt1040: {
    height: "41.76%",
    width: "62.5%",
    top: "12.94%",
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  view: {
    width: 420,
    height: 170,
    zIndex: 1,
    borderRadius: Border.br_xl,
  },
  trashIcon: {
    marginTop: -27,
    right: 34,
    width: 59,
    height: 55,
    zIndex: 0,
  },
  orderContainer: {
    top: 10,
    backgroundColor: Color.colorCrimson,
    zIndex: 0,
    width: 400,
    borderRadius: Border.br_xl,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  deleteOrder: {
    height: 190,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_3xs,
    width: 400,
    alignItems: "center",
  },
  deleteOrderParent: {
    height: 694,
    alignItems: "center",
    top: 0,
  },
  cartPageInner: {
    top: 125,
    
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  templeIcon: {
    marginLeft: 41,
  },
  homeIconParent: {
    marginTop: -33,
    marginLeft: -177.5,
    left: "50%",
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorWhitesmoke_100,
    flexDirection: "row",
    paddingHorizontal: Padding.p_17xl,
    paddingVertical: Padding.p_smi,
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
  cartPageChild: {
    height: "1.07%",
    width: "2.33%",
    top: "94.85%",
    right: "39.3%",
    bottom: "4.08%",
    left: "58.37%",
  },
  cartPage: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default CartPage;
