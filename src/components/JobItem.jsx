import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { deleteJob } from "../api/todoApi";

export default function JobItem(props) {
  const { job, setReload } = props;
  const navigate = useNavigate();
  const hdlDelete = () => {
    let token = localStorage.getItem("token");
    deleteJob(job.id, token).then((rs) => {
      navigate("/");
      setReload((prv) => !prv);
    });
  };

  return (
    <div className="collapse w-full rounded gap-1">
      <input type="checkbox" className="peer" />
      <div
        className={`flex justify-between collapse-title ${
          job.status ? "bg-success" : "bg-primary"
        } text-primary-content peer-checked:bg-primary peer-checked:text-secondary-content`}
      >
        <p>{job.title}</p>
      </div>
      <div className="collapse-content bg-primary text-primary-content peer-checked:bg-sky-300 peer-checked:text-secondary-content">
        <div className="flex justify-around ">
          <p>Remaining day: {job.remainDay}</p>
          <p>Due date: {job.dueDate}</p>
          <p>Status: {job.status ? "Done" : "OnGoing"}</p>
          <div className="w-20">
            <Link className="btn btn-circle" to={`/updatetodo/${job.id}`}>
              Edit
            </Link>
          </div>
          <div className="w-20">
            <button className="btn btn-circle btn-error" onClick={hdlDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
