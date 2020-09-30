import React, {useState, useEffect} from 'react';
import Quiz from 'react-quiz-component';

import ReactModal from 'react-modal';

import Axios from "axios";

import { useForm } from "react-hook-form";

import './style.css';
import HeaderInner from '../../components/HeaderInner'
import Footer from '../../components/Footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faWhatsapp  } from '@fortawesome/free-brands-svg-icons';

import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
 } from "react-share";

 import ebook from '../../assets/images/ebookprevencao.pdf';

function QuizPage() {

  const [result, setResult] = useState();
  const [email, setEmail] = useState([]);
  const [showModal, setshowModal] = useState(false);

  const shareText = "Acabei de fazer o Quiz Prevenção Não Tem Cor, e tirei " + result + ". Faça você também!";

  const { handleSubmit } = useForm();

  function newUser() {
      
    Axios.post( process.env.REACT_APP_API_BASE_URL + "/users", {
      email
    })
    .then((res) => {
      setshowModal(false);
      window.open(`https://firebasestorage.googleapis.com/v0/b/prevencao-nao-tem-cor.appspot.com/o/ebook-prevencao.pdf?alt=media&token=bf4265d3-bbf2-461b-8f25-02412f6ce842`, '_blank')
    })
    .catch((error) => {
        console.log(error.response.data.error);
    });

  };

  const questionsBank = {
    "appLocale": {
      "landingHeaderText": "",
      "question": "Pergunta",
      "startQuizBtn": "Começar o Quiz",
      "resultFilterAll": "Todos",
      "resultFilterCorrect": "Correct",
      "resultFilterIncorrect": "Incorrect",
      "nextQuestionBtn": "PRÓXIMA PERGUNTA",
      "resultPageHeaderText": "",
    },
    "questions": [
      {
        "question": "O autoexame das mamas é o principal método para identificar o câncer de mama.",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "Verdadeiro",
          "Falso"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Muito Bem! O autoexame das mamas acaba não identificando o tumor em sua fase inicial. Quando já é possível tocá-lo, pode significar que ele se encontra em um estágio mais avançado.",
        "messageForIncorrectAnswer": "Resposta: Falso. O autoexame das mamas acaba não identificando o tumor em sua fase inicial. Quando já é possível tocá-lo, pode significar que ele se encontra em um estágio mais avançado.",
        "explanation": "O autoexame das mamas acaba não identificando o tumor em sua fase inicial.",
        "point": "11,1"
      },
      {
        "question": "O câncer de mama é um tipo de câncer que só aparece nas mulheres.",
        "questionType": "text",
        "answers": [
          "Verdadeiro",
          "Falso"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Muito Bem! Apesar de não ser comum, o câncer de mama também pode aparecer nos homens -  apenas 1% dos casos de câncer de mama são diagnosticados em homens.",
        "messageForIncorrectAnswer": "Resposta: Falso. Apesar de não ser comum, o câncer de mama também pode aparecer nos homens -  apenas 1% dos casos de câncer de mama são diagnosticados em homens.",
        "point": "11,1"
      },
      {
        "question": "Quais são os principais sintomas do câncer de próstata?",
        "questionType": "text",
        "answers": [
          "Vontade de urinar com frequência; Dor nos ossos; Dor ao urinar; Presença de sangue na urina ou sêmen",
          "Vontade de urinar com frequência; Dor ao urinar; Presença de sangue na urina ou sêmen",
          "Diminuição da vontade de urinar; Presença de sangue na urina e sêmen; Dor no órgão genital masculino."
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Muito Bem!",
        "messageForIncorrectAnswer": "Resposta: Vontade de urinar com frequência; Dor nos ossos; Dor ao urinar; Presença de sangue na urina ou sêmen",
        "point": "11,1"
      },
      {
        "question": "Quais são os principais sintomas do câncer de mama?",
        "questionType": "text",
        "answers": [
          "Nódulo na mama ou axila; Pele da mama avermelhada ou retraída; Alterações no bico do peito; Saída espontânea de líquido dos mamilos.",
          "Nódulo na mama; dores no peito; pintas vermelhas nas mamas, alterações no bico do peito;",
          "Saída de líquido dos mamilos; pele da mama amarelada; nódulo na região da mama "
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Muito Bem!",
        "messageForIncorrectAnswer": "Resposta: Nódulo na mama ou axila; Pele da mama avermelhada ou retraída; Alterações no bico do peito; Saída espontânea de líquido dos mamilos.",
        "point": "11,1"
      },
      {
        "question": "O câncer de próstata pode ocasionar dificuldades de ereção?",
        "questionType": "text",
        "answers": [
          "Verdadeiro",
          "Falso"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Muito Bem! A ereção do homem depende de fatores como secreção da testosterona, aporte sanguíneo satisfatório e condução adequada dos impulsos nervosos. Não existe relação direta com a próstata.",
        "messageForIncorrectAnswer": "Resposta: Falso. A ereção do homem depende de fatores como secreção da testosterona, aporte sanguíneo satisfatório e condução adequada dos impulsos nervosos. Não existe relação direta com a próstata.",
        "point": "11,1"
      },
      {
        "question": "A partir de qual idade é mais comum a incidência do câncer de mama?",
        "answers": [
          "A partir dos 40 anos",
          "A partir dos 45 anos",
          "A partir dos 50 anos",
          "A partir dos 60 anos"
        ],
        "questionType": "text",
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Muito Bem!",
        "messageForIncorrectAnswer": "Resposta: A partir dos 40 anos",
        "point": "11,1"
      },
      {
        "question": "A partir de qual idade é mais comum a incidência do câncer de próstata?",
        "questionType": "text",
        "answers": [
          "A partir dos 40 anos",
          "A partir dos 45 anos",
          "A partir dos 60 anos",
          "A partir dos 65 anos"
        ],
        "correctAnswer": "4",
        "messageForCorrectAnswer": "Muito Bem!",
        "messageForIncorrectAnswer": "Resposta: A partir dos 65 anos",
        "point": "11,1"
      },
      {
        "question": "Se eu não tenho sintomas, nem histórico familiar de câncer de mama, preciso fazer exames?",
        "questionType": "text",
        "answers": [
          "Sim",
          "Não"
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Muito Bem! Todas as mulheres a partir dos 40 anos devem realizar a mamografia anualmente. A mamografia é fundamental para o diagnóstico precoce do câncer de mama, pois identifica a existência de nódulos menores e outras irregularidades. Para as mulheres de idade até 45 anos, é recomendada a ida regular ao ginecologista e acompanhamento anual por meio de ultrassonografias das mamas, quando necessário.",
        "messageForIncorrectAnswer": "Resposta: Sim. Todas as mulheres a partir dos 45 anos devem realizar a mamografia anualmente. A mamografia é fundamental para o diagnóstico precoce do câncer de mama, pois identifica a existência de nódulos menores e outras irregularidades.Para as mulheres de idade até 45 anos, é recomendada a ida regular ao ginecologista e acompanhamento anual por meio de ultrassonografias das mamas, quando necessário.",
        "point": "11,1"
      },
      {
        "question": "Estilo de vida, como boa alimentação e prática de atividades físicas, é um fator que contribui para a prevenção dos tipos de câncer de mama e próstata",
        "answers": [
          "Verdadeiro",
          "Falso"
        ],
        "questionType": "text",
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Muito Bem! Tudo o que é saudável agride menos o organismo, logo, faz muito bem à saúde. Por isso, uma alimentação balanceada, rica em frutas, legumes, verduras, leguminosas, cereais integrais e oleaginosas e a prática de pelo menos 30 minutos de qualquer tipo de atividade física por dia (caminhada, corrida, dança, subir escadas,academia, andar de bicicleta), são boas opções para a prevenção do câncer.",
        "messageForIncorrectAnswer": "Resposta: Verdadeiro. Tudo o que é saudável agride menos o organismo, logo, faz muito bem à saúde. Por isso, uma alimentação balanceada, rica em frutas, legumes, verduras, leguminosas, cereais integrais e oleaginosas e a prática de pelo menos 30 minutos de qualquer tipo de atividade física por dia (caminhada, corrida, dança, subir escadas,academia, andar de bicicleta), são boas opções para a prevenção do câncer.",
        "point": "11,1"
      }
    ]
  }

  function showResult(){
    console.log(result);
  }

  const onCompleteAction = (obj) => {
    console.log(obj.correctPoints);
    setResult(obj.correctPoints);

    const questionbox = document.querySelector('.react-quiz-container');
    questionbox.classList.add("inactive");

    const resultbox = document.querySelector('.resultbox');
    resultbox.classList.remove("inactive");
  }

  useEffect(() => {
    
    const body = document.body;
    const start = document.querySelector('.startQuizBtn');
    
    
    const active = document.querySelector('.nextQuestionBtn');

    if (start != null){
      start.click()
    }

    // if (active != null){
    //   active.addEventListener('click', () => {
    //     body.classList.toggle("active");
    //   });
    // }

  })

  return(

    <>

      <HeaderInner />

      <section className="quiz">

        <Quiz quiz={questionsBank} showInstantFeedback={true} onComplete={onCompleteAction} showDefaultResult={false} />

      </section>
      
      <section className="resultbox inactive">

        <div className="content">

          <ReactModal 
            isOpen={showModal}
            contentLabel="Minimal Modal Example"
            className="Modal sendemail"
          >

            <FontAwesomeIcon icon={faTimes} onClick={e => setshowModal(false)} />

            <h3><strong>Quer saber mais sobre o câncer de mama e prostata?</strong><br/>Baixe nosso e-book</h3>

            <form onSubmit={handleSubmit(newUser)} id="newemail">
              <input type="email" name="email" id="email" placeholder="DIGITE SEU E-MAIL" onChange={e => setEmail(e.target.value)} />
              <button>BAIXAR</button>
            </form>
          
          </ReactModal>

          <h2>Você acertou<br/><strong>{result}%</strong></h2>

          <p className="sharetitle"><span>Compartilhe nas suas redes sociais</span> e ajude quem você ama a se manter prevenido.</p>

          <div className="redes">

            <FacebookShareButton className="facebook" url='https://prevencao-nao-tem-cor.web.app/' hashtag="prevencaonaotemcor" quote={shareText}>
                <FontAwesomeIcon icon={faFacebook} />
            </FacebookShareButton>
            <TwitterShareButton url='https://prevencao-nao-tem-cor.web.app/' hashtag="prevencaonaotemcor" title={shareText}>
                <FontAwesomeIcon icon={faTwitter} />
            </TwitterShareButton>
            <WhatsappShareButton url='https://prevencao-nao-tem-cor.web.app/' title={shareText}>
                <FontAwesomeIcon icon={faWhatsapp} />
            </WhatsappShareButton>

          </div>

          <a href="#" onClick={e => setshowModal(true)} className="button"><span>baixe aqui nosso e-book e saiba mais</span></a>

          <p className="videos"><strong>Quer saber tudo sobre prevenção?</strong></p>

          <a href="/#tips" className="videos btn">Assista aos conteúdos dos nossos especialistas</a>

        </div>

      </section>

      <Footer />

    </>

  );

}

export default QuizPage;