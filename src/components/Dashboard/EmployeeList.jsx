import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import Register from '../Auth/Register';

const EmployeeList = () => {
  const { employees, toggleEmployeeStatus, removeEmployee } = useAuth();
  const [showRegister, setShowRegister] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRemoveEmployee = async (employeeId) => {
    if (window.confirm('Are you sure you want to remove this employee?')) {
      setLoading(true);
      try {
        await removeEmployee(employeeId);
      } catch (error) {
        console.error('Error removing employee:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Employee Management</h2>
        <button
          onClick={() => setShowRegister(!showRegister)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors"
        >
          {showRegister ? 'Close Register' : 'Add Employee'}
        </button>
      </div>

      {showRegister && (
        <div className="mb-6">
          <Register onSuccess={() => setShowRegister(false)} />
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-700 rounded-lg overflow-hidden">
          <thead className="bg-gray-600">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-600">
            {employees.map(employee => (
              <tr key={employee.id}>
                <td className="px-6 py-4 whitespace-nowrap text-gray-300">{employee.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-300">{employee.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    employee.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {employee.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                  <button
                    onClick={() => toggleEmployeeStatus(employee.id)}
                    className={`${
                      employee.status === 'active' ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
                    } text-white px-3 py-1 rounded transition-colors`}
                  >
                    {employee.status === 'active' ? 'Block' : 'Unblock'}
                  </button>                  <button
                    onClick={() => handleRemoveEmployee(employee.id)}
                    disabled={loading}
                    className={`bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition-colors ${
                      loading ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {loading ? 'Removing...' : 'Remove'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
