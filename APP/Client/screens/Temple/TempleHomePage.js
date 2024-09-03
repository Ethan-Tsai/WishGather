import React, {useState, useEffect, useRef } from 'react';
import {Button, Text, SafeAreaView, View, StyleSheet, FlatList} from 'react-native';
import { SafeAreaProvider,  useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

import SectionHeader from '../../components/Utility/SectionHeader';
import EventCard from '../../components/EventCard';
import MatchingCard from '../../components/MatchingCard';
import MatchingInfoCard from '../../components/MatchingInfoCard';
import TempleEventPage from './TempleEventPage';


const API = require('../DBconfig')

// TempleHomePage Screen 

function TempleHomePage() {
    const insets = useSafeAreaInsets();
	const navigation = useNavigation();

	const [eventData, setEventData] = useState([]);
	const [matchData, setMatchData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const fetchData = async () => {
		try { 
			const eventResponse = await axios.get(`${API}/temples_info`);
			setEventData(eventResponse.data);
			const matchResponse = await axios.get(`${API}/match/${1}`);
			setMatchData(matchResponse.data);

			setLoading(false);
		} catch (err) {
			setLoading(false); 
			setError(err); 
		} 
	};

    useEffect(() => {
		// Get pId from db 
        fetchData();
    }, []); // Add templeID as a dependency
  
	if (loading) return <Text>Loading...</Text>;
	if (error) return <Text>Error: {error.message}</Text>;

    return (
      <SafeAreaProvider>
        <View style={[styles.container,
          // Paddings to handle safe area
          {paddingTop: insets.top + 100,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left + 30,
          paddingRight: insets.right + 30} 
        ]}>  
			<View style={styles.sectionContainer}>
				<SectionHeader title="文武聖殿法會" onPress={() => navigation.navigate('TempleEventPage')}/>
				<FlatList
						data={eventData}
						renderItem={({ item }) => <EventCard event={item} size="square" />}
						keyExtractor={(item) => item.tNO}
						horizontal
						showsHorizontalScrollIndicator={false}
						contentContainerStyle={styles.scrollView}
				/>
			</View>
			<View style={styles.sectionContainer}>
				<SectionHeader title="媒合訊息" onPress={() => navigation.navigate('MatchingPage')}/>
				<FlatList
						data={matchData}
						renderItem={({ item }) => <MatchingCard infos={item} />}
						keyExtractor={(item) => item.WELFARE_ID} // Ensure WELFARE_ID is unique and not undefined
				/>
			</View>
        </View>
      </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		gap: 30,
	},
	scrollView: {
		paddingLeft: 16,
	},
})

export default TempleHomePage;
