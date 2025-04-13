import { heroBenefits } from "../../utils/content"
import HeroBenefit from "./HeroBenefit"



const Hero = () => {
  return (
    <section>
      <div>

        <div>
          <div>
            <h1>Star Your Memorable <br /> Journey Here</h1>
            <p>
              Where unforgettable adventures await you.
            </p>
          </div>
        </div>

        <ul>
          {heroBenefits.map((benefit) => (
            <HeroBenefit benefit={benefit} key={benefit.id}/>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Hero