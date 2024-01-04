import Loader from '../assets/Loader.svg'
import MenImage from '../assets/menImage.png'
import DropDown from '../assets/drop-down.svg'
import Vector from '../assets/Vector.svg'

const Header = () => {
    return <header className='w-full flex h-16 py-0 px-5 justify-between items-center shrink-0 mb-3'>
        <div className='flex h-16 items-center gap-3'>
            <img src={Loader} alt="loader" />
            <text>Category</text>
        </div>
        <div className='flex h-14 py-2 px-4 items-center gap-[10]'>
        <img src={MenImage} alt="loader" className='w-8 h-8 rounded-[32] cover bg-no-repeat'/>
        <img src={DropDown} alt="loader" className='w-6 h-6 '/>
        <img src={Vector} alt="loader" className='w-6 h-6 shrink-0'/>
        </div>
    </header>
}
export default Header;
// width: 32px;
// height: 32px;
// border-radius: 32px;
// background: url(<path-to-image>), lightgray 50% / cover no-repeat;