import { Button } from "../ui/button";

export const Cta = () => {
  return (
    <section
      id="cta"
      className="bg-muted/50 py-12  bg-primary text-white"
    >
      <div className="container flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="lg:col-start-1">
          <h2 className="text-2xl md:text-3xl text-center lg:text-4xl font-bold ">
           Get
            <span className="bg-gradient-to-b from-black/60 to-black text-transparent bg-clip-text">
              {" "}
              20X {" "}
            </span>Ultra Fast Hosting Plan With Erichost
          </h2>

        </div>
          <Button
            variant="outline" 
            className=" text-[18px] text-black py-6 px-8 w-full md:w-auto max-w-[200px]"
          >Get Started Now 
          </Button>
        </div>
    </section>
  );
};