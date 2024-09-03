import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { FontFamily, FontSize, Padding, Color } from "../GlobalStyles";

const TabBar = ({ onTabStatePress }) => {
  return (
    <View style={styles.tabBar}>
      <View style={styles.tabFlexBox}>
        <Text style={[styles.page1, styles.pageTypo]}>宮廟</Text>
        <View style={styles.tabStateChild} />
      </View>
      <Pressable
        style={[styles.tabState1, styles.tabFlexBox]}
        onPress={onTabStatePress}
      >
        <Text style={[styles.page11, styles.pageTypo]}>商家</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  pageTypo: {
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_6xl,
  },
  tabFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    height: 58,
    width: 82,
    flexDirection: "row",
  },
  page1: {
    color: Color.colorOrange,
    zIndex: 0,
  },
  tabStateChild: {
    marginLeft: -41,
    top: 45,
    left: "50%",
    backgroundColor: Color.colorOrange,
    width: 81,
    height: 5,
    zIndex: 1,
    position: "absolute",
  },
  page11: {
    color: Color.colorGray_400,
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
});

export default TabBar;
