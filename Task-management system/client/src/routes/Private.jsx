import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import Assign from "../page/Assign";
import Login from "../page/Login";
import Signup from "../page/Signup";
import { getUserDetails } from "../userDetails";
import Private from "./Private";
import { Ability } from "../role/Ability";
import PageNotFound from "../page/PageNotFound";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Private>
              <Home />
            </Private>
          }
        />
        {Ability(["admin"]) ? (
          <Route
            path="/assign"
            element={
              <Private>
                <Assign />
              </Private>
            }
          />
        ) : null}

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
