import React, { useState } from "react";
import AddStudent from "../components/AddStudent";
import DisplayStudent from "../components/Display";

const App = () => {
  const [student, setStudent] = useState({
    id:Date.now().toString(),
    name: "",
    age: "",
    std: "",
  });

  const [refreshData, setRefreshData] = useState(false);

   

  return (
    <div>
      <AddStudent setStudent={setStudent} student={student} />
      < DisplayStudent refreshData={refreshData} setrefreshData={setRefreshData} />
    </div>
  );
};

export default App;
