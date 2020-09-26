import React, { useState, useEffect } from "react";
import Axios from "axios";

import { useForm } from "react-hook-form";

import "./style.css";

import halfpink from '../../assets/images/half-circle-solid-pink.svg'
import halfdashedpink from '../../assets/images/half-circle-dashed-pink.svg'

const SendWord = () => {

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

  return(

    <section className="sendword" id="sendword">

      <div className="content">

        <img src={halfpink} alt="" className="halfpink" />
        <img src={halfdashedpink} alt="" className="halfdashedpink" />

        <h3>Diga em uma palavra o que significa o cancêr para você</h3>

        <form onSubmit={handleSubmit(newServiceForm)} id="newword">
          <input type="text" name="text" id="text" placeholder="DIGITE AQUI" onChange={e => setText(e.target.value)} />
          <button>Enviar</button>
        </form>

      </div>

    </section>

  );

}

export default SendWord;