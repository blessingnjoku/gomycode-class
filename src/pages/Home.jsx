import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { MdOutlineViewAgenda } from "react-icons/md";
import axios from "axios";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  h1 {
    font-size: 60px;
  }
  .container {
    width: 90%;
    background: linear-gradient(to right, red, yellow, black);
    margin: auto;
    table {
      width: 100%;
      height: 100vh;
      overflow: hidden;
      overflow-y: scroll-behavior;
      tr {
        padding: 10px 50px;
        height: 100px;
        font-size: 20px;
        &:hover {
          background-color: #fff;
        }
        button {
          padding: 10px 20px;
          border-radius: 5px;
          border: none;
          margin-right: 10px;
          cursor: pointer;
        }
      }
    }
  }
`;

// const baseUrl = "http://localhost:3008/info";

const Home = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try{
      await axios.get("http://localhost:3008/info").then((res) => {
        setData(res.data.reverse());
      });
    }catch(err){
      console.log("Error fetching data", err)
      // throw err

    }
  

  };

  useEffect(() => {
    fetchData();
  }, []);


  const HandleDelete=(id)=>{
    axios.delete(`http://localhost:3008/info/${id}`)
    .then(
      fetchData()
    )

  }

  return (
    <Wrapper>
      <div className="container">
        <table border={10}>
          <thead>
            <tr className="first-row">
              <th>S/N</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Position</th>
              <th>Location</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((val, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{val.firstName}</td>
                  <td>{val.lastName}</td>
                  <td>{val.position}</td>
                  <td>{val.location}</td>
                  <td>
                    <Link to={`/edit/${val.id}`}>
                    <button>
                      <FaRegEdit size={20} />
                      Edit
                    </button>
                    </Link>
                  
                    <button onClick={()=>HandleDelete(val.id)}>
                
                      <MdDeleteForever size={20} />
                      Delete
                    </button>
                    <Link to={`${val.id}`}>
                    <button>
                      <MdOutlineViewAgenda size={20} />
                      View
                    </button>
                    </Link>
                  
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
};

export default Home;
