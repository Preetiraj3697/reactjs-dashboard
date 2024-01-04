import PieTable from "./PieChart"
import Table from "./Table"


const TableSection = () => {
  return (
    <div className="flex w-full h-auto bg-white rounded-lg">
        <PieTable />
        <Table />
    </div>
  )
}

export default TableSection