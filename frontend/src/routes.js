import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Switch, Route } from "react-router-dom";

// Pages
import CadastroFuncionario from "./pages/Funcionarios/CadastroFuncionario";
import CadastroLivros from "./pages/Livros/CadastroLivros";
import Login from "./pages/Login/Login";
import Home from "./pages/Home";
//

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" exact={true} component={Home} />
        <Route path="/new/employee" exact={true} component={CadastroFuncionario} />
        <Route path="/new/book" exact={true} component={CadastroLivros} />
        <Route path="/" exact={true} component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
