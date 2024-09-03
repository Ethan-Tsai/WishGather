import React from "react";
import { StyleSheet, Text, View, Dimensions, FlatList } from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import GoBackButton1 from "../components/GoBackButton1";
import HistoryOrderCard from "../components/HistoryOrderCard";

const { width } = Dimensions.get('window');

const UserPage3 = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const orderData = [
    {
      id: '1',
      templeName: '左營 仁濟宮 \n',
      orderInfo: '3',
      orderDate: '2024/04/25',
      orderStatus: '待取貨',
      imageSource: require("../assets/rectangle-211.png"),
    },
    {
      id: '2',
      templeName: '鳳邑 雷府大將廟 \n',
      orderInfo: '2',
      orderDate: '2024/04/20',
      orderStatus: '已完成',
      imageSource: require("../assets/rectangle-211.png"),
    },
    // Add more orders here
  ];

  const renderOrderCard = ({ item }) => (
    <HistoryOrderCard
      templeName={item.templeName}
      orderInfo={item.orderInfo}
      orderDate={item.orderDate}
      orderStatus={item.orderStatus}
      imageSource={item.imageSource}
      onPressablePress={() => navigation.navigate("OfferingPage3")}
    />
  );

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
        
        <View style={styles.titleContainer}>
          <MaterialCommunityIcons name="history" size={28} color="orange" style={styles.icon}/>
          <Text style={styles.pageTitle}>歷史訂單</Text>
        </View>

        <FlatList
          data={orderData}
          renderItem={renderOrderCard}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.flatListContainer}
        />
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    width: width * 0.95,
    flexDirection:'row',
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
    marginBottom: 5,
  },
  flatListContainer: {
    paddingBottom: 20,
  },
});

export default UserPage3;
