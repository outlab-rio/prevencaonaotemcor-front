import React, {useState, useEffect, useRef} from 'react';
import Axios from "axios";

import { useForm } from "react-hook-form";

import './style.css';
import HeaderInner from '../../components/HeaderInner'
import Footer from '../../components/Footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo } from '@fortawesome/free-solid-svg-icons';

function SendVideo() {

  const [text, setText] = useState([]);
  const [video, setFile] = useState(null);

  const { handleSubmit } = useForm();

  function onFileUpload(e) {
    
    try{
    
      let axiosConfig = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      };

      const data = new FormData()
      data.append('video', e)
      data.append('text', text)

      Axios.post( process.env.REACT_APP_API_BASE_URL + "/video/new_video", data, axiosConfig)
      .then((res) => {
        window.location.reload();
      });

    }
    catch (error) {
      console.log(error.response.data.error);
      //toast.error('😲' + error.response.data.error)
    };

  };

  const inputFile = useRef(null);

  useEffect(() => {

  });

  return(

    <>

      <HeaderInner />

      <section className="sendvideo">

        <div className="content">

          <h1><strong>Descreva em uma palavra</strong><br/> o que significa o Câncer para você.</h1>

          <form encType="multipart/form-data" onSubmit={handleSubmit(onFileUpload)} id="newvideo">
            <input type="text" name="text" id="text" placeholder="DIGITE AQUI" onChange={e => setText(e.target.value)} />
            <label for='video'><FontAwesomeIcon icon={faVideo} /> Envie seu video</label>
            <input type="file" name="video" id="video" placeholder="Envie seu video" ref={inputFile} onChange={e => onFileUpload(e.target.files[0]) } />
            <button>Enviar</button>
          </form>

        </div>

      </section>

      <Footer />

    </>

  );

}

export default SendVideo;