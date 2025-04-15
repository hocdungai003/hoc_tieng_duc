import React, { useState, useEffect } from 'react';

export function WordSnake() {
  const [currentWord, setCurrentWord] = useState('');
  const [wordChain, setWordChain] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState<number>(() => {
    const saved = localStorage.getItem('wordSnakeHighScore');
    return saved ? parseInt(saved) : 0;
  });
  const [timeLeft, setTimeLeft] = useState(10);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (timeLeft > 0 && !gameOver) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setGameOver(true);
    }
  }, [timeLeft, gameOver]);

  useEffect(() => {
    if (gameOver && score > highScore) {
      setHighScore(score);
      localStorage.setItem('wordSnakeHighScore', score.toString());
    }
  }, [gameOver, score, highScore]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentWord.trim() === '') return;

    const isValid = wordChain.length === 0 || 
      currentWord.toLowerCase().startsWith(wordChain[wordChain.length - 1].slice(-1).toLowerCase());

    if (isValid) {
      setWordChain([...wordChain, currentWord]);
      setScore(score + currentWord.length);
      setTimeLeft(30);
      setCurrentWord('');
    }
  };

  const handleRestart = () => {
    setWordChain([]);
    setScore(0);
    setTimeLeft(30);
    setGameOver(false);
    setCurrentWord('');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Nối Từ</h1>
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

          {!gameOver ? (
            <form onSubmit={handleSubmit} className="mb-6">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={currentWord}
                  onChange={(e) => setCurrentWord(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Nhập từ tiếng Đức..."
                  disabled={gameOver}
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                  disabled={gameOver}
                >
                  Gửi
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Trò chơi kết thúc!</h2>
              <p className="text-lg text-gray-600 mb-2">Điểm số cuối cùng: {score}</p>
              <p className="text-lg text-gray-600 mb-4">Điểm cao nhất: {highScore}</p>
              <button
                onClick={handleRestart}
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Chơi lại
              </button>
            </div>
          )}

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Chuỗi từ:</h2>
            {wordChain.map((word, index) => (
              <div
                key={index}
                className="p-3 bg-gray-50 rounded-lg flex items-center justify-between"
              >
                <span className="font-medium text-gray-700">{word}</span>
                <span className="text-sm text-gray-500">+{word.length} điểm</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Luật chơi:</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Nhập từ tiếng Đức bắt đầu bằng chữ cái cuối cùng của từ trước đó</li>
            <li>Mỗi từ có 30 giây để nhập</li>
            <li>Điểm được tính bằng số chữ cái trong từ</li>
            <li>Trò chơi kết thúc khi hết thời gian</li>
          </ul>
        </div>
      </div>
    </div>
  );
}