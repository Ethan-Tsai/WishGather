import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Pressable, ScrollView, SafeAreaView, Dimensions } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import OfferingItem from "../../components/OfferingItem"; 
import { Color, Border, FontFamily, FontSize, Padding } from "../../GlobalStyles";
import axios from 'axios';

const { width, height } = Dimensions.get('window');

const API=require('../DBconfig')

const OfferingPage5 = () => {
  const navigation = useNavigation();
  const [temples, setTemples] = useState([]);
  const [commodity, setCommodity] = useState([]);

  useEffect(() => {
    axios.get(`${API}/temples`)
      .then(response => {
        setTemples(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the temples!!!', error);
      });
  }, []);

  useEffect(() => {
    axios.get(`${API}/commodity`)
      .then(response => {
        setCommodity(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the commodity!!!', error);
      });
  }, []);

  {/*新增Category組件，用來顯示該廟宇提供甚麼類別的商品，連接資料庫處*/}
  const Category = ({ label }) => (
    <View style={[styles.categoryContainer, styles.shadowBox]}>
      <Text style={styles.categoryText}>{label}</Text>
    </View>);

  const [selectedOfferings, setSelectedOfferings] = useState([]);

  const handleSelectOffering = (offering) => {
    setSelectedOfferings((prevOfferings) => [...prevOfferings, offering]);
  };

  const handleCheckout = () => {
    navigation.navigate("OfferingPage", { selectedOfferings });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.offeringPage5}>

      
      {/* 廟宇照片，連接資料庫處: 廟宇圖片 */}
      {/* <Image
        style={styles.headerImage}
        contentFit="cover"
        source={require("../assets/rectangle-3.png")}
      /> */}

      {/* 顯示廟宇資訊，連接資料庫處:名稱、營業時間*/}
      {/* <View style={styles.infoContainer}>
        <Text style={styles.mainTitle}>大甲鎮瀾宮媽祖廟</Text>
        <Text style={styles.subTitle}>06:00~21:30 營業中</Text>
      </View> */}


    <View style={styles.infoContainer}>
      {temples.map((temple, index) => (
        <View key={temple.id || index} style={styles.templeContainer}>
          <Image
            style={styles.headerImage}
            contentFit="cover"
            source={temple.IMAGE} 
          />
          <Text style={styles.mainTitle}>{temple.NAME}</Text>
          <Text style={styles.subTitle}>{temple.ADDRESS}</Text>
        </View>
      ))}
    </View>


      {/* 類別索引 */}
      <ScrollView horizontal style={styles.categories} showsHorizontalScrollIndicator={true}>
        <Category label="點燈" />
        <Category label="文創商品" />
        {/* 連接資料庫後可以新增類別 */}
        <Category label="茶葉" />
        <Category label="咖啡" />
        <Category label="零食" />
      </ScrollView>

      {/* OfferingPage專屬黑底返回鍵 */}
      <Pressable style={styles.goBackButton} onPress={() => navigation.goBack()}>
        <Image
          style={styles.goBackIcon}
          contentFit="cover"
          source={require("../assets/go-back-button1.png")}
        />
      </Pressable>

      {/* 顯示該廟宇提供之供品類別其所有內容，連接資料庫處 : imageSource、標題、金額、敘述*/}
      <ScrollView 
        style={styles.scrollView} 
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={true}
      >
          {commodity.map((item, index) => (
            <View key={item.mID || index} style={styles.OfferItem_container}>
              <Text style={styles.sectionTitle}>{item.NAME}</Text>
              <OfferingItem
                source={typeof item.IMAGE === 'string' ? { uri: item.IMAGE } : item.IMAGE}
                title={item.NAME}
                price={`$${item.PRICE}`}
                description={item.DESCRIPTION}
                onSelect={() => handleSelectOffering({ title: item.NAME, price: item.PRICE })}
              />
            </View>
          ))}
      </ScrollView>


      {/* <ScrollView 
        style={styles.scrollView} 
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={true} >

        <View style={styles.OfferItem_container}>
          <Text style={styles.sectionTitle}>點燈</Text>
          <OfferingItem
            imageSource={require("../assets/rectangle-4.png")}
            title="祈福燈"
            price="$800"
            description="請於備註填寫祈福對象資訊"
            onSelect={() => handleSelectOffering({ title: "祈福燈", price: 800 })}
          />
          <OfferingItem
            imageSource={require("../assets/rectangle-43.png")}
            title="光明燈"
            price="$1000"
            description="請於備註填寫祈福對象資訊"
            onSelect={() => handleSelectOffering({ title: "光明燈", price: 1000 })}
          />
          <OfferingItem
            imageSource={require("../assets/rectangle-44.png")}
            title="太歲燈"
            price="$1500"
            description="請於備註填寫祈福對象資訊"
            onSelect={() => handleSelectOffering({ title: "太歲燈", price: 1500 })}
          />
          <OfferingItem
            imageSource={require("../assets/rectangle-45.png")}
            title="媽祖燈"
            price="$1500"
            description="請於備註填寫祈福對象資訊"
            onSelect={() => handleSelectOffering({ title: "媽祖燈", price: 1500 })}
          />
          <Text style={styles.sectionTitle}>文創商品</Text>
          <OfferingItem
            imageSource={require("../assets/rectangle-46.png")}
            title="開運吊飾"
            price="$120"
            onSelect={() => handleSelectOffering({ title: "開運吊飾", price: 120 })}
          />
          <OfferingItem
            imageSource={require("../assets/rectangle-47.png")}
            title="符令壓克力鑰匙圈"
            price="$100"
            onSelect={() => handleSelectOffering({ title: "符令壓克力鑰匙圈", price: 100 })}
          />
          <OfferingItem
            imageSource={require("../assets/rectangle-48.png")}
            title="好運公仔五入組"
            price="$1500"
            onSelect={() => handleSelectOffering({ title: "好運公仔五入組", price: 1500 })}
          />
        </View>
        
      </ScrollView> */}
      
      {/* 前往結帳按鈕 */}
      <Pressable
        style={styles.goCheckoutButton}
        onPress={() => navigation.navigate("OfferingPage")}
      >
        <Image
          style={styles.checkoutImage}
          contentFit="cover"
          source={require("../assets/rectangle-93.png")}
        />
        <Text style={styles.checkoutText}>前往結帳</Text>
      </Pressable>
      
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    overflow: 'hidden',
  },
  offeringPage5: {
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  shadowBox: {
    borderWidth: 2,
    borderColor: Color.colorWhitesmoke_300,
    backgroundColor: Color.colorGray_100,
    justifyContent: "center",
    alignItems: "center",
  },
  categories: {
    height:120,
    flexDirection: "row",
    paddingHorizontal: Padding.p_mini,
  },
  categoryContainer: {
    height: 50,
    width: 120,
    marginHorizontal: 5,
  },
  categoryText: {
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    textAlign: "center",
  },
  infoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  goBackButton: {
    width: 40,
    height: 40,
    position: "absolute",
    alignSelf:'left',
    margin:5,
  },
  goBackIcon: {
    height: "100%",
    width: "100%",
  },
  OfferItem_container:{
    flexGrow:1,
  },
  scrollView:{
    paddingTop:5,
    marginTop:0,
  },
  scrollViewContent:{
    paddingHorizontal: Padding.p_mini,
    paddingVertical: 2,
    alignItems: "left",
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
    borderTopLeftRadius: Border.br_21xl,
    borderTopRightRadius: Border.br_21xl,
    height: height * 0.25,
    opacity: 0.9,
    width: width,
    alignSelf: 'center',
  },

  sectionTitle: {
    fontSize: FontSize.size_16xl,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    height: 70,
    textAlign: "left",
    alignItems: "center",
    display: "flex",
  },
  goCheckoutButton: {
    width: width * 0.85,
    bottom: height * 0.03,
    left: '8%',
    height: 70,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  checkoutImage: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: Border.br_xl,
  },
  checkoutText: {
    position: "absolute",
    fontSize: FontSize.size_11xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorWhite,
  },
});

export default OfferingPage5;
