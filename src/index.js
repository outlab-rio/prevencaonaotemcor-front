import React from 'react';
import ReactDOM from 'react-dom';

import App from './pages/Main/';
//import Estatistics from './pages/Estatistics'
//import Diagnosis from './pages/Diagnosis'
//import Prevention from './pages/Prevention'
import QuizPage from './pages/Quiz'
//import Risc from './components/Risc'
import SendVideo from './pages/SendVideo'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './assets/css/main.css'

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
      </Switch>
    </ BrowserRouter>
  </>,
  document.getElementById('root')
);