import ServiceCard from "../components/ServiceCard.jsx"
import { services } from "../constants.jsx"


const Services = () => {
  return (
    <section className="flex justify-center flex-wrap gap-9">
    {services.map(()=>(
      <ServiceCard key={services.label}/>
    ))}

    </section>
  )
}

export default Services