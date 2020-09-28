import React, { useState } from 'react';
import Slider from "react-slick";

import ReactModal from 'react-modal';

import './style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import doctor from '../../assets/images/doctor.jpg'

import videodiagnosticoprostata from '../../assets/videos/video-diagnostico-prostata.mp4'
import videodiagnosticoprostatatwo from '../../assets/videos/video-diagnostico-prostata-2.mp4'
import videoestatisticasprostata from '../../assets/videos/video-estatisticas-prostata.mp4'
import videoriscoprostata from '../../assets/videos/video-fator-risco-prostata.mp4'
import videoprevencaoprostata from '../../assets/videos/video-prevencao-prostata.mp4'
import videoestatisticamama from '../../assets/videos/video-estatisticas-mama.mp4'
import videoriscomama from '../../assets/videos/video-fator-risco-mama.mp4'
import videosinaismama from '../../assets/videos/video-sinais-sintomas-mama.mp4'

function PreventionSection(){

  const [showModal, setshowModal] = useState(false);
  const [showModal2, setshowModal2] = useState(false);
  const [showModal3, setshowModal3] = useState(false);
  const [showModal4, setshowModal4] = useState(false);
  const [showModal5, setshowModal5] = useState(false);
  const [showModal6, setshowModal6] = useState(false);
  const [showModal7, setshowModal7] = useState(false);
  const [showModal8, setshowModal8] = useState(false);

  const centerSlide = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    speed: 500,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return(

    <>

      <ReactModal isOpen={showModal} className="Modal" >
        <FontAwesomeIcon icon={faTimes} onClick={e => setshowModal(false)} />
        <video controls controlsList="nodownload"><source src={videodiagnosticoprostata} type="video/mp4" /></video>
      </ReactModal>

      <ReactModal isOpen={showModal2} className="Modal" >
        <FontAwesomeIcon icon={faTimes} onClick={e => setshowModal2(false)} />
        <video controls controlsList="nodownload"><source src={videodiagnosticoprostatatwo} type="video/mp4" /></video>
      </ReactModal>

      <ReactModal isOpen={showModal3} className="Modal" >
        <FontAwesomeIcon icon={faTimes} onClick={e => setshowModal3(false)} />
        <video controls controlsList="nodownload"><source src={videoestatisticasprostata} type="video/mp4" /></video>
      </ReactModal>

      <ReactModal isOpen={showModal4} className="Modal" >
        <FontAwesomeIcon icon={faTimes} onClick={e => setshowModal4(false)} />
        <video controls controlsList="nodownload"><source src={videoriscoprostata} type="video/mp4" /></video>
      </ReactModal>

      <ReactModal isOpen={showModal5} className="Modal" >
        <FontAwesomeIcon icon={faTimes} onClick={e => setshowModal5(false)} />
        <video controls controlsList="nodownload"><source src={videoprevencaoprostata} type="video/mp4" /></video>
      </ReactModal>

      <ReactModal isOpen={showModal6} className="Modal" >
        <FontAwesomeIcon icon={faTimes} onClick={e => setshowModal6(false)} />
        <video controls controlsList="nodownload"><source src={videoestatisticamama} type="video/mp4" /></video>
      </ReactModal>

      <ReactModal isOpen={showModal7} className="Modal" >
        <FontAwesomeIcon icon={faTimes} onClick={e => setshowModal7(false)} />
        <video controls controlsList="nodownload"><source src={videoriscomama} type="video/mp4" /></video>
      </ReactModal>

      <ReactModal isOpen={showModal8} className="Modal" >
        <FontAwesomeIcon icon={faTimes} onClick={e => setshowModal8(false)} />
        <video controls controlsList="nodownload"><source src={videosinaismama} type="video/mp4" /></video>
      </ReactModal>

      <section className="dicas" id="tips">

      <div className="content">

        <h3>SAIBA MAIS SOBRE O<br/>CANCÊR DE MAMA E PRÓSTATA</h3>

        <Slider {...centerSlide}>
          <div>
            <img src={doctor} alt="doctor click" onClick={e => setshowModal(true)} />
          </div>
          <div>
            <img src={doctor} alt="doctor" onClick={e => setshowModal2(true)} />
          </div>
          <div>
            <img src={doctor} alt="doctor" onClick={e => setshowModal3(true)} />
          </div>
          <div>
            <img src={doctor} alt="doctor" onClick={e => setshowModal4(true)} />
          </div>
          <div>
            <img src={doctor} alt="doctor" onClick={e => setshowModal5(true)} />
          </div>
          <div>
            <img src={doctor} alt="doctor" onClick={e => setshowModal6(true)} />
          </div>
          <div>
            <img src={doctor} alt="doctor" onClick={e => setshowModal7(true)} />
          </div>
          <div>
            <img src={doctor} alt="doctor" onClick={e => setshowModal8(true)} />
          </div>
        </Slider>

        <p>SOMOS HOMENS CONSCIENTES. SOMOS MULHERES PREVENIDAS.</p>
        
        <p>SOMOS FAMÍLIA. SOMOS SÃO CARLOS.</p>
        
        <p>GRAVE UM DEPOIMENTOSOBRE A IMPORTÂNCIA DA CONSCIENTIZAÇÃO, PREVENÇÃO E COMBATE AO CÂNCER. EXPLIQUE PARA A GENTE QUAL É O SIGNIFICADO DO CÂNCER PARA VOCÊ.</p>
        
        <p>COMPARTILHE NAS SUAS REDES SOCIAIS E FAÇA PARTE DESSE VÍDEO COLABORATIVO!</p>

      </div>

      </section>

    </>

  )

}

export default PreventionSection;