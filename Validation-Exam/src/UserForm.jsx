import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "bootstrap/dist/css/bootstrap.min.css";

const Validation = z.object({
  name: z
    .string()
    .min(2, "Min 2 characters required")
    .max(25, "Max 25 characters required"),

  email: z.string().email("Invalid email format"),

  password: z
    .string()
    .min(6, "Min 6 characters required")
    .regex(/[a-z]/, "At least one lowercase letter required")
    .regex(/[A-Z]/, "At least one uppercase letter required")
    .regex(/[@%&_?$]/, "At least one special character required"),
});

const createUser = async ({ name, email, password }) => {
  let res = await axios.post("http://localhost:8090/api/v1/users/signup", {
    username: name,
    email: email,
    password: password,
  });
  console.log(res);
};

const UserForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(Validation),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    if (data) {
      createUser(data);
    }
  };

  let value = watch();

  const getBorder = (name) => {
    if (errors[name]) {
      return "border-danger";
    } else if (value[name] && !errors[name]) {
      return "border-success";
    } else {
      return "border-secondary";
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4" style={{ maxWidth: "500px", margin: "auto", backgroundColor: "#f8f9fa" }}>
        <h2 className="text-center text-primary">User Signup</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className={`form-control ${getBorder("name")}`} {...register("name")} />
            {errors.name && <small className="text-danger">{errors.name.message}</small>}
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className={`form-control ${getBorder("email")}`} {...register("email")} />
            {errors.email && <small className="text-danger">{errors.email.message}</small>}
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className={`form-control ${getBorder("password")}`} {...register("password")} />
            {errors.password && <small className="text-danger">{errors.password.message}</small>}
          </div>

          <button type="submit" className="btn btn-primary w-100">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
