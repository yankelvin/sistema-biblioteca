import React, { Fragment } from 'react';
import Header from './Layout/Header.js';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
//import "date-fns";
import BotaoSucesso from './components/BotaoSucesso';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';


//import Grid from '@material-ui/core/Grid';


export default class PersonList extends React.Component {

    constructor() {
        super();
        this.state = {
            name: '',
            author: '',
            publisher: '',
            yearPublication: '',
            area: '',
            purchaseDate: '',
            pricePaid: '',
        }
    }

    handleNameChange = event => {this.setState({ name: event.target.value })}
    handleAuthorChange = event => {this.setState({ author: event.target.value })}
    handlePublisherChange = event => {this.setState({ publisher: event.target.value })}
    handleYearPublicationChange = event => {this.setState({ yearPublication: event.target.value })}
    handleAreaChange = event => {this.setState({ area: event.target.value })}
    handlePurchaseDateChange = event => {this.setState({ purchaseDate: event.target.value })}
    handlePricePaidChange = event => {this.setState({ pricePaid: event.target.value })}

    handleSubmit = event => {
        event.preventDefault();

        const { name, author, publisher, yearPublication, area, purchaseDate, pricePaid } = this.state;

        axios.post('http://localhost:3333/api/new/book', { name: this.state.name, author: this.state.author, publisher: this.state.publisher, yearPublication: this.state.yearPublication, area: this.state.area, purchaseDate: this.state.purchaseDate, pricePaid: this.state.pricePaid })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            this.props.history.push('/');

    }


    render() {
        //const { name, author, publisher, yearPublication, area, purchaseDate, pricePaid } = this.state;

        return <Fragment>
            <Header />

            <div align="center">
                <br />
                <br />
                <code>
                    <h2>
                        Cadastro de Livros
                    </h2>
                </code>
                <form onSubmit={this.handleSubmit}>

                    <TextField
                        name = "this.state.name"
                        id="name"
                        label="Nome do Livro"
                        //className={classes.textField}
                        //value = { name }
                        onChange = {this.handleNameChange}
                        margin="normal"
                        variant="standard"
                        style={{ width: 550 }}

                    />
                    <br />
                    <TextField
                        name = "this.state.author"
                        id="author"
                        label="Nome do Autor"
                        //className={classes.textField}
                        //value={ author }
                        onChange={this.handleAuthorChange}
                        margin="normal"
                        variant="standard"
                        style={{ width: 550 }}

                    />
                    <br />
                    <TextField
                        name = "this.state.publisher"
                        id="publisher"
                        label="Nome da Editora"
                        //className={classes.textField}
                        //value = {publisher}
                        onChange={this.handlePublisherChange}
                        margin="normal"
                        variant="standard"
                        style={{ width: 550 }}

                    />

                    <br />
                    <TextField
                        name = "this.state.area"
                        id="area"
                        label="Área"
                        //className={classes.textField}
                        //value={area}
                        onChange={this.handleAreaChange}
                        margin="normal"
                        variant="standard"
                        style={{ width: 550 }}
                    />

                    <br />

                    

                    <br />
                     <TextField
                        name = "this.state.yearPublication"
                        id="yearPublication"
                        label="Ano de Publicação"
                        //className={classes.textField}
                        //value = {yearPublication}
                        onChange={this.handleYearPublicationChange}
                        margin="normal"
                        variant="standard"
                        style={{ width: 550 }}

                    />

                    <br />
                    <TextField
                        name = "this.state.purchaseDate"
                        id="purchaseDate"
                        label="Data de Compra"
                        //className={classes.textField}
                        //value = {purchaseDate}
                        onChange={this.handlePurchaseDateChange}
                        margin="normal"
                        variant="standard"
                        style={{ width: 550 }}

                    />    

                    <br />
                    <InputLabel
                        htmlFor="preco"
                        style={{ marginRight: 450 }}
                    >
                        Preço do Livro</InputLabel>
                    <Input
                        name = "this.state.pricePaid"
                        id="pricePaid"
                        type="number"
                        //value={pricePaid}
                        onChange={this.handlePricePaidChange}
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        style={{ marginRight: 310, width: 240 }}

                    />

                <BotaoSucesso />
                
                    
                    <Button href="/" color="primary">
                        Cancelar
                  </Button>



                    <br />

                </form>


            </div>
        </Fragment>

    }
}