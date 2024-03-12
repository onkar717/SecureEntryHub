import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { usercontext } from '../App';


function Logut() {

    const {state , dispatch} = useContext(usercontext)
    const navigate = useNavigate();

    // promisses 
    useEffect(() => {
        fetch('/logout' , {
            method:'GET',
            headers:{
                Accept : 'application/json',
                "Content-type" : "application/json"
            },
            credentials:'include'
        }).then((res) => {
            dispatch({type:"USER", payload:true})
            navigate('/login')
            if (!res.status === 200) {
                const error = new Error(res.error)
                throw error
            }
        }).catch((err)=> {
            console.log(err);
        })
    })

  return (
    <div>Logut</div>
  )
}

export default Logut