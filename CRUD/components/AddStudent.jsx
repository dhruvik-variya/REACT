import React from 'react'
import api from '../API/api';

const AddStudent = ({student,setStudent}) => {

  const submitData =async (e) => {
    e.preventDefault()
    await api.post("",student); 
  } 

  const handleInput = (e) => {
    let {name,value} = e.target;
    return setStudent((ele)=>({...ele,[name]:value}))
   }






  return (
    <div>
      
      <form onSubmit={submitData}>
          <input type="text" placeholder='enter name' name='name' onChange={handleInput} value={student.name}   />
          <input type="text" placeholder='enter age' name='age' onChange={handleInput} value={student.age}     />
          <input type="text" placeholder='enter std' name='std' onChange={handleInput} value={student.std}    /> 

          <input type="submit"  />
      </form>
    </div>
  )
}

export default AddStudent
