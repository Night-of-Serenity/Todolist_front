import React from "react";

export default function JobItem(props) {
  const { job } = props;
  return (
    <div className="collapse w-full rounded gap-1">
      <input type="checkbox" className="peer" />
      <div className="collapse-title bg-primary text-primary-content peer-checked:bg-primary peer-checked:text-secondary-content">
        {job.title}
      </div>
      <div className="collapse-content bg-primary text-primary-content peer-checked:bg-sky-300 peer-checked:text-secondary-content">
        <div className="flex justify-around ">
          <p>Remaining day: {job.remainDay}</p>
          <p>Due date: {job.dueDate}</p>
          <p>Status: {job.status ? "Done" : "OnGoing"}</p>
        </div>
      </div>
    </div>
  );
}
