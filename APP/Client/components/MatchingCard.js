import { React, useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const MatchingCard = ({infos}) => {
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

    return (
        <View style={styles.card}>
            <View style={styles.middleTitle}>
                <Text style={styles.titlePrimary}>{infos.NAME}</Text>
                <Text style={styles.titleSecond}>{infos.ADDRESS}</Text>
            </View>
            <View style={styles.state}>
                <Text style={statusColor}>{statusText}</Text>
            </View>
        </View>
    );
};

let screenHeight = Dimensions.get("window").height;
let screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    card: {
        width: screenWidth * 0.8,
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 30,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5, // This is for Android shadow
        
    },
    titlePrimary: {
        fontSize: 20, 
        fontWeight: 'bold',
    },
    titleSecond: {
        fontSize: 15, 
    },
    state:{
        paddingTop: 20,
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
});

export default MatchingCard;