import React from 'react';
import Slider from "react-slick";

import doctor from '../../assets/images/doctor.jpg'

function PreventionSection(){

  const settings = {
    //dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const centerSlide = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    speed: 500,
    arrows: true
  };

  return(

    <>

      <section className="formasdeprevencao">

      <div className="third left">

        <Slider {...settings}>

          <div>

            <h4>Consultar um urologista anualmente e realizar os exames de rotina</h4>

            <p>Aos que possuem histórico na família desse tipo de tumor, recomenda-se a visita ao urologista a partir dos 45 anos. Para isso, manter em dia a consulta com o urologista é fundamental. Incentive todos os homens com quem você convive a tornar um hábito de vida essa ação.</p>

          </div>

          <div>

            <h4>Realizar os exames de toque retal e PSA</h4>

            <p>O exame de toque retal é a principal forma de detecção precoce do câncer de próstata. Ele, junto do exame laboratorial, que mede a dosagem de PSA, é indicado aos homens com idade a partir dos 50 anos.</p>

          </div>

          <div>

            <h4>Alimentar-se de forma saudável</h4>

            <p>É importante deixar de lado os alimentos ultra processados, industrializados e bebidas açucaradas. Priorizar uma alimentação mais natural, rica em frutas, legumes, feijões e cereais integrais, é essencial. Que tal optar por esse cardápio em casa?</p>

          </div>

          <div>

            <h4>Evitar o consumo de bebidas alcoólicas em excesso</h4>

            <p>O etanol tem efeito cancerígeno sobre as células do corpo, e quando chega ao intestino, funciona como solvente, que facilita a entrada de outras substâncias, favorecendo o desenvolvimento do câncer. Por isso, quanto menor a exposição ao álcool, menor o risco. Vamos ser conscientes e evitar esse consumo?</p>

          </div>

        </Slider>

      </div>

      <div className="third center">

        <h3>Formas de<br/><strong>Prevenção</strong></h3>

        <p>O tratamento ao câncer de mama e ao de próstata tem muito mais probabilidade de sucesso se as doenças forem diagnosticados precocemente.
        <br/><strong>Faça sua parte: informe-se e compartilhe com amigos e familiares.</strong></p>

      </div>

      <div className="third right">

        <Slider {...settings}>

          <div>

            <h4>Amamentar</h4>

            <p>A amamentação é uma aliada à prevenção do câncer de mama. Isso acontece, pois, quando o bebê suga o leite, ocorre a esfoliação do tecido mamário, que contribui para a eliminação e renovação de possíveis células agredidas. Assim, muitas delas se autodestroem, inclusive algumas que poderiam ter lesões no material genético. Além disso, há a queda das taxas de hormônios que favorecem o não desenvolvimento do tumor. Por isso, incentive as mamães a amamentarem o maior tempo possível.</p>

          </div>

          <div>

            <h4>Evitar o consumo de bebidas alcoólicas em excesso</h4>

            <p>O etanol tem efeito cancerígeno sobre as células do corpo, e quando chega ao intestino, funciona como solvente, que facilita a entrada de outras substâncias, favorecendo o desenvolvimento do câncer. Por isso, quanto menor a exposição ao álcool, menor o risco. Vamos ser conscientes e evitar esse consumo?</p>

          </div>

          <div>

            <h4>Evitar uso de hormônios sintéticos</h4>

            <p>O uso de hormônios sintéticos, como anticoncepcionais e terapias de reposição hormonal, pode desequilibrar as taxas hormonais naturais da mulher. Dessa maneira, evitá-los é um método preventivo. </p>

          </div>

          <div>

            <h4>Consultar um ginecologista anualmente e realizar os exames de rotina</h4>

            <p>As chances de sucesso no tratamento do câncer de mama aumentam significativamente se o diagnóstico do tumor for precoce. Por isso, tenha em mente que visitar anualmente o médico ginecologista, além de manter os exames de rotina em dia, é essencial para a prevenção do câncer e outros tipos de doenças. Incentive as mulheres próximas a você a tornar essa ação uma rotina.</p>

          </div>

          <div>

            <h4>Alimentar-se de forma saudável</h4>

            <p>É importante deixar de lado os alimentos ultra processados, industrializados e bebidas açucaradas. Priorizar uma alimentação mais natural, rica em frutas, legumes, feijões e cereais integrais, é essencial. Que tal optar por esse cardápio em casa?</p>

          </div>

        </Slider>

      </div>

      </section>

      <section className="dicas">

      <div className="content">

        <h3>Confira as dicas dos nossos médicos</h3>

        <Slider {...centerSlide}>
          <div>
            <img src={doctor} alt="doctor" />
          </div>
          <div>
            <img src={doctor} alt="doctor" />
          </div>
          <div>
            <img src={doctor} alt="doctor" />
          </div>
          <div>
            <img src={doctor} alt="doctor" />
          </div>
          <div>
            <img src={doctor} alt="doctor" />
          </div>
          <div>
            <img src={doctor} alt="doctor" />
          </div>
        </Slider>

      </div>

      </section>

    </>

  )

}

export default PreventionSection;