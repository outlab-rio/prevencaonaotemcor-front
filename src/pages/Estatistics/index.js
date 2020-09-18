import React from 'react';

import './style.css';
import Header from '../../components/Header'

function Estatistics() {

  return(

    <>

      <Header />

      <section className="estatistics">

        <div className="content">

          <h1><strong>Números do câncer</strong><br/>no Brasil</h1>

          <div className="sides">

            <section className="left">

              <p>O câncer de próstata é o segundo mais comum entre os homens, atrás do câncer de pele não-melanoma. <strong>Para 2020, a incidência esperada é de 65.840</strong> novos casos do tumor, cerca de <strong>30% dos tipos</strong> de câncer em homens</p>

            </section>

            <section className="right">

              <p>O câncer de mama é o segundo mais comum entre as mulheres, atrás do câncer de pele não-melanoma. <strong>Para 2020, a incidência esperada é de 66.280</strong> novos casos do tumor, cerca de <strong>30% dos tipos</strong> de câncer em mulheres.</p>

            </section>

          </div>

        </div>
        
      </section>

    </>

  );

}

export default Estatistics;