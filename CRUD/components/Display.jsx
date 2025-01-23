import React, { useEffect, useState } from 'react'
import api from '../API/api'
import Card from './Card'

const DisplayStudent = ({refreshData,setrefreshData}) => {

    const [displayData, setDisplayData] = useState([])

    useEffect(() =>{
         const StudentData= (async() => {
            let StudentData = await api.get();

            setDisplayData(StudentData.data)
        })()
    },[refreshData])


    const deleteData = async (id) => {
        await api.delete(`/${id}`);
        setrefreshData(!refreshData)
    }

    const updateData= async (id) =>{
        let studentData = await api.get(`/${id}`);
         setStudent(studentData.data)
         setUpdateFlag((prev)=>!prev)
      }



  return (
    <div>
      < Card  displayData={displayData} deleteData={deleteData} /> 

    </div>
  )
}

export default DisplayStudent
