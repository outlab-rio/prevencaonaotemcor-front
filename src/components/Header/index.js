import React from 'react';
import './style.css';

import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'

//

import logoSC from '../../assets/images/logo-sao-carlos.svg'
import ribbon from '../../assets/images/cancer-ribbon.png'

//

const Header = () => {

  return(

    <header className="header">

      <Link to="/" className="logo">
        <img src={logoSC} alt="São Carlos - Saúde Oncológica" />
      </Link>
      

      <nav>
        <AnchorLink href='#quizcall'>QUIZ</AnchorLink>
        <AnchorLink href='#sinals'>SINAIS E SINTOMAS</AnchorLink>
        <AnchorLink href='#risc'>FATORES DE RISCO</AnchorLink>
        <AnchorLink href='#prevention'>FORMAS DE PREVENÇÂO</AnchorLink>
        <AnchorLink href='#estatistics'>ESTATÍSTICAS</AnchorLink>
        {/* <Link to="/quiz"></Link> 
        <Link to="/sinais-e-sintomas">SINAIS E SINTOMAS</Link>
        <Link to="/fatores-de-risco">FATORES DE RISCO</Link>
        <Link to="/formas-de-prevencao">FORMAS DE PREVENÇÂO</Link>
        <Link to="/estatisticas">ESTATÍSTICAS</Link>
        <Link to="/diagnostico">DIAGNÓSTICO</Link> */}
      </nav>

      <img src={ribbon} alt="Prevenção não tem cor" />

    </header>

  )

};

export default Header;