import React, { useEffect, useState } from 'react';
import ReactWordcloud from 'react-wordcloud';
import { Link } from 'react-router-dom';

import Axios from 'axios';

import './style.css'

function WordCloud(){

  const wordsone = [
    {
      text: 'FORÇA',
      value: 8,
    }
  ]

  const wordstwo = [
    {
      text: 'SUPERAÇÃO',
      value: 3,
    }
  ]

  const [words, setWords] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      const result = await Axios.get(process.env.REACT_APP_API_BASE_URL + "/words");
      setWords(result.data);
      console.log(result.data)
    };
 
    fetchData();
  }, []);

  return(

    <section className="words" id="words">

      <div className="content worcloudtext">
      
        {/* <h3>CORAGEM</h3> */}

        <div className="cloud">

          {words.map(item =>

            <Link to={'/depoimentos?word=' + item.text} key={item._id}>{item.text}</Link>

          )}

        </div>
      
      </div>

    </section>

  )

}

export default WordCloud;