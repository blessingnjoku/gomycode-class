import React from 'react'
import styled from 'styled-components'
import { FaPlus } from "react-icons/fa";
import {Link} from "react-router-dom"

const Nav = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    background:red;
    padding:10px 20px;
    color:#ffff;
    margin-bottom:50px;
    a{
        font-size:30px;
        text-decoration:none;
        font-weight:900;
    }
    .right{
        span{
            margin-right:20px;
            font-size:20px;
            font-weight:900;
            cursor: pointer;
        }
        button{
            padding:10px 20px;
            border:2px solid #fff;
            border-radius:10px;
            font-size:20px;
            &:hover{
                background-color:red;
                color:#fff;
                cursor: pointer;
             
            }
        }

    }
    


`


const Navbar = () => {
  return (
    <Nav>
        <a href="/">logo</a>
        <h1>Company Dashboard</h1>
        <div className='right'>
            <Link to='/'>
            <span>Home</span>
            </Link>
            
            <Link to='add-user'>
            <button><FaPlus />Add Staff</button>
            </Link>
     

        </div>

    </Nav>
  )
}

export default Navbar