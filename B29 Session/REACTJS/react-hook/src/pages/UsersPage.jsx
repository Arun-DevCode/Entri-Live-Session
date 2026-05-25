import React, { useEffect, useState } from "react";
import ProfileCard from "../Components/ProfileCard";
import Loader from "../Components/Loader";
import UserErrorUI from "../error/userError";

const URL = "https://jsonplaceholder.typicode.com/users";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    async function getUserList() {
      try {
        const res = await fetch(URL);

        // Convert
        const data = await res.json();
        if (data.length === 0) {
          throw new Error("Failed to fetch data!");
          setIsLoading(false);
        }

        // update data to state
        setUsers(data);
        // console.table(data);
        setIsLoading(false);
      } catch (error) {
        if (error) {
          console.error("Fail to fetch data. Please Try again!");
          alert(error.message || "Fail to fetch data. Please Try again!");
        }
      }
    }

    getUserList();
  }, []);

  // Loader
  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <h1>Welcome to Users Page</h1>
      {/* Render Users Profile */}
      {users.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {users.map((user) => {
            return <ProfileCard key={user.id} user={user} />;
          })}
        </div>
      ) : (
        <UserErrorUI />
      )}
    </>
  );
}
