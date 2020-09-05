import React from 'react';

import './style.css';
import Header from '../../components/Header'

import videotest from '../../assets/images/phone-mockup.mp4'

function App() {
  return (
    <div className="App">

      <Header />

      <section className="video">

        <video loop autoPlay muted >
          <source src="http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/mp4" />
        </video>

        <div className="overlay"></div>

        <div className="content">

          <span className="button border">Assista aos depoimentos</span>

          <p><strong>Grave um depoimento<br/>sobre a importância da conscientização,</strong><br/>compartilhe nas suas redes e faça parte<br/>desse vídeo colaborativo!</p>

        </div>

      </section>

      <section className="word">

        <p>A São Carlos criou a campanha Prevenção Não Tem Cor para mostrar a importância do cuidado com você e com quem você ama. Misturamos rosa com azul para conscientizar que não é apenas sobre o câncer de mama e o de próstata. É sobre um se importar com o outro. Homens e mulheres valorizando, acima de tudo, a vida. Participe da nossa campanha, grave um vídeo sobre a importância da prevenção e divida com os outros uma mensagem sobre esse tema importantíssimo. Somos homens conscientes.  Somos mulheres prevenidas. Somos família. Somos São Carlos.</p>

      </section>

    </div>
  );
}

export default App;
