import React, { useState } from "react";
import User from "./User";

export default function ListUser(props) {
  const [activeId, setActiveId] = useState(1);
  const users = props.utilisateurs;

  function handleChangeActiveId(id) {
    setActiveId(id);
  }

  return (
    <>
      <h1 style={{ marginBottom: "1em" }}>
        nombre d'utilisateurs: {props.utilisateurs.length}
        <br />
      </h1>
      <div className="App">
        {users.map((user) => {
          return (
            <User
              user={user}
              activeId={activeId}
              handleChangeActiveId={handleChangeActiveId}
            />
          );
        })}
      </div>
    </>
  );
}
