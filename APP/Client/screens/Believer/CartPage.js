import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, FlatList, Dimensions } from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import axios from 'axios';
import CartItem from "../../components/CartItem"




const { width } = Dimensions.get('window');
const API = require('../DBconfig');

const CartPage = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const [cartItems, setCartItems] = useState([]);
  const userId = 1; // 假設目前已登入的使用者ID為1

  useEffect(() => {
    axios.get(`${API}/test`, { params: { userId } })
      .then(response => {
        setCartItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching cart data:', error);
      });
  }, []);

  const renderItem = ({ item }) => (
    <CartItem
      onPress={() => navigation.navigate("OfferingPage")}
      imageSource={{ uri: item.IMAGE }}
      orderTitle={`${item.templeName}\n`}
      orderDetails={`${item.itemCount} 項商品 · NT$${item.totalAmount}`}
    />
  );

  return (
    <SafeAreaProvider>
      <View style={{
        flex: 1,
        backgroundColor: "white",
        paddingTop: insets.top,
        paddingBottom: insets.bottom-40,
        paddingLeft: insets.left,
        paddingRight: insets.right
      }}>

        <View style={styles.titleContainer}>
          <Ionicons name="cart-outline" size={30} color="orange" style={styles.icon} />
          <Text style={styles.pageTitle}>購物車</Text>
        </View>

        <FlatList
          data={cartItems}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.listContentContainer}
          style={styles.flatList}
        />

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
    paddingBottom: 10,
    marginTop: 15,
    marginBottom: 5,
    borderBottomWidth: 0.5,
    borderBottomColor:'#ccc'
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
  listContentContainer: {
    paddingBottom: 15,
  },
  flatList: {
    flex: 1,
  },
});

export default CartPage;
