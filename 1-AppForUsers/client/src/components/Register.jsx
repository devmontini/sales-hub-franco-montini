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
          <div>
            <label>
              User:
              <input
                type="radio"
                name="check"
                value="user"
                onChange={(e) => handleCheck(e)}
              />
            </label>
            <label>
              Admin:
              <input
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
