import { steps } from "../../utils/content"
import swimmingDudes from "../../../public/swimmingDudes.webp"
import Rating from "./Rating"

const Steps = () => {
  return (
    <section className="px-24 max-3xl:px-20 max-2xl:px-14 max-xl:px-10 max-lg:px-6 max-sm:px-4 
      py-36 max-3xl:py-34 max-2xl:py-28 max-xl:py-26 max-lg:py-24"
    >
      <div className="m-auto max-w-432 px-21.5 max-3xl:px-16 max-2xl:px-9 max-xl:px-0 max-md:max-w-lg">
        <div className="mt-4 text-center max-md:mt-0">
          <h2 className="tracking-6 
            mb-5 max-3xl:mb-4.5 max-2xl:mb-4 max-xl:mb-2.5 
            text-[3.25rem] max-3xl:text-[2.875rem] max-2xl:text-[2.625rem] max-xl:text-[2.25rem] max-sm:text-[2rem] font-semibold"
          >
            Travel to make sweet memories
          </h2>
          <p className="tracking-6 text-grey-700 text-[1.75rem] max-3xl:text-[1.5rem]/9 max-2xl:text-[1.375rem] max-xl:text-[1.25rem] max-md:text-lg max-sm:text-base font-light">
            Find the perfect vacation getaway.
          </p>
        </div>

        <div className="flex items-start justify-between max-lg:flex-wrap-reverse max-lg:justify-center
          gap-x-44 max-2xl:gap-x-28 max-xl:gap-x-16 max-lg:gap-y-16
          pt-26 max-3xl:pt-24.5 max-2xl:pt-20 max-md:pt-16 max-sm:pt-12
          "
        >
          <div className="max-w-min shrink-5 max-xl:max-w-max max-lg:max-w-lg max-md:px-8 max-sm:px-0">
            <ul className="mb-14 flex flex-col gap-y-14 max-2xl:mb-12 max-2xl:gap-y-12">
              {steps.map((step) => (
                <li key={step.id} className="flex flex-col gap-y-4.5">
                  <span className="bg-primary-700 w-min rounded-[.5rem] px-5.5 py-0.5 text-[1.375rem]/8 font-semibold text-white
                    max-3xl:text-[1.125rem]/6.5 max-3xl:px-4.5"
                >
                    {step.id}
                  </span>
                  <h3 className="tracking-6 w-max text-[1.75rem]/10.5 font-semibold text-nowrap max-3xl:text-[1.5rem]/9 max-xl:w-auto max-xl:text-wrap">
                    {step.heading}
                  </h3>
                  <p className="text-grey-900 tracking-6 font-light text-base/8  max-3xl:text-sm/7 ">
                    {step.description}
                  </p>
                </li>
              ))}
            </ul>
            <a 
              href="#ExploreMore" 
              className="bg-primary-700 hover:bg-primary-800 cursor-pointer rounded-[0.625rem] px-8 py-3.5 text-lg font-medium text-white transition-all duration-200
              max-3xl:text-base max-xl:py-3 max-xl:text-sm max-xl:font-normal max-lg:py-3.5 max-lg:text-base"
            >
              Start your explore
            </a>
          </div>

          <figure className="relative shrink-2 px-20 max-3xl:px-16 max-2xl:px-8 max-md:px-6 max-sm:px-0">
            <img 
              src={swimmingDudes}
              alt="swimmingDudes"
              className="max-h-[50.8rem] rounded-[3.5rem] max-2xl:max-h-180 max-xl:rounded-[2.5rem] max-lg:max-w-lg max-lg:rounded-[2rem] max-md:max-w-[100%] max-md:rounded-3xl"
            />
            <Rating 
              key={1}
              name="Tiffany Miller"
              rating={4.6}
              img="/headshots/tiffany.webp"
              className="max-3xl:top-24.5 absolute top-28 left-0 max-md:top-24 max-sm:hidden"
            />
            <Rating 
              key={2}
              name="Amari Reece"
              rating={4.9}
              img="/headshots/amari.webp"
              className="max-3xl:bottom-24.5 absolute right-0 bottom-28 max-md:bottom-24 max-sm:hidden"
            />
          </figure>
        </div>
      </div>
    </section>
  )
}

export default Steps