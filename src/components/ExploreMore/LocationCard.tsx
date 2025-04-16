import { type Location } from "../../utils/contentTypes"
import { Location as LocationIcon } from "../Icons/Location"
import Star from "../Icons/Star"

interface LocationCardProps {
  location: Location
}

const LocationCard = ({location}: LocationCardProps) => {
  return (
    <li>
      <div>
        <img src={location.img} alt={location.alt} />
        <div>
          <Star className="size-6" />
          <p>{location.rating}</p>
        </div>
      </div>

      <div>
        <div>
          <p>{location.title}</p>
          <div>
            <LocationIcon className="size-6" />
            <p>{location.location}</p>
          </div>
        </div>

        <p>{location.pricePerPerson}/<span>Pax</span></p>
      </div>
    </li>
  )
}

export default LocationCard