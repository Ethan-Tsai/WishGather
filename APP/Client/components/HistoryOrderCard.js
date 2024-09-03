import React from "react";
import { Image, Pressable, Text, View, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window');

const HistoryOrderCard = ({ templeName, orderInfo, orderDate, orderStatus, imageSource, onPressablePress }) => {
  // Function to determine the color based on the order status
  const getStatusColor = (status) => {
    switch (status) {
      case "已完成":
        return "green";
      case "待取貨":
        return "#bd0202"; // Red
      case "處理中":
        return "#4F4F4F"; // Gray
      case "運送中":
        return "blue";
      default:
        return "#000"; // Default to black if no match
    }
  };

  return (
    <Pressable onPress={onPressablePress}>
      <View style={styles.cardContainer}>
        <View>
          <Image
            style={styles.templeImage}
            contentFit="cover"
            source={imageSource}
          />
        </View>
        <View>
          <Text style={styles.textContainer}>
            <Text style={styles.templeName}>{templeName}</Text>
            <Text style={styles.orderInfo}>{orderInfo}  項捐贈品 {orderDate} · </Text>
            <Text style={[styles.orderStatus, { color: getStatusColor(orderStatus) }]}>
              {orderStatus}
            </Text>
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: width * 0.95,
    height: 120,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'center',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
  },
  templeImage: {
    height: 100,
    width: 100,
    borderRadius: 15,
  },
  textContainer: {
    lineHeight: 40,
  },
  templeName: {
    fontSize: 24,
    fontWeight: "bold",
    color: '#4F4F4F',
  },
  orderInfo: {
    color: 'gray',
  },
  orderStatus: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HistoryOrderCard;
