import { useState } from "react";
import Header from "../other/Header";
import { useTask } from "../../context/TaskContext";
import TaskList from "../TaskList/TaskList";
import EmployeeList from "./EmployeeList";

const AdminDashboard = () => {
  const { createTask } = useTask();
  const [activeTab, setActiveTab] = useState('tasks');
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    assignTo: "",
    category: "",
    description: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      ...formData,
      createdAt: new Date().toISOString()
    });
    setFormData({
      title: "",
      date: "",
      assignTo: "",
      category: "",
      description: ""
    });
  };
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setActiveTab('tasks')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'tasks'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            Task Management
          </button>
          <button
            onClick={() => setActiveTab('employees')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'employees'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            Employee Management
          </button>
        </div>

        {activeTab === 'tasks' ? (
          <>
            <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg mb-8">
              <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <label className="block text-white mb-2">Task Title</label>
                <input
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full bg-gray-700 text-white p-2 rounded border-2 border-gray-600 focus:border-blue-500 focus:outline-none"
                  type="text"
                  placeholder="Enter task title"
                  required
                />
              </div>
              <div>
                <label className="block text-white mb-2">Due Date</label>
                <input
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full bg-gray-700 text-white p-2 rounded border-2 border-gray-600 focus:border-blue-500 focus:outline-none"
                  type="date"
                  required
                />
              </div>
              <div>
                <label className="block text-white mb-2">Assign To</label>
                <input
                  name="assignTo"
                  value={formData.assignTo}
                  onChange={handleChange}
                  className="w-full bg-gray-700 text-white p-2 rounded border-2 border-gray-600 focus:border-blue-500 focus:outline-none"
                  type="text"
                  placeholder="Employee name or email"
                  required
                />
              </div>
              <div>
                <label className="block text-white mb-2">Category</label>
                <input
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full bg-gray-700 text-white p-2 rounded border-2 border-gray-600 focus:border-blue-500 focus:outline-none"
                  type="text"
                  placeholder="Task category"
                  required
                />
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-white mb-2">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full bg-gray-700 text-white p-2 rounded border-2 border-gray-600 focus:border-blue-500 focus:outline-none"
                  rows="8"
                  placeholder="Task description"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition-colors"
              >
                Create Task
              </button>
            </div>
          </div>
        </form>            <TaskList />
          </>
        ) : (
          <EmployeeList />
        )}
      </div>
    </>
  );
}

export default AdminDashboard