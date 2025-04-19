import { testimonials } from "../../utils/content"
import Testimonial from "./Testimonial"


const Testimonials = () => {
  return (
    <section className="px-24 py-36 max-3xl:px-20 max-3xl:py-34 max-2xl:px-14 max-2xl:py-28 max-xl:px-10 max-xl:py-26 max-lg:px-6 max-lg:py-24 max-sm:px-4">
      <div className="m-auto max-w-389 max-mdlg:max-w-lg">
        <h2 className="mb-22 text-center text-[3.875rem] font-semibold 
         max-3xl:mb-20 max-3xl:text-[3.25rem] 
         max-2xl:mb-26 max-2xl:text-5xl 
         max-xl:mb-20 max-lg:text-[2.5rem]/15 max-md:mb-16 max-md:text-[2.375rem]"
      >
          Whats Our Vacationers Say
        </h2>

        <ul className="flex gap-x-20 
         max-3xl:gap-x-18 
         max-mdlg:flex-col max-mdlg:px-0 
         max-xl:gap-x-16 
         max-lg:gap-x-10 max-lg:gap-y-18 
         max-md:px-0 max-sm:gap-y-16"
        >
          {testimonials.map((testimonial) => (
            <Testimonial testimonial={testimonial} key={testimonial.id} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Testimonials