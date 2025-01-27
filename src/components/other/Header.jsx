const Header = () => {
  return (
    <header className="shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className=" text-white text-xl font-semibold">
            Hey Aman👋
          </div>
          <button
            
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors"
          >
            Log out
          </button>
        </div>
      </header>
  )
}

export default Header;