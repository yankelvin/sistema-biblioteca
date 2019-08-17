import React, { Component } from 'react';

// import { Container } from './styles';

//import FormBook from './components/FormBook/FormBook';
import api from '../../services/api';


export default class Home extends Component {
  constructor(){
    super();
    this.state = {
      books : []
    }
  }

  getBooks = () => {
    let response = api.get('books');
    response.then( (value) => { this.setState( {books: value.data})});
    
  }

  componentDidMount(){
    this.getBooks();
  }

  render() {
    return (
      <div>
        <h1>This is the home! </h1>
        <div>
          {this.state.books.map( (book) => {
            return (
              <div>
                <h1>{book.title}</h1>
                <h3>{book.subtitle}</h3>
                <p>{book.preface}</p>
                <p>{book.createdAt}</p>
                <p>{book.updatedAt}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
