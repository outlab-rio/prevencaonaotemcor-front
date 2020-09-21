import React from 'react';

import './style.css';
import HeaderInner from '../../components/HeaderInner'
import Footer from '../../components/Footer';

function Quiz() {

  return(

    <>

      <HeaderInner />

      <section className="quiz">

        <div className="content">

          <div className="pergunta">

            <h2>Pergunta 01</h2>

            <p>Qual médico você deve consultar regularmente para fazer a prevenção ao câncer de próstata?</p>

            <form>

              <input type="radio" id="male" name="gender" value="male" />
              <label for="male">A – oncologista</label>
              <br/>
              <input type="radio" id="female" name="gender" value="female" />
              <label for="female">B – clínico geral</label>
              <br/>
              <input type="radio" id="other" name="gender" value="other" />
              <label for="other">C – urologista</label>
              <br/>
              <input type="radio" id="other" name="gender" value="other" />
              <label for="other">D - cardiologista</label>

              <div className="clear"></div>

              <button className="button border">Enviar resposta</button>

            </form>

            </div>

        </div>
        
      </section>

      <Footer />

    </>

  );

}

export default Quiz;