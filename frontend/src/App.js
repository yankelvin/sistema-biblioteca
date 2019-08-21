import React, {Fragment } from 'react';
import Header from './Layout/Header.js';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from "@material-ui/pickers";
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
//import Grid from '@material-ui/core/Grid';




export default function MaterialUIPickers() {
    //The first commit of Material-UI

    const [selectedDate, setSelectedDate] = React.useState(
        new Date("2019-08-18T21:11:54")
    );

    function handleDateChange(date) {
        setSelectedDate(date);
    }
    const [selectedDate2, setSelectedDate2] = React.useState(
        new Date("2019-08-18T21:11:54")
    );

    function handleDateChange2(date2) {
        setSelectedDate2(date2);
    }


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
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        "aria-label": "change date"
                    }}
                    style={{ width: 275 }}

                />
            </MuiPickersUtilsProvider>


            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    margin="normal"
                    id="dataCompra"
                    label="Data de Compra"
                    format="dd/mm/yyyy"
                    value={selectedDate2}
                    onChange={handleDateChange2}
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
                style={{marginRight: 100, width: 240 }}

            />

            <Button variant="contained" color="primary" size="large" >
                <SaveIcon />
                Salvar
                </Button>
            <Button color="primary">
                Cancelar
                  </Button>



            <br />



        </div>
    </Fragment>

}
