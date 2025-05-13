import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from "../other/Header";
import TaskList from "../TaskList/TaskList";
import Sidebar from './Sidebar';
import TaskStats from './TaskStats';
import UpcomingDeadlines from './UpcomingDeadlines';
import QuickActions from './QuickActions';

const EmployeeDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('tasks');
  const [theme, setTheme] = useState('light');
  const [mounted, setMounted] = useState(false);

  // Animation variants
  const sidebarVariants = {
    open: { 
      width: '280px',
      opacity: 1,
      transition: { type: 'spring', stiffness: 300, damping: 30 }
    },
    closed: { 
      width: '80px',
      opacity: 1,
      transition: { type: 'spring', stiffness: 300, damping: 30 }
    }
  };

  const contentVariants = {
    open: { 
      marginLeft: '280px',
      transition: { type: 'spring', stiffness: 300, damping: 30 }
    },
    closed: { 
      marginLeft: '80px',
      transition: { type: 'spring', stiffness: 300, damping: 30 }
    }
  };

  const tabContentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') || 
                      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.className = theme;
      localStorage.setItem('theme', theme);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'tasks':
        return (
          <motion.div
            variants={tabContentVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <TaskStats theme={theme} />
            <TaskList />
          </motion.div>
        );
      case 'deadlines':
        return (
          <motion.div
            variants={tabContentVariants}
            initial="hidden"
            animate="visible"
          >
            <UpcomingDeadlines />
          </motion.div>
        );
      default:
        return (
          <motion.div
            variants={tabContentVariants}
            initial="hidden"
            animate="visible"
          >
            <TaskStats theme={theme} />
            <TaskList />
          </motion.div>
        );
    }
  };

  if (!mounted) return <div className={`w-screen h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`} />;

  return (
    <div className={`flex min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      {/* Sidebar */}
      <motion.div
        initial={sidebarOpen ? 'open' : 'closed'}
        animate={sidebarOpen ? 'open' : 'closed'}
        variants={sidebarVariants}
        className={`fixed h-full ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg z-10`}
      >
        <Sidebar 
          isOpen={sidebarOpen}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          toggleSidebar={toggleSidebar}
          toggleTheme={toggleTheme}
          theme={theme}
        />
      </motion.div>

      {/* Main Content */}
      <motion.main
        initial={sidebarOpen ? 'open' : 'closed'}
        animate={sidebarOpen ? 'open' : 'closed'}
        variants={contentVariants}
        className={`flex-1 p-6 transition-all duration-300 ${sidebarOpen ? 'ml-[280px]' : 'ml-[80px]'}`}
      >
        <Header 
          toggleSidebar={toggleSidebar} 
          toggleTheme={toggleTheme}
          theme={theme}
        />

        <div className="mt-8">
          <div className="flex justify-between items-center mb-8">
            <motion.h1 
              className="text-3xl font-bold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {activeTab === 'tasks' && 'My Tasks'}
              {activeTab === 'deadlines' && 'Upcoming Deadlines'}
            </motion.h1>
            <QuickActions />
          </div>

          {renderActiveTab()}
        </div>
      </motion.main>
    </div>
  );
};

export default EmployeeDashboard;