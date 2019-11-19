import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Container } from './styles';
import "./Menu.css";

import MenuIcon from "@material-ui/icons/Menu";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import GroupAddOutlinedIcon from "@material-ui/icons/GroupAddOutlined";
import BookOutlinedIcon from "@material-ui/icons/BookOutlined";
import LocalLibraryOutlinedIcon from "@material-ui/icons/LocalLibraryOutlined";
import MenuBookOutlinedIcon from "@material-ui/icons/MenuBookOutlined";

//Components

import CadastroLivro from "../Livros/CadastroLivros";
import CadastroFuncionario from "../Funcionarios/CadastroFuncionario";
import Livro from "../Livros/Livros";
import Funcionarios from "../Funcionarios/Funcionarios";

//import ListMember from "../Funcionarios/ListFuncionario";

const initialState = {
  newBook: false,
  newMember: false,
  listBook: false,
  listMember: false
};

export default class Menu extends Component {
  constructor() {
    super();
    this.state = {
      newBook: false,
      newMember: false,
      listBook: false,
      listMember: false
    };
  }

  renderComponent = e => {
    this.setState(initialState);
    this.setState({ [e.target.name]: true });
  };

  render() {
    return (
      <div>
        <div className="vertical-menu">
          <a href="#" className="activate">
            {" "}
            <LocalLibraryOutlinedIcon /> Menu
          </a>

          <button name="listBook" onClick={this.renderComponent}>
            <MenuBookOutlinedIcon /> Listar livros
          </button>

          <button name="newBook" onClick={this.renderComponent}>
            <BookOutlinedIcon /> Adicionar novo livro
          </button>

          <button name="listMember" onClick={this.renderComponent}>
            <PeopleAltOutlinedIcon />
            Lista de Funcionarios
          </button>

          <button name="newMember" onClick={this.renderComponent}>
            <GroupAddOutlinedIcon /> Adicionar novo membro
          </button>
        </div>

        {this.state.newBook === true ? <CadastroLivro /> : ""}
        {this.state.newMember === true ? <CadastroFuncionario /> : ""}
        {this.state.listBook === true ? <Livro /> : ""}
        {this.state.listMember === true ? <Funcionarios /> : ""}
      </div>
    );
  }
}
