import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { WordSnake } from './pages/WordSnake';
import { FillBlanks } from './pages/FillBlanks';
import { TrueFalse } from './pages/TrueFalse';
import { SpeedTranslation } from './pages/SpeedTranslation';
import { Hangman } from './pages/Hangman';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="fill-blanks" element={<FillBlanks />} />
        <Route path="true-false" element={<TrueFalse />} />
        <Route path="speed-translation" element={<SpeedTranslation />} />
        <Route path="hangman" element={<Hangman />} />
        <Route path="word-snake" element={<WordSnake />} />
      </Route>
    </Routes>
  );
}

export default App;