import React, { useEffect, useState } from "react";
import axios from 'axios';
import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import GoBackButton1 from "../components/GoBackButton1";
import CollectedTemple from "../components/CollectedTemple";

const { width } = Dimensions.get('window');
const API = require('./DBconfig');

const UserPage21 = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const [temples, setTemples] = useState([]);

  useEffect(() => {
    axios.get(`${API}/temples`)
      .then(response => {
        setTemples(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the temples!!!', error);
      });
  }, []);

  const renderItem = ({ item }) => (
    <CollectedTemple
      templeImage={{ uri: item.IMAGE || 'default_image_path.png' }}
      templeName={item.NAME}
      address={item.ADDRESS}
      onPressablePress={() => navigation.navigate("OfferingPage")}
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
          <MaterialCommunityIcons name="heart" size={24} color="orange" style={styles.icon} />
          <Text style={styles.pageTitle}>我的收藏</Text>
        </View>
        
        <FlatList
          data={temples}
          renderItem={renderItem}
          keyExtractor={(item) => item.tID}  // Ensure that `item.ID` is a unique identifier
          contentContainerStyle={styles.flatListContainer}
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

export default UserPage21;
