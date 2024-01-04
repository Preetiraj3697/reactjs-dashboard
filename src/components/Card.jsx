const Card = ({title,title2,co2,emo,color}) => {
  return (
    <div className="w-64 h-[9rem] bg-white rounded-xl shadow border border-gray-200 flex-col justify-end items-start inline-flex">
      <div>
      <div className="w-full ml-2 mr-2 mt-2">
        <h2 className="text-lg font-normal font-['HelveticaNeue'] ">{title}</h2>
        <h5 className="italic text-sm font-extralight font-['Poppins'] text-[#000000] opacity-60 items-center">{title2}</h5>
      </div>
      </div>
      <div>
        <div className="w-80 h-20 ml-2 mr-2 justify-start items-center inline-flex">
          <div className={`w-56 ${color=="red"?"bg-red-600  border-red-600":"bg-yellow-600  border-yellow-600"} ${color=="green"?"bg-green-600  border-green-600":"bg-yellow-600  border-yellow-600"} bg-opacity-5 rounded-lg border border-opacity-25 justify-end items-center inline-flex`}>
            <div className={`w-72 self-stretch pl-2  pt-2 pb-1.5 rounded-lg border-l-8 ${color=="red"?"border-red-600":" border-green-600"} ${color==="yello"?"border-yellow-600":" border-red-600"}justify-start items-center gap-4 inline-flex`}>
              <div className="text-center text-black text-opacity-80 text-base font-normal font-['HelveticaNeue']">
                {co2}
              </div>
              <div className={`w-20 h-7 text-center ${emo.includes("↑")?" text-red-700":" text-green-700"} text-opacity-70 text-xs font-normal font-['HelveticaNeue']`} >
                {emo}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
// color: rgba(0, 0, 0, 0.67);

// text-align: center;
// font-family: Poppins;
// font-size: 8px;
// font-style: italic;
// font-weight: 275;
// line-height: normal;
