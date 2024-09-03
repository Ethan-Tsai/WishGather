import { React, useState, useEffect } from 'react'
import { View, Text, Button, TouchableOpacity, Dimensions, Image, StyleSheet, Pressable, SafeAreaView } from 'react-native'
import { SafeAreaProvider,  useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import InfoTag from './InfoTag';

function MatchingInstituteCard({ institute }) {
    const [distance, setDistance] = useState(0);

    // calculate distance (mock current user)
    const calculateDistance = (templeLat, templeLong, instituteLat, instituteLong) => {
        const R = 6371e3;
        const p1 = templeLat * Math.PI / 180;
        const p2 = instituteLat * Math.PI / 180;
        const deltaP = p1 - p2;
        const deltaLong = templeLong - instituteLong;
        const deltaLambda = (deltaLong * Math.PI) / 180;
        const a = Math.sin(deltaP/2) * Math.sin(deltaP/2) +
                  Math.cos(p1) * Math.cos(p2) + 
                  Math.sin(deltaLambda/2) * Math.sin(deltaLambda/2);
        const dist = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)) * R;
        return (dist/10000000).toFixed(1);
    }

    useEffect(() => {
        // mock 鳳山龍山寺 as current user 
        var templeCord = {x: 22.620901886750495, y: 120.36202571109524};
        const calcDistance = calculateDistance(templeCord.x, templeCord.y, institute.COORDINATE.x, institute.COORDINATE.y);
        setDistance(calcDistance);
    })
    // order by distance (set bound distance)

    return (
        <View style={styles.container}>
            <View style={styles.upperContainer}>
                {/* <Image source={require()} style={styles.image} /> */} 
                <View>
                    <Text style={styles.instituteName}>{institute.NAME}</Text>
                    <Text style={styles.instituteAddress}>{institute.ADDRESS}</Text>
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <InfoTag label="距離" value={distance + "km"} />    
                <InfoTag label="類型" value={institute.CHARA} style={styles.charaContainer}/>
                <InfoTag label="人數" value={institute.NUMBER} />
                
            </View>
        </View>
    );
}

let screenHeight = Dimensions.get("window").height;
let screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#ccc",
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        gap: 30,
        width: screenWidth,
        height: "auto",
        paddingVertical: 30,
        paddingHorizontal: 30

    },
    upperContainer: {
        width: "100%",
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 20
    },
    image: {
        width: 60, 
        height: 60,
    },
    instituteName: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 8
    },
    instituteAddress: {
        fontSize: 15,
    },
    charaContainer: {
        width: "400px"
    },
    bottomContainer: {
        width: "100%",
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "wrap",
    }


});

export default MatchingInstituteCard;