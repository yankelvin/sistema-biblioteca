import React, { useState, useEffect } from 'react';
import { View, AsyncStorage, KeyboardAvoidingView, Platform, Image, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';

import api from '../services/api';

import logo from '../assets/logo.png';
import { LinearGradient } from 'expo-linear-gradient';


export default function Login({ navigation }) {
    // const [email, setEmail] = useState('');
    // const [techs, setTechs] = useState('');

    // useEffect realiza uma ação assim que o usuario
    // chega em determinada  tela, nesse caso
    // a tela de Login.
    // useEffect(() => {
    //     AsyncStorage.getItem('user').then(user => {
    //         if(user){
    //  navigation.navigate('List');

    //     })
    // }, []); 

    async function handleSubmit() {
        // email // techs
        // const response = await api.post('/sessions', {
        //     email
        // })
        // const { _id } = response.data;

        // await AsyncStorage.setItem('user', _id);
        // await AsyncStorage.setItem('techs', techs);

        navigation.navigate('Home');
    }

    return (

        <LinearGradient
            colors={['#9849c1', '#7159c1']}
            style={styles.linear}
        >

            <KeyboardAvoidingView behavior="padding" enabled={Platform.OS === 'ios'} style={styles.container}>


                <View style={styles.form}>
                    <Text style={styles.label}>SEU E-MAIL</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Seu e-mail"
                        placeholderTextColor="#ddd"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}

                    // value={email}
                    // onChangeText={setEmail}
                    />
                    <Text style={styles.label}>Senha</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Informe a Senha"
                        placeholderTextColor="#ddd"
                        autoCorrect={false}
                        textContentType="password"
                        secureTextEntry={true}

                    // value={techs}
                    // onChangeText={setTechs}

                    />
                    <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                        <Text style={styles.buttonText}> Entrar </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleSubmit} style={styles.buttonW}>
                        <Text style={styles.buttonText}> Ver Livros </Text>
                    </TouchableOpacity>
                </View>

            </KeyboardAvoidingView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    linear: {
        flex: 1
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },

    label: {
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 8
    },
    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30
    },
    input: {
        borderWidth: 1,
        borderColor: "#ddd",
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#fff',
        height: 44,
        marginBottom: 20,
        borderRadius: 6

    },
    buttonW: {
        height: 42,
        backgroundColor: '#7159c1',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        marginTop: 10
    },
    button: {
        height: 42,
        backgroundColor: '#45ADA8',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    }
})