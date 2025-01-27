import React, { useState } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";

const App = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    number: "",
    gender: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const validations = (user) => {
    if (
      user.username.length == 0 ||
      user.email.length == 0 ||
      user.password.length < 6 ||
      user.number.length != 10
    ) {
      toast.error ("🦄 All Field are requared!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });

      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("onSubmit", userData);

    if (validations(userData)) {
       
      toast.success('Form Submitted Successfully !!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">username : </label>
          <br />
          <input
            type="text"
            id="name"
            name="username"
            value={userData.username}
            onChange={handleInput}
          />
        </div>
        <div>
          <label htmlFor="email">Email : </label>
          <br />
          <input
            type="text"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleInput}
          />
        </div>
        <div>
          <label htmlFor="password">Password : </label>
          <br />
          <input
            type="password"
            id="password"
            name="password"
            value={userData.password}
            onChange={handleInput}
          />
        </div>
        <div>
          <label htmlFor="number">Phone Number : </label>
          <br />
          <input
            type="text"
            id="number"
            name="number"
            value={userData.number}
            onChange={handleInput}
          />
        </div>

        <div>
          <label htmlFor="gender">gender : </label>
          <br />
          <select name="gender" id="gender" onChange={handleInput}>
            <option value="">select gender</option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
        </div>
        <br />
        <input type="submit" value={"create account"} />
      </form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};

export default App;
