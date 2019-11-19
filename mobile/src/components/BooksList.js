import React, { useState, useEffect } from 'react';
import { SafeAreaView, TouchableOpacity, Text, Image, StyleSheet, FlatList } from 'react-native';

import api from '../services/api';

export default function BooksList({ book }) {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        async function loadBooks() {
            const response = await api.get('/books')
            setBooks(response.data);
        }

        loadBooks();
    }, []);
    async function handleSubmit() {
        // email // techs
        // const response = await api.post('/sessions', {
        //     email
        // })
        // const { _id } = response.data;

        // await AsyncStorage.setItem('user', _id);
        // await AsyncStorage.setItem('techs', techs);

        alert('Livro Reservado !');
    }

    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.title}>Livros Disponíveis</Text>

            <FlatList
                style={styles.list}
                data={books}
                keyExtractor={book => book._id}
                showsHorizontalScrollIndicator={true}
                renderItem={({ item }) => (
                    <SafeAreaView style={styles.listItem}>
                        <Text style={styles.bookTitle}>

                            {item.name}
                        </Text>
                        <Text style={styles.books}>
                            <Text
                                style={styles.th}>
                                Autor -
                            </Text>
                            {item.author}
                        </Text>
                        <Text style={styles.books}>
                            <Text
                                style={styles.th}>
                                Editora -
                            </Text>
                            {item.publisher}</Text>
                        <Text style={styles.books}>
                            <Text
                                style={styles.th}>
                                Ano de Publicação -
                            </Text>
                            {item.yearPublication}</Text>
                        <Text style={styles.books}>
                            <Text
                                style={styles.th}>
                                Área -
                            </Text>
                            {item.area}</Text>
                        <Text style={styles.books}>
                            <Text
                                style={styles.th}>
                                Data de Compra -
                            </Text>
                            {item.purchaseDate}</Text>
                        <Text style={styles.price}>{item.pricePaid ? `R$${item.pricePaid}` : 'GRATUITO'}</Text>
                        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                            <Text style={styles.buttonText}> Reservar </Text>
                        </TouchableOpacity>

                    </SafeAreaView>
                )}

            />

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({

    container: {
        marginTop: 30,
        alignItems: 'center'


    },
    title: {
        fontSize: 20,
        color: '#d2d2d2',
        fontWeight: 'bold',
        paddingHorizontal: 20,
        fontFamily: 'KohinoorTelugu-Medium',
        marginBottom: 10,
    },
    bookTitle: {
        fontSize: 20,
        color: '#ffff',
        fontWeight: 'bold',

    },
    th: {
        fontSize: 15,
        color: '#fff',
        fontWeight: 'bold'

    },
    bold: {
        fontWeight: 'bold'
    },
    list: {
        paddingHorizontal: 20,
    },
    listItem: {
        marginRight: 15
    },

    books: {
        fontSize: 15,
        fontWeight: 'normal',
        color: '#fff',
        marginTop: 10,

    },
    price: {
        fontSize: 15,
        color: '#d4d4d4',
        marginTop: 5
    },
    button: {
        height: 32,
        backgroundColor: '#45ADA8',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        marginTop: 20
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    }
});