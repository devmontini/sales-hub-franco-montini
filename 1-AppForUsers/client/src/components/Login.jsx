import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();
  const [tries, setTries] = useState(1);
  const [input, setInput] = useState({
    name: "",
    password: "",
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios.post(`http://localhost:3001/login`, input).then((res) => {
      if (res.data.message) {
        setInput({
          name: "",
          password: "",
        });
        if (tries === 5) {
          history.push(`/sorry`);
        } else {
          setTries(tries + 1);
          alert(`${res.data.message}\n Trys ${tries} of 5`);
        }
      } else {
        history.push(`/user/${res.data.id}`);
      }
    });
  }

  return (
    <div className="flex flex-col w-screen h-screen m-0 justify-center items-center">
      <h2 className=" font-extrabold  text-4xl my-4">Welcome the App</h2>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
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
          <div className="w-full justify-center flex m-0 my-3">
            <button
              className=" text-center rounded-lg p-1 bg-slate-600 hover:bg-slate-400"
              type="submit"
            >
              LOGIN
            </button>
          </div>
        </form>
        <br />
        <div className="w-full justify-center flex m-0">
          <Link to="/register">
            <p className="bg-slate-300 hover:bg-slate-400 rounded-lg">
              Register
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
