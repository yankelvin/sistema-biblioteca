import React, { Component } from "react";
import { Redirect } from "react-router";

import api from "../services/api";

import "./style.css";

export default class components extends Component {
  constructor() {
    super();
    this.state = {
      inputSearch: "",
      error: "",
      statusCode: 1
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ inputSearch: "" });
    const data = {
      name: this.state.inputSearch
    };
    const response = await api.get("books", data);
    console.log(response.data);
    console.log(response.status);
  };

  render() {
    return (
      <div className="button-container">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="InputSearch"
            id="inputSearch"
            onChange={this.handleChange}
            placeholder="O que você procura?"
          />
        </form>
        {this.state.statusCode === 200 ? (
          <Redirect to="/" />
        ) : (
          <Redirect to={{ pathname: "/not-found", state: { name: this.state.inputSearch } }} />
        )}
      </div>
    );
  }
}
