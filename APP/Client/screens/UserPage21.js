import React, { useEffect, useState } from "react";
import { Image } from "expo-image";
import axios from 'axios';
import { StyleSheet, Pressable, Text, View ,ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TabBar from "../components/TabBar";

import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

//記得include api
const API = require('./DBconfig')

const UserPage21 = () => {
  const navigation = useNavigation();

  //宣告值接資料庫
  const [temples, setTemples] = useState([]);

  //把資料庫中的值call出來
  useEffect(() => {  
    axios.get(`${API}/temples`)
      .then(response => {
        setTemples(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the temples!!!', error);
      });
  }, []);

  return (
    <View style={styles.userPage21}>
      <Pressable
        style={styles.goBackButton}
        onPress={() => navigation.navigate("UserPage")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/go-back-button.png")}
        />
      </Pressable>
      <TabBar onTabStatePress={() => navigation.navigate("UserPage22")} />
      <Image
        style={styles.userPage21Child}
        contentFit="cover"
        source={require("../assets/line-4.png")}
      />
      <Text style={styles.text}>收藏清單</Text>
      
 
<ScrollView>
  {temples.map((temple, index) => (
    <Component
      key={index}
      rectangle21={{ uri: temple.IMAGE || 'default_image_path.png' }}
      prop={temple.NAME}
      prop1={temple.ADDRESS}
      savedStateIcon
      propTop={20 + index * 150} // 调整间距
      propLeft={20}
      onPressablePress={() => navigation.navigate("OfferingPage5")}
    />
  ))}
</ScrollView>


    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: "100%",
    width: "100%",
  },
  goBackButton: {
    left: '5%',
    top: '5%',
    width: 40,
    height: 40,
    position: "absolute",
  },
  userPage21Child: {
    top: 191,
    left: 10,
    width: 400,
    height: 1,
    position: "absolute",
  },
  text: {
    top: '7%',
    left: '38%',
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 120,
    height: 77,
    position: "absolute",
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
  userPage21: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default UserPage21;