import { heroBenefits } from "../../utils/content"
import HeroBenefit from "./HeroBenefit"



const Hero = () => {
  return (
    <section className="relative m-auto max-w-[108rem] pb-21">
      <div className="relative flex items-center justify-center bg-[url('/public/hero.webp')] rounded-[2.5rem] bg-cover bg-bottom pb-[56.25%] max-lg:rounded-3xl max-md:pb-[80%] max-sm:pb-[130%]">

        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center text-center">
          <div className="max-md:px-6">
            <h1 className="pt-54 max-3xl:pt-49 max-2xl:pt-44 max-sm:pt-20 max-xl:pt-32 max-lg:pt-24 text-[6.5rem]/34 max-3xl:text-[5rem]/26 max-2xl:text-[4rem]/20.5 mb-4 max-xl:text-[3.5rem]/18 max-lg:text-[2.625rem]/15 max-md:text-[2.25rem]/13 max-sm:text-[1.75rem]/10.5 font-semibold text-white max-md:mb-3 ">
              Star Your Memorable <br /> Journey Here
            </h1>
            <p className="text-[1.75rem]/10.5 max-3xl:text-[1.375rem]/8.5 max-2xl:text-lg max-xl:text-base max-lg:font-light max-sm:text-base/7 text-white  ">
              Where unforgettable adventures await you.
            </p>
          </div>
        </div>

        {/* render inside image on desktop - visible > 1280*/}
        <ul className="mx-21.5 max-3xl:mx-16 max-2xl:mx-9 flex gap-x-18 max-3xl:gap-x-16 max-2xl:gap-x-12 max-xl:hidden px-16 py-18 max-3xl:py-16 max-3xl:px-14 max-2xl:px-10.5 max-2xl:py-12
         bg-white drop-shadow-[0_2px_40px_rgba(0,0,0,0.06)] absolute -bottom-23 rounded-[1.5rem] "
        >
          {heroBenefits.map((benefit) => (
            <HeroBenefit benefit={benefit} key={benefit.id} />
          ))}
        </ul>
      </div>

      {/* render below image on tablet and mobile - visible < 1280 */}
      <ul className="mt-26 hidden rounded-[1.5rem] bg-white px-4 max-2xl:gap-x-12 max-xl:static max-xl:mx-0 max-xl:flex max-xl:gap-x-16 max-lg:mt-24 max-lg:px-0 
      max-md:flex-wrap max-md:justify-center max-md:gap-x-8 max-md:gap-y-16"
      >
        {heroBenefits.map((benefit) => (
          <HeroBenefit benefit={benefit} key={benefit.id} />
        ))}
      </ul>
    </section>
  )
}

export default Hero