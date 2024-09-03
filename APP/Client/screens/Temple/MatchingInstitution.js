import { React, useState, useEffect } from 'react'
import { View, Text, Button, TouchableOpacity, StyleSheet, Pressable, FlatList } from 'react-native'
import { SafeAreaProvider,  useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import axios from 'axios';

import PageTitle from '../../components/PageTitle';
import SetButton from '../../components/Utility/SetButton';
import MatchingInstituteCard from '../../components/MatchingInstituteCard';

const matchingInformation = [
    {
        id: 1,
        name: "快樂老人照護機構",
        address: "前金區民權街32號",
        image: "welfare-sample.png",
        type: "老人照護",
        distance: "2.3km",
        numberOfPeople: 85
    },
    {
        id: 2,
        name: "健康小孩基金會",
        address: "新興區中山路45號",
        image: "child-health-foundation.png",
        type: "兒童福利",
        distance: "1.8km",
        numberOfPeople: 120
    },
    {
        id: 3,
        name: "愛心動物保護中心",
        address: "左營區裕誠路78號",
        image: "animal-shelter.png",
        type: "動物保護",
        distance: "3.1km",
        numberOfPeople: 30
    },
    {
        id: 4,
        name: "樂活老人中心",
        address: "鼓山區博愛路90號",
        image: "elderly-center.png",
        type: "老人照護",
        distance: "2.9km",
        numberOfPeople: 65
    },
    {
        id: 5,
        name: "小小希望之家",
        address: "苓雅區四維路15號",
        image: "children-home.png",
        type: "兒童福利",
        distance: "2.0km",
        numberOfPeople: 95
    }
];

const API = require('../DBconfig');
function MatchingInstitution() {
    const insets = useSafeAreaInsets();
    const [swOrgData, setswOrgData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Replace with your API endpoint
        axios.get(`${API}/sw_organization`)
            .then(response => {
                setswOrgData(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) return <Text>Loading...</Text>;
    if (error) return <Text>Error: {error.message}</Text>;

    return (
        <SafeAreaProvider>
            <View style={[styles.container, {
                paddingTop: insets.top - 30,
                paddingBottom: insets.bottom,
                paddingLeft: insets.left,
                paddingRight: insets.right
            }]}>
                <View style={styles.flatListContainer}>
                    <FlatList
                        data={swOrgData}
                        renderItem={({ item }) => <MatchingInstituteCard institute={item} />}
                        keyExtractor={(item) => item.id}
                        style={{ flex: 1 }}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <SetButton // trigger matching algorithm
                        btnText={'一鍵媒合'}
                        btnStatus={'primary'}
                    />
                </View>
            </View>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
    },
    flatListContainer: {
        paddingBottom: 80
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 40, 
        left: 0,
        right: 0,
        alignItems: 'center',
    }
})
export default MatchingInstitution;