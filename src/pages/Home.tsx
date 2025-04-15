import { Link } from 'react-router-dom';
import { gamesList } from '../components/Layout';

export function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
          Học Tiếng Đức Qua Mini-Games
        </h1>
        <p className="text-lg text-white/90 drop-shadow">
          Khám phá và học tiếng Đức một cách thú vị thông qua 5 trò chơi tương tác
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gamesList.map((game) => {
          const Icon = game.icon;
          return (
            <Link
              key={game.id}
              to={`/${game.id}`}
              className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 group"
            >
              <div className="flex items-center justify-center mb-4">
                <Icon className="h-12 w-12 text-indigo-600 group-hover:text-indigo-700 transition-colors" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center group-hover:text-indigo-700 transition-colors">
                {game.title}
              </h2>
              <p className="text-gray-600 text-center">{game.description}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}