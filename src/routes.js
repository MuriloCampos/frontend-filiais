import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Atualizar from './pages/Atualizar';
import Cadastro from './pages/Cadastro';
import Lista from './pages/Lista';
import Login from './pages/Login';
import Detalhes from './pages/Detalhes';
import NovaFilial from './pages/NovaFilial';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/filiais" component={Lista}/>
                <Route path="/cadastro" component={Cadastro}/>
                <Route path="/atualizar" component={Atualizar}/>
                <Route path="/detalhes" component={Detalhes}/>
                <Route path="/novafilial" component={NovaFilial}/>
            </Switch>
        </BrowserRouter>
    );
}