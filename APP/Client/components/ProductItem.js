import React from 'react';
import { StyleSheet, View, Text, Image, Pressable } from 'react-native';
import { FontFamily, Border, FontSize, Color } from "../GlobalStyles";

const ProductItem = ({ onPress, imageSource, title, backgroundColor, fontFamily }) => {
  return (
    <View style = {styles.box}>
        <Pressable
        style={styles.pressable}
        onPress={onPress}
        >
        <Image
            style={[styles.child, styles.childPosition]}
            contentFit="cover"
            source={imageSource}
        />
        <View style={[styles.item, styles.childPosition, { backgroundColor: backgroundColor || Color.colorWhite }]} />
        <Text style={[styles.text1, styles.textFlexBox, { fontFamily: fontFamily || FontFamily.robotoRegular }]}>
            {title}
        </Text>
        </Pressable>
    </View>
    
  );
};

const styles = StyleSheet.create({
  childPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  child: {
    borderRadius: Border.br_3xs,
    
    top: "0%",
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  box:{
    margin:5

  },
  item: {
    height: "26.69%",
    top: "73.31%",
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.colorLightgray,
    borderWidth: 2,
    bottom: "0%",
    right: "0%",
  },
  text1: {
    height: "20%",
    width: "50%",
    top: "75%",
    left: "26%",
    fontSize: FontSize.size_lg,
    color: Color.colorBlack,
    textAlign: "center",
    justifyContent: "center",
  },
  pressable: {
    width: 160,
    height: 160,
  },
  textFlexBox: {
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
});

export default ProductItem;
