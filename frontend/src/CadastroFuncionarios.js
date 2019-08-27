import React, {Fragment } from 'react';
import Header from './Layout/Header.js';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import "date-fns";
import axios from 'axios';

//import Grid from '@material-ui/core/Grid';


export default class PersonList extends React.Component {
    state = {
        name: '',
        oabNumber: '',
    

    }
  
    handleChange = event => {
      this.setState({ name: event.target.value });
      this.setState({ oabNumber: event.target.value });

    }
  
    handleSubmit = event => {
      event.preventDefault();
    
  
      const user = {
        name: this.state.name,
        oabNumber: this.state.oabNumber

      };
  
      axios.post('/api/new/employee', { user })
        .then(res => 
            {
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
                    Cadastro de Funcionário
                </h2>
            </code>
            <form onSubmit={this.handleSubmit}>

            <TextField
                id="name"
                label="Nome do Funcionário*"
                //className={classes.textField}
                // value={values.name}
                // onChange={handleChange('name')}
                margin="normal"
                variant="standard"
                style={{ width: 550 }}

            />
            <br />
            <TextField
                id="oabNumber"
                label="Número OAB"
                //className={classes.textField}
                // value={values.name}
                // onChange={handleChange('name')}
                margin="normal"
                variant="standard"
                style={{ width: 550 }}

            />
        <br></br>
            <Button  variant="contained" type="submit" color="primary" size="large" >
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