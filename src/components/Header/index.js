import React from 'react';
import './style.css';

//

import logoSC from '../../assets/images/logo-sao-carlos.svg'
import ribbon from '../../assets/images/cancer-ribbon.png'

//

const Header = () => {

  return(

    <header>

      <img src={logoSC} alt="São Carlos - Saúde Oncológica" />

      <nav>
        <a href="#">QUIZ</a>
        <a href="#">SINAIS E SINTOMAS</a>
        <a href="#">FATORES DE RISCO</a>
        <a href="#">FORMAS DE PREVENÇÂO</a>
        <a href="#">ESTATÍSTICAS</a>
        <a href="#">DIAGNÓSTICO</a>
      </nav>

      <img src={ribbon} alt="Prevenção não tem cor" />

    </header>

  )

};

export default Header;