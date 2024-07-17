import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const OfferingPage2 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.offeringPage6, styles.offeringPage6Layout]}
      onPress={() => navigation.navigate("UserPage")}
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
          source={require("../assets/rectangle-321.png")}
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
          source={require("../assets/rectangle-361.png")}
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
          source={require("../assets/rectangle-411.png")}
        />
      </View>
      <View style={[styles.backgroungColor, styles.offeringPage6Layout]} />
      <View style={styles.recieptBlock} />
      <View style={styles.parent}>
        <View style={styles.viewLayout}>
          <View style={[styles.child, styles.pmLayout]} />
          <Text style={[styles.pm, styles.textFlexBox]}>
            <Text style={styles.pmTxt}>
              <Text style={styles.text}>
                <Text style={styles.text1}>
                  <Text style={styles.textTypo}>{` `}</Text>
                </Text>
                <Text style={styles.text3}>
                  <Text style={styles.text1}>{`  `}</Text>
                  <Text style={styles.text5}>{`成立時間
`}</Text>
                </Text>
              </Text>
              <Text style={styles.pm1Typo}>
                <Text style={styles.text}>{`   `}</Text>
                <Text style={styles.pm2}>2024/04/23 12:35 PM</Text>
              </Text>
            </Text>
          </Text>
        </View>
        <View style={[styles.view1, styles.viewLayout]}>
          <View style={[styles.child, styles.pmLayout]} />
          <Text style={[styles.pm, styles.textFlexBox]}>
            <Text style={styles.pmTxt}>
              <Text style={styles.text}>
                <Text style={styles.text1}>
                  <Text style={styles.textTypo}>{` `}</Text>
                </Text>
                <Text style={styles.text3}>
                  <Text style={styles.text1}>{`  `}</Text>
                  <Text style={styles.text5}>{`取貨地址
`}</Text>
                </Text>
              </Text>
              <Text style={styles.pm1Typo}>
                <Text style={styles.text}>{`   `}</Text>
                <Text style={styles.pm2}>高雄市鼓山區蓮海路70號</Text>
              </Text>
            </Text>
          </Text>
        </View>
        <View style={[styles.view1, styles.viewLayout]}>
          <View style={[styles.child, styles.pmLayout]} />
          <Text style={[styles.pm, styles.textFlexBox]}>
            <Text style={styles.pmTxt}>
              <Text style={styles.text}>
                <Text style={styles.text1}>
                  <Text style={styles.textTypo}>{` `}</Text>
                </Text>
                <Text style={styles.text3}>
                  <Text style={styles.text1}>{`  `}</Text>
                  <Text style={styles.text5}>{`捐贈項目
`}</Text>
                </Text>
              </Text>
              <Text style={styles.pm1Typo}>
                <Text style={styles.text}>{`   `}</Text>
                <Text style={styles.pm2}>光明燈 $800 * 1 800 NTD</Text>
              </Text>
            </Text>
          </Text>
        </View>
        <View style={[styles.view1, styles.viewLayout]}>
          <View style={[styles.child, styles.pmLayout]} />
          <Text style={[styles.pm, styles.textFlexBox]}>
            <Text style={styles.pmTxt}>
              <Text style={styles.text}>
                <Text style={styles.text1}>
                  <Text style={styles.textTypo}>{` `}</Text>
                </Text>
                <Text style={styles.text3}>
                  <Text style={styles.text1}>{`  `}</Text>
                  <Text style={styles.text5}>{`自留項目
`}</Text>
                </Text>
              </Text>
              <Text style={styles.pm1Typo}>
                <Text style={styles.text}>{`   `}</Text>
                <Text style={styles.pm2}>{`開運吊飾 $120  * 2       240NTD
`}</Text>
              </Text>
            </Text>
          </Text>
        </View>
        <View style={[styles.view1, styles.viewLayout]}>
          <View style={[styles.child, styles.pmLayout]} />
          <Text style={[styles.pm, styles.textFlexBox]}>
            <Text style={styles.pmTxt}>
              <Text style={styles.text}>
                <Text style={styles.text1}>
                  <Text style={styles.textTypo}>{` `}</Text>
                </Text>
                <Text style={styles.text3}>
                  <Text style={styles.text1}>{`  `}</Text>
                  <Text style={styles.text5}>{`金額總計              `}</Text>
                </Text>
              </Text>
              <Text style={[styles.ntd7, styles.pm1Typo]}>{`1040 NTD
`}</Text>
            </Text>
          </Text>
        </View>
      </View>
      <Text style={[styles.text37, styles.textTypo]}>訂單成立</Text>
      <Pressable
        style={[styles.confirmButton, styles.confirmLayout]}
        onPress={() => navigation.navigate("UserPage")}
      >
        <Image
          style={[styles.confirmButtonChild, styles.confirmLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-91.png")}
        />
        <Text style={[styles.text38, styles.confirmLayout]}>回首頁</Text>
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  offeringPage6Layout: {
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
  pmLayout: {
    height: 100,
    width: 320,
    left: 0,
  },
  textFlexBox: {
    alignItems: "center",
    display: "flex",
  },
  viewLayout: {
    height: 105,
    width: 320,
  },
  pm1Typo: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
  },
  textTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  confirmLayout: {
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
    top: 83,
    left: 57,
    borderRadius: Border.br_3xs,
    height: 750,
    width: 320,
    backgroundColor: Color.colorWhitesmoke_100,
    position: "absolute",
  },
  child: {
    backgroundColor: Color.colorWhitesmoke_100,
    height: 100,
    top: 0,
    position: "absolute",
  },
  text1: {
    fontSize: FontSize.size_xl,
  },
  text5: {
    fontSize: FontSize.size_6xl,
  },
  text3: {
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
  },
  text: {
    color: Color.colorBlack,
  },
  pm2: {
    color: Color.colorDimgray_100,
  },
  pmTxt: {
    width: "100%",
  },
  pm: {
    top: 5,
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    position: "absolute",
    height: 100,
    width: 320,
    left: 0,
  },
  view1: {
    marginTop: 5,
  },
  ntd7: {
    color: Color.colorDimgray_100,
  },
  parent: {
    top: 166,
    left: 55,
    alignItems: "flex-end",
    position: "absolute",
  },
  text37: {
    top: 95,
    left: 72,
    fontSize: FontSize.size_16xl,
    width: 211,
    height: 61,
    color: Color.colorBlack,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  confirmButtonChild: {
    borderRadius: Border.br_xl,
    top: 0,
    left: 0,
  },
  text38: {
    fontSize: FontSize.size_11xl,
    color: Color.colorWhite,
    textAlign: "center",
    justifyContent: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    alignItems: "center",
    display: "flex",
    top: 0,
    left: 0,
  },
  confirmButton: {
    top: 746,
    left: 67,
  },
  offeringPage6: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    overflow: "hidden",
    width: "100%",
  },
});

export default OfferingPage2;
