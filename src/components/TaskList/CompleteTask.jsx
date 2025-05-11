import { useTask } from '../../context/TaskContext';
import PropTypes from 'prop-types';

const CompleteTask = ({ taskId }) => {
  const { updateTaskStatus } = useTask();

  const handleComplete = () => {
    updateTaskStatus(taskId, 'completed');
  };

  return (
    <button
      onClick={handleComplete}
      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors"
    >
      Complete Task
    </button>
  );
};

CompleteTask.propTypes = {
  taskId: PropTypes.number.isRequired
};

export default CompleteTask;