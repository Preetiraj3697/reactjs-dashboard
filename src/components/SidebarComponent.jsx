import { useState } from 'react';
import DropDown from '../assets/drop-down.svg'
const SidebarComponent = ({props}) => {
    const [showCategory, setShowCategory] = useState(false);
    const handleShowCategory = () => {
        setShowCategory(!showCategory);
    }
  return (
    <div className="h-44 px-3.5 pt-2.5 pb-3.5 bg-neutral-900 border-t border-b border-zinc-800 flex-col justify-start items-center gap-2.5 flex">
      <div className="w-56 pl-5 pr-2.5 py-3 rounded-3xl justify-start items-center gap-1 inline-flex">
        <div className="pr-24 justify-start items-center flex">
          <div className="text-zinc-600 text-sm font-medium font-['Inter'] uppercase leading-none">{props.heading}</div>
        </div>
      </div>
      <div className="w-56 h-12 relative rounded-lg">
         <img className="w-6 h-4 left-[20px] top-[13.50px] absolute" src={props.Symbol1} />
        <div className="left-[47px] top-[16px] absolute text-white text-base font-medium font-['Inter'] leading-none">{props.title}</div>
        <img src={DropDown} alt="loader" className='w-6 h-4 left-[110px] top-[14px] absolute bg-white' onClick={handleShowCategory}/>
      </div>
      {showCategory ? <div className="flex flex-col text-white bg-neutral-900 text-lg z-50 p-5 m-4 w-full mt-6">
            <span className='hover:bg-white hover:text-black'>category1</span>
            <span className='hover:bg-white hover:text-black'>category2</span>
            <span className='hover:bg-white hover:text-black'>category3</span>
            <span className='hover:bg-white hover:text-black'>category4</span>
            <span className='hover:bg-white hover:text-black'>category5</span>
        </div>: null}
      <div className="w-56 h-11 relative rounded-3xl">
      <img className="w-6 h-4 left-[20px] top-[13.50px] absolute" src={props.Symbol2} />
        <div className="left-[47px] top-[13px] absolute text-white text-base font-medium font-['Inter'] leading-none">{props.title2}</div>
        <div className="w-6 h-6 left-[189px] top-[10px] absolute" />
        <div className="w-6 h-6 left-[17px] top-[10px] absolute" />
      </div>
    </div>
  )
}

export default SidebarComponent