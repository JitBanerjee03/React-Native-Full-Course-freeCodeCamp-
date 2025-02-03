import * as React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const Header=()=>{
    return(
    <SafeAreaView style={[styles.externalContainer,styles.textStyle]}>
        <View>
            <Text style={styles.textStyle}>World Famous Palces Datails</Text> 
        </View>
    </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    externalContainer:{
        backgroundColor:'#F9AA33',
        flex:1
    },

    textStyle:{
        color:'#fff',
        textAlign:'center',
        fontSize:25,
        fontWeight:'bold',
        marginTop:10,
        marginBottom:10,

    }
});

export default Header;