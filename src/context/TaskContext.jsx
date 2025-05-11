import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const TaskContext = createContext();

export const useTask = () => useContext(TaskContext);

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  const createTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), status: 'pending' }]);
  };

  const updateTaskStatus = (taskId, status) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, status } : task
    ));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <TaskContext.Provider value={{ tasks, createTask, updateTaskStatus, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
}

TaskProvider.propTypes = {
  children: PropTypes.node.isRequired
};