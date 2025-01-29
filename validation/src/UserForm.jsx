import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const Validation = z.object({
  name: z
    .string()
    .min(2, "min 2 characters required")
    .max(2, "max 25 characters required"),

  email: z.string().email(),

  password: z
    .string()
    .min(6, "min 6 characters required")
    .regex(/[a-z]/, "small characters required")
    .regex(/[A-Z]/, "large characters required")
    .regex(/[@%&_?$]/, "special characters required"),
});

const UserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(Validation),
  });

  const onSubmit = (data) => {
    console.log("on submit", data, errors);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">name: </label>
        <input type="text" {...register("name")} />
        {errors.name && <p>{errors.name.message}</p>}
        <br />

        <label>email: </label>
        <input type="email" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
        <br />

        <label htmlFor="">password: </label>
        <input type="text" {...register("password")} />
        {errors.password && <p>{errors.password.message}</p>}
        <br />

        <input type="submit" />
      </form>
    </div>
  );
};

export default UserForm;
