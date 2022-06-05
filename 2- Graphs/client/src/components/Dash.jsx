import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getKm, getRestos, putUser } from "../redux/actions";

const Dash = (props) => {
  const dispatch = useDispatch();
  const restos = useSelector((state) => state.rest);
  const km = useSelector((state) => state.km);
  const [loader, setLoader] = useState(true);
  const [idEdit, setIdEdit] = useState(0);
  const [edit, setEdit] = useState(false);
  const [input, setInput] = useState({
    name: "name",
    km: 0,
  });

  const [title, setTitle] = useState("name");

  function handleSubmit(e) {
    dispatch(putUser(idEdit, input));
    setInput({
      name: "",
      km: 0,
    });
  }

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleClick2(id) {
    let titleEdit = restos.filter((el) => el.id === id);
    setTitle(titleEdit[0].name);
    setEdit(true);
    setIdEdit(id);
  }

  function handleClick(id) {
    setLoader(false);
    dispatch(getKm(id));
    setTimeout(() => {
      setLoader(true);
    }, 1000);
  }

  useEffect(() => {
    dispatch(getRestos());
  }, [dispatch, km]);

  return (
    <div>
      <h2>Dash</h2>
      <div>
        <div>
          <h4>Edit</h4>
          {edit ? (
            <form>
              <div>{title}</div>
              <span>
                Name:
                <input
                  type="text"
                  name="name"
                  value={input.name}
                  onChange={(e) => handleChange(e)}
                />
              </span>
              <span>
                Km:
                <input
                  type="text"
                  name="km"
                  value={input.km}
                  onChange={(e) => handleChange(e)}
                />
              </span>
              <button onClick={(e) => handleSubmit(e)}>Save</button>
            </form>
          ) : (
            <h4>Edit KM</h4>
          )}
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Km</th>
                <th></th>
              </tr>
            </thead>

            {restos ? (
              <tbody>
                {restos.map((el) => {
                  return (
                    <tr key={el.id}>
                      <td>
                        <button onClick={() => handleClick2(el.id)}>
                          Edit
                        </button>
                      </td>
                      <td>{el.name}</td>
                      <td>{el.km}</td>
                      <td>
                        <button onClick={() => handleClick(el.id)}>Dist</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            ) : (
              <h2>No hay restos</h2>
            )}
          </table>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Km</th>
              </tr>
            </thead>
            {!loader ? (
              <tbody>
                <tr>
                  <td>Loading...</td>
                </tr>
              </tbody>
            ) : km.length !== 0 ? (
              <tbody>
                {km.map((el) => {
                  return (
                    <tr key={el.id}>
                      <td>{el.name}</td>
                      {el.km === 0 ? <td>Unknown</td> : <td>{el.km}</td>}
                    </tr>
                  );
                })}
              </tbody>
            ) : (
              <tbody>
                <tr>
                  <td>Click on Restorant</td>
                </tr>
              </tbody>
            )}
          </table>
        </div>
      </div>
      <div>
        <Link to="/">BACK</Link>
      </div>
    </div>
  );
};

export default Dash;
