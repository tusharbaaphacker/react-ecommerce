import { useEffect, useState, useTransition } from "react";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  // const { user } = useAuth();
  // console.log(user, "user info in profile")
  // console.log(token);


  const [user, setUser] = useState()
  const fetchUserProfile = async() => {
    const token = localStorage.getItem("token");
    const res = await fetch("http://localhost:3000/api/user/profile", {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    })

    const data  =await res.json()
    console.log(data.user)
    setUser(data.user)
  }

  useEffect(()=>{
    fetchUserProfile();
  }, [])
  // console.log("isAuthenticated:", isAuthenticated);
  // console.log("user:", user);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }


  // const fetchUserProfile = async (token) => {
  //       console.log(user)
  //       try {
  //           const response = await fetch('http://localhost:3000/api/user/profile', {
  //               headers: {
  //                   'Authorization': `Bearer ${token}`,
  //               },
  //           });

  //           const data = await response.json();

  //           if (response.ok) {
  //               if (data.user) {
  //                   setUser(data.user);
  //                   setIsAuthenticated(true);
  //               } else {
  //                   localStorage.removeItem("token");
  //                   setIsAuthenticated(false);
  //               }
  //           } else {
  //               console.error("Profile fetch failed:", data.message || "Unknown error");
  //               localStorage.removeItem("token");
  //               setIsAuthenticated(false);
  //           }
  //       } catch (error) {
  //           console.error('Error fetching profile:', error);
  //           localStorage.removeItem('token');
  //       } finally {
  //           setLoading(false);
  //       }
  //   };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2>Profile</h2>

    </div>
  );
};

export default Profile;