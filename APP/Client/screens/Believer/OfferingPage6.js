import React, { useState, useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text, FlatList, SafeAreaView, Dimensions, TextInput, Modal, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Color, FontFamily } from "../../GlobalStyles";
import TempleCard from "../../components/TempleCard";

import GoBackButton1 from "../../components/GoBackButton1";
import Footer from "../../components/footer";

const { width } = Dimensions.get('window');

const OfferingPage6 = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const [searchText, setSearchText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const templeCards = [
    {
      id: '1',
      imageSource: require("../assets/rectangle-214.png"),
      title: '大甲 鎮瀾宮媽祖廟',
      distance: "台中市大甲區順天路158號",
    },
    {
      id: '2',
      imageSource: require("../assets/rectangle-215.png"),
      title: '左營 仁濟宮',
      distance: "高雄市左營區左營新路17號",
    },
    {
      id: '3',
      imageSource: require("../assets/rectangle-216.png"),
      title: '鳳邑 雷府大將廟',
      distance: "高雄市鳳山區五甲一路732號",
    },
    {
      id: '4',
      imageSource: require("../assets/rectangle-217.png"),
      title: '左營 金鑾殿',
      distance: "高雄市左營區蓮潭路141號五樓",
    },
    {
      id: '5',
      imageSource: require("../assets/rectangle-218.png"),
      title: '朝元宮 鐵路媽祖',
      distance: "高雄市三民區鐵道二街1號",
    },
    {
      id: '6',
      imageSource: require("../assets/rectangle-219.png"),
      title: '東照山 關帝廟',
      distance: "高雄市大樹區忠義路1號",
    },
    {
      id: '7',
      imageSource: require("../assets/rectangle-2110.png"),
      title: '府城 三山國王廟',
      distance: "台南市北區西門路三段100號",
    },
    {
      id: '8',
      imageSource: require("../assets/rectangle-2111.png"),
      title: '車城 福安宮',
      distance: "屏東縣車城鄉福安路51號",
    }
  ];

  // Memoize filtered temple cards based on search text
  const filteredTempleCards = useMemo(() => {
    if (!searchText) return templeCards;
    return templeCards.filter(card =>
      card.title.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [searchText, templeCards]);

  const handleSave = (isSaved) => {
    setModalMessage(isSaved ? "已收藏此宮廟" : "已取消收藏此宮廟");
    setModalVisible(true);
  };

  const renderItem = ({ item }) => (
    <TempleCard
      imageSource={item.imageSource}
      title={item.title}
      distance={item.distance}
      onSave={handleSave}
      onPress={() => navigation.navigate("OfferingPage5")}
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
           <GoBackButton1 destination="OfferingPage4" />

          {/* Header */}
          {/* Title */}
          <View style={styles.titleContainer}>
            <Text style={styles.pageTitle}>供品類別 : 蠟燭</Text>
          </View>

          {/* Search Bar */}
          <View style={styles.searchContainer}>
            <TextInput
              placeholder="搜尋(Ex:鎮瀾宮)"
              style={styles.input}
              value={searchText}
              onChangeText={setSearchText}
            />
          </View>

          {filteredTempleCards.length === 0 ? (
            <View style={styles.noResultsContainer}>
              <Text style={styles.noResultsText}>查無此公廟 ! 請重新輸入 !</Text>
            </View>
          ) : (
            <FlatList
              data={filteredTempleCards}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              contentContainerStyle={styles.flatListContent}
              numColumns={1}
            />
          )}

          {/* Modal */}
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={styles.modalOverlay}>

              <View style={styles.modalContainer}>
                <Text style={styles.modalText}>{modalMessage}</Text>
                <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
                  <Text style={styles.closeButtonText}>✕</Text>
                </TouchableOpacity>
              </View>
              
            </View>
          </Modal>
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
  flatListContent: {
    paddingVertical: 10,
    alignItems: 'center',
    paddingBottom:60,
  },
  noResultsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noResultsText: {
    fontSize: 18,
    fontFamily: FontFamily.interRegular,
    color: Color.colorDimgray_200,
    textAlign: 'center',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: 250,
    height: 100,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent:'center',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4F4F4F',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  closeButtonText: {
    fontSize: 18,
    color: 'black',
  },
});

export default OfferingPage6;
