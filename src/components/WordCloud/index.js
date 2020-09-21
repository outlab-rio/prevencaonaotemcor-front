import React from 'react';
import ReactWordcloud from 'react-wordcloud';

import './style.css'

function WordCloud(){

  const words = [
    {
      text: 'AJUDA',
      value: 3,
    },
    {
      text: 'CARINHO',
      value: 8,
    },
    {
      text: 'VIDA',
      value: 5,
    },
    {
      text: 'SOLIDARIEDADE',
      value: 17,
    },
    {
      text: 'FORÇA',
      value: 16,
    },
    {
      text: 'LUTA',
      value: 11,
    },
    {
      text: 'SENTIMENTOS',
      value: 6,
    },
    {
      text: 'FAMÍLIA',
      value: 9,
    },
    {
      text: 'CARINHO',
      value: 4,
    },
    {
      text: 'DOR',
      value: 3,
    },
    {
      text: 'VENCER',
      value: 17,
    },
    {
      text: 'AMOR',
      value: 17,
    }
  ]

  return(

    <section className="words">

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
        <p className="pinktext">Cuidar de  você<br/>é um gesto de</p>
        <div className="clear"></div>
        <h3>Amor</h3>
        <p className="bluetext">é cuidar de quem<br/>é importante para você</p>
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
        words={words}
        size={[1000, 100]}
        className="wordcloudleft"
      />

    </section>

  )

}

export default WordCloud;