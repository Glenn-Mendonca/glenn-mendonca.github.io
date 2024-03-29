import { useState, useEffect } from "react";
import Chart from "react-apexcharts";

// function LineGraph() {
//   return <Chart options={options} series={series} type="line" />;
// }

function Competitive() {
  const [site, setSite] = useState("leetcode");
  // const [data, setData] = useState([]);
  useEffect(() => {
    // Fetch
    console.log(site);
  }, [site]);
  return (
    <div className="dark:bg-dark-secondary bg-light-secondary mx-auto rounded p-4 m-2">
      <div className="flex justify-between">
        <h1 className="text-xl my-auto dark:text-light-secondary text-dark-secondary">
          Competitive Profiles
        </h1>
        <select
          name="website"
          className="dark:bg-[#444448] dark:text-white bg-neutral-300 text-sm  rounded-md w-32 p-2 border-none"
          defaultValue={site}
          onChange={(e) => setSite(e.target.value)}
        >
          <option value="leetcode">Leetcode</option>
          <option value="codeforces">Codeforces</option>
          <option value="codechef">Codechef</option>
        </select>
      </div>

      <div className="h-72 w-full bg-light-secondary rounded-md mt-3">
        <div className="flex flex-col text-center w-full">
          <span>Coming soon</span>
          <a
            href="https://codeforces.com/profile/glennmendonca"
            target="_blank"
            className="hover:underline"
          >
            Codeforces @glennmendonca
          </a>
          <a href="https://leetcode.com/glen17/" target="_blank" className="hover:underline">
            Leetcode @glen17
          </a>
          <a href="https://www.codechef.com/users/glen17" target="_blank" className="hover:underline">
            Codechef @glen17
          </a>
        </div>
      </div>
    </div>
  );
}

export default Competitive;
