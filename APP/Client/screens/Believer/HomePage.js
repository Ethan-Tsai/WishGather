import React, { useState, useCallback } from "react";
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, Text, TextInput, Pressable, Modal, StyleSheet, FlatList, Dimensions } from "react-native";
import { Image } from "expo-image";
import AddressOverlay from "../../components/AddressOverlay";
import TempleDistance from "../../components/TempleDistance";

import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get('window');

const HomePage = () => {
  const [locationIconVisible, setLocationIconVisible] = useState(false);
  const [text1Visible, setText1Visible] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [currentAddress, setCurrentAddress] = useState("高雄市鼓山區蓮海路70號");
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const openLocationIcon = useCallback(() => {
    setLocationIconVisible(true);
  }, []);

  const closeLocationIcon = useCallback(() => {
    setLocationIconVisible(false);
  }, []);

  const openText1 = useCallback(() => {
    setText1Visible(true);
  }, []);

  const closeText1 = useCallback(() => {
    setText1Visible(false);
  }, []);

  const handleAddressSubmit = useCallback((newAddress) => {
    setCurrentAddress(newAddress);
    setLocationIconVisible(false);
    setText1Visible(false);
  }, []);

  const temples = [
    { id: '1', imageSource: require("../../assets/rectangle-2.png"), temple: "左營仁濟宮", event: "燈花供養祈福", date1: "國曆113年9月25日", date2: "農曆八月卅拾"},
    { id: '2', imageSource: require("../../assets/rectangle-21.png"), temple: "鳳邑雷府大將廟", event: "犒軍儀式", date1: "國曆113年9月25日", date2: "農曆八月卅拾"},
    { id: '3', imageSource: require("../../assets/rectangle-22.png"), temple: "左營金鑾殿", event: "工地動土科儀",  date1: "國曆113年9月25日", date2: "農曆八月卅拾"},
    { id: '4', imageSource: require("../../assets/rectangle-2.png"), temple: "府城三山國王廟", event: "巾山國王聖壽", date1: "國曆113年9月25日", date2: "農曆八月卅拾"},
    // Add more temple data as needed (database)
  ];

  return (
    <SafeAreaProvider>
      <View style={{
        flex: 1,
        backgroundColor: "white",
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right
      }}>

        {/* Location */}
        <View style={styles.locationContainer}>
          
          <View style={{marginRight:10}}>
            <Pressable style={styles.locationIcon} onPress={openLocationIcon}>
              <Image style={styles.icon} contentFit="cover" source={require("../../assets/location.png")} />
            </Pressable>
          </View>

          <View>
            <Pressable style={styles.pressable} onPress={openText1}>
              <Text style={styles.locationText}>當前位置: {currentAddress}  </Text>
            </Pressable>
          </View>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="搜尋(Ex:左營金鑾殿)"
            style={styles.input}
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        {/* Temple */}
        
        <FlatList
          data={temples}
          renderItem={({ item }) => (
            <TempleDistance
              imageSource={item.imageSource}
              temple={item.temple}
              event={item.event}
              distance={item.distance}
              date1={item.date1}
              date2={item.date2}
              onPress={() => navigation.navigate("HomePage1")}
            />
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.activityContainer}
        />

        {/*Modal - address modify*/}
        <Modal animationType="fade" transparent visible={locationIconVisible}>
          <View style={styles.overlay}>
            <Pressable style={styles.overlayBg} onPress={closeLocationIcon} />
            <AddressOverlay onClose={closeLocationIcon} onSubmit={handleAddressSubmit} />
          </View>
        </Modal>

        <Modal animationType="fade" transparent visible={text1Visible}>
          <View style={styles.overlay}>
            <Pressable style={styles.overlayBg} onPress={closeText1} />
            <AddressOverlay onClose={closeText1} onSubmit={handleAddressSubmit} />
          </View>
        </Modal>


        {/* Footer */}  
        {/* <Footer /> */}
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  locationContainer: {
    width:"90%",
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1, //Test
  },
  locationIcon: {
    width: 25,
    height: 25,
  },
  locationText: {
    color: "#898989",
    fontSize: 16,
  },
  searchContainer: {
    width: width*0.90,
    height:50,
    justifyContent:"center",
    marginBottom:10,
    // borderWidth:1 //Test
  },
  input: {
    width:"100%",
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  activityContainer: {
    width:"90%",
    alignItems: "center",
    paddingButtom: 80,
  },
  overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  overlayBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  icon: {
    width: '100%',
    height: '100%',
  },
});

export default HomePage;