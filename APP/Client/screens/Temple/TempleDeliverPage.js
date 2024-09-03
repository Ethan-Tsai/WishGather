import React, {useState, useEffect, useRef, useCallback } from 'react';
import {Button, Text, SafeAreaView, View, StyleSheet, FlatList, Dimensions, ScrollView} from 'react-native';
import { SafeAreaProvider,  useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { DataTable } from 'react-native-paper';
import StepIndicator from 'react-native-step-indicator-v2';

import SectionHeader from '../../components/Utility/SectionHeader';
import PageTitle from '../../components/PageTitle';
import NavigateBack from '../../components/Utility/NavigateBack';

const labels = ["準備中", "配送中", "已抵達", "已領貨"];
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#fe7013',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#fe7013',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#fe7013',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 16,
  labelAlign: 'center',
  currentStepLabelColor: '#fe7013',
  borderRadiusSize: 10
};

// TODO: data should come from db 
const dummyData = {
  data: [
    { title: "準備中", body: "Your Order placed." },
    { title: "配送中", body: "Anything" },
    { title: "已抵達", body: "1324894071" },
    { title: "已領貨", body: "Anything" },
  ]
};

const deliverList = [
  { glD: 101, NAME: '蘋果', TYPE: '水果', AMOUNT: 100 },
  { glD: 102, NAME: '香蕉', TYPE: '水果', AMOUNT: 150 },
  { glD: 103, NAME: '米', TYPE: '穀物', AMOUNT: 500 },
  { glD: 104, NAME: '芒果', TYPE: '水果', AMOUNT: 75 },
  { glD: 105, NAME: '瓶裝水', TYPE: '飲料', AMOUNT: 200 },
  { glD: 106, NAME: '洋芋片', TYPE: '零食', AMOUNT: 300 },
  { glD: 107, NAME: '鳳梨', TYPE: '水果', AMOUNT: 50 },
  { glD: 108, NAME: '餅乾盒', TYPE: '零食', AMOUNT: 120 },
  { glD: 109, NAME: '罐裝汽水', TYPE: '飲料', AMOUNT: 180 },
  { glD: 110, NAME: '龍眼', TYPE: '水果', AMOUNT: 90 }
];

function TempleDeliverPage(){
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();
    
    const [currentPage, setCurrentPage] = useState(2);
    const [statusDetail, setStatusDetail] = useState('');
    const viewabilityConfig = useRef({ itemVisiblePercentThreshold: 40 }).current;  

    const renderPage = ({ item, index }) => {
      if (index == currentPage) {
        return (
          <View style={styles.infoCard}>
            <Text style={styles.title}>訂單{item.title}</Text>
            <Text style={styles.body}>訂單編號：{item.body}</Text>
          </View>
        )
      }
      return null;
    };

    // Update currentPage based on visible items
    const onViewableItemsChanged = useCallback(({ viewableItems }) => {
      if (viewableItems.length > 0) {
        setCurrentPage(viewableItems[viewableItems.length - 1].index);
      }
    }, []);

    return (
        <SafeAreaProvider>
          <View style={{
            flex: 1,
            justifyContent: 'start',
            alignItems: 'start',
           
            // Paddings to handle safe area
            paddingTop: insets.top,
            paddingBottom: insets.bottom + 10,
            paddingLeft: insets.left,
            paddingRight: insets.right
          }}>  
            <NavigateBack />
            <PageTitle titleText="媒合運送"/>
            <View style={styles.container}>
              <View style={styles.stepIndicator}>
                {/* Steps indicator tells the delivering status */}
                {/* TODO: Change the steps rendering effect */}
                <StepIndicator
                  customStyles={customStyles}
                  stepCount={dummyData.data.length}
                  direction="horizontal"
                  currentPosition={currentPage}
                  labels={dummyData.data.map(item => item.title)}
                />
                {/* Render deliver info card based on delivering status */}
                {/* TODO: Change the info card styling and necessary info */}
                <FlatList
                  data={dummyData.data}
                  renderItem={renderPage}
                  onViewableItemsChanged={onViewableItemsChanged}
                  viewabilityConfig={viewabilityConfig}
                  keyExtractor={(item, index) => index.toString()} // Ensure each item has a unique key
                />
              </View>   
            </View>

            {/* Table shows deliver goods  */}
            <ScrollView style={styles.deliverList}>
                <DataTable>
                  {/* <DataTable.Header style={styles.tableHeader}>
                    <DataTable.Title textStyle={styles.tableTitle}>供品名稱</DataTable.Title>
                    <DataTable.Title textStyle={styles.tableTitle}>種類</DataTable.Title>
                    <DataTable.Title numeric textStyle={styles.tableTitle}>數量</DataTable.Title>
                   
                  </DataTable.Header> */}
                  {deliverList.map((item, index) => (
                    <DataTable.Row key={index}>
                       <DataTable.Cell>{item.NAME}</DataTable.Cell>
                       <DataTable.Cell>{item.TYPE}</DataTable.Cell>
                       <DataTable.Cell numeric>{item.AMOUNT}</DataTable.Cell>
                     
                    </DataTable.Row>
                  ))}
                </DataTable>
            </ScrollView>  
            
          </View>
        </SafeAreaProvider>
    );
}


let screenHeight = Dimensions.get("window").height;
let screenWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      // padding: 16,
    },
    stepIndicator: {
      width: "100%",
      gap: 10,
      // Your styles for step indicator view
    },
    card: {
      flex: 2, // Ensure it takes up enough space
      marginLeft: 16,
      padding: 16,
      borderRadius: 8,
      backgroundColor: '#fff',
      // Additional styling as needed
    },
    infoCard: {
      padding: 24,
     
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    body: {
      fontSize: 16,
      lineHeight: 30
    },
    deliverList: {
      width: '100%',
      padding: 10,
    },
    tableHeader: {
      backgroundColor: "#e38c14",
    },
    tableTitle: {
      color: "#fff",
      fontSize: 16,
      textAlign: 'center'
    }

});

export default TempleDeliverPage;