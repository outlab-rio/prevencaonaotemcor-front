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
    slidesToShow: 3,
    speed: 500,
    arrows: true
  };

  return(

    <>

      <section className="formasdeprevencao">

      <div className="third left">

        <Slider {...settings}>

          <div>

            <h4>Consulta anual ao urologista</h4>

            <p>Aos que possuem histórico na família desse tipo de tumor, recomenda-se a visita ao urologista a partir de 45 anos. para isso, manter em dia a consulta com o urologista é fundamental. Incentive todos os homens com quem você convive a tornar um hábito de vida essa opção.</p>

          </div>

          <div>

            <h4>Alimentação Saudável</h4>

            <p>é importante deixar de lado os alimentos ultraprocessados, industrializados e bebidas açucaradas. Priorizar uma alimentação mais natural, rica em frutas, legumes, feijões e cereais integrais é essencial.</p>

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

            <h4>Consulta anual ao urologista</h4>

            <p>Aos que possuem histórico na família desse tipo de tumor, recomenda-se a visita ao urologista a partir de 45 anos. para isso, manter em dia a consulta com o urologista é fundamental. Incentive todos os homens com quem você convive a tornar um hábito de vida essa opção.</p>

          </div>

          <div>

            <h4>Alimentação Saudável</h4>

            <p>é importante deixar de lado os alimentos ultraprocessados, industrializados e bebidas açucaradas. Priorizar uma alimentação mais natural, rica em frutas, legumes, feijões e cereais integrais é essencial.</p>

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