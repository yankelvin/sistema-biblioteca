import React, { Component } from "react";

import api from "../../services/api";

import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import UpdateIcon from "@material-ui/icons/Update";

// import { Container } from './styles';
import "./Funcionario.css";

export default class Funcionarios extends Component {
  constructor() {
    super();
    this.state = {
      employees: []
    };
  }

  async componentDidMount() {
    const response = await api.get("employees");
    this.setState({ employees: response.data });
    console.log(response.data);
  }

  removeEmployee = async _id => {
    const response = await api.delete("delete/employee", _id);
    console.log(response.data);
  };

  render() {
    return (
      <div className="container-customers">
        <table id="customers">
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Password</th>
          </tr>

          {this.state.employees.map(employee => (
            <tr>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.password}</td>
              <td>
                <button id="update">
                  <UpdateIcon />
                </button>
              </td>
              <td>
                <button id="trash" onClick={() => this.removeEmployee(employee._id)}>
                  <DeleteForeverIcon />
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}
