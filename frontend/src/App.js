import React, { Fragment, useState, useEffect, } from 'react';
import Header from './Layout/Header.js';
import Button from '@material-ui/core/Button';
import api from '../src/services/api'
import { Backdrop } from '@material-ui/core';

export default function App() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        async function loadBooks() {

            // const user_id = localStorage.getItem('user');
            const response = await api.get('/books/');
            setBooks(response.data);
        }

        loadBooks();
    }, []);

    return (


        <>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

            <Header />
            <br />
            <br />
            <div align='center'>
                <h3>Lista de Livros Disponíveis</h3>
                <Button href="/cadastroFuncionarios" variant="contained" color="primary" size="small" >
                    Cadastro de Funcionários
            </Button>

                <Button href="/cadastroLivros" variant="contained" size="small" >
                    Cadastro de Livros
            </Button>



            </div>
            <table class="table table-bordered table-hover" style={{ width: "100%" }}>
                <thead>
                    <th>Nome do Livro</th>
                    <th>Autor</th>
                    <th>Editora</th>
                    <th>Ano de Publicação</th>
                    <th>Área</th>
                    <th>Data de Compra</th>
                    <th>Preço do Livro</th>
                </thead>
                {books.map(books => (


                    <tbody>
                        <tr>
                            <td>{books.name}</td>
                            <td>{books.author}</td>
                            <td>{books.publisher}</td>
                            <td>{books.yearPublication}</td>
                            <td>{books.area}</td>
                            <td>{books.purchaseDate}</td>
                            <td>R$ {books.pricePaid}</td>
                        </tr>
                    </tbody>



                ))}
            </table>



        </>

    )
}
