import React, { useState, useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, TextInput, Dimensions, FlatList, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import GoBackButton1 from "../../components/GoBackButton1";
import ProductItem from "../../components/ProductItem";

const { width } = Dimensions.get('window');

const OfferingPage4 = () => {
  const [searchText, setSearchText] = useState("");
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const productsByCategory = [
    {
      title: "經典祭拜供品",
      data: [
        { id: '1', imageSource: require("../../assets/rectangle-19.png"), title: "蠟燭"},
        { id: '2', imageSource: require("../../assets/rectangle-191.png"), title: "金紙"},
        { id: '3', imageSource: require("../../assets/rectangle-193.png"), title: "發糕"},

      ],
    },
    {
      title: "有效期商品",
      data: [
        { id: '4', imageSource: require("../../assets/rectangle-192.png"), title: "蔬果"},
        { id: '5', imageSource: require("../../assets/rectangle-194.png"), title: "祭拜禮盒(零食)"},
        { id: '6', imageSource: require("../../assets/rectangle-195.png"), title: "飲料" },
      ],
    },
    {
      title: "文創商品",
      data: [
        { id: '7', imageSource: require("../../assets/rectangle-196.png"), title: "祈福御守"},
      ],
    },
  ];

  const filteredProducts = useMemo(() => {
    if (!searchText) return productsByCategory;

    return productsByCategory.map(category => {
      const filteredData = category.data.filter(item =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
      );

      if (filteredData.length > 0) {
        return { ...category, data: filteredData };
      }

      return null;
    }).filter(Boolean);
  }, [searchText, productsByCategory]);

  const renderCategory = ({ item }) => (
    <View style={styles.categoryContainer}>
      <View style={styles.categoryTitleContainer}>
        <MaterialCommunityIcons name="basket" size={22} color="orange" style={styles.categoryIcon} />
        <Text style={styles.categoryTitle}>{item.title}</Text>
      </View>
      <FlatList
        data={item.data}
        keyExtractor={(product) => product.id}
        renderItem={({ item }) => (
          <View style={styles.productItemWrapper}>
            <ProductItem
              destination="OfferingPage6"
              imageSource={item.imageSource}
              title={item.title}
            />
          </View>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );

  const noResults = searchText && filteredProducts.length === 0;

  return (
    <SafeAreaProvider>
      <View style={{
        flex: 1,
        backgroundColor: "white",
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right
      }}>
        <GoBackButton1 destination="UserPage" />

        {/* Title */}
        <View style={styles.titleContainer}>
          <MaterialCommunityIcons name="food" size={28} color="orange" style={styles.icon} />
          <Text style={styles.pageTitle}>供品類別</Text>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="搜尋(Ex:祭拜禮盒)"
            style={styles.input}
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        {noResults ? (
          <View style={styles.noResultsContainer}>
            <Text style={styles.noResultsText}>查無此品項 ! 請重新輸入 !</Text>
          </View>
        ) : (
          <FlatList
            data={filteredProducts}
            keyExtractor={(item, index) => item.title + index}
            renderItem={renderCategory}
            contentContainerStyle={styles.flatListContent}
          />
        )}
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    width: width * 0.95,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
  pageTitle: {
    fontSize: 28,
    color: "#4F4F4F",
    fontWeight: "bold",
    textAlign: 'left',
    marginBottom: 2,
  },
  searchContainer: {
    width: width,
    paddingHorizontal: 5,
    paddingBottom: 8,
    alignSelf: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  input: {
    width: width * 0.9,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  categoryContainer: {
    width: width * 0.95,
    justifyContent: 'flex-start',
    alignItems: 'start',
    alignSelf: 'center',
  },
  categoryTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  categoryIcon: {
    marginRight: 8,
  },
  categoryTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4F4F4F',
  },
  flatListContent: {
    paddingBottom: 60,
  },
  productItemWrapper: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
  },
  noResultsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noResultsText: {
    fontSize: 18,
    color: 'gray',
    textAlign: 'center',
  },
});

export default OfferingPage4;
