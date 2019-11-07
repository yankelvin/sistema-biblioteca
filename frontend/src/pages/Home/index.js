// React
import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

// Router
import { Link } from "react-router-dom";

//Utils
import api from "../../services/api";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.onlyAdm = this.onlyAdm.bind(this);
  }

  state = {
    feed: []
  };

  async componentDidMount() {
    const response = await api.get("books");
    this.setState({ feed: response.data });
  }

  onlyAdm = function() {
    let id = localStorage.id;
    if (id !== "5dc1cf33e4caa528dcc63d6b") {
      document.getElementById("btnNewBook").classList.add("d-none");
      document.getElementById("btnNewEmp").classList.add("d-none");
    } else {
      document.getElementById("btnNewBook").classList.remove("d-none");
      document.getElementById("btnNewEmp").classList.remove("d-none");
    }
  };

  render() {
    return (
      <div className="container" onMouseOver={this.onlyAdm}>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ height: "450px" }}
              src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1453&q=80"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ height: "450px" }}
              src="https://images.unsplash.com/photo-1551029506-0807df4e2031?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1491&q=80"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ height: "450px" }}
              src="https://abrilexame.files.wordpress.com/2017/10/maskarad.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>

        <main role="main" className="mt-5 text-center">
          <h3>Lista de Livros Disponíveis</h3>
          <div className="album py-5 bg-light">
            <div className="container">
              <div className="row">
                {this.state.feed.map(book => (
                  <div key={book.name} className="col-md-4">
                    <div className="card mb-4 shadow-sm">
                      <img
                        src={`http://localhost:3333/api/files/${book.image}`}
                        className="card-img-top"
                        alt={`${book.image}`}
                      />
                      <div className="card-body">
                        <strong className="d-inline-block mb-2 text-success">{book.area}</strong>

                        <div className="card-text">
                          <a className="text-dark" href="book-info">
                            {" "}
                            <b> {book.name}</b>
                          </a>
                          <br />
                          <p className="mb-1 text-muted">
                            por {book.author} | {book.purchaseDate}
                          </p>
                        </div>

                        <p>R$ {book.pricePaid}</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <Link to={""}>
                              <button type="button" className="btn btn-sm btn-outline-secondary">
                                Ver
                              </button>
                            </Link>
                          </div>
                          <small className="text-muted">Editora: {book.publisher}</small>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
