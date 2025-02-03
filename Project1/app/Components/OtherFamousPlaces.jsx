import * as React from 'react';
import { FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, View , Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const DisplayEachCard=({image,placeName,text})=>{
    const navigation=useNavigation()
    return(
        <>
            <View style={[styles.eachCardStyle]}>
                <Text style={{color:'#fff',fontSize:20,marginBottom:20}}>{placeName}</Text>
                <View style={{height:300,width:300,marginBottom:20}}>
                <ImageBackground source={{uri:image}} style={styles.imageStyle}/>
                </View>
                <View style={{height:100}}>
                    <Button title='Mode Details' color='#f44336' onPress={()=> navigation.navigate('SinglePalce',{image:image,placeName:placeName,text:text})}/>
                </View>
            </View>
        </>
    )
}

const data=[
    { image:'https://lh3.googleusercontent.com/p/AF1QipMU8xPHOakcdPjjT4bNIiIxuTiv6pQ7DRWxIGfn=s1360-w1360-h1020-rw',
      placeName:'Golden Temple',
      text:`'The Golden Temple (also known as the Harmandir Sāhib (lit. House of God, Punjabi: harimandara sāhiba 
             pronounced [ɦəɾᵊmən̪d̪əɾᵊ saːɦ(ɪ)bᵊ]), or the Darbār Sāhib, (lit. 'exalted court'', [d̪əɾᵊbaːɾᵊ saːɦ(ɪ)bᵊ] or 
             Suvaran Mandir[2]) is a gurdwara located in Amritsar, Punjab, India.[3][4] It is the pre-eminent spiritual 
             site of Sikhism. It is one of the holiest sites in Sikhism, alongside the Gurdwara Darbar Sahib Kartarpur in Kartarpur, 
             and Gurdwara Janam Asthan in Nankana Sahib.`
    },

    { image:'https://lh3.googleusercontent.com/p/AF1QipPrsaIx6KfniehiO0TxOu84yKAvr5m__HAiIUkF=s1360-w1360-h1020-rw',
      placeName:'Victoria Memorial',
      text:`The Victoria Memorial is a large marble monument in the Maidan in Central Kolkata, having its entrance on the Queen's 
            Way. It was built between 1906 and 1921 by the British Raj. It is dedicated to the memory of Queen Victoria, 
            the Empress of India from 1876 to 1901.It is the largest monument to a monarch anywhere in the world. 
            It stands at 64 acres of gardens and is now a museum under the control of the Ministry of Culture, Government of India.
            Possessing prominent features of the Indo-Saracenic architecture, it has evolved into one of the most popular attractions in the city.`
    },

    { image:'https://lh3.googleusercontent.com/proxy/BC9LN8m3Qo9MW53c3aLm8FS42OLD7WF2yM57tnd0qS6dZH3zDkKOjnISQIe20nalk4BLK1wpdsKK5U6UsG-4Ztauo-Rv9I2_N4D9KhzKnAZlTBCbHhMTyU1ZuxcWge5Td-s1FFLm74pOueaobbTnXN_Jhp5f958=s1360-w1360-h1020-rw',
      placeName:'Gate Way of India',
      text:`The Gateway of India is an arch-monument completed in 1924 on the waterfront of Mumbai (Bombay), India. 
            It was erected to commemorate the landing of George V for his coronation as the Emperor of India in December 1911 at Strand Road near Wellington Fountain. 
            He was the first British monarch to visit India.The foundation stone was laid in March 1913 for a monument built in the Indo-Islamic style, inspired by elements of 16th-century Gujarati architecture. 
            The final design of the monument by architect George Wittet was sanctioned only in 1914, and construction was completed in 1924. The structure is a memorial arch made of basalt, which is 26 metres (85 feet) high, with an architectural resemblance to a triumphial arch as well as Gujarati architecture of the time.`
    }
]

const OtherFamousPlaces=()=>{
    return(
        <View style={styles.outerBox}>
            <Text style={{color:'#fff',fontSize:25,textAlign:'center',marginBottom:'10%'}}>Other Famous Places</Text>
            <ScrollView horizontal={true} style={{backgroundColor:'#F9AA33'}}>
                <View style={styles.InnerBox}>
                    {data.map((item)=> <DisplayEachCard image={item.image} placeName={item.placeName} text={item.text} key={item.placeName}/>)}
                </View>
            </ScrollView>
        </View>
    )
}

const styles=StyleSheet.create({
    outerBox:{
        marginTop:70,
        borderStyle:'solid',
    },

    InnerBox:{
        display:'flex',
        flexDirection:'row',
        gap:10,
        paddingLeft:10,
        paddingRight:10
    },

    eachCardStyle:{
        flex:1,
        alignItems:'center'
    },

    imageStyle:{
        height:'100%',
        width:'100%',
        borderTopLeftRadius:10
    },
})
export default OtherFamousPlaces;