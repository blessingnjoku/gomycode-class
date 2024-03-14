import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const PersonalDetails = () => {
    const [user, setUser]=useState()
    const {id}=useParams()


    const getUser = async () => {
        await axios.get(`http://localhost:3008/info/${id}`)
        .then((res) => {
         setUser(res.data);
         console.log(res.data)
        });
      };
    
      useEffect(() => {
        getUser();
      }, []);
    

  return (
    <div>
        <h1>Users</h1>
        {
            user && (
                <div>
                <p>{user.firstName}</p>
                <p>{user.lastName}</p>
                <p>{user.position}</p>
                <p>{user.location}</p>
    
    
            </div>
            )
        }
       
    </div>
  )
}

export default PersonalDetails