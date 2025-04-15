import { useState, useEffect } from 'react';
import { questions } from '../data/questionTranslation';

export function SpeedTranslation() {
  const [gameQuestions, setGameQuestions] = useState<typeof questions>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState<number>(() => {
    const saved = localStorage.getItem('speedTranslationHighScore');
    return saved ? parseInt(saved) : 0;
  });
  const [timeLeft, setTimeLeft] = useState(45);
  const [gameOver, setGameOver] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);

  // Function to shuffle questions
  const shuffleQuestions = (array: typeof questions) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  // Initialize shuffled questions on mount
  useEffect(() => {
    setGameQuestions(shuffleQuestions(questions));
  }, []);

  useEffect(() => {
    if (timeLeft > 0 && !gameOver) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setFeedback('incorrect');
      setShowResult(true);
      setGameOver(true);
    }
  }, [timeLeft, gameOver]);

  const checkAnswer = (userAnswer: string, correctAnswers: string[]) => {
    return correctAnswers.some(
      correct => correct.toLowerCase().trim() === userAnswer.toLowerCase().trim()
    );
  };

  const handleSubmit = () => {
    const isCorrect = checkAnswer(answer, gameQuestions[currentQuestion].german);
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    
    if (isCorrect) {
      const newScore = score + 1;
      setScore(newScore);
      // Update high score immediately if new score is higher
      if (newScore > highScore) {
        setHighScore(newScore);
        localStorage.setItem('speedTranslationHighScore', newScore.toString());
      }
      setTimeout(() => {
        if (currentQuestion < gameQuestions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
          setAnswer('');
          setTimeLeft(15);
          setFeedback(null);
        } else {
          setShowResult(true);
          setGameOver(true);
        }
      }, 1500);
    } else {
      setShowResult(true);
      setGameOver(true);
    }
  };

  const handleRestart = () => {
    setGameQuestions(shuffleQuestions(questions));
    setCurrentQuestion(0);
    setAnswer('');
    setScore(0);
    setTimeLeft(45);
    setGameOver(false);
    setShowResult(false);
    setFeedback(null);
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

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Dịch Nhanh</h1>
            <div className="flex flex-wrap justify-center sm:justify-end gap-4">
              <div className="text-base sm:text-lg font-semibold text-indigo-600">
                Điểm: {score}
              </div>
              <div className="text-base sm:text-lg font-semibold text-indigo-600">
                Cao nhất: {highScore}
              </div>
              <div className="text-base sm:text-lg font-semibold text-orange-500">
                ⏰ {timeLeft}s
              </div>
            </div>
          </div>

          <div className="mb-8">
            <div className="text-lg sm:text-xl text-center p-6 bg-gray-50 rounded-lg mb-4">
              {gameQuestions[currentQuestion].vietnamese}
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
              className="space-y-4"
            >
              <input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className={`w-full p-4 border rounded-lg focus:outline-none focus:ring-2 ${
                  feedback === 'correct'
                    ? 'border-green-500 ring-green-200'
                    : feedback === 'incorrect'
                    ? 'border-red-500 ring-red-200'
                    : 'border-gray-300 focus:ring-indigo-200'
                }`}
                placeholder="Nhập câu tiếng Đức..."
                disabled={feedback !== null}
              />
              <button
                type="submit"
                className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                disabled={feedback !== null}
              >
                Gửi
              </button>
            </form>
          </div>

          {feedback && (
            <div
              className={`p-4 rounded-lg text-center mb-6 ${
                feedback === 'correct'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}
            >
              {feedback === 'correct' ? 'Chính xác!' : 'Chưa chính xác!'}
              <div className="mt-2 text-sm">
                Đáp án: {gameQuestions[currentQuestion].german.join(' hoặc ')}
              </div>
            </div>
          )}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Luật chơi:</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Dịch câu tiếng Việt sang tiếng Đức</li>
            <li>Mỗi câu có 45 giây để trả lời</li>
            <li>Mỗi câu trả lời đúng được 1 điểm</li>
            <li>Trả lời sai hoặc hết thời gian sẽ kết thúc trò chơi</li>
            <li>Chú ý viết hoa danh từ và dấu câu</li>
          </ul>
        </div>
      </div>
    </div>
  );
}