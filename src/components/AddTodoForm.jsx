import { useDispatch } from "react-redux";
import { addTodo } from "../store/actions/todoAction";
import { useState } from "react";

const AddTodoForm = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  // function untuk memanggil action
  const submitTodo = (event) => {
    event.preventDefault();
    if (value) {
      dispatch(addTodo(value));
    }
  };

  return (
    <form onSubmit={submitTodo} className="form-inline mt-3 mb-3">
      <label className="sr-only">Name</label>
      <input type="text" className="form-control mb-2 mr-sm-2" placeholder="Add todo..." onChange={(event) => setValue(event.target.value)}></input>

      <button type="submit" className="btn btn-primary mb-2">
        Submit
      </button>
    </form>
  );
};

export default AddTodoForm;
