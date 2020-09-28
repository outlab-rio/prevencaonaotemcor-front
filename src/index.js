import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import App from './pages/Main/';
import QuizPage from './pages/Quiz'
import SendVideo from './pages/SendVideo'
import Videos from './pages/Videos';

import './assets/css/main.css'
import './assets/css/mobile.css'

ReactDOM.render(
  <>
    <BrowserRouter>
      <Switch>
          <Route path="/" exact={true} component={App} />
          {/* <Route path="/estatisticas" component={Estatistics} />
          <Route path="/diagnostico" component={Diagnosis} />
          <Route path="/formas-de-prevencao" component={Prevention} />
          <Route path="/fatores-de-risco" component={Risc} />
          <Route path="/sinais-e-sintomas" component={Sinals} /> */}
          <Route path="/quiz" component={QuizPage} />
          <Route path="/enviar-depoimento" component={SendVideo} />
          <Route path="/depoimentos" component={Videos} />
      </Switch>
    </ BrowserRouter>
  </>,
  document.getElementById('root')
);