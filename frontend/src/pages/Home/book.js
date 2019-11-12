import React, { Component } from "react";

// Router
import { Link } from "react-router-dom";

//Utils
import api from "../../services/api";

export default class Book extends Component {
  constructor(props) {
    super(props);
    this.reserveBook = this.reserveBook.bind(this);
  }

  reserveBook = async e => {
    e.preventDefault();
    const response = await api.post("new/reservedBook", {
      book_Id: this.props.book._id,
      emp_Id: localStorage.id
    });
    console.log(response);
    if (response.status === 200) {
      alert(`Livro ${response.data["200"]} reservado!`);
    }
  };

  render() {
    return (
      <div className="col-md-4">
        <div className="card mb-4 shadow-sm">
          <img
            src={`http://localhost:3333/api/files/${this.props.book.image}`}
            className="card-img-top"
            alt={`${this.props.book.image}`}
          />
          <div className="card-body">
            <strong className="d-inline-block mb-2 text-success">{this.props.book.area}</strong>

            <div className="card-text">
              <a className="text-dark" href="book-info">
                {" "}
                <b> {this.props.book.name}</b>
              </a>
              <br />
              <p className="mb-1 text-muted">
                por {this.props.book.author} | {this.props.book.purchaseDate}
              </p>
            </div>

            <p>R$ {this.props.book.pricePaid}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <Link to={""}>
                  <button type="button" className="btn btn-sm btn-outline-secondary">
                    Ver
                  </button>
                </Link>

                <button
                  type="button"
                  className="ml-2 btn btn-sm btn-outline-secondary"
                  onClick={this.reserveBook}
                >
                  Reservar
                </button>
              </div>
              <small className="text-muted">Editora: {this.props.book.publisher}</small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
