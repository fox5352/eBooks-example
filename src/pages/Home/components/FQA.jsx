import React, { useState } from 'react'

const QuestionBlock = ({question, answer}) => {
    const [isFocus, setIsFocus] = useState(false)

    const toggleFocus = () => {
        setIsFocus(!isFocus)
    }

    return(
        <div key={Math.floor(Math.random()*99999)}  className='w-full px-4 rounded-md shadow-lg border-neutral-300 border-l-2 border-r-2 dark:border-slate-400 dark:shadow-slate-400 dark:shadow-sm'>
            <div className={`flex justify-between h-12 pt-2 pb-1 ${isFocus && 'border-b-[1px] border-neutral-300 dark:border-slate-400'}`}>
                <h3 className='w-3/5 text-left text-lg font-semibold'>{question}</h3>
                <button className='w-8 mr-1' onClick={toggleFocus}>
                    <i className='flex justify-center place-items-center text-lg font-semibold'>{isFocus? "-": "+"}</i>
                </button>
            </div>
            {isFocus && 
                <div className='text-left py-2 pl-1'>
                    <p>{answer}</p>
                </div>
            }
        </div>
    )
}

export const FQA = () => {

    const response = [{
        question: "what is this site ?", answer: "A example E-Commerce React website"},{
        question: "what is used for the backend", answer: "a fake example server, json-server"},{
        question: "Oh the site looks to nice", answer: "well thank you this project uses tailwindcss for styling"}]

    const mapper = ({question, answer}) => {
        return (<QuestionBlock key={Math.floor(Math.random()*90)} question={question} answer={answer} />)
    }

  return (
    <div className='space-y-4 p-2 text-center pb-6 mb-10 rounded-xl shadow-xl dark:shadow-slate-500'>
        <h2 className='text-xl underline underline-offset-4 py-2'>F Q A</h2>
        {response && response.map(mapper)}
    </div>
  )
}
