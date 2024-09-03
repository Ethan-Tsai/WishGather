// ConfirmModal.js
import React from 'react';
import { StyleSheet, View, Text, Pressable, Dimensions } from 'react-native';
import Modal from 'react-native-modal';

const { width } = Dimensions.get('window');

const ConfirmModal = ({ isVisible, onCancel, onConfirm, orderDetails }) => {
  return (
    <Modal
      isVisible={isVisible}
      backdropColor={"#d0d0d0"}
      onBackdropPress={onCancel}
      style={styles.modal}
    >
      <View style={styles.modalContent}>

        <Text style={styles.modalTitle}>確認訂單</Text>

        <View style={styles.confirmationDetails}>
          <Text style={styles.confirmationText}>活動名稱: {orderDetails.eventName}</Text>
          <Text style={styles.confirmationText}>領取日期: {orderDetails.pickupDate}</Text>
          <Text style={styles.confirmationText}>領取時間: {orderDetails.pickupTime}</Text>
          <Text style={styles.confirmationText}>付款方式: {orderDetails.paymentMethod}</Text>
        </View>

        <Text style={styles.confirmationReminder}>
            // 若送出訂單，請勿取消訂單{'\n'}
            // 請於預定領取時間至服務台領取{'\n'}
            // 現場付款請備妥剛好現金
        </Text>

        <View style={styles.confirmationButtons}>
          <Pressable style={[styles.confirmButton, {borderRightWidth: 0.3, borderColor: "#ccc"}]} onPress={onCancel}>
            <Text style={styles.confirmButtonText}>取消</Text>
          </Pressable>
          <Pressable style={styles.confirmButton} onPress={onConfirm}>
            <Text style={styles.confirmButtonText}>確認</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 15,
    paddingTop: 20,
    alignItems: "center",
    width: width * 0.8,

    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    // Elevation for Android
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  confirmationDetails: {
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  confirmationText: {
    fontSize: 16,
    fontWeight: "400",
    color: '#4f4f4f',
    marginBottom: 5,
  },
  confirmationReminder: {
    fontSize: 14,
    color: 'red',
    textAlign: 'start',
    marginBottom: 20,
  },
  confirmationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    borderTopWidth: 0.3,
    borderColor:"#ccc"
  },
  confirmButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    marginHorizontal: 5,
  },
  confirmButtonText: {
    fontSize: 18,
    color: '#007AFF',
    fontWeight: 'bold',
  },
});

export default ConfirmModal;
