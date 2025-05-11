import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getStorageItem, setStorageItem, STORAGE_KEYS } from '../utils/LocalStorage';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [employees, setEmployees] = useState(() => 
    getStorageItem(STORAGE_KEYS.EMPLOYEES) || [
      { id: 1, name: 'Employee', email: 'employee@example.com', role: 'employee', status: 'active' }
    ]
  );

  useEffect(() => {
    setStorageItem(STORAGE_KEYS.EMPLOYEES, employees);
  }, [employees]);

  const registerEmployee = (employeeData) => {
    const newEmployee = {
      id: Date.now(),
      ...employeeData,
      role: 'employee',
      status: 'active'
    };
    setEmployees([...employees, newEmployee]);
  };

  const toggleEmployeeStatus = (employeeId) => {
    setEmployees(employees.map(emp => 
      emp.id === employeeId 
        ? { ...emp, status: emp.status === 'active' ? 'blocked' : 'active' }
        : emp
    ));
  };

  const removeEmployee = (employeeId) => {
    setEmployees(employees.filter(emp => emp.id !== employeeId));
  };

  const login = async (email, password) => {
    setLoading(true);
    try {
      if (email === "admin@example.com" && password === "admin123") {
        setUser({ name: "Admin", role: "admin", email });
      } else {
        const employee = employees.find(emp => emp.email === email);
        if (employee && employee.status === 'active') {
          setUser({ name: employee.name, role: "employee", email });
        } else {
          throw new Error("Invalid credentials or account is blocked");
        }
      }
    }
    catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
    finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ 
      user, 
      loading, 
      login, 
      logout,
      employees,
      registerEmployee,
      toggleEmployeeStatus,
      removeEmployee 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
};