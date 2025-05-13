import { motion } from 'framer-motion';

const TaskStats = ({ theme }) => {
  const stats = [
    { label: 'Total Tasks', value: 24 },
    { label: 'Completed', value: 12 },
    { label: 'In Progress', value: 8 },
    { label: 'Overdue', value: 4 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`p-4 rounded-lg shadow ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
        >
          <h3 className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>{stat.label}</h3>
          <p className="text-2xl font-bold mt-1">{stat.value}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default TaskStats;