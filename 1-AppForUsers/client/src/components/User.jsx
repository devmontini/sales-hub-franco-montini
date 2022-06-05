import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/actions";
import { Link } from "react-router-dom";

const User = (props) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const id = props.match.params.id;

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className="flex flex-col w-screen h-screen m-0 justify-center items-center">
      <h2 className="  text-center  font-bold text-4xl">Dashboard</h2>
      <table className="my-4">
        <thead>
          <tr>
            <th className=" text-center text-2xl font-bold px-4">Users</th>
            <th className=" text-center text-2xl font-bold px-4">Email</th>
            <th className=" text-center text-2xl font-bold px-4">Role</th>
            <th className=" text-center text-2xl font-bold px-4">Config</th>
          </tr>
        </thead>
        <tbody>
          {users.map((el) => (
            <tr className=" text-center px-2" key={el.id}>
              <td>{el.name}</td>
              <td>{el.email}</td>
              {el.role ? <td>Admin</td> : <td>User</td>}
              <td className="bg-slate-200 p-x rounded-xl hover:bg-slate-400">
                <Link to={`/user/${id}/${el.id}`}>
                  <p className="bg-transparent">Config</p>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="my-4 bg-slate-500 hover:bg-slate-300 rounded-lg">
        <Link to="/">
          {" "}
          <p className="bg-transparent">LogOut</p>{" "}
        </Link>
      </div>
    </div>
  );
};

export default User;
