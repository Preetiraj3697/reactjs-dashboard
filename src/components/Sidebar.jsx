import PeterLogo from '../assets/Peter.png'
import MaterialSymbol from '../assets/material.svg'
import deleteLogo from '../assets/delete.svg'
import WaterSymbol from '../assets/water.svg'
import SidebarComponent from './SidebarComponent'

const data = [
  {heading:"Data-in",title:"Energy",title2:"Water and Effluents",Symbol1:MaterialSymbol,Symbol2:WaterSymbol},
  {heading:"ANALYZE",title:"Energy",title2:"Waste",Symbol1:MaterialSymbol,Symbol2:deleteLogo}
]
const Sidebar = () => {
    return <div className="w-64 h-full bg-neutral-900 flex-col justify-start items-center inline-flex">
    <div className="p-3.5 bg-neutral-900 border-t border-b border-black flex-col justify-center items-center gap-2.5 flex">
      <div className="w-56 pl-5 pr-2.5 py-3 rounded-3xl justify-start items-center gap-1 inline-flex">
        <img className="w-32 h-12" src={PeterLogo} />
      </div>
    </div>
    {data.map((item,index)=>(
      <SidebarComponent key={index} props={item}/>
    ))}
    <div className="w-64 h-44 relative">
      <div className="w-48 h-12 left-[31px] top-[63.50px] absolute bg-emerald-600 rounded-xl" />
      <div className="w-32 h-9 left-[64px] top-[83px] absolute text-center  text-white text-xs font-medium font-['Inter'] leading-none">Open Help Centre</div>
    </div>
  </div>
}
export default Sidebar;