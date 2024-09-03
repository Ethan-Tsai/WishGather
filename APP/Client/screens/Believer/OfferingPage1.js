import * as React from "react";
import { StyleSheet, View, Text, Pressable, FlatList, Dimensions } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import DonationItem from "../../components/DonationItem";
import { Color, FontFamily, FontSize, Border } from "../../GlobalStyles";

const { width, height } = Dimensions.get('window');

const OfferingPage1 = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  {/* Database data */}
  const donationItems = [
    {
      id: '1',
      title: '開運吊飾',
      description: '無',
      imageSource: require("../../assets/rectangle-112.png"),
      tickSource: require("../../assets/tick-box.png"),
    },
    {
      id: '2',
      title: '光明燈',
      description: '被祈福人資訊',
      imageSource: require("../../assets/rectangle-111.png"),
      tickSource: require("../../assets/tick-box.png"),
    },
    // Add more items as needed
  ];

  const renderItem = ({ item }) => (
    <DonationItem
      title={item.title}
      description={item.description}
      imageSource={item.imageSource}
      tickSource={item.tickSource}
    />
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
        {/* Header */}
        <View style={styles.header}>
          <Pressable
            style={styles.goBackButton}
            onPress={() => navigation.navigate("OfferingPage")}
          >
            <Image
              style={styles.goBackImage}
              source={require("../../assets/go-back-button.png")}
            />
          </Pressable>
          <Text style={styles.headerTitle}>
            捐贈選擇
          </Text>
        </View>

      {/* Donation Item */}
        <FlatList
          data={donationItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.donationItemsContainer}
        />
      
      {/* Finish Order */}
        <Pressable
          style={styles.checkoutButton}
          onPress={() => navigation.navigate("OfferingPage2")}
        >
          <Image
            style={styles.checkoutImage}
            contentFit="cover"
            source={require("../../assets/rectangle-92.png")}
          />
          <Text style={styles.checkoutText}>送出訂單</Text>
        </Pressable>

      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#FFF',
  },
  header: {
    width: width * 0.8,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  goBackButton: {
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  goBackImage: {
    width: '100%',
    height: '100%',
    contentFit: 'cover',
  },
  headerTitle: {
    fontSize: 30,
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorDimgray_200,
  },
  donationItemsContainer: {
    width: '100%',
    paddingBottom: 70,
  },
  checkoutButton: {
    width: width * 0.85,
    bottom: height * 0.03,
    left: '8%',
    height: 70,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkoutImage: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: Border.br_xl,
  },
  checkoutText: {
    position: 'absolute',
    fontSize: FontSize.size_11xl,
    fontWeight: '600',
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorWhite,
  },
});

export default OfferingPage1;
