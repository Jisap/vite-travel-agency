import { type HeroBenefit } from "../../utils/contentTypes"


interface HeroBenefitProps {
  benefit : HeroBenefit;
}

const HeroBenefit = ({ benefit }: HeroBenefitProps) => {
  return (
    <li>{benefit.heading}</li>
  )
}

export default HeroBenefit