import React from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const history = useHistory();
  const [input, setInput] = useState({
    name: "",
    role: false,
    email: "",
    password: "",
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleCheck(e) {
    if (e.target.value === "admin") {
      setInput({
        ...input,
        role: true,
      });
    } else {
      setInput({
        ...input,
        role: false,
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios.post(`http://localhost:3001/user`, input).then((res) => {
      console.log(res);
      if (res.data.error) {
        setInput({
          name: "",
          role: false,
          email: "",
          password: "",
        });
        alert(res.data.error);
      } else {
        alert(res.data.message);
        history.push(`/user/${res.data.id}`);
      }
    });
  }

  return (
    <div className="flex flex-col w-screen h-screen m-0 justify-center items-center">
      <h2 className=" font-extrabold  text-4xl my-4">Register</h2>
      <div className="flex flex-col m-0 justify-center items-center">
        <form
          className="flex flex-col m-0 justify-center items-center"
          onSubmit={(e) => handleSubmit(e)}
        >
          <label>
            Username:
            <input
              className="bg-slate-400 rounded-lg"
              type="text"
              name="name"
              value={input.name}
              onChange={(e) => handleChange(e)}
            />
          </label>
          <br />
          <div>
            <label className="px-2">
              User:
              <input
                className="bg-slate-400 rounded-lg "
                type="radio"
                name="check"
                value="user"
                onChange={(e) => handleCheck(e)}
              />
            </label>
            <label className="px-2">
              Admin:
              <input
                className="bg-slate-400 rounded-lg"
                type="radio"
                name="check"
                value="admin"
                onChange={(e) => handleCheck(e)}
              />
            </label>
          </div>
          <br />
          <label>
            Email:{" "}
            <input
              className="bg-slate-400 rounded-lg"
              type="email"
              name="email"
              value={input.email}
              onChange={(e) => handleChange(e)}
            />
          </label>
          <br />
          <label>
            Pass:
            <input
              className="bg-slate-400 rounded-lg"
              type="password"
              name="password"
              value={input.password}
              onChange={(e) => handleChange(e)}
            />
          </label>
          <br />
          <button type="submit">CREATE</button>
        </form>
        <br />
        <div>
          <Link to="/"> Back </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
