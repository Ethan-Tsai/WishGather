import React, {useState, useEffect} from 'react';
import {Button, Text, SafeAreaView, View, StyleSheet, FlatList, Pressable, Dimensions} from 'react-native';
import { SafeAreaProvider,  useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import axios from 'axios';

import EventCard from '../../components/EventCard';
import PageTitle  from '../../components/PageTitle';
import NavigateBack from '../../components/Utility/NavigateBack';

const API = require('../DBconfig')
function TempleEventPage({route}){
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();
    const [date, setDate] = useState(new Date());
    const [eventData, setEventData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        console.log(`${API}/temples_info`)
        // Replace with your API endpoint
        axios.get(`${API}/temples_info`)
            .then(response => {
                setEventData(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) return <Text>Loading...</Text>;
    if (error) return <Text>Error: {error.message}</Text>;
    return(
        <SafeAreaProvider>
            <View style={{
                flex: 1,
                justifyContent: 'start',
                alignItems: 'start',
                // Paddings to handle safe area
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
                paddingLeft: insets.left,
                paddingRight: insets.right
            }}>
                <NavigateBack />
                <PageTitle titleText="法會資訊"></PageTitle>
                <View style={styles.flatListContainer}>
                    <FlatList
                        data={eventData}
                        renderItem={({ item }) => <EventCard event={ item } size="rectangle" />}
                        keyExtractor={(item) => item.id}
                        vetical
                        contentContainerStyle={styles.scrollView}
                        style={styles.flatList}
                    />
                </View>
                <Pressable style={styles.addBtn} 
                           onPress={() => 
                                    navigation.navigate('EditTempleInfoPage', 
                                    { 
                                        event: { date: date },
                                        forEdit: false
                                    })}>
                                    {/* should get newest id from db? after or before add succeed*/}
                    <Ionicons name="add-outline" size={30}/>
                </Pressable>
            </View>
        </SafeAreaProvider>
    )
} 

let screenHeight = Dimensions.get("window").height;
let screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    flatListContainer: {
        height: screenHeight,
        width: screenWidth,
    },
    flatList:{
        flex: 1
    },
    pressBack: {
        width: screenWidth,
        height: 30,
        padding: 5,
        fontSize: 50
    },
    addBtn:{
        backgroundColor: "orange",
        color: "white",
        borderRadius: 50,
        padding: 20,
        // Check device 
        position: "absolute",
        bottom: 30,
        right: 20,
    }
})

export default TempleEventPage;