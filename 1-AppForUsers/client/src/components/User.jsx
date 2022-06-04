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
    <div>
      <table>
        <thead>
          <tr>
            <th>Users</th>
            <th>Email</th>
            <th>Role</th>
            <th>Config</th>
          </tr>
        </thead>
        <tbody>
          {users.map((el) => (
            <tr key={el.id}>
              <td>{el.name}</td>
              <td>{el.email}</td>
              {el.role ? <td>Admin</td> : <td>User</td>}
              <td>
                <Link to={`/user/${id}/${el.id}`}>Config</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <Link to="/">LogOut</Link>
      </div>
    </div>
  );
};

export default User;
