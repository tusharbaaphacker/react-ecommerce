import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { user, isAuthenticated, loading } = useAuth();

  console.log("isAuthenticated:", isAuthenticated);
  console.log("user:", user);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2>Profile</h2>
      {user ? (
        <div>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>No user data available.</p>
      )}
    </div>
  );
};

export default Profile;