import { motion } from 'framer-motion';
import { FiCalendar, FiClock, FiAlertTriangle } from 'react-icons/fi';

const UpcomingDeadlines = () => {
  // Sample deadlines data
  const deadlines = [
    {
      id: 1,
      title: 'Q3 Sales Report',
      dueDate: '2023-11-15',
      priority: 'high',
      project: 'Sales Analysis',
      assignee: 'You'
    },
    {
      id: 2,
      title: 'Website Redesign',
      dueDate: '2023-11-20',
      priority: 'medium',
      project: 'Marketing',
      assignee: 'Sarah K.'
    },
    {
      id: 3,
      title: 'Client Onboarding Docs',
      dueDate: '2023-11-22',
      priority: 'low',
      project: 'Operations',
      assignee: 'You'
    },
    {
      id: 4,
      title: 'Team Building Event',
      dueDate: '2023-11-25',
      priority: 'medium',
      project: 'HR',
      assignee: 'Michael T.'
    },
    {
      id: 5,
      title: 'Annual Budget Review',
      dueDate: '2023-11-30',
      priority: 'high',
      project: 'Finance',
      assignee: 'You'
    }
  ];

  // Calculate days remaining
  const calculateDaysRemaining = (dueDate) => {
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = due - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  // Get priority color
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'low':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };

  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Upcoming Deadlines</h2>
        <div className="flex space-x-2">
          <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Add Deadline
          </button>
          <button className="px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            Filter
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg shadow">
        <div className="grid grid-cols-12 bg-gray-100 dark:bg-gray-800 p-4 font-medium">
          <div className="col-span-5">Task</div>
          <div className="col-span-2">Project</div>
          <div className="col-span-2">Due Date</div>
          <div className="col-span-2">Priority</div>
          <div className="col-span-1">Days Left</div>
        </div>

        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {deadlines.map((deadline, index) => (
            <motion.div
              key={deadline.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="grid grid-cols-12 items-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
            >
              <div className="col-span-5 font-medium flex items-center">
                <FiCalendar className="mr-2 text-blue-500" />
                {deadline.title}
                {deadline.assignee === 'You' && (
                  <span className="ml-2 px-2 py-0.5 text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full">
                    You
                  </span>
                )}
              </div>
              <div className="col-span-2 text-gray-600 dark:text-gray-400">
                {deadline.project}
              </div>
              <div className="col-span-2">
                {formatDate(deadline.dueDate)}
              </div>
              <div className="col-span-2">
                <span className={`px-2 py-1 text-xs rounded-full ${getPriorityColor(deadline.priority)}`}>
                  {deadline.priority.charAt(0).toUpperCase() + deadline.priority.slice(1)}
                </span>
              </div>
              <div className="col-span-1 flex items-center justify-end">
                {calculateDaysRemaining(deadline.dueDate) <= 3 ? (
                  <span className="flex items-center text-red-500 dark:text-red-400">
                    <FiAlertTriangle className="mr-1" />
                    {calculateDaysRemaining(deadline.dueDate)}
                  </span>
                ) : (
                  <span className="flex items-center text-gray-600 dark:text-gray-400">
                    <FiClock className="mr-1" />
                    {calculateDaysRemaining(deadline.dueDate)}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
        <div>Showing {deadlines.length} of {deadlines.length} deadlines</div>
        <div className="flex space-x-2">
          <button className="px-3 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
            Previous
          </button>
          <button className="px-3 py-1 rounded-md bg-blue-600 text-white hover:bg-blue-700">
            Next
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default UpcomingDeadlines;