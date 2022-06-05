import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { createRest } from "../redux/actions";

const Home = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(createRest());
  }, [dispatch]);

  return (
    <div className="flex flex-col w-screen h-screen m-0 justify-center items-center">
      <h2 className=" font-extrabold  text-4xl">Welcome to RestoApp</h2>
      <div className="bg-slate-300 px-4 py-2 rounded-lg hover:bg-slate-600">
        <Link to="/dash">
          <p className=" bg-transparent">ENTER</p>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Home;
