import { motion } from 'framer-motion';

const QuickActions = () => {
  const actions = [
    { label: 'New Task', icon: '➕' },
    { label: 'Report', icon: '📊' },
    { label: 'Message', icon: '✉️' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex space-x-2"
    >
      {actions.map((action) => (
        <motion.button
          key={action.label}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="px-3 py-2 bg-blue-600 text-white rounded-lg text-sm flex items-center space-x-1"
        >
          <span>{action.icon}</span>
          <span>{action.label}</span>
        </motion.button>
      ))}
    </motion.div>
  );
};

export default QuickActions;