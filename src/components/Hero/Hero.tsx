import { heroBenefits } from "../../utils/content"
import HeroBenefit from "./HeroBenefit"



const Hero = () => {
  return (
    <section className="relative m-auto max-w-[108rem]">
      <div className="relative flex items-center justify-center bg-[url('/public/hero.webp')] rounded-[2.5rem] bg-cover bg-bottom pb-[56.25%]">

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