import React, { Fragment } from 'react';
import Header from './Layout/Header.js';
import Button from '@material-ui/core/Button';



//import Grid from '@material-ui/core/Grid';


export default class PersonList extends React.Component {
   

    render() {

        return <Fragment>
            <Header />
            <br></br>
<div align='center'>
            <Button href="/cadastroFuncionarios" variant="contained" color="primary" size="large" >
                Cadastro de Funcionários
            </Button>
            <br />
            <Button href="/cadastroLivros" variant="contained" size="large" >
                Cadastro de Livros
            </Button>
            </div>
        </Fragment>

    }
}