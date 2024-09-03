import { React, useEffect, useState } from 'react'
import { View, Text, Button, TouchableOpacity, StyleSheet, Pressable } from 'react-native'
import { SafeAreaProvider,  useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import axios from 'axios';
import PageTitle from '../../components/PageTitle';
import MatchingCard from '../../components/MatchingCard';
import SetButton from '../../components/Utility/SetButton';
import MatchingInfoCard from '../../components/MatchingInfoCard'
import { FlatList } from 'react-native-gesture-handler';

// pass matching insituition info
const matchingInformation = [
    {id: '1', institution: '快樂長照機構', address: '前金區民權街36號', state: '已送達'},
    {id: '2', institution: '開心長照機構', address: '前金區民權街36號', state: '配送中'},
    {id: '3', institution: '哈哈長照機構', address: '前金區民權街36號', state: '未送出'},
]
const API = require('../DBconfig');
function MatchingStatus() {
    const insets = useSafeAreaInsets();
    const templeID = 1;
    const [matchData, setMatchData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        axios.get(`${API}/match/${templeID}`)
            .then(response => {
                setMatchData(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);
    if(loading) return (<View><Text>Loading...</Text></View>);
    if(error) return (<View><Text>Error: {error}</Text></View>);
    return (
        <SafeAreaProvider>
            <View style={[styles.container, {
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
                paddingLeft: insets.left,
                paddingRight: insets.right
            }]}>
                <View style={styles.flatListContainer}>
                    <FlatList
                        data={matchData}
                        renderItem={({ item }) => <MatchingInfoCard infos={item}/>}
                        keyExtractor={(item) => item.id}
                        style={{ flex: 1 }}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </View>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",

    },
});

export default MatchingStatus;