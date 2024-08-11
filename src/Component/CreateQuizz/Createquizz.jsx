import React, { useState } from 'react'
import './Creatwquizz.css'
import {data} from '../../assets/Data'

const Createquizz = () => {

  const [quizData, setQuizzData] = useState(data);
  const [questionDetail, setQuestionDetail] = useState({
    Question: '',
    option_1: '',
    option_2: '',
    option_3: '',
    option_4: '',
    ans: ''
  })

const changeHandler =(e)=>{
  setQuestionDetail({...questionDetail, [e.target.name]:e.target.value})
}

const addQuestion = () => {
  // Create a deep copy of the current state's questionDetail
  let newQuestion = { ...questionDetail };
  // Use the spread operator to create a new array with the updated question data
  let newData = [...quizData, newQuestion];
  // Update the state with the new data
  setQuizzData(newData);

  // Example of handling success or failure messages
console.log("new quizz added succesfully")
};

  return (
    <div className='create-quizz'>
      <h1>Create new Quizz</h1>
      <hr/>
      <div className='create-quizz-section'>
        <div className='create-quizz-input'>
          <p>Question</p>
          <input velue={questionDetail.Question} onChange={changeHandler} type='text' name='Question' placeholder='Ente here your question'/>
        </div>
        <div className='create-quizz-input'>
          <p>Option_1</p>
          <input velue={questionDetail.option_1} onChange={changeHandler} type='text' name='option_1' placeholder='Ente here  option1'/>
        </div>
        <div className='create-quizz-input'>
          <p>Option_2</p>
          <input velue={questionDetail.option_2} onChange={changeHandler} type='text' name='option_2' placeholder='Ente here  option2'/>
        </div>
        <div className='create-quizz-input'>
          <p>Option_3</p>
          <input velue={questionDetail.option_3} onChange={changeHandler} type='text' name='option_3' placeholder='Ente here  option3'/>
        </div>
        <div className='create-quizz-input'>
          <p>Option_4</p>
          <input velue={questionDetail.option_4} onChange={changeHandler} type='text' name='option_4' placeholder='Ente here option4'/>
        </div>
        <div className='create-quizz-input'>
          <p>Answer</p>
          <input velue={questionDetail.ans} onChange={changeHandler} type='number' name='number' placeholder='Ente here your option number'/>
        </div>
        <button onClick={addQuestion}>Add</button>
      </div>
      <span>{console.log()}</span>
    </div>
  )
}

export default Createquizz
