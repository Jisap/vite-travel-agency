import { footerCols, footerSocials } from "../utils/content"
import LogoIconDark from "./Icons/LogoIconDark"


const Footer = () => {
  return (
    <section>
      <div>
        {/* left */}
        <div>
          <LogoIconDark className="" />

          <div>
            <p>GoTravel - Your Vacation Awaits</p>

            <p>
              GoTravel creates vacations you&apos;ll remember. Simply pick your
              desired location, and we do the rest. An all inclusive getaway
              that leaves you relaxing, not stressing.
            </p>

            <ul>
              {footerSocials.map((social) => (
                <li key={social.id}>
                  <a 
                    href={social.href} 
                    aria-label={social.alt} 
                    target="_blank" 
                    className=""
                  >
                    <social.Icon className="" />
                  </a>                
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* right */}
        <ul>
          {footerCols.map((col) => (
            <li key={col.id}>
              <p>{col.heading}</p>
              <ul>
                {col.links.map((link) => (
                  <li key={link.id}>
                    {link.Icon && <link.Icon className="" />}
                    <a href={link.href} className="">
                      <p>
                        {link.name}
                      </p>
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Footer