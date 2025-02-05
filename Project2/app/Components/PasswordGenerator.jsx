import React, { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import * as Yup from 'yup';
import { Formik } from 'formik';
import { SafeAreaView } from "react-native-safe-area-context";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const passWordSchema=Yup.object().shape({
    passwordLength:Yup.number()
    .min(5,'5 Chars minimum')
    .max(25,'25 chars maximum')
    .required('This is a required field')
})

const PasswordGenerator=()=>{
    const [password,setPassword]=useState('');
    const [isLowerCase,setLowerCase]=useState(true);
    const [isUpperCase,setUpperCase]=useState(true);
    const [isNumeric,setNumeric]=useState(true);
    const [isSpecialChar,setSpecialChar]=useState(true);
    
    const handlePasswordReset=()=>{
        setLowerCase(false);
        setUpperCase(false);
        setNumeric(false);
        setSpecialChar(false);
        setPassword('');
    }

    const generatePassword=(passwordLength)=>{
        const upperLetterCharacters='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowerLetterCharacters='abcdefghijklmnopqrstuvwxyz';
        const digits='0123456789';
        const specialCharacters='[@_!#$%^&*()<>?/|}{~:]';

        let temp='';

        if(isLowerCase)
            temp+=lowerLetterCharacters;

        if(isUpperCase)
            temp+=upperLetterCharacters;
        
        if(isNumeric)
            temp+=digits;

        if(isSpecialChar)
            temp+=specialCharacters;

        let result=createPassword(temp,passwordLength);
        console.log(result);
        setPassword(result);
    }

    const createPassword=(temp,passwordLength)=>{
        let result='';

        for(let i=0;i<passwordLength;i++){
            const randomIndex=Math.round((Math.random()*temp.length));
            result+=temp.charAt(randomIndex);
        }
        console.log(result);
        return result;
    }

    return(          
        <SafeAreaView style={styles.outerContainer}>
            <ScrollView keyboardShouldPersistTaps='handled'>
                <Text style={styles.headingText}>Well Come to Our Password Generator App</Text>
                <View style={styles.bodyContent}>
                    <Formik
                        initialValues={{ passwordLength:'' }}
                        validationSchema={passWordSchema}
                        onSubmit={values=>{
                            const lengthOfPassword=Number(values.passwordLength);
                            console.log(lengthOfPassword);
                            generatePassword(lengthOfPassword)}}
                    >
                    {({ 
                        handleChange,
                        handleSubmit,
                        handleReset,
                        values,
                        touched,
                        errors,
                    })=>(
                        <View style={{marginTop:50}}>
                            <View style={{flexDirection:'row'}}>
                                <Text style={styles.textStyle}>Enter password Length : </Text>
                                {touched.passwordLength && errors.passwordLength && (
                                    <Text style={styles.errorMessage}>
                                        {errors.passwordLength}
                                    </Text>
                                )}
                                <TextInput
                                    onChangeText={handleChange('passwordLength')}
                                    value={values.passwordLength}
                                    placeholder='length'
                                ></TextInput>
                            </View>

                            <View style={{marginTop:30,gap:20}}>
                                {<View style={{flexDirection:'row'}}>
                                    <Text style={styles.textStyle}>Check For UpperCase :</Text>
                                    <BouncyCheckbox 
                                        style={{paddingLeft:30}}
                                        size={25}
                                        unFillColor="#FFFFFF"
                                        iconStyle={{ borderColor: "red" }}
                                        innerIconStyle={{ borderWidth: 2 }}
                                        onChange={()=>setUpperCase(!isUpperCase)}
                                        />
                                </View>}

                                {<View style={{flexDirection:'row'}}>
                                    <Text style={styles.textStyle}>Check For LowerCase :</Text>
                                    <BouncyCheckbox 
                                        style={{paddingLeft:30}}
                                        size={25}
                                        unFillColor="#FFFFFF"
                                        iconStyle={{ borderColor: "red" }}
                                        innerIconStyle={{ borderWidth: 2 }}
                                        onChange={()=>setLowerCase(!isLowerCase)}
                                        />
                                </View>}

                                {<View style={{flexDirection:'row'}}>
                                    <Text style={styles.textStyle}>Check For digits values :</Text>
                                    <BouncyCheckbox 
                                        style={{paddingLeft:30}}
                                        size={25}
                                        unFillColor="#FFFFFF"
                                        iconStyle={{ borderColor: "red" }}
                                        innerIconStyle={{ borderWidth: 2 }}
                                        onChange={()=>setNumeric(!isSpecialChar)}
                                        />
                                </View>}

                                {<View style={{flexDirection:'row'}}>
                                    <Text style={styles.textStyle}>Check For special characters :</Text>
                                    <BouncyCheckbox 
                                        style={{paddingLeft:30}}
                                        size={25}
                                        unFillColor="#FFFFFF"
                                        iconStyle={{ borderColor: "red" }}
                                        innerIconStyle={{ borderWidth: 2 }}
                                        onChange={()=>setSpecialChar(!isNumeric)}
                                        />
                                </View>}

                                <View style={{flexDirection:'row',gap:10}}>
                                    <TouchableOpacity style={styles.generatePasswordStyle}
                                        onPress={handleSubmit}
                                    >
                                        <Text style={styles.textStyle}>Generate Password</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.resetPasswordStyle}
                                        onPress={()=>{
                                            handleReset()
                                            handlePasswordReset()
                                        }}
                                    >
                                        <Text style={styles.textStyle}>Reset Password</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    )}
                    </Formik>
                        {password.length !==0 ?
                            <View style={styles.generatedPasswordStyles}>
                                <Text style={{fontSize:25}}>{password}</Text>
                            </View>
                        :null}
                </View>                
            </ScrollView>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    headingText:{
        paddingTop:'15%',
        fontSize:30,
        textAlign:"center",
        fontWeight:'400'
    },

    bodyContent:{
        display:'flex',
        height:'200%',
        paddingLeft:'6%'
    },
    
    textStyle:{
        fontSize:20
    },

    outerContainer:{
        height:'100%',
        width:'100%',
        backgroundColor:'#A6A6A6',
    },

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },

    errorMessage:{
        fontSize:18,
        color:'#ff3333'
    },

    generatePasswordStyle:{
        backgroundColor:'#71b8e4',
        borderRadius:'3'
    },

    resetPasswordStyle:{
        backgroundColor:'#ff3333',
        borderRadius:'3'
    },

    generatedPasswordStyles:{
        marginTop:'10%',
        height:'10%',
        width:'60%',
        backgroundColor:'#FFFFFF',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }

})

export default PasswordGenerator;