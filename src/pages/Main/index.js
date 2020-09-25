import React from 'react';
import { Link } from 'react-router-dom';

import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

import './style.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import PreventionSection from '../../components/Prevention';
import WordCloud from '../../components/WordCloud';
import Sinals from '../../components/Sinals';
import Risc from '../../components/Risc';
import Prevention from '../../components/Prevention';
import Estatistics from '../../components/Estatistics';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import { faFolder } from '@fortawesome/free-regular-svg-icons'

import videotest from '../../assets/images/test-video.mp4'

import halfpink from '../../assets/images/half-circle-solid-pink.svg'
import doubleblue from '../../assets/images/double-circle-solid-blue.svg'
import doublepink from '../../assets/images/double-circle-solid-pink.svg'

function App() {

  return (
    <div className="App">

      <Header />

      <section className="video">

        <video loop autoPlay muted >
          <source src={videotest} type="video/mp4" />
        </video>

        <div className="overlay"></div>

        <div className="content">

          <span className="button border">Assista aos depoimentos</span>

          <p><strong>Grave um depoimento<br/>sobre a importância da conscientização,</strong><br/>compartilhe nas suas redes e faça parte<br/>desse vídeo colaborativo!</p>

          <button className="blue"><FontAwesomeIcon icon={faFolder} /> Procurar</button>

          <button className="pink"><FontAwesomeIcon icon={faCamera} /> Gravar</button>

          <div className="clear"></div>

          <FontAwesomeIcon icon={faAngleDoubleDown} className="goto" />

        </div>

      </section>

      <section className="sendword">

        <div className="content">

          <img src={halfpink} alt="" className="halfpink" />

          <img src={doubleblue} alt="" className="doubleblue" />

          <p>A São Carlos criou a campanha prevenção não tem cor para mostrar a importância do cuidado com você e com quem você ama. Misturamos rosa com azul para conscientizar que outubro rosa e novembro azul não é apenas sobre o câncer de mama e o de próstata. É sobre um se importar com o outro. Homens e mulheres valorizando, acima de tudo, a vida. <strong>Participe da nossa campanha!</strong></p>
          
        </div>

      </section>

      <WordCloud />

      <section className="sendword" id="sendword">

        <div className="content">

          <h3>Diga em uma palavra o que significa o cancêr para você</h3>

          <form>
            <input type="text" placeholder="DIGITE AQUI" />
          </form>

        </div>

      </section>

      <PreventionSection />  

      <section className="quizcall" id="quizcall">

        <div className="content">

          <img src={halfpink} alt="" className="halfpink" />
          <img src={doublepink} alt="" className="doublepink" />

          <h2>Quizz</h2>

          <p>Quanto mais informação você tem,<br/><strong>maior é a chance de cuidar de você<br/>e de quem você ama.</strong></p>

          <p><strong>Responda nossas perguntas</strong><br/>e descubra o quanto você conhece<br/>sobre câncer de mama e de próstata.</p>

          <Link to="/quiz" className="buttonquiz"><span>PARTICIPAR DO QUIZ</span></Link>

        </div>

      </section>

      {/* <Sinals />

      <Risc />

      <Estatistics /> */}

      <Footer />    

    </div>
  );
}

export default App;
