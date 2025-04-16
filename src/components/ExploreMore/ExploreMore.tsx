import { useState } from "react"
import { locations } from "../../utils/content"
import CaretUp from "../Icons/CaretUp"
import LocationCard from "./LocationCard"
import { LOCATION_CARD_SHOW } from "../../utils/constants"


const ExploreMore = () => {

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const totalLocations = locations?.length || 0;

  const renderLocations = locations?.slice(currentIndex, currentIndex + LOCATION_CARD_SHOW)

  const handleRightClick = () => {
    setCurrentIndex(prevIndex => prevIndex + 1)
  }

  const handleLeftClick = () => {
    setCurrentIndex(prevIndex => prevIndex - 1)
  }

  return (
    <section className="px-24 py-26">
      <div className="m-auto max-w-389">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="tracking-6 mb-4 text-[3.25rem] font-semibold">
              Explore more
            </h2>
            <p className="tracking-6 text-grey-700 text-[1.75rem] font-light">
              Let&apos;s go on adventure
            </p>
          </div>

          <div className="mb-2 flex gap-x-6">
            <button 
              className="bg-grey-300 not-disabled:hover:bg-grey-400 flex size-18 cursor-pointer place-content-center rounded-full
              transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50"
              aria-label="arrow-left"
              onClick={handleLeftClick}
              disabled={currentIndex === 0}
            >
              <CaretUp className="w-6 -rotate-90 fill-white" />
            </button>
            <button 
              className="bg-primary-700 not-disabled:hover:bg-primary-800 flex size-18 cursor-pointer place-content-center rounded-full
              transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50"
              aria-label="arrow-right"
              onClick={handleRightClick}  
              disabled={currentIndex >= totalLocations - 6}
            >
              <CaretUp className="w-6 rotate-90 fill-white" />
            </button>
          </div>
        </div>

        <ul className="mt-33 grid grid-cols-3 gap-x-29 gap-y-24">
          {renderLocations?.map((location) => (
            <LocationCard 
              location={location} 
              key={location.id} 
            />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ExploreMore