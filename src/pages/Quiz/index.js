import React, {useState, useEffect} from 'react';
import Quiz from 'react-quiz-component';

import './style.css';
import HeaderInner from '../../components/HeaderInner'
import Footer from '../../components/Footer';

function QuizPage() {

  const [result, setResult] = useState();

  const questionsBank = {
    "appLocale": {
      "landingHeaderText": "",
      "question": "Pergunta",
      "startQuizBtn": "Começar o Quiz",
      "resultFilterAll": "Todos",
      "resultFilterCorrect": "Correct",
      "resultFilterIncorrect": "Incorrect",
      "nextQuestionBtn": "ENVIAR RESPOSTA",
      "resultPageHeaderText": "",
    },
    "questions": [
      {
        "question": "O autoexame das mamas é o principal método de identificar o câncer de mama.",
        "questionType": "text",
        "answers": [
          "Verdadeiro",
          "Falso"
        ],
        "correctAnswer": "2",
        "point": "11,1"
      },
      {
        "question": "O Câncer de mama é um tipo de câncer que só aparece nas mulheres.",
        "questionType": "text",
        "answers": [
          "Verdadeiro",
          "Falso"
        ],
        "correctAnswer": "2",
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
        "point": "11,1"
      },
      {
        "question": "A partir de qual idade é mais comum a incidência do câncer de mama?",
        "answers": [
          "A partir dos 40",
          "A partir dos 45",
          "A partir dos 50 anos de idade",
          "A partir dos 60"
        ],
        "questionType": "text",
        "correctAnswer": "3",
        "point": "11,1"
      },
      {
        "question": "A partir de qual idade é mais comum a incidência do câncer de próstata?",
        "questionType": "text",
        "answers": [
          "A partir dos 40",
          "A partir dos 45",
          "A partir dos 60",
          "A partir dos 65 anos de idade"
        ],
        "correctAnswer": "4",
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

        <Quiz quiz={questionsBank} showInstantFeedback={false} onComplete={onCompleteAction} showDefaultResult={false} />

      </section>
      
      <section className="resultbox inactive">

        <div className="content">

          <h2>Você acertou<br/><strong>{result}%</strong></h2>

          <p className="sharetitle"><span>Compartilhe nas suas redes sociais</span> e ajude quem você ama a se manter previnido.</p>

          <a href="#" className="button"><span>baixe aqui nosso pdf e saiba mais</span></a>

          <p className="videos"><strong>Quer saber tudo sobre prevenção?</strong></p>

          <p className="videos">Assista aos conteúdos dos nossos especialistas.</p>

        </div>

      </section>

      <Footer />

    </>

  );

}

export default QuizPage;