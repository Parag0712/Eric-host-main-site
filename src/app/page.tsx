import { BigCard1, BigCard2, BigCard3, BigCard4, BigCard5 } from '@/assests/config'
import BusinessInfo from '@/components/HomePage/BusinessInfo'
import { ChooseThePlans } from '@/components/HomePage/ChooseThePlans'
import { Cta } from '@/components/HomePage/Cta'
import { FAQ } from '@/components/HomePage/Faq'
import { Hero } from '@/components/HomePage/Hero'
import MapSection from '@/components/HomePage/MapSection'
import { Pricing } from '@/components/HomePage/Pricing'
import { Services } from '@/components/HomePage/Service'
import Testimonials from '@/components/HomePage/Testimonials'
type Props = {}

const page = (props: Props) => {
  return (
    <section>
      <Hero />
      <Pricing />
      <ChooseThePlans />
      <BusinessInfo />
      <div className='bg-[#4346C2]'>
        <Services
          title={<>
          Robust Security, Fortified Defenses
          </>
          }
          subtitle="Hard to Hack!"
          description="For our Business Hosting solutions, Privacy is the cornerstone. We empathize the critical importance of safeguarding your customer information and business data that’s why we have employed advanced security measures, including DDoS protection, malware scanning, firewalls, and SSL certificates. Our multi-layered security system fortifies your website, ensuring your business operations remain secure and uninterrupted and shielding it from cyber threats."
          buttonText="Explore Plans"
          buttonLink="/"
          imageSrc={BigCard3}
          textwhite={true}
          imageAlt="Card Image"
        />
      </div>

      <div className=''>
        <Services
          title={<>
            Unrivaled Performance,
            <br />
            Uninterrupted Operations
          </>
          }
          subtitle="Customised Servers at your Fingertip"
          description="Every second counts in the fast-paced business environment. With Business Hosting at EricHost, you’re not just getting a hosting solution but also you’re securing an unwavering commitment to performance. Our servers optimized for speed and efficiency which ensure that your website loads instantly and provide visitors with a seamless and responsive experience. Say hello to a hosting environment engineered for excellence and Say goodbye to slow-loading pages."
          buttonText="Explore Plans"
          buttonLink="/plans"
          imageSrc={BigCard2}
          imageAlt="Card Image"
          reversecard={true}
        />
      </div>

      <div className='bg-[#4346C2]'>
        <Services
          title={<>Scalability for Growth, Flexibility for Expansion</>
          }
          subtitle="Expand Servers with a Click"
          description="Your business isn’t static, and nor should be your hosting solution. You’re empowered with scalability to blend with your ambitions whether you’re planning to expand your online portfolio or expecting a surge in website traffic due to a new product launch, our hosting solutions scale effortlessly. Your business grows with your website, ensuring your hosting environment evolves with your requirements."
          buttonText="Explore Plans"
          buttonLink="/plans"
          imageSrc={BigCard4}
          textwhite={true}
          imageAlt="Card Image"
        />
      </div>

      <div>
        <Services
          title={<>Dedicated Support, Your Success Partner
          </>
          }
          subtitle="24/7 Customer Support"
          description="Your success is our priority. Our experienced support team comprises dedicated professionals passionate about helping your business throughout the journey. We offer 24/7 customer support, ensuring you receive regular assistance for any technical queries, configurations, or troubleshooting requirements. Think of us as your definitive partner, committed to ensuring your Business Hosting experience is swift and stress-free."
          buttonText="Explore Plans"
          buttonLink="/plans"
          imageSrc={BigCard5}
          imageAlt="Card Image"
          reversecard={true}
        />
      </div>
      <Testimonials />
      <MapSection />
      <Cta />
      <FAQ />
    </section>
  )
}

export default page