import { InfiniteMovingCards } from '../ui/infinite-moving-cards'
import testimonials from "../../data/HomePage/testimonials.json";
import NewTestimonials from './NewTestimonials';

type Props = {}

const Testimonial = (props: Props) => {
    return (
        <section
            className="w-full bg-[#4346C2] mt-7 md:mt-0  mx-auto"
        >
            <div className="hidden h-[20rem] sm:h-[25rem] rounded-md  flex-col antialiased  dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={testimonials.testimonials}
                    direction="right"
                    speed="slow"
                />
               
            </div>
            <NewTestimonials 
                    testimonials={testimonials.testimonials}

                ></NewTestimonials>
        </section>
    )
}

export default Testimonial