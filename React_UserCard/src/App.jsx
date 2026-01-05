import React, { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [username, setUsername] = useState("");
  const [userrole, setUserrole] = useState("");
  const [userimg, setUserimg] = useState("");
  const [userdecs, setUserdecs] = useState("");
  

  const localData = JSON.parse(localStorage.getItem("all-users")) || []


  const [allUSers, setAllUSers] = useState(localData);

  const submitHandler = (e) => {
    e.preventDefault();

    const oldUser = [...allUSers];
    oldUser.push({ username, userrole, userdecs, userimg });

    setAllUSers(oldUser);
    localStorage.setItem("all-users", JSON.stringify(oldUser));

    setUsername("");
    setUserrole("");
    setUserdecs("");
    setUserimg("");
  };

  const deleteHandler = (idx) => {
    const copyUsers = [...allUSers];
    copyUsers.splice(idx, 1);

    setAllUSers(copyUsers);
    localStorage.setItem("all-users", JSON.stringify(copyUsers));
  };

  return (
    <div className="h-screen bg-black text-white">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="px-2 py-2 flex flex-wrap"
      >
        <input
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          className="border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[45%]"
          type="text"
          placeholder="Enter Your Name"
        />

        <input
          value={userrole}
          onChange={(e) => {
            setUserrole(e.target.value);
          }}
          className="border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[45%]"
          type="text"
          placeholder="Enter role"
        />

        <input
          value={userdecs}
          onChange={(e) => {
            setUserdecs(e.target.value);
          }}
          className="border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[45%]"
          type="text"
          placeholder="Enter Description"
        />

        <input
          value={userimg}
          onChange={(e) => {
            setUserimg(e.target.value);
          }}
          className="border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[45%]"
          type="text"
          placeholder="Enter Image url"
        />

        <button className="border-2 px-5 py-2 cursor-pointer active:scale-95 bg-emerald-500 rounded m-2 w-[90%]">
          Create User
        </button>
      </form>

      <div className="px-4 py-10 gap-3 flex flex-wrap">
        {allUSers.map(function (elem, idx) {
          return <Card idx={idx} elem={elem} deleteHandler={deleteHandler} />;
        })}
      </div>
    </div>
  );
};

export default App;
