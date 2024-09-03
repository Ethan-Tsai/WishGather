import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable, FlatList, Dimensions } from 'react-native';
import { Image } from 'expo-image';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

import OfferingItem from "../../components/OfferingItem"; 
import GoBackButton_B from "../../components/GoBackButton_B";
import SetButton from '../../components/Utility/SetButton';
import { Color, Border, FontFamily, FontSize, Padding } from "../../GlobalStyles";

const { width, height } = Dimensions.get('window');

const HomePage1 = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  // Offering categories
  const categories = ["點燈", "文創商品"];

  // State for selected offerings and category
  const [selectedOfferings, setSelectedOfferings] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  // Handler for selecting an offering
  const handleSelectOffering = (offering) => {
    setSelectedOfferings((prevOfferings) => [...prevOfferings, offering]);
  };

  // Handler for checkout
  const handleCheckout = () => {
    navigation.navigate("OfferingPage", { selectedOfferings });
  };

  // Offerings data
  const offerings_1 = [
    { id: '1', imageSource: require("../../assets/rectangle-4.png"), title: "祈福燈", price: "800", description: "請於備註填寫祈福對象資訊" },
    { id: '2', imageSource: require("../../assets/rectangle-43.png"), title: "光明燈", price: "1000", description: "請於備註填寫祈福對象資訊" },
    { id: '3', imageSource: require("../../assets/rectangle-44.png"), title: "太歲燈", price: "1500", description: "請於備註填寫祈福對象資訊" },
    { id: '4', imageSource: require("../../assets/rectangle-45.png"), title: "媽祖燈", price: "1500", description: "請於備註填寫祈福對象資訊" },
  ];

  const offerings_2 = [
    { id: '1', imageSource: require("../../assets/rectangle-46.png"), title: "開運吊飾", price: "120", description:"無"},
    { id: '2', imageSource: require("../../assets/rectangle-47.png"), title: "符令壓克力鑰匙圈", price: "100", description:"無" },
    { id: '3', imageSource: require("../../assets/rectangle-48.png"), title: "好運公仔五入組", price: "1500", description:"無" },  
  ];

  const renderOfferingItem = ({ item }) => {
    return (
      <OfferingItem
        imageSource={item.imageSource}
        title={item.title}
        price={item.price}
        description={item.description}
        onSelect={() => handleSelectOffering(item)}
      />
    );
  };

  const renderCategoryItem = ({ item }) => (
    <Pressable onPress={() => setSelectedCategory(item)}>
      <View style={[styles.categoryContainer, selectedCategory === item && styles.selectedCategory]}>
        <Text style={[styles.categoryText, selectedCategory === item && styles.selectedCategoryText]}>
          {item}
        </Text>
      </View>
    </Pressable>
  );

  // Determine which offerings to show based on the selected category
  const currentOfferings = selectedCategory === "點燈" ? offerings_1 : offerings_2;

  return (
    <SafeAreaProvider>
      <View style={[styles.homePage1, { paddingTop: insets.top-15, paddingBottom: insets.bottom, paddingLeft: insets.left, paddingRight: insets.right }]}>
        
        {/* Temple Image */}
        <View>
          <Image style={styles.headerImage} contentFit="cover" source={require("../../assets/rectangle-3.png")} />
          <GoBackButton_B onPress={() => navigation.navigate("HomePage")} />
        </View>

        {/* Temple Title */}
        <View style={styles.infoContainer}>
          <Text style={styles.mainTitle}>大甲鎮瀾宮媽祖廟</Text>
          <Text style={styles.subTitle}>營業時間 : 06:00~21:30</Text>
        </View>


        <View style={{ width:width*0.9 ,flexDirection: "row", alignItems:"start", justifyContent: "start", paddingVertical: 10, borderBottomWidth: 1, borderColor:"#E0E0E0"}}>
          {categories.map((category) => (
            <Pressable key={category} onPress={() => setSelectedCategory(category)} style={{borderRadius:15}}>
              <Text style={[styles.category, selectedCategory === category && styles.selectedCategory]}>
                {category}
              </Text>
            </Pressable>
          ))}
        </View>

        {selectedCategory === "點燈" ? (
          <FlatList
            data={offerings_1}
            renderItem={renderOfferingItem}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <FlatList
            data={offerings_2}
            renderItem={renderOfferingItem}
            keyExtractor={(item) => item.id}
          />
        )}
        {/* Checkout Button */}
        <View style={styles.buttonContainer}>
          <SetButton   onPress={() => navigation.navigate('OfferingPage')} btnText={'前往結帳'} btnStatus={'primary'} />
        </View>

      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  homePage1: {
    flex: 1,
    justifyContent: 'start',
    alignItems: 'center',
    backgroundColor: "white",
  },
  category: {
    fontSize: 18,
    color: "#6C6C6C",
    fontWeight: "500",
    paddingHorizontal: 15,
    paddingVertical: 6,
    marginLeft: width * 0.05,
    
  },
  selectedCategory: {
    color: "white",
    backgroundColor: "#FFA042",
    borderRadius: 15,
  },
  infoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 8,
  },
  mainTitle: {
    fontSize: FontSize.size_9xl,
    fontWeight: "600",
    color: 'black',
  },
  subTitle: {
    fontSize: FontSize.size_lg,
    color: Color.colorGray_200,
    marginTop: 5,
  },
  headerImage: {
    height: height * 0.25,
    opacity: 0.9,
    width: width,
    alignSelf: 'center',
  },
  buttonContainer: {
    marginVertical: 5,
    alignItems: 'center',
  },
});

export default HomePage1;