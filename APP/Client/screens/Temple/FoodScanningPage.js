import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState, useRef } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View ,Alert} from 'react-native';
import { SafeAreaProvider,  useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import axios from 'axios';
const API=require('../DBconfig')

function FoodScanningPage() {
    const navigation = useNavigation();
    const insets = useSafeAreaInsets();
    const [facing, setFacing] = useState('back');
    
    const [permission, requestPermission] = useCameraPermissions();
    const [imageUri, setImageUri] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const cameraRef = useRef(null);


    if (!permission) {
        // Camera permissions are still loading.
        return <View />;
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet.
        return (
        <View style={styles.container}>
            <Text style={styles.message}>We need your permission to show the camera</Text>
            <Button onPress={requestPermission} title="grant permission" />
        </View>
        );
    }

    const toggleCameraFacing = () => {
        setFacing(current => (current === 'back' ? 'front' : 'back'));
    }

    const takePicture = async () => {
      
      if (cameraRef) {

        
        try {
            const photo = await cameraRef.current.takePictureAsync({ base64: true });
            setImageUri(photo.uri);
            // Send picture to server
            
            await sendPictureToServer(photo.base64);
        } catch (error) {
            console.error('Error taking picture:', error);
        }
    }
    else{
      Alert.alert('no cameraRef.current');
    }
    }

    const sendPictureToServer = async(base64Image) => {
        // request 
       
        console.log('Sending picture to server...');
        setIsLoading(true);
        try {
            const response = await axios.post(`${API}/upimg`, {
                photo: base64Image
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log('Server response received:',response.data);

            if (response.data) {
              const objectCounts = response.data;
              
  
              // Navigate to the results page with object counts
              navigation.navigate('ScanResult', { objectCounts });
          }
        } catch (error) {
            console.error('Error sending picture to server:', error);
            Alert.alert('Error', 'Failed to process image. Please try again.');
        } finally {
            setIsLoading(false);
        }
    }

  return (
    <SafeAreaProvider>
        <View style={[styles.container, {
                paddingTop: insets.top + 30,                                      
                paddingBottom: insets.bottom,
                paddingLeft: insets.left,
                paddingRight: insets.right
            }]}>
            <View style={styles.titleContainer}>
                <Text style={styles.text}>辨識</Text>
            </View>
            <CameraView style={styles.camera} facing={facing} ref={cameraRef}> 
                <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={takePicture}>
                    <Text style={styles.text}>Take Picture</Text>
                </TouchableOpacity>
                </View>     
            </CameraView>
        </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "#fff",
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",       
    paddingBottom: 10
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: "orange",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});


export default FoodScanningPage;