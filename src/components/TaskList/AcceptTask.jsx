import { useTask } from '../../context/TaskContext';
import PropTypes from 'prop-types';

const AcceptTask = ({ taskId }) => {
  const { updateTaskStatus } = useTask();

  const handleAccept = () => {
    updateTaskStatus(taskId, 'in-progress');
  };

  return (
    <button
      onClick={handleAccept}
      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors"
    >
      Accept Task
    </button>
  );
};

AcceptTask.propTypes = {
  taskId: PropTypes.number.isRequired
};

export default AcceptTask;