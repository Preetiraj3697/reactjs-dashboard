import data from '../utils/data';

const Table = () => {
  
    return <div className='bg-white w-3/5 m-2 mr-4 rounded-xl shadow border border-gray-200'>
    <table className="table-auto border border-[#fafafa] p-4 w-full">
        <thead className="table-auto border border-[#fafafa] bg-[#fafafa]">
        <tr className="table-auto border border-[#fafafa]">
          <th className="table-auto border border-[#fafafa] p-2">SUPPLIER</th>
          <th className="table-auto border border-[#fafafa] p-2">YEAR</th>
          <th className="table-auto border border-[#fafafa] p-2">EMISSION/REVENUE RATIO</th>
          <th className="table-auto border border-[#fafafa] p-2">MOM</th>
        </tr>
      </thead>
      <tbody className="table-auto border border-[#fafafa] text-center">
      {data.map((item,index)=>(
        <tr className="table-auto border border-[#fafafa]  p-1" key={index}>
          <td className="table-auto border border-[#fafafa] p-2=">{item.Supplier}</td>
          <td className="table-auto border border-[#fafafa] p-2">{item.Year}</td>
          <td className="table-auto border border-[#fafafa] p-2">{item['Emissions-2023']}</td>
          <td className={`table-auto border border-[#fafafa] p-2 ${Math.floor(item['E_R-2023']/100)>22 ? 'text-red-600':'text-green-600'}`}>{Math.floor(item['E_R-2023']/100)}%{Math.floor(item['E_R-2023']/100)>24?"↑":"↓"}</td>
        </tr>
      ))}
      </tbody>
    </table>
    </div>
}

export default Table;