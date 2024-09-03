import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable, ScrollView, Image, Dimensions, TextInput, Alert } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import DateTimePicker from 'react-native-ui-datepicker';
import { Picker } from '@react-native-picker/picker';
import ConfirmItem from '../../components/ConfirmItem';
import ConfirmModal from '../../components/ConfirmModal'; // Import ConfirmModal
import SetButton from '../../components/Utility/SetButton';
import OrderInfo from '../../components/OrderInfo';
import Modal from 'react-native-modal';
import { useNavigation } from '@react-navigation/native';


const { width, height } = Dimensions.get('window');

const OfferingPage = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const chosenItems = [
    { id: '1', imageSource: require('../../assets/rectangle-46.png'), title: '開運吊飾', price: '120' },
    { id: '2', imageSource: require('../../assets/rectangle-43.png'), title: '光明燈', price: '800' },
    // Add more items as needed
  ];

  const [note, setNote] = useState('');
  const [pickupDate, setPickupDate] = useState(new Date());
  const [pickupTime, setPickupTime] = useState({ hour: '06', minute: '00' }); 
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [isTimePickerVisible, setTimePickerVisible] = useState(false); 
  const [paymentMethod, setPaymentMethod] = useState('現場付款');
  const [isPaymentModalVisible, setPaymentModalVisible] = useState(false);
  const [isConfirmModalVisible, setConfirmModalVisible] = useState(false);

  {/* Function - Show Date Picker */}
  const handleDateChange = (date) => {
    setPickupDate(date);
    setDatePickerVisible(false);
  };
  {/* Function - Show Time Picker */}
  const handleTimeChange = (hour, minute) => {
    setPickupTime({ hour, minute });
    setTimePickerVisible(false);
  };
 {/* Function - Payment Method */}
  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
    setPaymentModalVisible(false);
  };

  {/* Function - Show Confirm Modal */}
  const handleOrderSubmit = () => {
    setConfirmModalVisible(true);
  };

  {/* Function - Confirm and back to HomePage */}
  const handleConfirmOrder = () => {
    setConfirmModalVisible(false);
    Alert.alert("訂單已送出");
    navigation.navigate('HomePage');
  };


  const renderOrderInfo = () => (
    <View style={styles.orderInfoContainer}>
      <OrderInfo
        iconName="store" 
        iconType="MaterialIcons" 
        title="活動名稱" 
        value="左營仁濟宮 燈花供養祈福" 
        onPress={() => {}} 
      />
      <OrderInfo
        iconName="calendar" 
        iconType="Entypo" 
        title="領取日期" 
        value={pickupDate.toISOString().split('T')[0]} 
        onPress={() => setDatePickerVisible(true)} // Show date picker on press
      />
      <OrderInfo
        iconName="clock" 
        iconType="Entypo" 
        title="領取時間" 
        value={`${pickupTime.hour}:${pickupTime.minute}`} 
        onPress={() => setTimePickerVisible(true)} // Show time picker on press
      />
      <OrderInfo
        iconName="payment" 
        iconType="MaterialIcons" 
        title="付款方式" 
        value={paymentMethod} 
        onPress={() => setPaymentModalVisible(true)} // Show payment modal on press
      />
      {paymentMethod === '線上轉帳付款' && (
        <View style={styles.paymentAccountContainer}>
          <Text style={styles.paymentAccountText}>宮廟匯款帳號 : 72668349{"\n"}請於送出訂單後12小時之內匯款</Text>
        </View>
      )}
      
      {/* Date Picker Modal */}
      <Modal
        isVisible={isDatePickerVisible}
        backdropColor={"#d0d0d0"}
        onBackdropPress={() => setDatePickerVisible(false)}
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          <DateTimePicker
            mode="single"
            date={pickupDate}
            onChange={params => handleDateChange(params.date)}
            selectedItemColor={"#F6AB3A"}
            headerButtonColor="#F6AB3A"
          />
        </View>
      </Modal>

      {/* Time Picker Modal */}
      <Modal
        isVisible={isTimePickerVisible}
        backdropColor={"#d0d0d0"}
        onBackdropPress={() => setTimePickerVisible(false)}
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>選擇時間</Text>
          <View style={styles.timePickerContainer}>
            <Picker
              selectedValue={pickupTime.hour}
              style={styles.picker}
              onValueChange={(itemValue) => setPickupTime(prevState => ({ ...prevState, hour: itemValue }))}
            >
              {Array.from({ length: 24 }, (_, i) => (
                <Picker.Item key={i} label={`${i < 10 ? `0${i}` : i}`} value={`${i < 10 ? `0${i}` : i}`} />
              ))}
            </Picker>
            <Picker
              selectedValue={pickupTime.minute}
              style={styles.picker}
              onValueChange={(itemValue) => setPickupTime(prevState => ({ ...prevState, minute: itemValue }))}
            >
              {['00', '10', '20', '30', '40', '50'].map(minute => (
                <Picker.Item key={minute} label={minute} value={minute} />
              ))}
            </Picker>
          </View>
          <Pressable style={styles.modalButton} onPress={() => handleTimeChange(pickupTime.hour, pickupTime.minute)}>
            <Text style={styles.modalButtonText}>完成</Text>
          </Pressable>
        </View>
      </Modal>

      {/* Payment Method Modal */}
      <Modal
        isVisible={isPaymentModalVisible}
        backdropColor={"#d0d0d0"}
        onBackdropPress={() => setPaymentModalVisible(false)}
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>付款方式</Text>
          <Pressable style={styles.modalOption} onPress={() => handlePaymentMethodChange('現場付款')}>
            <Text style={styles.modalOptionText}>現場付款</Text>
          </Pressable>
          <Pressable style={styles.modalOption} onPress={() => handlePaymentMethodChange('線上轉帳付款')}>
            <Text style={styles.modalOptionText}>線上轉帳付款</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );

  const orderDetails = {
    eventName: "左營仁濟宮 燈花供養祈福",
    pickupDate: pickupDate.toISOString().split('T')[0],
    pickupTime: `${pickupTime.hour}:${pickupTime.minute}`,
    paymentMethod: paymentMethod,
  };

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

        {/* Go back Button */}
        <Pressable onPress={() => navigation.navigate('HomePage1')} style={styles.backButton}>
          <Image
            style={styles.goBackIcon}
            contentFit="cover"
            source={require("../../assets/left-chevron.png")}
          />
        </Pressable>

        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {/* Title */}
          <View style={styles.titleContainer}>
            <Text style={styles.pageTitle}>訂單明細</Text>
          </View>
          {/* Item */}
          <View style={styles.itemsContainer}>
            {chosenItems.map((item) => (
              <ConfirmItem key={item.id} imageSource={item.imageSource} title={item.title} price={item.price} />
            ))}
          </View>
          
          {/* Total */}
          <View style={{width:width*0.95, paddingHorizontal:10, paddingTop: 15,justifyContent:"center", alignItems:"flex-end"}}>
            <Text style={{fontSize:18, fontWeight:"bold", color:"#4F4F4F"}}>總計 : $920</Text>
          </View>
          
          {/* Note */}
          <View style={styles.titleContainer}>
            <Text style={styles.pageTitle}>新增備注</Text>
          </View>
          <View style={styles.noteContainer}>
            <TextInput
              style={styles.noteInput}
              placeholder='請在此撰寫備註...'
              multiline
              value={note}
              onChangeText={setNote}
            />
          </View>
          
          {/* OrderInfo */}
          {renderOrderInfo()}

        </ScrollView>
        
        {/* Confirm Button */}
        <View style={styles.buttonContainer}>
          <SetButton 
            btnText={'送出訂單'} 
            btnStatus={'primary'} 
            onPress={handleOrderSubmit}
          />
        </View>

        {/* Confirmation Modal */}
        <ConfirmModal
            isVisible={isConfirmModalVisible}
            onCancel={() => setConfirmModalVisible(false)}
            onConfirm={handleConfirmOrder}
            orderDetails={orderDetails}
            animationType="fade" transparent
        />

      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  goBackIcon: {
    width: 28,
    height: 28,
    marginLeft: 10,
  },
  titleContainer: {
    width: width*0.95,
    justifyContent: "center",
    alignItems: 'flex-start',
    marginTop: 10,       
    paddingHorizontal: 10,
  },
  pageTitle: {
    fontSize: 26,
    color: "#4F4F4F",
    fontWeight: "bold",
    textAlign: 'left',
    marginVertical: 2,
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'center',
  },
  itemsContainer: {
    width: width*0.95,
    justifyContent: "center",
    alignItems: 'center',
    marginTop: 5,
  },
  noteContainer: {
    width: width*0.95,
    marginVertical: 2,
    padding: 10,
    borderRadius: 10,
    borderBottomWidth:1,
    borderColor: '#E0E0E0',
  },
  noteInput: {
    height: 100,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 5,
    textAlignVertical: 'top',
  },
  orderInfoContainer: {
    width: width*0.95,
    justifyContent: "center",
    alignItems: 'center',
    marginTop: 20,
  },
  paymentAccountContainer: {
    marginTop: 10,
    paddingHorizontal: 15,
  },
  paymentAccountText: {
    fontSize: 16,
    color: "#4F4F4F",
    textAlign: "center",
  },
  buttonContainer: {
    width: width,
    justifyContent: "center",
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
  },
  modal: {
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    width: width * 0.8,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  timePickerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  picker: {
    height: 150,
    width: 100,
  },
  modalButton: {
    marginTop: 20,
    backgroundColor: "#FFA042",
    padding: 10,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  modalButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  modalOption: {
    marginVertical: 10,
    padding: 10,
    width: "80%",
    alignItems: "center",
    backgroundColor:"#FFA042",
    borderRadius:20,
  },
  modalOptionText: {
    fontSize: 16,
    fontWeight:"bold",
    color: "white",
  },
  confirmationDetails: {
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  confirmationText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  confirmationReminder: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  confirmationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  confirmButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    backgroundColor: '#007AFF',
  },
  confirmButtonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default OfferingPage;
