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
    <div>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>
            Username:
            <input
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
              type="password"
              name="password"
              value={input.password}
              onChange={(e) => handleChange(e)}
            />
          </label>
          <br />
          <button type="submit">LOGIN</button>
        </form>
        <br />
        <div>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
