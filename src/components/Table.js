import React, {
  memo,
  useCallback,
  useContext,
  useEffect,
  useId,
  useState,
} from "react";
import { UseCan } from "../App";

const Tbody = (twoProps) => {
  const { handleDelete, details } = twoProps;
  return (
    <tbody>
      {details.map((detail, i) => (
        <tr key={i}>
          <td>{detail.name}</td>
          <td>{detail.job}</td>
          <td>
            <button onClick={() => handleDelete(i)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

const Table = () => {
  // in this module Id can repeat when you delete and then add. so try by index to delete
  const initialState = [
    { name: "Rajesh P", job: "Full-Stack Blockchain Developer", id: 1 },
    { name: "Ramesh P", job: "DSP", id: 2 },
    { name: "kunal", job: "Front-end Developer", id: 3 },
  ];
  const [state, setState] = useState(initialState);
  const globalState = useContext(UseCan);
  //   const handleDelete = (id) => {
  //     const updatedList = state.filter((detail) => detail.id !== id);
  //     setState(updatedList);
  //   };
  const handleDelete = (index) => {
    const updatedList = state.filter((detail, i) => i !== index);
    setState(updatedList);
  };
  const addToTable = useCallback((data) => {
    data.id = state.length + 1;
    setState([...state, data]);
  }, []);


  return (
    <div>
      <div>
        <h2>Table</h2>
        <p>
          {globalState.appState.state.join(", ")} it came from app.js by
          useContext
        </p>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Job</th>
              <th>Action</th>
            </tr>
          </thead>
          <Tbody details={state} handleDelete={handleDelete} />
        </table>
      </div>
      <Form addToTable={addToTable} />
    </div>
  );
};

//addToTable is not give any values, so delete the table row is not give anything to form so i used useCallback with memo
const Form = memo(({ addToTable }) => {
  const initialState = { name: "", job: "" };
  const [data, setData] = useState(initialState);

  // to generate unique id across the whole application
  const id = useId();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (!data.name || !data.job) return;
    addToTable(data);
    setData(initialState);
  };

  return (
    <div>
      <h2>Form to add data in Table</h2>
      <form onSubmit={submitForm}>
        <input
          id={id + "name"}
          type="text"
          name="name"
          placeholder="Name"
          value={data.name}
          onChange={handleChange}
        />
        <input
          id={id + "job"}
          type="text"
          name="job"
          value={data.job}
          placeholder="Job"
          onChange={handleChange}
        />
        <button>Add to Table</button>
      </form>
    </div>
  );
});

export default Table;
