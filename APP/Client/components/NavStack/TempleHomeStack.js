import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TempleHomePage from '../../screens/Temple/TempleHomePage';
import TempleEventPage from '../../screens/Temple/TempleEventPage';
import TempleDeliverPage from '../../screens/Temple/TempleDeliverPage';
import FoodScanningPage from '../../screens/Temple/FoodScanningPage';
import EditTempleInfoPage from '../../screens/Temple/EditTempleInfoPage';
import MatchingPage from '../../screens/Temple/MatchingPage';
const Stack = createNativeStackNavigator();

function TempleHomeStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="TempleHomePage"
                component={TempleHomePage}
                options={{ headerShown: false }}
            />
            <Stack.Screen 
                name="TempleEventPage"
                component={TempleEventPage}
                options={{ headerShown: false }}
            />
            <Stack.Screen 
                name="MatchingPage"
                component={MatchingPage}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="TempleDeliverPage"
                component={TempleDeliverPage}
                options={{ headerShown: false }}
            />
            <Stack.Screen 
                name="EditTempleInfoPage"
                component={EditTempleInfoPage}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

// Stack for food scanning 
function TempleFoodStack(){

}

export default TempleHomeStack;