import React from "react";
import { useSelector } from "react-redux";

export default function Profile() {
  const userProfile = useSelector((state) => state.User);
  console.log(userProfile);

  return <div></div>;
}
