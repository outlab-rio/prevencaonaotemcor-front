import React, {useState, useEffect} from 'react';
import Axios from "axios";

import { useForm } from "react-hook-form";

import './style.css';
import HeaderInner from '../../components/HeaderInner'
import Footer from '../../components/Footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo } from '@fortawesome/free-solid-svg-icons';

function SendVideo() {

  const [text, setText] = useState([]);

  const { handleSubmit } = useForm();

  function newServiceForm() {
      
    const token = JSON.parse(localStorage.getItem('token'));

    let axiosConfig = {
      headers: {
        'authorization': 'Bearer ' + token
      }
    };

    Axios.post( process.env.REACT_APP_API_BASE_URL + "/words", {
      text
    }, axiosConfig)
    .then((res) => {
      window.location.reload();
    })
    .catch((error) => {
        console.log(error.response.data.error);
        //toast.error('😲' + error.response.data.error)
    });

  };

  useEffect(() => {

  });

  return(

    <>

      <HeaderInner />

      <section className="sendvideo">

        <div className="content">

          <h1><strong>Descreva em uma palavra</strong><br/> o que significa o Câncer para você.</h1>

          <form onSubmit={handleSubmit(newServiceForm)} id="newword">
            <input type="text" name="text" id="text" placeholder="DIGITE AQUI" onChange={e => setText(e.target.value)} />
            <label for='video'><FontAwesomeIcon icon={faVideo} /> Envie seu video</label>
            <input type="file" name="video" id="video" placeholder="Envie seu video"  />
            <button>Enviar</button>
          </form>

        </div>

      </section>

      <Footer />

    </>

  );

}

export default SendVideo;