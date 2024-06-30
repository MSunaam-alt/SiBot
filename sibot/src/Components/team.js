import Badge from "./badge";
import TeamDiv from "./teamdiv";

export default function Team() {
  const team = [
    {
      name: "Dr. Sohail Iqbal",
      title: "PI & CEO",
      img: "/dr sohail iqbal.jpg",
    },
    {
      name: "Dr. Qurat ul Ain",
      title: "Team Lead & Scientist",
      img: "/dr qurat ul ain.jpg",
    },
    {
      name: "Mr. Khizer Tariq",
      title: "CTO & Developer",
      img: "/khizer.jpg",
    },
    {
      name: "Mr. Ali Awais Safdar",
      title: "CPO & Developer",
      img: "/ali.jpg",
    },
  ];
  return (
    <>
      <section className="mt-20 container mx-auto flex flex-col gap-5 items-start justify-center">
        <Badge text={"Team"} />
        <h1 className="text-3xl font-bold">Our Talented People</h1>
        <p className="w-2/4 text-[#939394]">
          We bring ideas to life by combining years of experiences of our
          talented team.
        </p>
        <div className="grid grid-cols-4 gap-10 w-full">
          {team.map((member, idx) => {
            return (
              <TeamDiv
                idx={idx}
                img={member.img}
                title={member.title}
                name={member.name}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
