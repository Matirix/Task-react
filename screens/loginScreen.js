import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';




const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //navigatiing
    const navigation = useNavigation()

    return (  
        <KeyboardAvoidingView
        style={styles.container}
        behaviour="padding">
        <View style={styles.inputContainer}>

            {/* Email */}
            <TextInput
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.input}>
            </TextInput>

            {/* Password */}
            <TextInput
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.input}>
            </TextInput>
        </View>

        <View style={styles.buttonContainer}>
            {/* Login */}
            <TouchableOpacity
                onPress={() => {}}
                style={styles.button}>
                <Text style={[styles.button, styles.buttonText]}> Login </Text>
            </TouchableOpacity>

            {/* Signup */}
            <TouchableOpacity
                onPress={() => {}}
                style={styles.button}>
                <Text style={[styles.button, styles.buttonText]}> Register </Text>
            </TouchableOpacity>

            {/* Proceed as tester */}
            <TouchableOpacity
                onPress={() => {navigation.navigate("Home")}}
                style={styles.button}>
                <Text style={[styles.button, styles.buttonText]}> Proceed as Tester </Text>
            </TouchableOpacity>

        </View>


        </KeyboardAvoidingView>

    );
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%',
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:  40,
    },
    button: {
        backgroundColor: "#0782F9",
        width: '100%',
        padding: 5,
        borderRadius: 10,   
        alignItems: 'center',
        marginTop: 5
    },
    buttonOutline: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16
    }
    
})



export default LoginScreen;