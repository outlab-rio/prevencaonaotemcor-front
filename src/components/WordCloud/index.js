import React from 'react';
import ReactWordcloud from 'react-wordcloud';

import './style.css'

function WordCloud(){

  const words = [
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

  return(

    <section className="words" id="words">

    <ReactWordcloud
        options={{
          colors: ['#ef7e91', '#6897ea'],
          fontFamily: 'Asap',
          fontSizes: [30, 40],
          rotations: 1,
          rotationAngles: [0, 0],
          tooltipOptions: {
            allowHTML: false,
          },
        }}
        words={words}
        size={[1000, 100]}
        className="wordcloudright"
      />

      <div className="content worcloudtext">
        {/* <p className="pinktext">Cuidar de  você<br/>é um gesto de</p>
        <div className="clear"></div> */}
        <h3>CORAGEM</h3>
        {/* <p className="bluetext">é cuidar de quem<br/>é importante para você</p> */}
      </div>

      <ReactWordcloud
        options={{
          colors: ['#ef7e91', '#6897ea'],
          fontFamily: 'Asap',
          fontSizes: [30, 40],
          rotations: 1,
          rotationAngles: [0, 0],
          tooltipOptions: {
            allowHTML: false,
          },
        }}
        words={wordstwo}
        size={[1000, 100]}
        className="wordcloudleft"
      />

    </section>

  )

}

export default WordCloud;