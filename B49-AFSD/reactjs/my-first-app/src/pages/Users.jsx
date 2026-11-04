import React, { useEffect } from "react";
// import api from "../config/axios.config";
// import axios from "axios";
import SignUpForm from "../components/register/SignUpForm";

export default function Users() {
  const newUser = {
    name: "Varun",
    email: "varunkumar@gmail.com",
    phone: 9078563412,
    password: "varun@2026",
  };

  // API : Get All Users
  // useEffect(() => {
  //   async function getAllUsers() {
  //     try {
  //       const res = await axios.get(
  //         "https://6aeb52efee39618d7bf83061.mockapi.io/users/2",
  //       );
  //       // setMovies(data);
  //       console.log(res.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   // Call fuction
  //   getAllUsers();
  // });
  return (
    <>
      <SignUpForm />
    </>
  );
}
