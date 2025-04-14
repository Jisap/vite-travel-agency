import { type HeroBenefit } from "../../utils/contentTypes"


interface HeroBenefitProps {
  benefit : HeroBenefit;
}

const HeroBenefit = ({ benefit }: HeroBenefitProps) => {
  return (
    <li 
      key={benefit.id} 
      className="flex max-xl:flex-col items-center gap-x-12 max-3xl:gap-x-10 max-2xl:gap-x-8 max-xl:gap-y-6 max-md:max-w-70 max-sm:max-w-max"
    >
      <div className="bg-primary-100 flex size-24 items-center justify-center rounded-full shrink-0 max-2xl:size-20">
        <benefit.Icon className="fill-primary-700"/>
      </div>

      <div className="flex flex-col gap-y-2.5 max-2xl:gap-y-2">
        <p className="text-grey-600 tracking-6 text-[1.75rem]/10.5 max-3xl:text-[1.5rem]/9 max-2xl:text-[1.375rem] max-lg:text-[1.25rem] max-xl:text-center font-medium whitespace-nowrap">
          {benefit.heading}
        </p>
        <p className="tracking-6 text-grey-600 max-3xl:text-sm/6.5 font-rubik text-base/7.5 max-xl:text-center">
          {benefit.description}
        </p>
      </div>
    </li>
  )
}

export default HeroBenefit