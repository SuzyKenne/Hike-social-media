
function HikeCardImage({ image, date, difficulty, distance , elevation}) {
  return (
    <>
        <div className="relative m-3">
            <img src={image} alt="hike-1" className="rounded-md object-cover w-78 h-88"/>
            <div className="absolute bg-[#232323] top-2 right-2 bg-darkSecondary w-12 h-fit flex flex-col items-center p-[4px] rounded-md">
                <span className="text-[12px] text-gray-200 font-light">{date.month}</span>
                <span className="text-2xl font-bold">{date.date}</span>           
            </div>
            <div className=" absolute justify-between bottom-0 py-1 px-3 backdrop-blur-sm bg-black/50 flex gap-5 w-full rounded-b-md  flex-raw">
                <div className="flex flex-raw justify-between mt-4 " >
                    <div className=" flex  text-[#d9e4ed] flex-col p-2">
                        <p>Distance</p>
                        <p className="font-semibold">{distance} mi</p>
                    </div>
                    <div className="flex flex-col p-2">
                        <p>Elevation</p>
                        <p className="font-semibold">{elevation} m</p>
                    </div>
                    <div className="flex flex-col p-2">
                        <p>Difficulty</p>
                        <p className="font-semibold">{difficulty}</p>
                    </div>
                </div>         
           </div>
       </div>
       
    </>
  )
}

export default HikeCardImage;
