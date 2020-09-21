import React from 'react';
import './style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faInstagram  } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {

  return(

    <footer>

      <div className="content">

        <div className="redes">

          <p>acompanhe nossas<br/>redes sociais</p>

          <a href="https://www.facebook.com/SaoCarlosSaudeOncologica/" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>

          <a href="https://www.linkedin.com/company/saocarlos-saudeoncologica/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>

          <a href="https://www.instagram.com/saocarlos_saudeoncologica/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>

        </div>

        <div className="link">
          <a href="https://saocarlossaudeoncologica.com.br" target="_blank">saocarlossaudeoncologica.com.br</a>
        </div>

        <div className="clear"></div>

      </div>
      
    </footer>

  )

};

export default Footer;