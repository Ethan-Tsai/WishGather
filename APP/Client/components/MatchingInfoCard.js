import { React, useState, useEffect } from 'react'
import { View, Text, Button, TouchableOpacity, Dimensions, Image, StyleSheet, Pressable, SafeAreaView } from 'react-native'
import { SafeAreaProvider,  useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import TempleDelieverPage from '../screens/Temple/TempleDeliverPage';

function MatchingInfoCard({infos}){
    const navigation = useNavigation();
    const [statusText, setStatusText] = useState("");
    const [statusColor, setStatusColor] = useState(styles.defaultStatus);
    useEffect(() => {
        switch (infos.MATCHING_STATUS) {
            case 'A':
                setStatusText('未送出');
                setStatusColor(styles.notDelivered);
                break;
            case 'B': 
                setStatusText('配送中');
                setStatusColor(styles.inTransit);
                break;
            case 'C':
                setStatusText('已送達');
                setStatusColor(styles.delivered);
                break;
            default: 
                setStatusColor(styles.defaultStatus);
        }
    }, [infos.MATCHING_STATUS]);
    const handlePress = () => {
        navigation.navigate('TempleDeliverPage', { welfareId: infos.WELFARE_ID })
    }
    return (
        <View style={styles.cardContainer}>
            <View style={styles.logoContainer}>
                <Image style={styles.image} source={require("../assets/welfare-sample.png")}/>
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.infoContainer}>
                    <Text style={styles.title}>{ infos.NAME }</Text>
                    <Text style={[styles.statusText, statusColor]}>{ statusText}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={handlePress}>
                        <Text style={styles.btnText}>內容</Text>
                    </TouchableOpacity>
                </View>
            </View>            
        </View>
    )
}

let screenHeight = Dimensions.get("window").height;
let screenWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
    cardContainer:{
        width: screenWidth * 0.8,
        height: screenWidth * 0.6,
       
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        gap: 40,

        backgroundColor: "white",
        borderWidth: "1px",
        // borderColor: "#ccc",
        borderRadius: 10,
        marginVertical: 10,
        paddingHorizontal: 10,
        paddingVertical: 35,
        peddingTop: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5, // This is for Android shadow
        
    },
    bottomContainer: {
        width: "90%",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    infoContainer:{
        gap: 8,
    },
    image:{
        width: 85,
        height: 75,
    },
    title:{
        fontSize: 20,
        fontWeight: "bold"
    },
    button:{
        paddingHorizontal: 17,
        paddingVertical: 10,
        backgroundColor: "#F6AB3A",
        borderRadius: 8
    },
    btnText: {
        fontSize: 16,
        fontWeight: "bold",
    },
    statusText: {
        fontWeight: 'bold'
    },
    delivered: {
        color: 'green'
    },
    inTransit: {
        color: 'orange'
    },
    notDelivered: {
        color: 'red'
    },
    defaultStatus:{
        color: '#333'
    }
})


export default MatchingInfoCard;