import { useState } from "react"
import Close from "../Icons/Close"
import { navigationLinks } from "../../utils/content"
import CaretUp from "../Icons/CaretUp"
import MobileDropdown from "./MobileDropdown"
import { AnimatePresence } from "motion/react"


const MobileMenu = () => {
  
  const [activeLinkId, setActiveLinkId] = useState<number>(-1); // id del enlace actualmente expandido. -1 significa que no hay ninguno expandido.
  
  return (
    <div className="fixed top-0 right-0 left-0 bottom-0 justify-end bg-white/30 pl-30">
      <nav className="flex h-full w-full max-w-96 min-w-65 flex-col items-start gap-y-18 bg-white p-6 ol-7">
        <Close />

        <ul className="flex flex-col gap-y-8">
          {navigationLinks.map((link) => (
            <li 
              key={link.id} 
              className={`
                group relative flex flex-col font-medium transition-all duration-300 ease-in-out 
                ${activeLinkId === link.id ? "gap-y-6" : "gap-y-0"}
              `}
              onClick={() => setActiveLinkId( activeLinkId === link.id ? -1 : link.id)} // Si esta abierto lo cierra, si no lo abre ( establece el activeLinkId )
            >
              <div className="flex cursor-pointer items-center gap-x-1.75">
                <a href={link.href} className={`
                  text-grey-600 
                  ${activeLinkId === link.id ? "text-grey-1000" : ""}
                `}>
                  {link.text}
                </a>

                
                {link.dropdown && (
                  <span className={`
                    flex size-6  items-center justify-center transition-all duration-200
                    ${activeLinkId === link.id ? "rotate-180" : ""}
                  `}>
                    <CaretUp className={`
                      fill-grey-600 size-3.5 rotate-180 transition-all duration-200
                      ${activeLinkId === link.id ? "fill-grey-1000" : ""}
                    `} />
                  </span>
                )}
              </div>

              <AnimatePresence>
                {link.dropdown && activeLinkId === link.id && ( // Solo se renderiza el dropdown si el link esta expandido (activeLinkId === link.id)
                  <MobileDropdown links={link.dropdownLinks} />
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

      <button className="bg-primary-700 hover:bg-primary-800 cursor-pointer rounded-[.625rem] px-8 py-3 font-medium text-white transition-all duration-200">
        Join Now
      </button>
      </nav>
    </div>
  )
}

export default MobileMenu