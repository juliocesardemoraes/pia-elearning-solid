/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import App from "./App";
import { Route, Router, Routes } from "@solidjs/router";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { ProfileContextProvider } from "./context/ProfileContext";
import Profile from "./components/Profile";

const root = document.getElementById("root");

render(
  () => (
    <>
      <ProfileContextProvider>
        <Navbar></Navbar>
        <Router>
          <Routes>
            <Route path="/" component={App} />
            <Route path="/login" component={Login} />
            <Route path="/profile" component={Profile} />
          </Routes>
        </Router>
      </ProfileContextProvider>
    </>
  ),
  root!
);
