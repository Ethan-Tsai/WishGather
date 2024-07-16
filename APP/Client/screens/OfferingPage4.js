import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text, ScrollView, KeyboardAvoidingView, Platform, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, Padding, FontSize, FontFamily } from "../GlobalStyles";
import ProductItem from "../components/ProductItem";

const OfferingPage4 = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation();

  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
  }, []);

  const products = [
    { id: 1, title: '線上點燈', imageSource: require("../assets/rectangle-19.png") },
    { id: 2, title: '金紙香品', imageSource: require("../assets/rectangle-191.png") },
    { id: 3, title: '生鮮蔬果', imageSource: require("../assets/rectangle-192.png") },
    { id: 4, title: '精緻糕點', imageSource: require("../assets/rectangle-193.png") },
    { id: 5, title: '餅乾糖果', imageSource: require("../assets/rectangle-194.png") },
    { id: 6, title: '解渴飲品', imageSource: require("../assets/rectangle-195.png") },
    { id: 7, title: '文創周邊', imageSource: require("../assets/rectangle-196.png") },
  ];

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={100}>
      <View style={styles.offeringPage}>
        
        {/* Search Bar */}
        <View style={styles.searchBar}>
          
          <TextInput
            style={styles.input}
            placeholder="搜索"
            value={searchQuery}
            onChangeText={handleSearch}
          />
        </View>
        
        {/* Product Items */}
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={[styles.parent, styles.parentFlexBox]}>
            {filteredProducts.map(product => (
              <ProductItem
                key={product.id}
                onPress={() => navigation.navigate("OfferingPage6")}
                imageSource={product.imageSource}
                title={product.title}
              />
            ))}
          </View>
        </ScrollView>
        {/* Footer */}
        <View style={[styles.footer, styles.menuLayout]}>
          <View style={[styles.menu, styles.menuLayout]}>
            <View style={[styles.homeIconParent, styles.parentFlexBox]}>
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
        <Image
          style={[styles.offeringPage2Child, styles.itemLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-3.png")}
        />
      </View>
      
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  menuLayout: {
    height: 66,
    position: "absolute",
  },
  parentFlexBox: {
    flexDirection: "row",
    flexWrap: "wrap",
    position: "absolute",
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  iconLayout: {
    height: 40,
    width: 40,
  },
  textFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  itemLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
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
    paddingHorizontal: Padding.p_17xl,
    paddingVertical: Padding.p_smi,
    // overflow: "hidden",
  },
  menu: {
    top: 0,
    left: 0,
    width: 355,
  },
  offeringPage2Child: {
    height: "1.07%",
    width: "2.33%",
    top: "94.85%",
    right: "58.14%",
    bottom: "4.08%",
    left: "39.53%",
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
  searchIcon: {
    height: 30,
    width: 30,
  },
  searchBar: {
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    top: '15%',
    left: '5%',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '85%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
  },
  parent: {
    left: 40,
    width: 'auto',
    flexWrap: "wrap",
    overflow: 'hidden',
  },
  offeringPage: {
    borderRadius: Border.br_21xl,
    flex: 1,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default OfferingPage4;
