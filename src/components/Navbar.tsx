import { Link, useLocation } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';
import { gamesList } from './Layout';

export function Navbar() {
  const location = useLocation();
  
  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <GraduationCap className="h-8 w-8 text-indigo-600 group-hover:text-indigo-700 transition-colors" />
            <span className="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors">
              Deutsch Lernen
            </span>
          </Link>
          
          <div className="hidden md:flex space-x-4">
            {gamesList.map((game) => (
              <Link
                key={game.id}
                to={`/${game.id}`}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  location.pathname === `/${game.id}`
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-700'
                }`}
              >
                {game.title}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center">
            <span className="text-sm font-medium text-gray-600 bg-white/50 px-4 py-2 rounded-full shadow-sm">
              Điểm: {localStorage.getItem('highScore') || 0}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}