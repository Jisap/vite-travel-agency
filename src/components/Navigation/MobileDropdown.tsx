import { NavigationLink } from "../../utils/contentTypes"

interface MobileDropdownProps {
  links: NavigationLink[] | undefined;
}

const MobileDropdown = ({ links }: MobileDropdownProps) => {
  return (
    <ul className="z-10 flex flex-col gap-y-6 overflow-hidden pl-3">
      {links?.map((link) => (
        <li key={link.id} className="text-grey-600">
          <a href="#">
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default MobileDropdown