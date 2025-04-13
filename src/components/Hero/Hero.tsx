import { heroBenefits } from "../../utils/content"
import HeroBenefit from "./HeroBenefit"



const Hero = () => {
  return (
    <section className="relative m-auto max-w-[108rem]">
      <div className="relative flex items-center justify-center bg-[url('/public/hero.webp')] rounded-[2.5rem] bg-cover bg-bottom pb-[56.25%]">

        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center text-center">
          <div>
            <h1 className="mb-4 pt-54 text-[6.5rem]/34 font-semibold text-white">Star Your Memorable <br /> Journey Here</h1>
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