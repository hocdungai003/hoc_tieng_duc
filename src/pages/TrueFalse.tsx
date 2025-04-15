import React, { useState, useEffect } from 'react';
import { questions } from '../data/questionsTrueFalse';

export function TrueFalse() {
  const [gameQuestions, setGameQuestions] = useState<typeof questions>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState<number>(() => {
    const saved = localStorage.getItem('trueFalseHighScore');
    return saved ? parseInt(saved) : 0;
  });
  const [showResult, setShowResult] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);

  // Function to shuffle and limit questions
  const prepareQuestions = (array: typeof questions, limit: number) => {
    const shuffled = [...array].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(limit, array.length));
  };

  // Initialize shuffled and limited questions on mount
  useEffect(() => {
    setGameQuestions(prepareQuestions(questions, 20));
  }, []);

  useEffect(() => {
    if (showResult && score > highScore) {
      setHighScore(score);
      localStorage.setItem('trueFalseHighScore', score.toString());
    }
  }, [showResult, score, highScore]);

  const handleAnswer = (answer: boolean) => {
    setSelectedAnswer(answer);
    setShowExplanation(true);
    
    if (answer === gameQuestions[currentQuestion].isCorrect) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < gameQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowExplanation(false);
      } else {
        setShowResult(true);
      }
    }, 4000);
  };

  const handleRestart = () => {
    setGameQuestions(prepareQuestions(questions, 20));
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setShowExplanation(false);
    setSelectedAnswer(null);
  };

  if (showResult) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Kết quả</h2>
          <p className="text-xl text-gray-600 mb-4">
            Bạn đã trả lời đúng {score} / {gameQuestions.length} câu
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Điểm cao nhất: {highScore} / {gameQuestions.length}
          </p>
          <button
            onClick={handleRestart}
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Chơi lại
          </button>
        </div>
      </div>
    );
  }

  if (gameQuestions.length === 0) {
    return <div>Loading...</div>;
  }

  const question = gameQuestions[currentQuestion];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Đúng hay Sai?</h1>
            <div className="text-lg font-semibold text-indigo-600">
              Câu {currentQuestion + 1}/{gameQuestions.length}
            </div>
          </div>

          <div className="mb-8">
            <p className="text-xl text-gray-800 text-center p-6 bg-gray-50 rounded-lg">
              {question.sentence}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <button
              onClick={() => handleAnswer(true)}
              disabled={selectedAnswer !== null}
              className={`p-4 text-lg rounded-lg transition-colors ${
                selectedAnswer === true
                  ? question.isCorrect
                    ? 'bg-green-500 text-white'
                    : 'bg-red-500 text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
              }`}
            >
              ✓ Đúng
            </button>
            <button
              onClick={() => handleAnswer(false)}
              disabled={selectedAnswer !== null}
              className={`p-4 text-lg rounded-lg transition-colors ${
                selectedAnswer === false
                  ? !question.isCorrect
                    ? 'bg-green-500 text-white'
                    : 'bg-red-500 text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
              }`}
            >
              ✗ Sai
            </button>
          </div>

          {showExplanation && (
            <div className="p-4 bg-blue-50 text-blue-800 rounded-lg mb-6">
              {question.explanation}
            </div>
          )}

          <div className="flex justify-between items-center">
            <div className="text-lg font-semibold text-gray-600">
              Điểm: {score}
            </div>
            <div className="text-lg font-semibold text-gray-600">
              Cao nhất: {highScore}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Luật chơi:</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Đọc câu tiếng Đức và quyết định câu đó đúng hay sai</li>
            <li>Mỗi câu trả lời đúng được 1 điểm</li>
            <li>Sau mỗi câu sẽ có giải thích chi tiết</li>
            <li>Trò chơi gồm tối đa 20 câu hỏi mỗi lần chơi</li>
          </ul>
        </div>
      </div>
    </div>
  );
}