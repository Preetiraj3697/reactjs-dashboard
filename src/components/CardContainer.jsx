import Card from "./Card"


const data = [
    {
      title:"Purchased goods and Services", title2:"contribution to Scope3",co2:"441510.9 CO₂e", emo:"25%YOY↑",color:'red'
    },
    {
      title:"Purchased goods and Services to revenue ratio",title2:null,co2:"323586.2 CO₂e", emo:"24%YOY↓",color:'yellow'
    },
    {
      title:"Catogory-1", title2:"contribution to Scope3",co2:"32% of Scope3", emo:"25%YOY↑",color:'green'
    }
  ]

const CardContainer = () => {
    return <div className="flex w-full gap-3 pl-6">
{data.map((item, index)=>(
      <Card key={index} title={item.title} title2={item.title2} co2={item.co2} emo={item.emo} color={item.color}/>
    ))}
    <div className="w-40 h-36 bg-emerald-600 bg-opacity-70 rounded-xl shadow border border-gray-200 flex-col justify-start items-start inline-flex">
  <div className="h-16 p-5 justify-start items-center gap-2.5 inline-flex">
    <div className="text-white text-opacity-80 text-sm font-normal font-['HelveticaNeue'] leading-none">Total number of<br/>reached suppliers</div>
  </div>
  <div className="self-stretch h-20 px-5 pb-5 flex-col justify-center items-center flex">
    <div className="text-center text-white text-opacity-80 text-5xl font-normal font-['HelveticaNeue']">143</div>
  </div>
</div>
    </div>
}

export default CardContainer;