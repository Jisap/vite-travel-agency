import { type Service } from "../../utils/contentTypes"


interface ServiceProps{
  service: Service
}

const Service = ({service}: ServiceProps) => {
  return (
    <li>
      <service.Icon className="h-26" />
      <div>
        <h3>{service.heading}</h3>
        <p>{service.description}</p>
      </div>
    </li>
  )
}

export default Service