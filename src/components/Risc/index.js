import React from 'react';

import './style.css';

function Risc() {

  return(

    <section className="risc" id="risc">

      <div className="content">

        <h1>Fatores <strong>de Risco</strong></h1>

        <div className="sides">

          <section className="left">

            <h2><strong>Câncer</strong> de Próstata</h2>

            <ul>

              <li>Homens com mais de 50 anos têm aumentada significativamente a probabilidade do desenvolvimento do câncer de próstata.</li>

              <li>O excesso de gordura corporal pode elevar o risco do câncer de próstata avançado.</li>

              <li>Além de provocar o aumento de peso, o sedentarismo amplia a possibilidade do desenvolvimento de doenças crônicas, como o câncer de próstata. </li>

              <li>O álcool tem efeito cancerígeno sobre as células, e ingeri-lo em excesso pode desencadear o câncer.</li>

              <li>Homens que tenham histórico familiar, como avô, pai ou irmão diagnosticado com câncer de próstata antes dos 60 anos de idade, têm maior tendência a desenvolver o câncer de próstata.</li>

            </ul>

          </section>

          <section className="right">

            <h2><strong>Câncer</strong> de Mama</h2>

            <ul>

              <li>Mulheres com mais de 50 anos possuem maior probabilidade de desenvolver o câncer de mama;</li>

              <li>Mulheres que alcançaram o sobrepeso após a menopausa têm aumentadas as chances de adquirirem o câncer de mama;</li>

              <li>Sedentarismo;</li>

              <li>Consumo de bebidas alcoólicas em excesso;</li>

              <li>Fatores genéticos e hereditários: mulheres que tenham parentes em primeiro grau com histórico de câncer de ovário ou câncer de mama antes dos 50 anos possuem maior probabilidade de desenvolver o tumor.</li>

              <li>Menstruação precoce (antes dos 12 anos de idade), menopausa tardia (após os 55 anos), primeira gravidez após os 30 anos, uso de contraceptivos orais e terapia de reposição hormonal pós-menopausa (principalmente, por mais de 5 anos): todos esses fatores podem elevar o risco do desenvolvimento do câncer de mama na mulher.</li>

            </ul>

          </section>

        </div>

        <div className="clear"></div>

      </div>

    </section>

  );

}

export default Risc;