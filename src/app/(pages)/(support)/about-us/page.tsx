import AboutEricHost from '@/components/AboutUs/AboutEricHost'
import HeroAboutSection from '@/components/AboutUs/HeroSection'
import { servicesProps } from '../../../../data/AboutUs/data'
import { Services } from '@/components/PlanCards/Service'
import { FaCheckCircle } from 'react-icons/fa'
type Props = {}

const aboutus = (props: Props) => {
  return (
    <section>
      <HeroAboutSection />
      <AboutEricHost />
      <div className='bg-[#4346C2] text-white'>

        <Services
          {...servicesProps[0]}
          textwhite={true}
          customElements={
            <ul className="pl-2 mt-1 flex gap-7" style={{ listStyleType: "disc" }}>
              <div>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500 text-lg" />
                  Data driven quality review
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500 text-lg" />
                  24x7 coverage
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500 text-lg" />
                  Management team
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500 text-lg" />
                  Integration ready
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500 text-lg" />
                  Compliance driven process
                </li>

              </div>
              <div>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500 text-lg" />
                  Secure work environment
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500 text-lg" />
                  Lifetime updates
                </li>

                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500 text-lg" />
                  Tech support
                </li>

                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500 text-lg" />
                  Tons of assets
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500 text-lg" />
                  Workforce management
                </li>
              </div>
            </ul>
          }
        />
      </div>

      {servicesProps.slice(1).map((service, index) => (
        <div key={index} className={index % 2 !== 0 ? "bg-[#4346C2] text-white" : ""}>
          <Services {...service} />
        </div>
      ))}
    </section>
  )
}

export default aboutus