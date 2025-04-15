import { Outlet } from 'react-router-dom';
import { Languages, Brain, PencilLine, Timer, Rows as Gallows } from 'lucide-react';
import { Navbar } from './Navbar';

export const gamesList = [

  {
    id: 'fill-blanks',
    title: 'Điền Từ',
    icon: PencilLine,
    description: 'Điền từ còn thiếu vào câu',
  },
  {
    id: 'true-false',
    title: 'Đúng/Sai',
    icon: Brain,
    description: 'Kiểm tra câu đúng hay sai',
  },
  {
    id: 'speed-translation',
    title: 'Dịch Nhanh',
    icon: Timer,
    description: 'Dịch câu trong thời gian giới hạn',
  },
  {
    id: 'hangman',
    title: 'Hangman',
    icon: Gallows,
    description: 'Đoán từ tiếng Đức',
  },
  {
    id: 'word-snake',
    title: 'Nối Từ',
    icon: Languages,
    description: 'Nối các từ tiếng Đức theo quy tắc',
  },
];

export function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="min-h-screen backdrop-blur-sm bg-white/30">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}