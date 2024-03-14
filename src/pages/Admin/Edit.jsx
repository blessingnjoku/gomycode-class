import axios from 'axios'
import React,{useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
    const {id}= useParams()
    const [name1, setName1]=useState('')
    const [name2, setName2]=useState('')
    const [position, setPosition]=useState('')
    const [location, setLocation]=useState('')

    const details ={
        name1:name1,
        name2:name2,
        position:position,
        location:location

    }
    const UserInfo =async()=>{
        await axios.get(`http://localhost:3008/info/${id}`)
        .then((res)=>{

            setName1(res.data.name1)
            setName2(res.data.name2)
            setPosition(res.data.position)
            setLocation(res.data.location)

        })

    }
    useEffect(()=>{
        UserInfo()

    },[])

let navigate=useNavigate()


const HnadleSubmit = (e)=>{
    e.preventDefault()
    axios.put(`http://localhost:3008/info/${id}`, details)
    .then(
        navigate('/')
    )



}






  return (
    <div>
        <h1>Update User</h1>
        {/* <p>{position}</p> */}

        <form>
            <input type='text' placeholder='enter first name' value={name1}  onChange={(e)=>setName1(e.target.value)}/><br /><br />
            <input type='text' placeholder='enter last name' value={name2} onChange={(e)=>setName2(e.target.value)}/><br /><br />
            <input type='text' placeholder='enter position' value={position}  onChange={(e)=>setPosition(e.target.value)}/><br /><br />
            <input type='text' placeholder='enter location' value={location}   onChange={(e)=>setLocation(e.target.value)}/><br /><br />
            <button onClick={HnadleSubmit}>Update User</button>

        </form>

    </div>
  )
}

export default Edit