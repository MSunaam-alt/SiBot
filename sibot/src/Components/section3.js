import Badge from "./badge";

export default function Section3() {
  return (
    <>
      <section className="mt-20 grid grid-cols-6 gap-6">
        <div className="row-span-2 col-span-4 rounded-xl p-10 bg-secondary text-white flex">
          <div className="flex flex-col ">
            <Badge text={"OVERVIEW"} />
            <h1 className="text-2xl font-bold  mt-2">Welcome to SiBot</h1>
            <p className=" ">An overview of Pulsar benefits</p>
            <div className="flex w-full ">
              <div className="flex flex-col  mt-10 gap-4 ">
                <h3 className="text-2xl font-bold">
                  Tailored Onboarding and Support
                </h3>
                <p className="text-left">
                  Offer comprehensive onboarding programs that include
                  personalized setup assistance, training sessions, and detailed
                  documentation
                </p>
              </div>
            </div>
          </div>
          <img src="/baji.png" alt="baji" className="w-[200px]" />
        </div>
        <div className="flex flex-col col-span-2 pt-10 items-center justify-center p-6 bg-red text-white h-full rounded-xl row-span-2">
          <img src="/col-2-row-1.png" alt="Img" />
          <p className="text-xs uppercase font-medium text-left w-full mt-10">
            Seamless Integration
          </p>
          <p className="font-bold">
            Develop and provide easy-to-use APIs and SDKs to ensure that SiBot
            can be effortlessly integrated into existing websites, mobile apps
            etc
          </p>
          <div className="w-full mt-2">
            <button className="transition-all duration-300 ease-in-out rounded-full px-3 py-1 border border-white hover:text-red hover:bg-white">
              Read More
            </button>
          </div>
        </div>
        <div className="col-span-3 row-span-1 rounded-xl p-10 bg-red text-white flex flex-col">
          <p className="text-xs uppercase font-medium text-left w-full mt-10">
            Customizable and Scalable Solutions
          </p>
          <p className="font-bold">
            Design SiBot to be highly customizable, allowing businesses to
            tailor the chatbot's responses, personality, and functionalities to
            match their specific needs.
          </p>
        </div>
        <div className="col-span-3 row-span-1 rounded-xl p-10 bg-secondary text-white flex flex-col">
          <p className="text-xs uppercase font-medium text-left w-full mt-10">
            MOBILE
          </p>
          <p className="font-bold">
            Fast and supreme support 24/7 all year around for your company
          </p>
        </div>
      </section>
    </>
  );
}
