import { Button } from '@nextui-org/button'
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card'
import { Divider } from '@nextui-org/divider'
import { Progress } from '@nextui-org/progress'
import { Radio, RadioGroup } from '@nextui-org/react'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

function QuestionCard({ question, currentQuestionNumber, totalQuestions, handleAnswer = () => { }, handleNext = () => { }, handlePrev = () => { }, readOnly = false }) {

    const [selected, setSelected] = useState(question.response);

    useEffect(() => {
        question.response = selected;
        handleAnswer({ question });
    }, [selected])

    return (
        <Card className="min-w-[300px]">
            <CardHeader>
                <div className='text-sm opacity-50'>
                    {currentQuestionNumber} of {totalQuestions}
                </div>
            </CardHeader>

            {!readOnly &&
                <Progress size='sm' value={(currentQuestionNumber / totalQuestions) * 100} />
            }

            <CardBody className='mx-auto my-2'>
                {/* Question */}
                {readOnly ?
                    <div className='opacity-50'>
                        {question.question}
                    </div>
                    :
                    <motion.div
                        key={question.question + 1}
                        initial={{
                            translateY: 50,
                            translateX: 50,
                            opacity: 0,
                            scale: 0,
                        }}
                        animate={{
                            translateY: 0,
                            translateX: 0,
                            opacity: 1,
                            scale: 1,
                        }}

                        transition={{
                            type: 'spring',
                            stiffness: 260,
                            damping: 20,
                        }}
                    >

                        {question.question}
                    </motion.div>
                }


                {/* Options */}
                {!readOnly &&
                    <motion.div
                        key={question.question}
                        initial={{
                            translateX: -10,
                            opacity: 0,
                        }}
                        animate={{
                            translateX: 0,
                            opacity: 1,
                        }}

                        transition={{
                            type: 'spring',
                            stiffness: 260,
                            damping: 20,
                        }}
                        className='flex flex-col gap-1 my-4'
                    >

                        {
                            question.options.map((option, idx) => (
                                <label
                                // className={(selected == option) && readOnly && ((question.answer == question.response) ? 'text-green-500' : 'text-red-500')}
                                >
                                    <input
                                        type={'radio'}
                                        checked={option == question.response}
                                        key={idx + option + question.question}
                                        value={option}
                                        disabled={readOnly}
                                        onChange={(e) => { e.target.checked && setSelected(e.target.value); }}
                                        name="answer"
                                        color={
                                            readOnly ? (
                                                (option == question.answer) ? 'success' : 'danger'
                                            ) : 'primary'
                                        }
                                        className="ml-4"
                                    />

                                    <span className='px-4'>
                                        {option}
                                    </span>

                                </label>
                            ))
                        }

                    </motion.div>
                }

                {readOnly &&
                    <RadioGroup
                        className='my-4 mx-4'
                        value={selected}
                        isDisabled={readOnly}
                        onValueChange={setSelected}
                    >
                        {
                            question.options.map((option, idx) => (
                                <Radio
                                    key={idx + option + question.question}
                                    value={option}
                                    color={
                                        readOnly ? (
                                            (option == question.answer) ? 'success' : 'danger'
                                        ) : 'primary'
                                    }
                                >
                                    {option}
                                </Radio>
                            ))
                        }
                    </RadioGroup>

                }
            </CardBody>

            <Divider />

            <CardFooter>
                {!readOnly ?
                    <>
                        <Button size="sm" variant="bordered" className='m-auto' onClick={() => { handlePrev() }}>Previous</Button>
                        {(totalQuestions == currentQuestionNumber)
                            ?
                            <Button size="sm" variant="bordered" color="success" className='m-auto' onClick={() => { handleNext() }}>
                                Submit
                            </Button>
                            :
                            <Button size="sm" variant="bordered" className='m-auto' onClick={() => { handleNext() }}>
                                Next
                            </Button>
                        }
                    </>
                    :
                    (question.answer != question.response) &&
                    <>
                        <div className='text-sm opacity-50'>
                            Correct Answer : {question.answer}
                        </div>

                    </>
                }
            </CardFooter>
        </Card >
    )
}

export default QuestionCard