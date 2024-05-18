import './quiz.css';

function Quiz() {
  return (
    <div className="container">
      <h1>Quiz Title</h1>
      <div className="question">
        <p><strong>Question 1:</strong> What is the capital of France?</p>
        <div className="options">
          <div className="option">A. London</div>
          <div className="option">B. Paris</div>
          <div className="option">C. Berlin</div>
          <div className="option">D. Rome</div>
        </div>
      </div>
      <button id="submit">Submit</button>
    </div>
  );
}

export default Quiz;
