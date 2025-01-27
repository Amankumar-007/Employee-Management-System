import  { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("")
    setPassword("")
  };

  return (
    <div className="min-h-screen   bg-black flex items-center justify-center">
      <div className="bg-sky-200 p-8 rounded-lg shadow-lg w-96 relative">
        {/* Drop shadow effect */}
        <div className="absolute inset-0 rounded-lg shadow-md transform translate-x-1 translate-y-1 -z-10"></div>
        
        <h1 className="text-3xl font-bold mb-2">Welcome,</h1>
        <p className="text-gray-600 mb-6">sign up to continue</p>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
            required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Enter your username"
              className="w-full p-3 rounded bg-yellow-50 border-2 border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Password</label>
            <input
            required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full p-3 rounded bg-yellow-50 border-2 border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
          
          <div className="flex gap-4 mb-6 justify-center">
            <button className="w-10 h-10 rounded-full bg-yellow-50 border-2 border-gray-300 shadow flex items-center justify-center hover:bg-yellow-100">
              t
            </button>
            <button className="w-10 h-10 rounded-full bg-yellow-50 border-2 border-gray-300 shadow flex items-center justify-center hover:bg-yellow-100">
              G
            </button>
            <button className="w-10 h-10 rounded-full bg-yellow-50 border-2 border-gray-300 shadow flex items-center justify-center hover:bg-yellow-100">
              f
            </button>
          </div>
          
          <button
            type="submit"
            className="w-full bg-yellow-50 border-2 border-gray-300 p-3 rounded shadow-sm hover:bg-yellow-100 transform transition-transform active:translate-y-0.5"
          >
            Lets go →
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;