import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import ReactModal from 'react-modal';

import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

import './style.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import PreventionSection from '../../components/Prevention';
import WordCloud from '../../components/WordCloud';
import SendWord from '../../components/SendWord';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faAngleDoubleDown, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faFolder } from '@fortawesome/free-regular-svg-icons'

import videopntc from '../../assets/images/video-pntc.mp4'

import halfpink from '../../assets/images/half-circle-solid-pink.svg'
import doubleblue from '../../assets/images/double-circle-solid-blue.svg'
import doublepink from '../../assets/images/double-circle-solid-pink.svg'
import doublecirclephototwo from '../../assets/images/double-circle-photo-2.png'

import doublecirclezig from '../../assets/images/double-circle-zig-1.png'
import doublecirclehalf from '../../assets/images/double-circle-half-1.png'
import halfzigblue from '../../assets/images/half-circle-zig-blue.png'
import doublecirclephotoone from '../../assets/images/double-circle-photo-1.png'

function App() {

  const [showModal, setshowModal] = useState(false);
  const [wordslide, setwordSlide] = useState(['coragem', 'força', 'superação', 'amor']);

  function changeWord() {
    setInterval(function() {
      var rand = Math.floor(Math.random() * 4);
      document.getElementById("wordone").innerHTML = wordslide[rand];
      document.getElementById("wordtwo").innerHTML = wordslide[rand];
      document.getElementById("wordthree").innerHTML = wordslide[rand];
    }, 2000);
  }

  useEffect(() => {
    //changeWord();
  }, [])

  return (
    <div className="App">

      <Header />

      <section className="simplewords">

        <div className="content">

          <img src={doublecirclezig} alt="" className="doublecirclezig" />
          <img src={doublecirclehalf} alt="" className="doublecirclehalf" />
          <img src={halfzigblue} alt="" className="halfzigblue" />
          <img src={doublecirclephotoone} alt="" className="doublecirclephotoone" />

          <p className="left">Você precisa ser <span id="wordone">amor</span>.</p>

          <div className="clear"></div>

          <h3><span id="wordtwo">Amor</span></h3>

          <p className="right"><span id="wordthree">Amor</span> para cuidar<br/>de você e de quem você ama.</p>

          <div className="clear"></div>

        </div>

      </section>

      <section className="about">

        <div className="content">

          <img src={halfpink} alt="" className="halfpink" />

          <img src={doubleblue} alt="" className="doubleblue" />

          <p>A São Carlos criou a campanha Prevenção Não Tem Cor para mostrar a importância do cuidado com você e com quem você ama. Misturamos rosa com azul para conscientizar que outubro rosa e novembro azul não é apenas sobre o câncer de mama e o de próstata. É sobre um se importar com o outro. Homens e mulheres valorizando, acima de tudo, a vida. <strong>Participe da nossa campanha!</strong></p>
          
        </div>

      </section>

      <WordCloud />

      <SendWord />

      <PreventionSection />  

      <section className="video">

        <video loop autoPlay muted >
          <source src="https://firebasestorage.googleapis.com/v0/b/prevencao-nao-tem-cor.appspot.com/o/video-pntc.mp4?alt=media&token=78d78c64-cc7d-4172-9139-41029882e4d0" type="video/mp4" />
        </video>

        <ReactModal 
           isOpen={showModal}
           contentLabel="Minimal Modal Example"
           className="Modal"
        >

          <FontAwesomeIcon icon={faTimes} onClick={e => setshowModal(false)} />
        
          <video controls controlsList="nodownload">
            <source src="https://firebasestorage.googleapis.com/v0/b/prevencao-nao-tem-cor.appspot.com/o/video-pntc.mp4?alt=media&token=78d78c64-cc7d-4172-9139-41029882e4d0" type="video/mp4" />
          </video>

        </ReactModal>

        <div className="overlay"></div>

        <div className="content">

          <span className="button border" onClick={e => setshowModal(true)}>Assista aos depoimentos</span>

          <p><strong>Grave um depoimento<br/>sobre a importância da conscientização,</strong><br/>compartilhe nas suas redes e faça parte<br/>desse vídeo colaborativo!</p>

          <div className="clear"></div>
          
          <Link to="/depoimentos?word=" className="blue"><FontAwesomeIcon icon={faFolder} /> Procurar</Link>

          <Link to="/enviar-depoimento" className="pink"><FontAwesomeIcon icon={faCamera} /> Gravar</Link>

          <div className="clear"></div>

        </div>

      </section>

      <section className="quizcall" id="quizcall">

        <div className="content">

          <img src={halfpink} alt="" className="halfpink" />
          <img src={doublepink} alt="" className="doublepink" />
          <img src={doublecirclephototwo} alt="" className="doublecirclephototwo" />
          <span className="bluecircle"></span>

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
