import * as React from 'react';
import FamousPlaceCard from "../Components/FamousPlaceCard";
import Header from "../Components/Header";
import OtherFamousPlaces from "../Components/OtherFamousPlaces";
import { ScrollView, StyleSheet, View } from 'react-native';

const Home=()=>{

    return(
        <ScrollView style={styles.externalContainer}>
            <Header/>
            <FamousPlaceCard/>
            <OtherFamousPlaces/>
        </ScrollView>       
    )
}

const styles=StyleSheet.create({
    externalContainer:{
        backgroundColor:'#F9AA33',
        flex:1
    },
});

export default Home;