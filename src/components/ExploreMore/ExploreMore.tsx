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
    <section className="px-24 py-26
      max-3xl:px-20 max-2xl:px-14 max-xl:px-10 max-lg:px-6 max-lg:py-24 max-sm:px-4"
    >
      {/* En pantallas de 800px o menos (≤ 50rem), el elemento tendrá un ancho máximo de 32rem (512px)*/}
      <div className="m-auto max-w-389 max-mdlg:max-w-lg">
        <div className="flex items-end justify-between max-sm:flex-wrap max-sm:gap-x-16 max-sm:gap-y-10">
          <div>
            <h2 className="tracking-6 mb-4 text-[3.25rem] font-semibold
              max-3xl:text-[2.875rem] max-2xl:text-[2.625rem] max-xl:text-[2.25rem] max-md:mb-3 max-sm:text-[2rem]"
            >
              Explore more
            </h2>
            <p className="tracking-6 text-grey-700 text-[1.75rem] font-light
              max-3xl:text-[1.5rem] max-2xl:text-[1.375rem] max-xl:text-[1.25rem] max-md:text-lg max-sm:text-base"
            >
              Let&apos;s go on adventure
            </p>
          </div>

          <div className="mb-2 flex gap-x-6
            max-3xl:mb-1.5 max-3xl:gap-x-5 max-2xl:gap-x-4 max-xl:mb-0.5 max-sm:gap-x-3"
          >
            <button 
              className="bg-grey-300 not-disabled:hover:bg-grey-400 flex size-18 cursor-pointer place-content-center rounded-full
              transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50 max-2xl:size-17 max-xl:size-16 max-sm:size-15"
              aria-label="arrow-left"
              onClick={handleLeftClick}
              disabled={currentIndex === 0}
            >
              <CaretUp className="w-6 -rotate-90 fill-white" />
            </button>
            <button 
              className="bg-primary-700 not-disabled:hover:bg-primary-800 flex size-18 cursor-pointer place-content-center rounded-full
              transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50 max-2xl:size-17 max-xl:size-16 max-sm:size-15"
              aria-label="arrow-right"
              onClick={handleRightClick}  
              disabled={currentIndex >= totalLocations - 6}
            >
              <CaretUp className="w-6 rotate-90 fill-white" />
            </button>
          </div>
        </div>

        <ul className="mt-33 grid grid-cols-3 gap-x-29 gap-y-24
          max-3xl:mt-31 max-2xl:mt-24 max-xl:mt-20 max-md:mt-16
          max-3xl:gap-x-26 max-2xl:gap-x-16 max-xl:gap-x-22 max-lg:gap-x-12
          max-2xl:gap-y-20 max-sm:gap-y-16
          max-mdlg:grid-cols-1 max-xl:grid-cols-2   "
        >
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