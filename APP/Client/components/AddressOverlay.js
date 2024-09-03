import * as React from "react";
import { View, StyleSheet, Text, TextInput, Pressable, Dimensions } from "react-native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const { width, height } = Dimensions.get('window');

const AddressOverlay = ({ onClose, onSubmit }) => {
  const [address, setAddress] = React.useState("");

  return (
    <View style={styles.addressLayout}>
      {/* Header */}
      <View style={{ marginBottom: 10 }}>
        <Text style={styles.headerText}>修改地址</Text>
      </View>

      {/* Location input */}
      <View style={{ width: "100%", justifyContent: "center", alignItems: "center" }}>
        <TextInput
          style={styles.addressInput}
          placeholder="請輸入地址..."
          value={address}
          onChangeText={setAddress}
        />
      </View>

      {/* Confirm / Cancel Button */}
      <View style={styles.buttonContainer}>
        <Pressable style={[styles.button, styles.cancelButton]} onPress={onClose}>
          <Text style={[styles.buttonText, styles.cancelButtonText]}>取消</Text>
        </Pressable>

        <Pressable style={[styles.button, styles.confirmButton]} onPress={() => onSubmit(address)}>
          <Text style={[styles.buttonText, styles.confirmButtonText]}>確認</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  addressLayout: {
    height: 230,
    width: width * 0.75,
    backgroundColor: "white",
    borderRadius: 15,
    paddingTop: 20,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
  },
  headerText: {
    textAlign: "center",
    fontWeight: "500",
    fontSize: 24,
  },
  addressInput: {
    width: "85%",
    height: 100,
    textAlignVertical:'top',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    fontSize: 14,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    height:50,
    marginTop: 20,
    borderTopWidth: 0.3,
    borderColor:"#ccc"
  },
  button: {
    width: "50%",
    height:"100%",
    alignItems: "center",
    justifyContent: "center",
  },
  confirmButton: {
    borderLeftWidth:0.3,
    borderColor:"#ccc",
  },
  buttonText: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interMedium,
  },
  cancelButtonText: {
    color: Color.colorSteelblue,
  },
  confirmButtonText: {
    color: Color.colorSteelblue,
  },
});

export default AddressOverlay;
