import React, { useState } from 'react';
    import { useAuth } from '../context/AuthContext';

    const SignIn = () => {
      const { signIn } = useAuth();
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
      const [error, setError] = useState('');
      const [loading, setLoading] = useState(false)

      const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        setError('');
        const result = await signIn(username, password);
        if (!result.success) {
          setError(result.message);
        }
        setLoading(false)
      };

      return (
        <div className="flex items-center justify-center min-h-screen bg-agri-gray">
          <div className="w-full max-w-md">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <h2 className="text-2xl font-bold text-agri-green mb-6 text-center">Sign In</h2>
              {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                  Username
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-agri-green hover:bg-agri-green-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? 'Signing In...' : 'Sign In'}
                </button>
                <button type='button' onClick={() => window.location.href = '/signup'}  className="inline-block align-baseline font-bold text-sm text-agri-green hover:text-agri-green-dark" >
                  Sign Up
                </button>

              </div>
            </form>
          </div>
        </div>
      );
    };

    export default SignIn;
