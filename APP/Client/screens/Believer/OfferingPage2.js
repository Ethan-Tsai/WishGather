import React, { useEffect, useState } from "react";
import { Image } from "expo-image";
import axios from 'axios';
import { StyleSheet, Pressable, Text, View ,ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { FontSize, FontFamily, Color, Border } from "../../GlobalStyles";
import { Dimensions } from 'react-native';


const { width, height } = Dimensions.get("window");

const API=require('../DBconfig')

const OfferingPage2 = () => {
  const navigation = useNavigation();
  const [transaction, setTransaction] = useState([]);

  useEffect(() => {
    
    axios.get(`${API}/transaction`)
      .then(response => {
        setTransaction(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the temples!!!', error);
      });
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* Whole White Block */}
        <View style={styles.recieptBlock}>
          <Text style={styles.orderStatus}>訂單成立</Text>

          <View style={styles.infoContainer}>
            {transaction.map((transaction, index) => (
            <View key={index} style={styles.infoContainer}>
              <Text style={styles.infoText}>
                <Text style={styles.infoLabel}>宮廟名稱: </Text>
                <Text style={styles.infoContent}>{transaction.tNO}{"\n"}</Text>
                <Text style={styles.infoLabel}>交易時間: </Text>
                <Text style={styles.infoContent}>{transaction.TRANSACTION_TIME}{"\n"}</Text>
                <Text style={styles.infoLabel}>交易方式: </Text>
                <Text style={styles.infoContent}>{transaction.TRANSACTION_METHOD}{"\n"}</Text>
                <Text style={styles.infoLabel}>銀行代碼: </Text>
                <Text style={styles.infoContent}>${transaction.BANK_CODE}{"\n"}</Text>
                <Text style={styles.infoLabel}>銀行名稱: </Text>
                <Text style={styles.infoContent}>{transaction.BANK_NAME}{"\n"}</Text>
                <Text style={styles.infoLabel}>領取時間: </Text>
                <Text style={styles.infoContent}>{transaction.EXPIRATION_DATE}</Text>
              </Text>
            </View>
          ))}
          </View>

          {/* <View style={styles.infoContainer}>
            <Text style={styles.infoText}>
              <Text style={styles.infoLabel}>宮廟名稱: </Text>
              <Text style={styles.infoContent}>行天宮{"\n"}</Text>
              <Text style={styles.infoLabel}>宮廟地址: </Text>
              <Text style={styles.infoContent}>10491台北市中山區民權東路二段109號{"\n"}</Text>
              <Text style={styles.infoLabel}>總數量: </Text>
              <Text style={styles.infoContent}>3{"\n"}</Text>
              <Text style={styles.infoLabel}>總金額: </Text>
              <Text style={styles.infoContent}>$1040{"\n"}</Text>
              <Text style={styles.infoLabel}>捐贈供品清單: </Text>
              <Text style={styles.infoContent}>草仔粿 * 2{"\n"}發糕 * 100{"\n"}</Text>
              <Text style={styles.infoLabel}>領取時間: </Text>
              <Text style={styles.infoContent}>2024/08/05 P.M.2:50</Text>
            </Text>
          </View> */}

          {/* Home Button */}
          <Pressable style={styles.confirmButton} onPress={() => navigation.navigate("HomePage")}>
            <Image
              style={styles.confirmButtonBackground}
              contentFit="cover"
              source={require("../assets/rectangle-91.png")}
            />
            <Text style={styles.confirmButtonText}>回首頁</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFD1A4",
    justifyContent: "center",
    alignItems: "center",
  },
  recieptBlock: {
    width: width * 0.9,
    paddingVertical: 30,
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: Border.br_3xs,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  orderStatus: {
    fontSize: 32,
    fontWeight: "600",
    color: Color.colorDimgray_200,
    marginBottom: 20,
  },
  infoContainer: {
    alignItems: "flex-start",
  },
  infoText: {
    fontSize: FontSize.size_md,
    color: Color.colorBlack,
    lineHeight: 28,
  },
  infoLabel: {
    fontWeight: "bold",
  },
  infoContent: {
    marginBottom: 10,
  },
  confirmButton: {
    width: 300,
    height: 70,
    borderRadius: Border.br_xl,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  confirmButtonBackground: {
    width: "100%",
    height: "100%",
    borderRadius: Border.br_xl,
  },
  confirmButtonText: {
    position: "absolute",
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.colorWhite,
    textAlign: "center",
  },
});

export default OfferingPage2;
