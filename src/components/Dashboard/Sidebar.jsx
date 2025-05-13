import { motion } from 'framer-motion';
import { FiHome, FiCheckSquare, FiTrendingUp, FiCalendar, FiUsers, FiSettings, FiMoon, FiSun, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Sidebar = ({ isOpen, activeTab, setActiveTab, toggleSidebar, toggleTheme, theme }) => {
  const menuItems = [
    { id: 'tasks', icon: <FiCheckSquare />, label: 'Tasks' },
    { id: 'performance', icon: <FiTrendingUp />, label: 'Performance' },
    { id: 'deadlines', icon: <FiCalendar />, label: 'Deadlines' },
    { id: 'team', icon: <FiUsers />, label: 'Team' },
  ];

  return (
    <div className="h-full flex flex-col">
      <div className={`p-4 flex items-center justify-between border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
        {isOpen ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold"
          >
            Employee Portal
          </motion.div>
        ) : (
          <div className="text-xl font-bold">EP</div>
        )}
        <button 
          onClick={toggleSidebar}
          className={`p-1 rounded-full ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}`}
        >
          {isOpen ? <FiChevronLeft /> : <FiChevronRight />}
        </button>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center p-3 rounded-lg transition-colors ${
              activeTab === item.id 
                ? theme === 'dark' 
                  ? 'bg-blue-900 text-blue-200' 
                  : 'bg-blue-100 text-blue-700'
                : theme === 'dark' 
                  ? 'hover:bg-gray-700' 
                  : 'hover:bg-gray-200'
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            {isOpen && (
              <motion.span 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="ml-3"
              >
                {item.label}
              </motion.span>
            )}
          </button>
        ))}
      </nav>

      <div className={`p-4 border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
        <button
          onClick={toggleTheme}
          className={`w-full flex items-center p-3 rounded-lg ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}`}
        >
          <span className="text-xl">
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </span>
          {isOpen && (
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="ml-3"
            >
              {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </motion.span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;