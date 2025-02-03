import * as React from 'react';
import { Image, ImageBackground, SafeAreaView, ScrollView, Text, View } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
const SinglePlace=({route})=>{
    const image={uri:route.params.image};
    return(
        <SafeAreaProvider>
            <SafeAreaView style={{flex:1,backgroundColor:'pink'}}>
                <ImageBackground source={image} style={{flex:1,resizeMode:'cover'}}>
                    <View style={{flex:1}}>
                    <View style={{height:'100%',width:'100%',display:'flex',}}>
                        <View style={{width:'100%'}}>
                         <Text style={{fontSize:50,textAlign:'center'}}>{route.params.placeName}</Text>
                        </View>
                        <View style={{alignSelf:'flex-end',marginTop:'110%'}}>
                            <Text style={{paddingLeft:'2%',paddingRight:'2%',color:'black',backgroundColor:'white',fontWeight:'600'}}>{route.params.text}</Text>
                        </View>
                    </View>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default SinglePlace;