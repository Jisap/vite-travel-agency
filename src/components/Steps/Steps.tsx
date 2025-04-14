import { steps } from "../../utils/content"
import swimmingDudes from "../../../public/swimmingDudes.webp"
import Rating from "./Rating"

const Steps = () => {
  return (
    <section>
      <div>
        <div>
          <h2>Steps</h2>
          <p>Find the perfect vacation getaway.</p>
        </div>

        <div>
          <div>
            <ul>
              {steps.map((step) => (
                <li key={step.id}>
                  <span>{step.id}</span>
                  <h3>{step.heading}</h3>
                  <p>{step.description}</p>
                </li>
              ))}
            </ul>
            <a href="">Start your explore</a>
          </div>

          <figure>
            <img 
              src={swimmingDudes}
              alt="swimmingDudes"
            />
            <Rating />
            <Rating />
          </figure>
        </div>
      </div>
    </section>
  )
}

export default Steps