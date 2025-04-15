import { useState, useEffect } from 'react';
import { easy, medium, hard } from '../data/questionsFillBlanks';

export function FillBlanks() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState<number>(() => {
    const saved = localStorage.getItem('highScore');
    return saved ? parseInt(saved) : 0;
  });
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [gameQuestions, setGameQuestions] = useState<typeof easy>([]);

  // Function to shuffle array
  const shuffleArray = (array: typeof easy) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  // Initialize game questions
  useEffect(() => {
    const easyQuestions = shuffleArray(easy).slice(0, 7);
    const mediumQuestions = shuffleArray(medium).slice(0, 7);
    const hardQuestions = shuffleArray(hard).slice(0, 6);
    setGameQuestions([...easyQuestions, ...mediumQuestions, ...hardQuestions]);
  }, []);

  // Update high score when game ends
  useEffect(() => {
    if (showResult && score > highScore) {
      setHighScore(score);
      localStorage.setItem('highScore', score.toString());
    }
  }, [showResult, score, highScore]);

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    const correct = answer === gameQuestions[currentQuestionIndex].correctAnswer;
    setIsCorrect(correct);
    
    if (correct) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestionIndex < 19) { // 20 questions total (0-19)
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
        setIsCorrect(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setIsCorrect(null);
    // Reshuffle questions for new game
    const easyQuestions = shuffleArray(easy).slice(0, 7);
    const mediumQuestions = shuffleArray(medium).slice(0, 7);
    const hardQuestions = shuffleArray(hard).slice(0, 6);
    setGameQuestions([...easyQuestions, ...mediumQuestions, ...hardQuestions]);
  };

  if (showResult) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Kết quả</h2>
          <p className="text-xl text-gray-600 mb-4">
            Bạn đã trả lời đúng {score} / 20 câu
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Điểm cao nhất: {highScore} / 20
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

  const question = gameQuestions[currentQuestionIndex];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Điền Từ</h1>
            <div className="text-lg font-semibold text-indigo-600">
              Câu {currentQuestionIndex + 1}/20
            </div>
          </div>

          <div className="mb-8">
            <p className="text-xl text-gray-800 mb-2">{question.sentence}</p>
            <p className="text-gray-600 italic">{question.translation}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {question.options.map((option: string) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                disabled={selectedAnswer !== null}
                className={`p-4 text-lg rounded-lg transition-colors ${
                  selectedAnswer === option
                    ? isCorrect
                      ? 'bg-green-500 text-white'
                      : 'bg-red-500 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          <div className="mt-6 flex justify-between items-center">
            <div className="text-lg font-semibold text-gray-600">
              Điểm: {score}
            </div>
            <div className="text-lg font-semibold text-gray-600">
              Độ khó: {question.difficulty === 'easy' ? 'Dễ' : question.difficulty === 'medium' ? 'Trung bình' : 'Khó'}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Luật chơi:</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Chọn từ thích hợp để điền vào chỗ trống</li>
            <li>Mỗi câu trả lời đúng được 1 điểm</li>
            <li>Có thể xem bản dịch tiếng Việt để dễ hiểu hơn</li>
            <li>Trò chơi gồm 20 câu: 7 dễ, 7 trung bình, 6 khó</li>
          </ul>
        </div>
      </div>
    </div>
  );
}