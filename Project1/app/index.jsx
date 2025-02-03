import * as React from 'react';
// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
import { ScrollView, StyleSheet} from "react-native";
import Home from '../app/Screens/Home';
import SinglePlace from '../app/Screens/SinglePlace';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const stack=createNativeStackNavigator();
const Index=()=>{
    
    const stack=createNativeStackNavigator();
    return ( 

        <stack.Navigator>
            <stack.Screen name='Home' component={Home}/>
            <stack.Screen name='SinglePalce' component={SinglePlace}/>
        </stack.Navigator>

    )
}

const styles=StyleSheet.create({
    externalContainer:{
        backgroundColor:'#F9AA33',
        flex:1
    },
});

export default Index;