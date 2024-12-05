import React from 'react'
import Logo from '../components/Logo'
import { motion } from 'framer-motion'
import { Button } from '@nextui-org/button'
import { Image } from '@nextui-org/image'
import { images } from "../constants"

function HomeScreen() {

    return (
        <div className='relative w-full flex flex-col' style={{ minHeight: 'calc(100vh - 64px)' }}>
            <div className='absolute w-[200px] h-[200px] bg-sky-500/10 z-1 blur-3xl rounded-full' />
            <div className='absolute w-[200px] h-[200px] top-0 left-20 bg-purple-500/10 z-1 blur-3xl rounded-full' />
            <div className='absolute w-[200px] h-[200px] top-20 left-20 bg-violet-500/10 z-1 blur-3xl rounded-full' />

            <div className='relative m-auto flex flex-col items-center gap-10'>
                <motion.div
                    className='text-5xl mt-10'
                    initial={{
                        opacity: 0.0,
                    }}
                    animate={{
                        opacity: 1.0,
                    }}
                    transition={{
                        duration: 2,
                        type: 'spring',
                        stiffness: 260,
                        damping: 20,
                    }}
                >

                    Welcome To
                </motion.div>

                <motion.div
                    className='text-3xl'
                    initial={{
                        translateX: -100,
                        opacity: 0,
                    }}
                    animate={{
                        translateX: 0,
                        opacity: 1,
                    }}
                    transition={{
                        delay: 1,
                        type: 'spring',
                        stiffness: 260,
                        damping: 20,
                    }}
                >
                    <Logo />
                </motion.div>


                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        delay: 1,
                        type: 'spring',
                        stiffness: 260,
                        damping: 20,
                    }}
                >
                    <Button variant="bordered" as="a" href="/quizz"> Take Quizz. </Button>

                </motion.div>

                <motion.div
                    initial={{
                        opacity: 0,
                        translateY: 100,
                    }}
                    animate={{
                        opacity: 1,
                        translateY: 0,
                    }}
                    transition={{
                        delay: 2,
                    }}
                >

                    <Image src={images.online_test} className="w-[80%] max-w-[350px] m-auto" />
                </motion.div>

            </div>
        </div>
    )
}

export default HomeScreen