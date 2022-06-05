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
    <div>
      <h2>Welcome to RestoApp</h2>
      <div>
        <Link to="/dash">ENTER</Link>
      </div>
    </div>
  );
};

export default Home;
