import './quiz.css';
import { quizData } from "../Utils";
import { useState } from 'react';

function Quiz() {
  const [currentIndex, setcurrentIndex] = useState(0);
  const [isCorrect, setIsCorrect] = useState(true); 

  
  const handleOptionClick = (selectedOption:any) => {
    const correctAnswer = quizData[currentIndex].answer;
    if (selectedOption === correctAnswer) {
      setcurrentIndex(prevIndex => prevIndex + 1);
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <div className="container">
  {currentIndex < 9 && (
    <div>
      <h1>Quiz Title</h1>
      <div className="question">
        <p><strong>Question {currentIndex + 1}:</strong>{quizData[currentIndex].question}</p>
        {!isCorrect && <p style={{color: "red"}}>It is Incorrect</p>}
        <div className="options">
          {quizData[currentIndex].options.map((option, index) => (
            <button className="option" key={index} value={option} onClick={() => handleOptionClick(option)}>
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  )}
  {
    currentIndex >= 9 && (
      <div>
    <h1>The End</h1>
  </div>
    )
  }
</div>

  );
}

export default Quiz;
