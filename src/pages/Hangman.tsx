import { useState, useEffect } from 'react';
import { words } from '../data/wordsHangman';

const ALLOWED_GUESSES = 6;

export function Hangman() {
  const [word, setWord] = useState(words[0]);
  const [guessedLetters, setGuessedLetters] = useState<Set<string>>(new Set());
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState<number>(() => {
    const saved = localStorage.getItem('hangmanHighScore');
    return saved ? parseInt(saved) : 0;
  });

  useEffect(() => {
    setWord(words[Math.floor(Math.random() * words.length)]);
  }, []);

  useEffect(() => {
    if (gameOver && won && score > highScore) {
      setHighScore(score);
      localStorage.setItem('hangmanHighScore', score.toString());
    }
  }, [gameOver, won, score, highScore]);

  const guessLetter = (letter: string) => {
    if (gameOver) return;

    const newGuessedLetters = new Set(guessedLetters);
    newGuessedLetters.add(letter);
    setGuessedLetters(newGuessedLetters);

    if (!word.word.includes(letter)) {
      const newWrongGuesses = wrongGuesses + 1;
      setWrongGuesses(newWrongGuesses);
      if (newWrongGuesses >= ALLOWED_GUESSES) {
        setGameOver(true);
      }
    } else {
      const allLettersGuessed = [...word.word].every(l => newGuessedLetters.has(l));
      if (allLettersGuessed) {
        setWon(true);
        setGameOver(true);
        setScore(score + 1);
      }
    }
  };

  const handleRestart = () => {
    setWord(words[Math.floor(Math.random() * words.length)]);
    setGuessedLetters(new Set());
    setWrongGuesses(0);
    setGameOver(false);
    setWon(false);
  };

  const displayWord = [...word.word]
    .map(letter => (guessedLetters.has(letter) ? letter : '_'))
    .join(' ');

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÜ'.split('');

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Hangman</h1>
            <div className="flex flex-col items-end">
              <div className="text-lg font-semibold text-indigo-600">
                Điểm: {score}
              </div>
              <div className="text-sm font-semibold text-indigo-600">
                Điểm cao nhất: {highScore}
              </div>
            </div>
          </div>

          <div className="text-center mb-8">
            <div className="mb-4">
              <p className="text-sm text-gray-600">Chủ đề: {word.category}</p>
              <p className="text-sm text-gray-600">Gợi ý: {word.hint}</p>
            </div>
            <div className="text-4xl font-mono tracking-widest mb-4">{displayWord}</div>
            <p className="text-gray-600">
              Còn lại: {ALLOWED_GUESSES - wrongGuesses} lượt đoán
            </p>
          </div>

          {gameOver ? (
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-4">
                {won ? 'Chúc mừng! 🎉' : 'Rất tiếc! 😢'}
              </h2>
              <p className="text-gray-600 mb-4">
                {won
                  ? 'Bạn đã đoán đúng từ!'
                  : `Từ cần tìm là: ${word.word} (${word.meaning})`}
              </p>
              <button
                onClick={handleRestart}
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Chơi lại
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-7 gap-2">
              {alphabet.map((letter) => (
                <button
                  key={letter}
                  onClick={() => guessLetter(letter)}
                  disabled={guessedLetters.has(letter)}
                  className={`p-2 text-center rounded-lg transition-colors ${
                    guessedLetters.has(letter)
                      ? 'bg-gray-200 text-gray-400'
                      : 'bg-indigo-100 hover:bg-indigo-200 text-indigo-800'
                  }`}
                >
                  {letter}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Luật chơi:</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Đoán từng chữ cái trong từ tiếng Đức</li>
            <li>Có {ALLOWED_GUESSES} lượt đoán sai</li>
            <li>Xem gợi ý để dễ đoán hơn</li>
            <li>Cố gắng đoán đúng trước khi hết lượt!</li>
          </ul>
        </div>
      </div>
    </div>
  );
}