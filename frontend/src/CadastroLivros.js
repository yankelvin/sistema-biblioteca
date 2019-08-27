import React, { Fragment } from 'react';
import Header from './Layout/Header.js';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import "date-fns";
import datePicker from './Components/datePicker.js'
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

    state = {
        nomeLivro: '',
        nomeAutor: '',
        nomeEditora: '',
        area: '',

    }


    handleChange = event => {
        this.setState({ name: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();


        const user = {
            name: this.state.name
        };

        axios.post('http://localhost:3000/api/new/book', { user })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }


    render() {

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
                        id="nomeLivro"
                        label="Nome do Livro"
                        //className={classes.textField}
                        // value={values.name}
                        // onChange={handleChange('name')}
                        margin="normal"
                        variant="standard"
                        style={{ width: 550 }}

                    />
                    <br />
                    <TextField
                        id="nomeAutor"
                        label="Nome do Autor"
                        //className={classes.textField}
                        // value={values.name}
                        // onChange={handleChange('name')}
                        margin="normal"
                        variant="standard"
                        style={{ width: 550 }}

                    />
                    <br />
                    <TextField
                        id="nomeEditora"
                        label="Nome da Editora"
                        //className={classes.textField}
                        // value={values.name}
                        // onChange={handleChange('name')}
                        margin="normal"
                        variant="standard"
                        style={{ width: 550 }}

                    />

                    <br />
                    <TextField
                        id="area"
                        label="Área"
                        //className={classes.textField}
                        // value={values.name}
                        // onChange={handleChange('name')}
                        margin="normal"
                        variant="standard"
                        style={{ width: 550 }}
                    />

                    <br />
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                    views={["year"]}
                    margin="normal"
                    id="anoPub"
                    label="Ano de Publicação"
                    format="yyyy"
                  //  value={selectedDate}
                    //onChange={handleDateChange}
                    KeyboardButtonProps={{
                        "aria-label": "change date"
                    }}
                    style={{ width: 275 }}

                />
                <KeyboardDatePicker
                    margin="normal"
                    id="dataCompra"
                    label="Data de Compra"
                    format="dd/mm/yyyy"
                   // value={selectedDate2}
                   // onChange={handleDateChange2}
                    KeyboardButtonProps={{
                        "aria-label": "change date"
                    }}
                    style={{ width: 275 }}

                />

                    </MuiPickersUtilsProvider>

                    <br />

                    <InputLabel
                        htmlFor="preco"
                        style={{ marginRight: 450 }}
                    >
                        Preço do Livro</InputLabel>
                    <Input
                        id="preco"
                        type="number"
                        //  value={values.amount}
                        // onChange={handleChange('amount')}
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        style={{ marginRight: 100, width: 240 }}

                    />

                    <Button variant="contained" type="submit" color="primary" size="large" >
                        <SaveIcon />
                        Salvar
                </Button>
                    <Button href="/" color="primary">
                        Cancelar
                  </Button>



                    <br />

                </form>


            </div>
        </Fragment>

    }
}