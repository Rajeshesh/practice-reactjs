import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../store/userSlice";
import MetaData from "./MetaData";

const Account = () => {
  const account = useSelector((store) => store.user);
  const dispatch = useDispatch();
  return (
    <div>
      <MetaData title={"account details"} />
      <h1>Account Details</h1>
      <p>Name:{account.name} </p>
      <p>age: {account.age}</p>
      <p>Account Number:{account.accountNumber} </p>
      <p>Balance:{account.balance} </p>
      <button
        onClick={() =>
          dispatch(
            login({
              name: "Rajesh P",
              accountNumber: "4526985623846",
              age: "24",
              balance: "93485793",
            })
          )
        }
      >
        Login
      </button>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default Account;
