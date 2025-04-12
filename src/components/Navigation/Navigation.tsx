import { navigationLinks } from "../../utils/content"
import BellIcon from "../Icons/BellIcon"
import CaretUp from "../Icons/CaretUp"
import LogoIcon from "../Icons/LogoIcon"
import SearchIcon from "../Icons/SearchIcon"
import DestopkDropdown from "./DestopkDropdown"


const Navigation = () => {
  return (
    <nav>
      <div className="flex items-center justify-between">
        <a href="/">
          <LogoIcon className="h-10 w-10" />
          <span>GoTravel</span>
        </a>

        <ul className="flex items-center gap-4">
          {navigationLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href}>
                {link.text}
              </a>
              {link.dropdown && (
                <span>
                  <CaretUp className="" />
                </span>
              )}
              {link.dropdown && (
                <DestopkDropdown links={link.dropdownLinks} />
              )}
            </li>
          ))}
        </ul>

        <div>
          <BellIcon className=""/>
          <SearchIcon className=""/>
          <button>Join Now</button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation