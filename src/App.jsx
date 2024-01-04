
import BarChart from "./components/BarChart"
import Calander from "./components/Calander"
import CardContainer from "./components/CardContainer"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import TableSection from "./components/TableSection"



function App() {
 

  return (
    <div className="bg-[#f5fcf9] flex w-full">
      <div className="w-[20%]">
        <Sidebar />
      </div>
      <div className="w-[80%]">
      <Header />
      <div className="m-5 h-8"><Calander /></div>
      <CardContainer />
      <BarChart />
      <TableSection />
      </div>
    </div>
  )
}

export default App
