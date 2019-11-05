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
    if (id != "5dc1cf33e4caa528dcc63d6b") {
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
      </div>
    );
  }
}
