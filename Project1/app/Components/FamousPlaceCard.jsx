import * as React from 'react';
import { Image, StyleSheet, Text, View } from "react-native";

const FamousPlaceCard=()=>{
    return(
        <>
        <View style={styles.body}>
            <Text style={styles.headingTextStyle}>Famous Palce</Text>
            
            <View style={styles.outerBox}>
                <View>
                    <Image style={styles.innerBox} source={require('../../assets/images/istockphoto-1722688269-1024x1024.jpg')}></Image>
                </View>

                <View>
                    <Image style={styles.innerBox} source={require('../../assets/images/christredeemer-10139156-567c92283df78ccc15684502.webp')}></Image>
                </View>

                <View>
                    <Image style={styles.innerBox} source={require('../../assets/images/wonders-egypt-guided-tour-13.webp')}></Image>
                </View>
            </View>
        </View>
        </>
    )
}

const styles=StyleSheet.create({
    body:{
        flex:1,
        marginTop:25,
        alignItems:'center',
        gap:10
    },

    headingTextStyle:{
        fontSize:25,
        color:'#ffffff',
    },

    outerBox:{
        flexDirection:'row',
        gap:10,
        justifyContent:'center',
        paddingLeft:20,
        paddingRight:20
    },

    innerBox:{
        flex:1,
        height:120,
        width:120,
        borderTopLeftRadius:10
    }
})

export default FamousPlaceCard;