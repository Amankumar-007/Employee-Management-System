import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="text-white text-xl font-semibold">
            Hey {user?.name}👋
          </div>
          <span className="text-gray-400 text-sm capitalize">({user?.role})</span>
        </div>
        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors"
        >
          Log out
        </button>
      </div>
    </header>
  )
}

export default Header;