import React, { useEffect, useState } from 'react';
import ReactWordcloud from 'react-wordcloud';
import { Link } from 'react-router-dom';

import Axios from 'axios';

import './style.css'

function WordCloud(){

  const [words, setWords] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      const result = await Axios.get(process.env.REACT_APP_API_BASE_URL + "/words");
      setWords(result.data);
      console.log(result.data)
    };
 
    fetchData();
  }, []);

  const getCallback = callbackName => (word, event) => {
    window.open(`/depoimentos?word=${word.text}`, '_self')
     // const isActive = callbackName !== 'onWordMouseOut'
    // const element = event.target
    // //const text = select(element)
    // element
    //   .on('click', () => {
    //     if (isActive) {
    //       window.open(`https://duckduckgo.com/?q=${word.text}`, '_blank')
    //     }
    //   })
    //   .transition()
    //   .attr('background', 'white')
    //   .attr('font-size', isActive ? '300%' : '100%')
    //   .attr('text-decoration', isActive ? 'underline' : 'none')
  }

  return(

    <section className="words" id="words">

      <div className="content worcloudtext">
      
        {/* <h3>CORAGEM</h3> */}

        <div className="cloud">

          <ReactWordcloud words={words} options={{
            rotations: 1,
            rotationAngles: [0, 0],
            colors: ['#ef7e91', '#6897ea',],
            fontFamily: 'Asap',
            enableTooltip: false,
            fontSizes: [14, 42]
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

  )

}

export default WordCloud;