import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { user, loading, isAuthenticated } = useAuth();
  const [error, setError] = useState(null);

  // Reset error when user changes
  useEffect(() => {
    setError(null);
  }, [user]);

  if (loading) {
    return (
      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        </div>
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return (
      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Profile</h2>
        <p className="text-red-500">Please log in to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Profile</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Username</label>
          <p className="mt-1 p-2 bg-gray-100 rounded-md text-gray-900">
            {user.username || 'Not provided'}
          </p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <p className="mt-1 p-2 bg-gray-100 rounded-md text-gray-900">
            {user.email || 'Not provided'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;