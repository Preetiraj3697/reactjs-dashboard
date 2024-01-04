import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import data from "../utils/data";
import { useState } from "react";

const BarChart = () => {
  const [toggle,setToggle] = useState(false)
  const handleToggle = () => {
    setToggle(!toggle)
  }
  return (
    <div className="bg-white w-[90%] m-4 rounded-xl shadow border border-gray-200">
      <label className="relative inline-flex items-center cursor-pointer mt-8 ml-8">
        <input type="checkbox" value="" className="sr-only peer" onClick={handleToggle}/>
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
         {!toggle ?  "Legend On" : "Legend Off"}
        </span>
      </label>
      <ResponsiveContainer width={900} height={500}>
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid strokeDasharray="4 1 2" />
          <XAxis
            dataKey="Month"
            scale="band"
            padding={{ left: 30, right: 30 }}
          />
          <YAxis />
          <Tooltip />
          {toggle? <Legend verticalAlign="top" height={50} />: null}
          <Bar dataKey="Emissions-2023" barSize={20} fill="#5470c6" />
          <Bar dataKey="Emissions-2022" barSize={20} fill="#91cc75" />
          <Line dataKey="E_R-2023" stroke="#ee6a6a" activeDot={{ r: 4 }} />
          <Line dataKey="E_R-2022" stroke="#facc63" activeDot={{ r: 4 }} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};
export default BarChart;
