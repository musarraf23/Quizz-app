import React, { useEffect, useState } from 'react'
import { Spinner } from "@nextui-org/react";
import QuestionCard from '../components/QuestionCard';
import ReportCard from '../components/ReportCard';
import { getQuestions } from '../services/api';

function QuizzScreen() {

  const [questions, setQuestions] = useState([]);
  const [questionIdx, setQuestionIdx] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async()=>{

    
      try {
        let quizzes = [];
        while(quizzes.length == 0)
        {
          quizzes = await getQuestions()
        }
        setQuestions((quizzes).map(quizz => ({ ...quizz, response: '' })))
        
        // const stored = localStorage.getItem('questionResponse');
        // // fetch from server
        // if (!stored) {
        //   setLoading(false); 
        //   return;
        // }

        // // use stord
        // setQuestions(JSON.parse(stored))
      } catch (err) {

      }
      console.log('loaded...');
      setLoading(false);
    })()
  }, [])

  const resetStorage = () => {
    setTimeout(() => localStorage.removeItem('questionResponse'), 1000)
  }

  const handleAnswer = ({ question }) => {
    const updatedQuestions = questions.map(q => {
      if (q.question == question.question) {
        return { ...question };
      } else {
        return q;
      }
    });

    // set in localstorage
    setQuestions(updatedQuestions);
    setTimeout(() => localStorage.setItem('questionResponse', JSON.stringify(updatedQuestions)), 1000)
  }

  const handleNext = () => {
    setQuestionIdx(questionIdx + 1);
    if (questionIdx + 1 >= questions.length)
      resetStorage();
  }

  const handlePrev = () => {
    if (questionIdx - 1 >= 0)
      setQuestionIdx(questionIdx - 1);
  }


  return (
    <div className="flex flex-col items-center justify-center py-8" style={{ minHeight: 'calc(100vh - 64px)' }}>

      {!loading && questions && (questionIdx == questions.length)
        ?
        <ReportCard questions={questions} />
        :
        <>
          {(questions.length > 0 && !loading) ?
            <QuestionCard question={questions[questionIdx]} handleAnswer={handleAnswer} totalQuestions={questions.length} currentQuestionNumber={questionIdx + 1} handleNext={handleNext} handlePrev={handlePrev} />
            :
            <Spinner size="lg" />
          }
        </>

      }
    </div>
  )
}

export default QuizzScreen