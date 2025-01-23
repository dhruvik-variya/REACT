const Card = ({displayData,deleteData}) => {
    return (
     <div className="hello">
       { displayData.map((ele)=>(
          // console.log(elm)
          <div key={ele.id} >
              <h4>Name : {ele?.name}</h4>
              <h4>Age : {ele?.age}</h4>
              <h4>Std : {ele?.std}</h4>
               
              <button onClick={()=>updateData(ele.id)}>Update</button>
              <button onClick={()=>deleteData(ele.id)} >Delete</button>
          </div>
      ))}
     </div>
    )
  }
  
  export default Card