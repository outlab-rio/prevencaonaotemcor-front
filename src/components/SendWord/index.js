import React, { useState, useEffect } from "react";
import Axios from "axios";

import { useForm } from "react-hook-form";

import "./style.css";

import halfpink from '../../assets/images/half-circle-solid-pink.svg'
import halfdashedpink from '../../assets/images/half-circle-dashed-pink.svg'

import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faWhatsapp  } from '@fortawesome/free-brands-svg-icons';

import ReactModal from 'react-modal';

const SendWord = () => {

  const [text, setText] = useState([]);
  const [showModal, setshowModal] = useState(false);

  const { handleSubmit } = useForm();

  const shareText = "Para mim, a palavra que representa o Câncer é " + text + ". E para você? Participe da campanha Prevenção Não Tem Cor";

  function newServiceForm() {
      
    Axios.post( process.env.REACT_APP_API_BASE_URL + "/words", {
      text
    })
    .then((res) => {
      //window.location.reload();
      setshowModal(true);
    })
    .catch((error) => {
        console.log(error.response.data.error);
        //toast.error('😲' + error.response.data.error)
    });

  };

  return(

    <section className="sendword" id="sendword">

      <div className="content">

        <ReactModal 
           isOpen={showModal}
           contentLabel="Minimal Modal Example"
           className="ModalShare"
        >

          <FontAwesomeIcon icon={faTimes} onClick={e => setshowModal(false)} />
        
          <p>Para você, a palavra que representa o Câncer é <strong>{text}</strong>.<br/>Compartilhe em suas redes sociais:</p>

          <FacebookShareButton className="facebook" url='https://prevencao-nao-tem-cor.web.app/' hashtag="prevencaonaotemcor" quote={shareText}>
              <FontAwesomeIcon icon={faFacebook} />
          </FacebookShareButton>
          <TwitterShareButton url='https://prevencao-nao-tem-cor.web.app/' hashtag="prevencaonaotemcor" title={shareText}>
              <FontAwesomeIcon icon={faTwitter} />
          </TwitterShareButton>
          <WhatsappShareButton url='https://prevencao-nao-tem-cor.web.app/' title={shareText}>
              <FontAwesomeIcon icon={faWhatsapp} />
          </WhatsappShareButton>

        </ReactModal>

        <img src={halfpink} alt="" className="halfpink" />
        <img src={halfdashedpink} alt="" className="halfdashedpink" />

        <h3>Diga em uma palavra o que significa o cancêr para você</h3>

        <form onSubmit={handleSubmit(newServiceForm)} id="newword">
          <input type="text" name="text" id="text" placeholder="DIGITE AQUI" onChange={e => setText(e.target.value.toUpperCase())} />
          <button>Enviar</button>
        </form>

      </div>

    </section>

  );

}

export default SendWord;