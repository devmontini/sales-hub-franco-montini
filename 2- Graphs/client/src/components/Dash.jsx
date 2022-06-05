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
    <div className="flex flex-col w-screen h-screen">
      <h2 className="bg-slate-200  text-center  font-bold text-4xl">
        Dashboard
      </h2>
      <div className="flex flex-row w-full h-full p-11">
        <div className=" w-96 bg-slate-200 m-0 flex flex-col">
          <div className="bg-slate-200 w-full">
            <h4 className="bg-slate-200  text-center text-2xl font-bold">
              Edit
            </h4>
          </div>
          <div className=" m-0 flex bg-slate-200 h-full justify-center items-center">
            {edit ? (
              <form className="flex flex-col m-0 justify-center">
                <div className=" text-center my-4">{title}</div>
                <span>
                  Name:
                  <input
                    className=" bg-slate-400 rounded-lg"
                    type="text"
                    name="name"
                    value={input.name}
                    onChange={(e) => handleChange(e)}
                  />
                </span>
                <span>
                  Km:
                  <input
                    className=" bg-slate-400 rounded-lg"
                    type="text"
                    name="km"
                    value={input.km}
                    onChange={(e) => handleChange(e)}
                  />
                </span>
                <button
                  className=" bg-slate-700 my-4 hover:bg-slate-500 rounded-lg"
                  onClick={(e) => handleSubmit(e)}
                >
                  Save
                </button>
              </form>
            ) : (
              <h4 className="bg-slate-200  text-center  font-bold">Edit KM</h4>
            )}
          </div>
        </div>
        <div className=" w-96 bg-slate-200 m-0 flex flex-col">
          <h4 className="bg-slate-200  text-center  text-2xl font-bold">
            Restaurants
          </h4>
          <table>
            <thead>
              <tr>
                <th></th>
                <th className=" text-left">Name</th>
                <th className=" text-left">Km</th>
                <th></th>
              </tr>
            </thead>

            {restos ? (
              <tbody>
                {restos.map((el) => {
                  return (
                    <tr className="mx-2 px-3 h-11" key={el.id}>
                      <td>
                        <button
                          className="p-1 bg-gray-600 rounded-lg"
                          onClick={() => handleClick2(el.id)}
                        >
                          Edit
                        </button>
                      </td>
                      <td>{el.name}</td>
                      <td>{el.km}</td>
                      <td>
                        <button
                          className="p-1 bg-gray-600 rounded-lg"
                          onClick={() => handleClick(el.id)}
                        >
                          Dist
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            ) : (
              <h2 className="bg-slate-200  text-center  font-bold">
                No hay restos
              </h2>
            )}
          </table>
        </div>
        <div className=" w-96 bg-slate-200 m-0 flex flex-col">
          <h4 className="bg-slate-200  text-center  text-2xl font-bold">
            Distance
          </h4>
          <table>
            <thead>
              <tr>
                <th className="text-left">Name</th>
                <th className="text-left">Km</th>
              </tr>
            </thead>
            {!loader ? (
              <tbody>
                <tr>
                  <td className="text-center">Loading...</td>
                </tr>
              </tbody>
            ) : km.length !== 0 ? (
              <tbody>
                {km.map((el) => {
                  return (
                    <tr className="mx-2 px-3 h-11" key={el.id}>
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
      <div className="w-full flex m-0 justify-center">
        <Link to="/">
          <p className="bg-slate-200 w-fit hover:bg-slate-600 text-center p-2 rounded-lg font-bold">
            BACK
          </p>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Dash;
