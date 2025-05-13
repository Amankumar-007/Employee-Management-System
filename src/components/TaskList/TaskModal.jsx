import PropTypes from 'prop-types';
import { useAuth } from '../../context/AuthContext';
import { useTask } from '../../context/TaskContext';

const TaskModal = ({ task, onClose }) => {
  const { user } = useAuth();
  const { updateTaskStatus } = useTask();

  if (!task) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-800 rounded-lg p-6 w-full max-w-2xl">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold text-white">{task.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            ✕
          </button>
        </div>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-gray-400 text-sm">Category</h3>
            <p className="text-white">{task.category}</p>
          </div>

          <div>
            <h3 className="text-gray-400 text-sm">Assigned To</h3>
            <p className="text-white">{task.assignTo}</p>
          </div>

          <div>
            <h3 className="text-gray-400 text-sm">Due Date</h3>
            <p className="text-white">{task.date}</p>
          </div>

          <div>
            <h3 className="text-gray-400 text-sm">Description</h3>
            <p className="text-white whitespace-pre-wrap">{task.description}</p>
          </div>

          <div>
            <h3 className="text-gray-400 text-sm">Status</h3>
            <p className={`inline-block px-2 py-1 rounded text-sm ${
              task.status === 'completed' ? 'bg-green-500' : 'bg-yellow-500'
            } text-white`}>
              {task.status}
            </p>
          </div>

          {user?.role === 'employee' && task.status === 'pending' && (
            <div className="pt-4 border-t border-gray-700">
              <button
                onClick={() => {
                  updateTaskStatus(task.id, 'completed');
                  onClose();
                }}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition-colors"
              >
                Mark as Complete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

TaskModal.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
    assignTo: PropTypes.string,
    category: PropTypes.string,
    status: PropTypes.string,
  }),
  onClose: PropTypes.func.isRequired,
};

export default TaskModal;
