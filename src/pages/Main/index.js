import React from 'react';
import Slider from "react-slick";

import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

import './style.css';
import Header from '../../components/Header'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import { faFolder } from '@fortawesome/free-regular-svg-icons'

import videotest from '../../assets/images/test-video.mp4'
import doctor from '../../assets/images/doctor.jpg'

import halfpink from '../../assets/images/half-circle-solid-pink.svg'
import doubleblue from '../../assets/images/double-circle-solid-blue.svg'
import doublepink from '../../assets/images/double-circle-solid-pink.svg'

function App() {

  const settings = {
    //dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const centerSlide = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    arrows: true
  };

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

          <p>A São Carlos criou a campanha Prevenção Não Tem Cor para mostrar a importância do cuidado com você e com quem você ama. Misturamos rosa com azul para conscientizar que não é apenas sobre o câncer de mama e o de próstata. É sobre um se importar com o outro. Homens e mulheres valorizando, acima de tudo, a vida. <strong>Participe da nossa campanha,</strong> grave um vídeo sobre a importância da prevenção e divida com os outros uma mensagem sobre esse tema importantíssimo.</p>
          
          <p>Somos homens conscientes.  Somos mulheres prevenidas.</p>
          
          <p><strong>Somos família. Somos São Carlos.</strong></p>

          <hr/>

          <h3><strong>Diga em uma palavra</strong> o que é mais importante<br/>para a prevenção do câncer.</h3>

          <form>
            <input type="text" placeholder="DIGITE AQUI" />
          </form>

        </div>

      </section>

      <section className="quizcall">

        <div className="content">

          <img src={halfpink} alt="" className="halfpink" />
          <img src={doublepink} alt="" className="doublepink" />

          <p>Quanto mais informação você tem,<br/><strong>maior é a chance de cuidar de você<br/>e de quem você ama.</strong></p>

          <p><strong>Responda nossas perguntas</strong><br/>e descubra o quanto você conhece<br/>sobre câncer de mama e de próstata.</p>

          <button><span>PARTICIPAR</span></button>

        </div>

      </section>

      <section className="formasdeprevencao">

        <div className="third left">

          <Slider {...settings}>

            <div>

              <h4>Consulta anual ao urologista</h4>

              <p>Aos que possuem histórico na família desse tipo de tumor, recomenda-se a visita ao urologista a partir de 45 anos. para isso, manter em dia a consulta com o urologista é fundamental. Incentive todos os homens com quem você convive a tornar um hábito de vida essa opção.</p>

            </div>

            <div>

              <h4>Alimentação Saudável</h4>

              <p>é importante deixar de lado os alimentos ultraprocessados, industrializados e bebidas açucaradas. Priorizar uma alimentação mais natural, rica em frutas, legumes, feijões e cereais integrais é essencial.</p>

            </div>

          </Slider>

        </div>

        <div className="third center">

          <h3>Formas de<br/><strong>Prevenção</strong></h3>

          <p>O tratamento ao câncer de mama e ao de próstata tem muito mais probabilidade de sucesso se as doenças forem diagnosticados precocemente.
          <br/><strong>Faça sua parte: informe-se e compartilhe com amigos e familiares.</strong></p>

        </div>

        <div className="third right">

          <Slider {...settings}>

            <div>

              <h4>Consulta anual ao urologista</h4>

              <p>Aos que possuem histórico na família desse tipo de tumor, recomenda-se a visita ao urologista a partir de 45 anos. para isso, manter em dia a consulta com o urologista é fundamental. Incentive todos os homens com quem você convive a tornar um hábito de vida essa opção.</p>

            </div>

            <div>

              <h4>Alimentação Saudável</h4>

              <p>é importante deixar de lado os alimentos ultraprocessados, industrializados e bebidas açucaradas. Priorizar uma alimentação mais natural, rica em frutas, legumes, feijões e cereais integrais é essencial.</p>

            </div>

          </Slider>

        </div>

      </section>

      <section className="dicas">

        <div className="content">

          <h3>Confira as dicas dos nossos médicos</h3>

          <Slider {...centerSlide}>
            <div>
              <img src={doctor} alt="doctor" />
            </div>
            <div>
            <img src={doctor} alt="doctor" />
            </div>
            <div>
            <img src={doctor} alt="doctor" />
            </div>
            <div>
            <img src={doctor} alt="doctor" />
            </div>
            <div>
            <img src={doctor} alt="doctor" />
            </div>
            <div>
            <img src={doctor} alt="doctor" />
            </div>
          </Slider>

        </div>

      </section>

    </div>
  );
}

export default App;
