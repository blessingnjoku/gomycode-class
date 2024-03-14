import React, {useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Container = styled.div`
width:400px;
height: 450px;
background-color:red;
margin:auto;
border-radius:15px;
form{
    
    label{
        display:block;
        text-align:start;
        margin-bottom:0px;
        margin-left:10px;
        font-size:20px;
    }
    input{
        width:100%;
        padding:10px 20px;
        box-sizing:border-box;
        margin-bottom:10px;
    }
    .btn{
        padding:10px 20px;
        margin-top:20px;
        width:100%;
        background-color:black;
        color:#fff;
        font-size:30px;
        
    }
}
`
// const baseUrl = "http://localhost:3008/info"

const Add = () => {
    const [name, setName]=useState('')
    const [lastname, setLastname]=useState('')
    const [position, setPosition]=useState('')
    const [location, setLocation]=useState('')

       const UserData ={
        name:name,
        lastname:lastname,
        position:position,
        location:location,
       }

      let navigate = useNavigate()


       const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3008/info', UserData)
        .then(
            navigate('/'),
            // alert(UserData.firstname)
            // console.log(UserData)
        
            
        )
        

       }


  return (
    <Container>
        <form>
            <h1>Add User</h1>
            <label>First Name:</label>
            <input type="text"  placeholder='please enter first name' value={name}  onChange={(e)=>setName(e.target.value)}/>
            <label>Last Name:</label>
            <input type="text"  placeholder='please enter first last' value={lastname} onChange={(e)=>setLastname(e.target.value)}/>
            <label>Position:</label>
            <input type="text"  placeholder='please enter position' value={position} onChange={(e)=>setPosition(e.target.value)}/>
            <label>Location:</label>
            <input type="text"  placeholder='please enter location' value={location} onChange={(e)=>setLocation(e.target.value)}/>
            <button className='btn' onClick={handleSubmit}>Submit</button>
        </form>
        
    </Container>
  )
}

export default Add