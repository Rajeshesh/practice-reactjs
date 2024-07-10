import React, { useReducer, useState } from "react";

const UseReducer = () => {
  const [amount, setAmount] = useState(1);
  const initialState = {
    name: "rajesh",
    accountNumber: 638311111111,
    balance: 5000,
  };
  const reducerLogic = (state, action) => {
    switch (action.type) {
      case "DEPOSIT":
        return {
          ...state,
          balance: Number(state.balance) + Number(action.value),
        };
      case "WITHDRAW":
        return { ...state, balance: state.balance - action.value };
      default:
        return state;
    }
  };
  const withdraw = (amount) => {
    dispatch({ type: "WITHDRAW", value: amount });
  };
  const deposit = (amount) => {
    dispatch({ type: "DEPOSIT", value: amount });
  };
  const [state, dispatch] = useReducer(reducerLogic, initialState);
  return (
    <div>
      <h2>UseReducer</h2>
      <p>
        Name: {state.name} <br /> accountNumber: {state.accountNumber}
        <br />
        balance: {state.balance}
      </p>
      <input
        type="number"
        name="balance"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button
        onClick={() => {
          withdraw(amount);
          setAmount(0);
        }}
      >
        Withdraw
      </button>
      <button
        onClick={() => {
          deposit(amount);
          setAmount(0);
        }}
      >
        Deposit
      </button>
    </div>
  );
};

export default UseReducer;
