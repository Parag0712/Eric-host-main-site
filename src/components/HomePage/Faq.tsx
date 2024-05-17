import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import faq from '../../data/HomePage/faq.json'

export const FAQ = () => {
    return (
        <section
            id="faq"
            className="container py-20  md:pb-32 "
        >
            <h2 className="text-3xl md:text-4xl lg:text-[3rem] lg:leading-[3.7rem] font-bold  text-center">
                Frequently Asked{" "}
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                    Questions
                </span>
            </h2>

            <Accordion
                type="single"
                collapsible
                className="w-full mt-10"
            >
                {faq.faq.map(({ question, answer, value }: any, idx) => (
                    <AccordionItem
                        key={idx}
                        value={value}
                        className=" my-4 border-[#C7C7C7] border-[1px] rounded-lg  "
                    >
                        <AccordionTrigger className="text-left text-[#061C3D] text-[14px] sm:text-[16px] px-4 hover:no-underline  font-poppins" >
                            {question}
                        </AccordionTrigger>

                        <AccordionContent  className="font-poppins text-[#061C3D] text-[14px] sm:text-[16px] px-5">{answer}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>

            <h3 className="font-medium mt-4">
                Still have questions?{" "}
                <a
                    rel="noreferrer noopener"
                    href="/contact"
                    className="text-primary transition-all border-primary hover:border-b-2"
                >
                    Contact us
                </a>
            </h3>
        </section>
    );
};