import HikeCard from "./HikeCard";
import data from "../../../data";

const UpComingHikes = () => {

  

  

  const displayHikeInfo = data.map((hike) => {
    return ( 
      <HikeCard 
          mountain={hike.mountain}
          date={hike.date}
          location={hike.location}
          time={hike.time}
          hikeDetails={hike.hikeDetails}
          image={hike.image}
          key={hike.id}    
      />
    )
  })

  return (
    <div className="grid grid-cols-1 md:grid-cols-2  gap-6 ">
      {displayHikeInfo}
    </div>
  )
}

export default UpComingHikes;




 
