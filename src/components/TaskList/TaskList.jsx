import { useTask } from '../../context/TaskContext';
import { useAuth } from '../../context/AuthContext';

const TaskList = () => {
  const { tasks, updateTaskStatus } = useTask();
  const { user } = useAuth();

  const pendingTasks = tasks.filter(task => task.status === 'pending');
  const completedTasks = tasks.filter(task => task.status === 'completed');

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-white">Pending Tasks ({pendingTasks.length})</h2>
          <div className="space-y-4">
            {pendingTasks.map(task => (
              <div key={task.id} className="bg-gray-700 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-2">{task.title}</h3>
                <p className="text-gray-300 mb-3">{task.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Due: {task.date}</span>
                  {user?.role === 'employee' && (
                    <button
                      onClick={() => updateTaskStatus(task.id, 'completed')}
                      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                    >
                      Complete
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-white">Completed Tasks ({completedTasks.length})</h2>
          <div className="space-y-4">
            {completedTasks.map(task => (
              <div key={task.id} className="bg-gray-700 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-2">{task.title}</h3>
                <p className="text-gray-300 mb-3">{task.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Completed</span>
                  <span className="text-green-400">✓</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
