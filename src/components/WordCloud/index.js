import React, { useEffect, useState } from 'react';
import ReactWordcloud from 'react-wordcloud';
import { Link } from 'react-router-dom';

import Axios from "axios";

import { useForm } from "react-hook-form"

import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faWhatsapp  } from '@fortawesome/free-brands-svg-icons';

import ReactModal from 'react-modal';


import halfpink from '../../assets/images/half-circle-solid-pink.svg'
import halfdashedpink from '../../assets/images/half-circle-dashed-pink.svg'

import './style.css';

function WordCloud(){

  const [words, setWords] = useState([]);
  const [text, setText] = useState([]);
  const [showModal, setshowModal] = useState(false);

  const fetchData = async () => {
    const result = await Axios.get(process.env.REACT_APP_API_BASE_URL + "/words");
    setWords(result.data);
    console.log(result.data)
  };

  useEffect(() => {
 
    fetchData();
  }, []);

  const getCallback = callbackName => (word, event) => {
    window.open(`/depoimentos?word=${word.text}`, '_self')
  }

  //

  const { handleSubmit } = useForm();

  const shareText = "Para mim, a palavra que representa o Câncer é " + text + ". E para você? Participe da campanha Prevenção Não Tem Cor";

  function newServiceForm() {
      
    Axios.post( process.env.REACT_APP_API_BASE_URL + "/words", {
      text
    })
    .then((res) => {
      //window.location.reload();
      setshowModal(true);
      fetchData();
    })
    .catch((error) => {
        console.log(error.response.data.error);
        //toast.error('😲' + error.response.data.error)
    });
  
  };

  return(

    <>

      <section className="words" id="words">

        <div className="content worcloudtext">

          <div className="cloud">

            <ReactWordcloud words={words} options={{
              rotations: 1,
              rotationAngles: [0, 0],
              colors: ['#ef7e91', '#6897ea',],
              fontFamily: 'HeliaCore',
              enableTooltip: false,
              fontSizes: [14, 100]
            }} callbacks={{
              onWordClick: getCallback('onWordClick'),
              // onWordMouseOut: getCallback('onWordMouseOut'),
              // onWordMouseOver: getCallback('onWordMouseOver'),
            }} />

            {/* {words.map(item =>

              <Link to={'/depoimentos?word=' + item.text} key={item._id} style={{fontSize: item.value * 20 + "px"}} >{item.text}</Link>

            )} */}

          </div>

        </div>

      </section>

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

    </>


  )

}

export default WordCloud;