import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_USERS } from "../../utils/queries";
import Card from "../Card/index";

 const UserList = () => {
  const { loading, error, data } = useQuery(QUERY_USERS);

   if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

   return (
    <div className="card-list">
      {data.users.map((user) => (
        <Card key={user._id} user={user} />
      ))}
    </div>
  );
};

 export default UserList;