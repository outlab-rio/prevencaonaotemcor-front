import React from 'react';

import './style.css';

function Sinals() {

  return(

    <section className="sinals content" id="sinals">

      <h1>Sinais<br/><strong>e Sintomas</strong></h1>

      <section className="left">

        <h2>Sinais e sintomas<br/><strong>do câncer de próstata</strong></h2>

        <ul>
          <li>Dor ou dificuldade de urinar</li>
          <li>Vontade de urinar com frequência</li>
          <li>Dor nos ossos</li>
          <li>Insuficiência renal</li>
          <li>Infecção generalizada</li>
        </ul>

        <p>O câncer de próstata tem evolução silenciosa em sua fase inicial e seus sinais costumam aparecer quando o tumor já está avançado. Por isso, a avaliação médica é essencial para o diagnóstico precoce e preciso do câncer. Ao menos uma vez ao ano, visite o urologista.</p>

      </section>

      <section className="right">

        <h2>Sinais e sintomas<br/><strong>do câncer de mama</strong></h2>

        <ul>
          <li>Saída de líquido anormal pelos mamilos</li>
          <li>Pele da mama avermelhada, retraída ou parecida com uma casca de laranja</li>
          <li>Nódulo (caroço) fixo e geralmente indolor</li>
          <li>Pequenos nódulos nas axilas ou no pescoço</li>
          <li>Alterações no bico do peito (mamilo)</li>
        </ul>

        <p>Os sinais do câncer de mama podem ser observados em sua fase inicial. No entanto, a avaliação médica é sempre mais precisa. Mantenha uma rotina de ida ao ginecologista regularmente, para promover o diagnóstico precoce do câncer.</p>

      </section>

      <div className="clear"></div>
      
    </section>

  );

}

export default Sinals;