
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import data from '../utils/data';
import ThreeDot from '../assets/ThreeDot.svg';
import arrow from '../assets/arrow.svg'


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const CustomTooltip = ({ active, payload}) => {
  console.log(payload[0]);
  if (active && payload && payload.length) {
    return (
      <div className="w-auto m-4 rounded-xl shadow border border-gray-200 bg-gray-100 p-8">
        <p className="text-red-600">Supplier: {payload[0].payload.Supplier}</p>
        <p className="text-yellow-600">Emissions-2023: {payload[0].value}</p>
        <p className="text-green-600">Emissions-2022: {payload[0].payload['Emissions-2022']}</p>
        <p className="text-blue-600">Revenue: {payload[0].payload.Revenue}</p>
      </div>
    );
  }

  return null;
};
const PieTable = () => {
 
    return (
        <div className='bg-white w-2/5 m-4 rounded-xl shadow border border-gray-200'>
            <div className='flex h-16 items-center p-5 shrink-0 justify-between mx-4 mt-4'>
                <div>
                <h1 className="text-lg font-normal font-['HelveticaNeue'] ">Emission by Supplier</h1>
                </div>
                <div className='flex h-9 py-[6] px-1 justify-center items-center gap-4 rounded-xl bg-white shadow border border-[#EBEBEB]'>
                    <img src={arrow} alt="threedot"/>
                    <img src={ThreeDot} alt="threedot"/>
                </div>
            </div> 
            
      <PieChart width={800} height={400} >
        <Pie
          data={data}
          cx={200}
          cy={200}
          innerRadius={40}
          outerRadius={100}
          fill="#8884d8"
          paddingAngle={2}
          dataKey="Emissions-2023"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          
        </Pie>
        <Tooltip content={<CustomTooltip />}/>
      </PieChart>
      </div>
    );
  }

  export default PieTable;
