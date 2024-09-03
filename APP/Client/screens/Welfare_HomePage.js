import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';
import TabBar from "../components/TabBar"; //footer

const API = require('./DBconfig');

export default function HomePage({ navigation }) {

  const { height } = Dimensions.get('window'); 
  const [temples, setTemples] = useState([]);
  const [error, setError] = useState(null); // for debugging

  useEffect(() => {  
    axios.get(`${API}/temples`)
      .then(response => {
        setTemples(response.data);
      })
      .catch(error => {
        setError(error);
      });
  }, []);

  const renderTempleItem = ({ item }) => (
    <View style={styles.donateItemContainer}>
      <Text style={styles.donateItemText}>Name: {item.NAME}</Text>
      <Text style={styles.donateItemText}>Address: {item.ADDRESS}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Transport')}>
        <Text style={[styles.text, { top: height * 0.1 }]}>捐贈運送</Text>
      </TouchableOpacity>

      <View style={styles.donateListContainer}>
        <FlatList
          data={temples}
          renderItem={renderTempleItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Matching')}>
        <Text style={[styles.text, { top: height * 0.51 }]}>媒合確認</Text>
      </TouchableOpacity>

      {error && <Text style={styles.errorText}>{error.message}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    color: "black",
    position: 'absolute',
    left: '10%',
  },
  donateListContainer: {
    position: 'absolute',
    top: '15%',
    bottom: '47%',
    left: '9%',
    width: '85%',
  },
  donateItemContainer: {
    height: 85,
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    borderColor: '#cccccc',
    borderWidth: 1,
  },
  donateItemText: {
    fontSize: 16,
    color: 'black',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
});
