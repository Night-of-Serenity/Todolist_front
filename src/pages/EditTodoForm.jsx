import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getJobById, updateJob } from "../api/todoApi";

export default function EditTodoForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  //   console.log(id);
  const [input, setInput] = useState({
    title: "",
    dueDate: "",
    status: "",
  });

  useEffect(() => {
    let token = localStorage.getItem("token");
    getJobById(id, token).then((rs) => {
      setInput(rs.data);
    });
  }, [id]);

  const hdlChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const hdlChangeStatus = (e) => {
    setInput({ ...input, status: e.target.checked });
  };

  const hdlSubmit = (e) => {
    e.preventDefault();
    // validation
    let token = localStorage.getItem("token");
    updateJob(id, input, token).then((rs) => {
      navigate("/");
    });
  };

  return (
    <div className="mt-5 ">
      <form className="max-w-lg mx-auto" onSubmit={hdlSubmit}>
        <h2 className="text-3xl mb-4">Update Job</h2>
        <div className="flex w-full mb-4">
          <i className="fa fa-comment text-white min-w-16 text-center p-2.5 bg-blue-500" />
          <input
            className="w-full p-2.5 border focus:border-2"
            type="text"
            placeholder="Job name"
            name="title"
            onChange={hdlChangeInput}
            value={input.title}
          />
        </div>

        <div className="flex w-full mb-4">
          <i className="fa fa-calendar-check text-white min-w-16 text-center p-2.5 bg-blue-500" />
          <input
            className="w-full p-2.5 border focus:border-2"
            type="date"
            placeholder="DueDate"
            name="dueDate"
            onChange={hdlChangeInput}
            value={input.dueDate}
          />
        </div>

        <div className="form-control w-40 mb-5 ">
          <label className="cursor-pointer label">
            <span className="label-text">Job Completed</span>
            <input
              type="checkbox"
              className="toggle toggle-primary"
              checked={input.status}
              onChange={hdlChangeStatus}
            />
          </label>
        </div>

        <button type="submit" className="btn">
          Update Job
        </button>
      </form>
    </div>
  );
}
