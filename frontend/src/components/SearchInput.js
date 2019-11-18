import React, { Component } from "react";

import "./style.css";

export default class components extends Component {
  render() {
    return (
      <div className="button-container">
        <input type="text" name="InputSearch" id="inputSearch" placeholder="Pesquisar" />
      </div>
    );
  }
}
