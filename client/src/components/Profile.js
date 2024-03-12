import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Profile() {

    const navigate = useNavigate();

    const [data , setdatauser] = useState([]);

    const callAboutPage = async () => {
        try {
          const res = await fetch('/about' , {
            method:"GET",
            headers:{
              Accept:"application/json",
              "Content-Type" : "application/json"
            },
            credentials:'include'
          })
  
          const data = await res.json();
          setdatauser(data);
          console.log(data);
  
          if (res.status === 400) {
            const error = new Error(res.error)
            throw error;
          }
  
        } catch (error) {
          console.log(error);
          navigate('/login');
        }
      }
  
    useEffect(() => {
      callAboutPage();
    }, [])

  return (
    <>
    <h1>{data.name}</h1>
    <h1>{data.email}</h1>
    <h1>{data.password}</h1>
    <h1>{data.number}</h1>
     </>
  )
}

export default Profile