
import ImageComponent from '../../reusable-component/ImageComponent'
import HikeCardImage from './HikeCardImage'

function HikeCard({
  mountain,
  date,
  location,
 
  hikeDetails,
  image
}) {
  return (
    <div className="flex flex-col bg-primary px-2 py-2 rounded-md bg-[#1F2124] ">
      <HikeCardImage 
        image={image}
        date={date}
        difficulty={hikeDetails.difficulty}
        distance={hikeDetails.distance}
        elevation={hikeDetails.elevation}
      />  
      <div className="m-3">
        <h3 className="text-green-500 pb-3 pt-2 text-sm">
          {date.startTime} 
        </h3>
        <div  className='mb-3'>
          <h1 className="text-lg font-bold">{mountain}</h1>
          <span className="text-sm">Location &sdot; {location}</span>
        </div>

        <hr className="mt-4"/>
        <div className="flex justify-between m-4">
          <div className="flex -space-x-1 ">
            <ImageComponent />
            <div className="flex items-center  h-6 w-8 rounded-full bg-darkSecondary mb-2 ">
              <span className="text-[12px] h-6 w-6 bg-[#4b4d55] rounded-full flex justify-center text-[[#d9e4ed]">+2</span>
            </div>
          </div>
          <button className="text-accent bg-[#35332D] text-[#ffd37d] rounded-full text-sm px-9 py-1 flex items-center bg-btnBg hover:bg-accent hover:text-btnBg ">
            Join
          </button>{" "}
        </div>
      </div>
    </div>
    
  )
}

export default HikeCard
