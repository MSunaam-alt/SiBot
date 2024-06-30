import { IconContext } from "react-icons";
import Badge from "./badge";
import { MdSubscriptions } from "react-icons/md";
import { GrIntegration } from "react-icons/gr";
import { IoAnalytics } from "react-icons/io5";

export default function Section2() {
  const content = [
    {
      icon: (
        <IconContext.Provider value={{ size: "1.5rem" }}>
          <MdSubscriptions />
        </IconContext.Provider>
      ),
      title: "Subscriptions",
      content:
        "SiBot offers tiered subscription plans based on the number of interactions, features, and support levels",
      button: "Learn More",
    },
    {
      icon: (
        <IconContext.Provider value={{ size: "1.5rem" }}>
          <GrIntegration />
        </IconContext.Provider>
      ),
      title: "Customization and Integration Services",
      content:
        "In addition to the standard chatbot solutions, SiBot provides custom development and integration services",
      button: "Learn More",
    },
    {
      icon: (
        <IconContext.Provider value={{ size: "1.5rem" }}>
          <IoAnalytics />
        </IconContext.Provider>
      ),
      title: "Analytics and Insights Add-Ons",
      content:
        "SiBot offers advanced analytics and insights as an additional service",
      button: "Learn More",
    },
  ];

  return (
    <>
      <section className="mt-20 gap-4 px-10 py-20 bg-secondary rounded-xl text-white flex flex-col items-start justify-center">
        <Badge text={"Intro"} />
        <h2 className="text-3xl w-1/2">
          Explore SiBot your personal AI-Powered Customer Feedback Expert
        </h2>
        <p className="text-xl w-1/2">As easy as just double clicking</p>
        <div className="flex justify-between mt-10">
          {content.map((d, id) => {
            return (
              <div className="flex flex-col w-1/2 gap-4 px-10">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red ">
                  {d.icon}
                </div>
                <h4 className="font-bold text-lg">{d.title}</h4>
                <p className="text-[#939394]">{d.content}</p>
                <button className="underline font-semibold text-left text-sm">
                  {d.button}
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
