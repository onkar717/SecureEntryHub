import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

function Profile() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('/about', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }

      const userData = await response.json();
      setData(userData);
    } catch (error) {
      console.error(error);
      navigate('/login');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="flex items-center p-4 border-b border-gray-300">
        <div className="flex-shrink-0">
          <div className="w-16 h-16 flex justify-center items-center bg-gray-300 rounded-full border-4 border-white">
            <FaUser className="text-gray-600 text-lg" />
          </div>
        </div>
        <div className="ml-4">
          {data ? (
            <>
              <h2 className="text-xl font-semibold text-gray-800">{data.name}</h2>
              <p className="text-sm text-gray-600">{data.email}</p>
              {/* Display other profile information here */}
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
