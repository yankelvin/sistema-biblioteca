import React, {Fragment } from 'react';
import Header from './Layout/Header.js';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import "date-fns";
import axios from 'axios';
import BotaoSucesso from './components/BotaoSucesso';


//import Grid from '@material-ui/core/Grid';


export default class PersonList extends React.Component {
    constructor() {
        super();
        //this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            name: '',
            oabNumber: '',
            //password: '',
        }
    }
  
    handleNameChange = event => {this.setState({ name: event.target.value })}
    handleOabNumberChange = event => {this.setState({ oabNumber: event.target.value })}
  
    handleSubmit = event => {
      event.preventDefault();

      const { name, oabNumber } = this.state;
  
      axios.post('http://localhost:3333/api/new/employee', {
           name: this.state.name,
           oabNumber: this.state.oabNumber })
        .then(res => 
            {
          console.log(res);
          console.log(res.data);
        })
        this.props.history.push('/');


    }

   
    render() {
    
    return <Fragment>
        <Header />

        <div align="center">
            <br />
            <br />
            <code>
                <h2>
                    Cadastro de Funcionário
                </h2>
            </code>
            <form onSubmit={this.handleSubmit}>

            <TextField
                id="name"
                label="Nome do Funcionário*"
                name = "this.state.name"
                // value={values.name}
                onChange={this.handleNameChange}
                margin="normal"
                variant="standard"
                style={{ width: 550 }}

            />
            <br />
            <TextField
                id="oabNumber"
                label="Número OAB"
                name = "this.state.oabNumber"
                // value={values.name}
                onChange={this.handleOabNumberChange}
                margin="normal"
                variant="standard"
                style={{ width: 550 }}

            />
        <br></br>
            <BotaoSucesso href = "/"/>
            <Button href="/" color="primary">
                Cancelar
                  </Button>



            <br />

            </form>


        </div>
    </Fragment>

}
}