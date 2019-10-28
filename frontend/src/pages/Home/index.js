// React
import React, { Component } from "react";

// Material Ui
import Button from "@material-ui/core/Button";

// Router
import { Link } from "react-router-dom";

//Utils
import api from "../../services/api";

export default class Home extends Component {
  state = {
    feed: []
  };

  async componentDidMount() {
    const response = await api.get("books");
    this.setState({ feed: response.data });
  }

  render() {
    return (
      <>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        ></link>
        <script
          src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
          integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
          integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
          integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
          crossorigin="anonymous"
        ></script>
        <br />
        <br />
        <div align="center">
          <h3>Lista de Livros Disponíveis</h3>

          <Link to={"/new/employee"}>
            <Button href="/new/employee" variant="contained" color="primary" size="small">
              Cadastro de Funcionários
            </Button>
          </Link>

          <Link to={"/new/book"}>
            <Button variant="contained" color="primary" size="small">
              {" "}
              Cadastro de Livros
            </Button>
          </Link>
        </div>

        <main role="main">
          <div class="album py-5 bg-light">
            <div class="container">
              <div class="row">
                {this.state.feed.map(book => (
                  <div class="col-md-4">
                    <div class="card mb-4 shadow-sm">
                      <img
                        src={`http://localhost:3333/api/files/${book.image}`}
                        class="card-img-top"
                        alt={`${book.image}`}
                      />
                      <div class="card-body">
                        <strong class="d-inline-block mb-2 text-success">{this.props.area}</strong>

                        <p class="card-text">
                          <a class="text-dark" href="#">
                            {" "}
                            <b> {book.name}</b>
                          </a>
                          <br />
                          <div class="mb-1 text-muted">
                            por {book.author} | {book.purchaseDate}
                          </div>
                        </p>

                        <p>R$ {this.props.pricePaid}</p>
                        <div class="d-flex justify-content-between align-items-center">
                          <div class="btn-group">
                            <Link to={""}>
                              <button type="button" class="btn btn-sm btn-outline-secondary">
                                Ver
                              </button>
                            </Link>
                          </div>
                          <small class="text-muted">9 mins</small>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}
