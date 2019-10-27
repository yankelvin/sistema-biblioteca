import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Switch, Route } from "react-router-dom";

// Pages
import CadastroFuncionarios from "./pages/Funcionarios/CadastroFuncionarios";
import CadastroLivros from "./pages/Livros/CadastroLivros";
import Home from "./pages/Home";
//

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/new/employee" exact={true} component={CadastroFuncionarios} />
        <Route path="/new/book" exact={true} component={CadastroLivros} />
      </Switch>
    </BrowserRouter>
  );
}
