import React, { useState } from 'react'
import axios from 'axios'

const Form = () => {
    let [data, setData] = useState({
        name: "",
        password: "",
    });

    let handleInput = (e) => {
        let { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };

    let handleSubmit = (e) => {
        e.preventDefault();
        // console.log(data); 
        postdata()
    };
const postdata=async()=>{
    let res=await axios.post("http://localhost:3000/user",data)
    console.log(res)
}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={data.name} onChange={handleInput} />
        <input type="password" name="password" value={data.password} onChange={handleInput} />
        <input type="submit"/>
      </form>
    </div>
  )
}

export default Form
