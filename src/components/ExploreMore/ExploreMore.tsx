import { locations } from "../../utils/content"
import CaretUp from "../Icons/CaretUp"
import LocationCard from "./LocationCard"


const ExploreMore = () => {
  return (
    <section>
      <div>
        <div>
          <div>
            <h2>Explore more</h2>
            <p>Let&apos;s go on adventure</p>
          </div>

          <div>
            <button>
              <CaretUp className="" />
            </button>
            <button>
              <CaretUp className="" />
            </button>
          </div>
        </div>

        <ul>
          {locations.map((location) => (
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