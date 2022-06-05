import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getUser } from "../redux/actions";

export const Config = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.user);
  const id = props.match.params.id;
  const idu = props.match.params.idu;
  const [input, setInput] = useState({
    name: "",
    role: false,
    email: "",
    password: "",
  });

  useEffect(() => {
    dispatch(getUser(idu));
  }, [dispatch, idu]);

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
    axios.put(`http://localhost:3001/user/${id}/${idu}`, input).then((res) => {
      console.log(res);
      if (res.data.error) {
        setInput({
          name: "",
          role: false,
          email: "",
          password: "",
        });
        alert(res.data.error);
        history.push(`/user/${id}`);
      } else if (res.data.tryagain) {
        setInput({
          name: "",
          role: false,
          email: "",
          password: "",
        });
        alert(res.data.tryagain);
      } else {
        alert(res.data.message);
        history.push(`/user/${id}`);
      }
    });
  }

  function handleDelete(e) {
    e.preventDefault();
    axios.delete(`http://localhost:3001/user/${id}/${idu}`).then((res) => {
      if (res.data.error) {
        alert(res.data.error);
        history.push(`/user/${id}`);
      } else {
        alert(res.data.message);
        history.push(`/user/${id}`);
      }
    });
  }

  return (
    <div className="flex flex-col w-screen h-screen m-0 justify-center items-center">
      <h3 className=" font-extrabold  text-4xl my-4">
        Config user: {user.name}
      </h3>
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
            <label>
              User:
              <input
                className="bg-slate-400 rounded-lg"
                type="radio"
                name="check"
                value="user"
                onChange={(e) => handleCheck(e)}
              />
            </label>
            <label>
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
          <button
            className=" bg-slate-500 hover:bg-slate-300 px-2 rounded-lg"
            type="submit"
          >
            Edit
          </button>
        </form>
      </div>
      <div className="my-4 bg-red-500 hover:bg-red-300 rounded-lg">
        <button onClick={(e) => handleDelete(e)}>Delete</button>
      </div>
      <div className="my-4 bg-slate-500 hover:bg-slate-300 rounded-lg">
        <Link to={`/user/${id}`}>
          {" "}
          <p className="bg-transparent">Back</p>{" "}
        </Link>
      </div>
    </div>
  );
};
