import { useEffect, useState } from "react";
import SummaryCard from "../components/SummaryCard";
import { getJobs } from "../api/todoApi";

export default function Home() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    getJobs(token).then((rs) => {
      console.log(rs.data);
      setJobs(rs.data);
    });
  }, []);
  return (
    <>
      <div className="flex justify-around gap-2">
        <SummaryCard title="All Jobs" amount="20" />
        <SummaryCard title="On-Going Jobs" amount="12" />
        <SummaryCard title="Job done" amount="8" />
      </div>
      <div>
        {jobs.map((el) => (
          <p className="p-3 bg-sky-300 m-3" key={el.id}>
            {el.title}
          </p>
        ))}
      </div>
    </>
  );
}
