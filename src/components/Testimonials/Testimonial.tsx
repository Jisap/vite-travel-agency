import { type Testimonial } from "../../utils/contentTypes"

interface TestimonialProps {
  testimonial: Testimonial;
}

const Testimonial = ({ testimonial }: TestimonialProps) => {
  return (
    <li>
      <div>
        <img src={testimonial.img} alt={testimonial.alt} /> 
      </div>

      <div>
        <p>{testimonial.description}</p>
        <p>{testimonial.name} / {testimonial.vacation}</p>
      </div>
    </li>
  )
}

export default Testimonial