import Container from '../General/Container'
import { InfiniteMovingCards } from '../ui/infinite-moving-cards'
import testimonials from "../../data/HomePage/testimonials.json";

type Props = {}

const Testimonials = (props: Props) => {
    return (
        <section
            className="w-full bg-[#4346C2] "
        >
            <div className="h-[20rem] sm:h-[25rem] rounded-md flex flex-col antialiased  dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={testimonials.testimonials}
                    direction="right"
                    speed="slow"
                />
            </div>
        </section>
    )
}

export default Testimonials