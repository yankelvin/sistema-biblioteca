import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, Image, StyleSheet, AsyncStorage } from 'react-native';
import styled from 'styled-components/native';
//import { disableExpoCliLogging } from 'expo/build/logs/Logs';
import Lottie from 'lottie-react-native';
import { LinearGradient } from 'expo-linear-gradient';

import BooksList from '../components/BooksList'

import logo from '../assets/topo.png';
import book from '../../books.json';

export default function List() {

    const [books, setBooks] = useState([]);

    useEffect(() => {

        setBooks(AsyncStorage.getItem('books'));

    }, []);

    return (
        <>
            <LinearGradient
                colors={['#7159c1', '#9849c1']}
                style={styles.linear}
            >
                <SafeAreaView>

                    <Lottie style={styles.logo} source={book} autoPlay />
                    <BooksList />

                </SafeAreaView>
            </LinearGradient>
        </>
    )
}

const styles = StyleSheet.create({
    linear: {
        flex: 1
    },

    logo: {
        height: 100,
        alignSelf: 'center'

    },
});


