import Badge from "./badge";

export default function Hero() {
  return (
    <>
      <section className="flex gap-5 mt-20 justify-center w-full ">
        {/* Section 1 */}
        <div className="w-3/4 relative flex flex-col justify-between ">
          <div className="absolute bottom-0 left-0 right-0 top-[60%] rounded-lg bg-secondary z-0"></div>

          <div className="w-3/4 flex flex-col gap-5">
            <h1 className="text-5xl font-bold  ">15x Faster</h1>
            <p className="text-[#0F1412] text-base">
              Let’s build your next automated AI-Powered ChatBot for Customer
              Support
            </p>
          </div>
          <div className="flex  gap-4 items-end justify-end z-10 relative border">
            <div className="mb-20 w-1/2 text-white p z-10 relative top-3">
              <h2 className="font-bold">Small Business</h2>
              <p className="font-medium">See how can we help your business</p>
              <button className="font-medium underline">Learn more</button>
            </div>
            <div className="absolute bottom-0 right-0 z-0">
              <img src="/hero1.png" alt="Hero Image" className="object-cover" />
            </div>
          </div>
        </div>
        {/* Section 2 */}
        <div className="w-full flex flex-col gap-10 relative">
          <div className="absolute bottom-0 left-0 right-0 top-[60%] rounded-lg bg-bisque z-0"></div>
          <div className="flex flex-col gap-4 relative z-10">
            <Badge text={"Business"} />
            <h1 className="text-7xl font-[500] text-[#312F2F]">
              Grow Your Business With Our Help
            </h1>
          </div>
          <div className="flex gap-4 items-center justify-center  z-10">
            <div className="pt-20 w-3/4 pl-5">
              <h2 className="font-bold">
                Enhanced Customer Support Efficiency
              </h2>
              <p className="">
                SiBot's AI-powered chatbots can handle a high volume of
                customers quickly, thus significantly reducing wait times and
                improving overall customer satisfaction
              </p>
              <button className="font-medium underline">Learn more</button>
            </div>
            <div className="w-[200px]">
              <img src="/hero2.png" alt="Hero Image" className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
