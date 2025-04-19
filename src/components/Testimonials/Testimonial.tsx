import { type Testimonial } from "../../utils/contentTypes"

interface TestimonialProps {
  testimonial: Testimonial;
}

const Testimonial = ({ testimonial }: TestimonialProps) => {
  return (
    <li
      key={testimonial.id} 
      className="relative ml-24 flex rounded-3xl bg-white py-14 pt-14 pr-12 pl-42 drop-shadow-[0px_0px_20px_rgba(0,0,0,0.05)]
        max-3xl:pl-38 
        max-2xl:mt-22 max-2xl:ml-10 max-2xl:pt-32 max-2xl:pl-12 
        max-xl:ml-0 max-xl:gap-y-10 max-xl:px-8 
        max-lg:drop-shadow-[0px_0px_10px_rgba(0,0,0,0.05)] 
        max-sm:px-6 max-sm:pt-26 max-sm:pb-16"
    >
      <div className="absolute left-0 -translate-[50%] size-47.5 overflow-hidden 
        after:absolute after:right-0 after:bottom-0 after:-z-1 after:block after:size-45 after:rounded-full after:bg-primary-700
        max-3xl:size-44 max-3xl:after:size-42 
        max-2xl:top-0 max-2xl:left-48 max-2xl:-translate-y-[50%] 
        max-xl:left-36 max-xl:size-42 max-xl:after:size-40 
        max-sm:left-32 max-sm:size-40 max-sm:after:size-38"
      >
        <img 
          src={testimonial.img} 
          alt={testimonial.alt} 
          className="bg-grey-300 top-0 left-0 z-5 size-45 rounded-full max-3xl:size-42 max-xl:size-40 max-sm:size-38"  
        /> 
      </div>

      <div className="flex flex-col justify-between gap-y-14 max-3xl:gap-y-12 max-sm:gap-y-8">
        <p className="text-base/9 font-light  max-sm:text-base/10.5">
          {testimonial.description}
        </p>
        <p className="font-medium">
          {testimonial.name} /{" "}<span className="font-light">{testimonial.vacation}</span>
        </p>
      </div>
    </li>
  )
}

export default Testimonial