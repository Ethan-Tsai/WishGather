import React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View, Dimensions, SafeAreaView, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const { width, height } = Dimensions.get('window');

const SubmissionResult = ({ route }) => {
  const navigation = useNavigation();
  const { items } = route.params;

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemCount}>{item.count}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable
          style={styles.goBackButton}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/go-back-button.png")}
          />
        </Pressable>
        <Text style={styles.title}>提交成功</Text>
      </View>
      
      <View style={styles.content}>
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          ListHeaderComponent={<View style={styles.listHeader} />}
          ListFooterComponent={<View style={styles.listFooter} />}
        />
      </View>

      <View style={styles.footer}>
        <Pressable
          style={styles.returnHomeButton}
          onPress={() => navigation.navigate("UserPage")}
        >
          <Text style={styles.returnHomeText}>返回首頁</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  header: {
    height: height * 0.15,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Color.colorGray_100,
  },
  goBackButton: {
    position: 'absolute',
    left: width * 0.05,
    top: height * 0.05,
    width: width * 0.1,
    height: width * 0.1,
  },
  icon: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    marginBottom: 10,
  },
  content: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: width * 0.05,
    borderBottomWidth: 1,
    borderBottomColor: Color.colorGray_100,
  },
  itemName: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
  },
  itemCount: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.interBold,
    color: Color.colorBlack,
  },
  listHeader: {
    height: height * 0.02,
  },
  listFooter: {
    height: height * 0.02,
  },
  footer: {
    height: height * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  returnHomeButton: {
    width: width * 0.8,
    height: height * 0.3,
    
    borderRadius: Border.br_md,
    justifyContent: 'center',
    alignItems: 'center',
    bottom:100
  },
  returnHomeText: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interBold,
    
  },
});

export default SubmissionResult;