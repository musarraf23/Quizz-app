import { Card, CardBody, CardHeader, CardFooter } from '@nextui-org/card'
import { Divider, ScrollShadow } from '@nextui-org/react';
import React, { useState } from 'react'
import QuestionCard from './QuestionCard';
import Confetti from "react-confetti";
// import "animate.css";

function ReportCard({ questions }) {

    const [width, setWidth] = useState(innerWidth);
    const [height, setHeight] = useState(innerHeight);

    addEventListener('resize', () => {
        setWidth(innerWidth);
        setHeight(innerHeight);
    });

    const getNumCorrect = () => {
        let numCorrect = 0;
        questions.forEach(q => {
            numCorrect += q.response && (q.answer == q.response);
        });
        return numCorrect;
    }

    const getFeedback = () => {
        return (getNumCorrect() / questions.length) >= 0.6 ? 'pass' : 'fail';
    }

    return (
        <ScrollShadow className='w-full px-8'>
            <div className="flex flex-col gap-10 mx-auto max-w-[300px]">

                {
                    (getFeedback() == 'pass') && <Confetti width={width} height={height} recycle={false} />
                }

                <Card className="min-w-[300px]">
                    <CardHeader>
                        <div className='text-sm opacity-50 mx-auto'>
                            Your Report
                        </div>
                    </CardHeader>

                    <Divider />

                    <CardBody className='mx-auto flex flex-col gap-4 items-center'>
                        <div className='flex'>
                            SCORE : {getNumCorrect()} of {questions.length}
                        </div>
                    </CardBody>

                    <Divider />

                    <CardFooter>
                        <div className={`text-sm opacity-50 mx-auto ${getFeedback() == 'pass' ? 'text-green-400' : 'text-red-500'}`}>
                            You've {getFeedback()}ed The Test.
                        </div>
                    </CardFooter>
                </Card>
                {
                    questions.map((question, idx) => (
                        <QuestionCard key={question.question + idx} question={question} currentQuestionNumber={idx} totalQuestions={questions.length} readOnly={true} />
                    ))
                }
            </div>
        </ScrollShadow>

    )
}

export default ReportCard