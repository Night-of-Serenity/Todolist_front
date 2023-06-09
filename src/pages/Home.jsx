import { useEffect, useState } from "react";
import SummaryCard from "../components/SummaryCard";
import { getJobs, getSummary } from "../api/todoApi";
import JobItem from "../components/JobItem";

export default function Home() {
  const [jobs, setJobs] = useState([]);
  const [summary, setSummary] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    getJobs(token).then((rs) => {
      console.log(rs.data);
      setJobs(rs.data);
    });
    getSummary(token).then((rs) => setSummary(rs.data));
  }, [reload]);
  return (
    <>
      <div className="flex justify-around gap-2">
        <SummaryCard title="All Jobs" amount={summary.all} />
        <SummaryCard title="On-Going Jobs" amount={summary.undone} />
        <SummaryCard title="Job done" amount={summary.done} />
      </div>
      <div className="w-2/3 mx-auto mt-5">
        {jobs.length > 0 ? (
          jobs.map((el) => <JobItem key={el.id} job={el} setReload={setReload} />)
        ) : (
          <p>No jobs found</p>
        )}
      </div>
    </>
  );
}
