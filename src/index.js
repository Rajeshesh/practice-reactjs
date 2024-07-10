import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
import { HelmetProvider } from "react-helmet-async";
import userSlice from "./store/userSlice";
import UseState from "./components/UseState";
import PageNotFound from "./components/PageNotFound";
// import UseReducer from "./components/UseReducer";
// import Account from "./components/Account";

const UseReducer = lazy(() => import("./components/UseReducer"));
const Account = lazy(() => import("./components/Account"));

const reducer = combineReducers({
  user: userSlice,
});
const store = configureStore({ reducer });
let navOnly = (e) => {
  return { color: e.isActive ? "green" : "inherit" };
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HelmetProvider>
    <Provider store={store}>
      <Router>
        <h1>Hello</h1>
        <ul>
          <li>
            <NavLink to="/" style={navOnly}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/state" style={navOnly}>
              State
            </NavLink>
          </li>
          <li>
            <NavLink to="/reducer" style={navOnly}>
              Reducer
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" style={navOnly}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/account" style={navOnly}>
              Account
            </NavLink>
          </li>
        </ul>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="state" element={<UseState />} />
            <Route path="reducer" element={<UseReducer />} />
            <Route path="account" element={<Account />} />
            <Route path="about" element={<App />} />
            <Route path="about" element={<App />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </Provider>
  </HelmetProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
