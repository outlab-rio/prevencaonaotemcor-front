import React from 'react';
import './style.css';

import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'

//

import logoSC from '../../assets/images/logo-sao-carlos-color.svg'
import ribbon from '../../assets/images/cancer-ribbon-inner.png'

//

const HeaderInner = () => {

  return(

    <header className="headerinner">

      <Link to="/" className="logo">
        <img src={logoSC} alt="São Carlos - Saúde Oncológica" />
      </Link>
      

      <nav>
        <Link to='/quiz'>QUIZ</Link>
        <Link to='/#words'>Depoimentos</Link>
        <Link to='/#sendword'>O que o câncer significa para você</Link>
        <Link to='/#tips'>Mais sobre o câncer de mama e próstata</Link>
      </nav>

      <img src={ribbon} alt="Prevenção não tem cor" />

    </header>

  )

};

export default HeaderInner;