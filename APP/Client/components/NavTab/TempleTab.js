import React from 'react'
import { StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import TempleHomeStack from '../NavStack/TempleHomeStack';
import MatchingPage from '../../screens/Temple/MatchingPage';
import FoodScanningPage from '../../screens/Temple/FoodScanningPage';
import TempleEventPage from '../../screens/Temple/TempleEventPage';
import UserPage from '../../screens/UserPage';


const Tab = createMaterialBottomTabNavigator();
function TempleTab(){
    return (
      <Tab.Navigator
        initialRouteName='TempleHomePage'
        activeColor="#FF7A00"
        inactiveColor="#CCCCCC"
        shifting={true}
        barStyle={{ backgroundColor: 'white', opacity: '0.8'}}
      >
          <Tab.Screen   
            name="主頁" 
            component={TempleHomeStack}
            options={{
              tabBarLabel: '主頁',
              tabBarIcon: ({color}) => (<MaterialCommunityIcons name="home-variant" color={color} size={26} />)
            }}
          />
          <Tab.Screen 
            name="媒合" 
            component={MatchingPage} 
            options={{
              tabBarLabel: '媒合',
              tabBarIcon: ({color}) => (<MaterialCommunityIcons name="puzzle" color={color} size={26}/>)
            }}
          />
          <Tab.Screen 
            name="供品" 
            component={FoodScanningPage}
            options={{
              tabBarLabel: '供品',
              tabBarIcon: ({color}) => (<MaterialCommunityIcons name="cube-scan" color={color} size={26}/>)
            }} 
          />
        
          <Tab.Screen 
            name="法會" 
            component={TempleEventPage} 
            options={{
              tabBarLabel: '法會',
              tabBarIcon: ({color}) => (<MaterialCommunityIcons name="clock-edit" color={color} size={26}/>)
            }}
          />
         
          <Tab.Screen
            name="使用者"
            component={UserPage}
            options={{
              tabBarLabel: '使用者',
              tabBarIcon: ({color}) => (<MaterialCommunityIcons name="account" color={color} size={26}/>)
            }}
          />
      </Tab.Navigator>
    )
}

export default TempleTab;

