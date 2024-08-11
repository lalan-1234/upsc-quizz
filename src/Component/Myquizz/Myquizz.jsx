
import React, { useRef, useState } from 'react'
import './Myqizz.css'
import {data} from '../../assets/Data'

const Myquizz = () => {

  const [index, setIndex] = useState(0)
  const [question, setQuestion] = useState(data[index])
  const [lock, setLock] = useState(false)
  const [score , setScore] = useState(0)
  const [result, setResult] = useState(false)
 


  let option1 = useRef(null)
  let option2 = useRef(null)
  let option3 = useRef(null)
  let option4 = useRef(null)

  let option_array = [option1, option2, option3, option4]

  const nextQuestion =(e, index)=> {
    if(lock === true){
      if(index === data.length -1){
        setResult(true);
        setScore((prev)=>prev +1)
      }
    setIndex(++index);
    setQuestion(data[index]);
    setLock(false);
    option_array.map((option)=>{
      option.current.classList.remove("correct", "wrong");
      return null;
    })
    }
  }

const resetQuizz =(e, index)=>{
  setIndex(0);
  setQuestion(data[0]);
  setScore(0)
  setLock(false);
  setResult(false)

}

  const checkAns =(e, ans)=>{
    if(lock === false){
      if(question.ans === ans){
        e.target.classList.add("correct");
        setLock(true);
        setScore((prev)=> prev +1)
    
      }
      else{
        e.target.classList.add("wrong");
        setLock(true);
        option_array[question.ans -1].current.classList.add("correct");
      }

    }
    
  }

  return (
    <div className='quizz'>
      <h1>My Quizz</h1>
      <hr/>
      {result?(<></>):(
        <> 
        <div className="quizz-section">
      <h2>{index +1}. {question.Question}</h2>
      <ul>
        <li ref={option1} onClick={(e)=>checkAns(e, 1)}>{question.option_1}</li>
        <li ref={option2} onClick={(e)=>checkAns(e, 2)}>{question.option_2}</li>
        <li ref={option3} onClick={(e)=>checkAns(e, 3)}>{question.option_3}</li>
        <li ref={option4} onClick={(e)=>checkAns(e, 4)}>{question.option_4}</li>
      </ul>
      <button onClick={(e)=>nextQuestion(e, index)}>Next</button>
      <div>{index +1}  of  {data.length}</div>
      </div>
        </>)}
      {result?(
        <>
        <div className='score'>
        <h2>congratulation,</h2>
        <p>you scored:{score} out of {data.length}</p>
        <button onClick={(e)=>resetQuizz(e, index)}>Reset Quizz</button>
      </div>
        </>):(<></>)}
      
      
    </div>
  )
}

export default Myquizz
