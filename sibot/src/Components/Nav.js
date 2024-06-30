export default function Nav() {
  const links = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About us",
      url: "#about-us",
    },
    {
      name: "Services",
      url: "#services",
    },
    {
      name: "FAQs",
      url: "#faqs",
    },
  ];
  const pathname = window.location.pathname;
  console.log(pathname);
  return (
    <>
      <nav className="w-full flex items-center justify-between h-20">
        <div className="font-bold text-2xl tracking-wide">
          <span className="text-red">Si</span>bot.
        </div>
        <div className="flex gap-4 items-center">
          <ul className="flex gap-4 text-[#312F2F] text-base">
            {links.map((link, id) => {
              return (
                <li
                  key={id}
                  className="hover:text-red transition-all duration-300 ease-in-out"
                >
                  <a href={link.url}>{link.name}</a>
                </li>
              );
            })}
          </ul>
          <button className="pl-5 pr-1 py-1 bg-red rounded-full flex items-center justify-end gap-3 text-white border-2 border-transparent hover:border-2 hover:border-red hover:text-red hover:bg-white group transition-all duration-300 ease-in-out">
            Contact Us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 49 49"
              fill="none"
              className="group-hover:fill-red"
            >
              <path
                d="M49 24.5C49 30.9978 46.4188 37.2295 41.8241 41.8241C37.2295 46.4188 30.9978 49 24.5 49C21.2826 49 18.0967 48.3663 15.1243 47.1351C12.1518 45.9038 9.45092 44.0992 7.17588 41.8241C2.58124 37.2295 0 30.9978 0 24.5C0 18.0022 2.58124 11.7705 7.17588 7.17588C11.7705 2.58124 18.0022 0 24.5 0C27.7174 0 30.9033 0.633711 33.8757 1.86495C36.8482 3.09619 39.5491 4.90085 41.8241 7.17588C44.0992 9.45092 45.9038 12.1518 47.1351 15.1243C48.3663 18.0967 49 21.2826 49 24.5ZM9.8 26.95H29.4L20.825 35.525L24.304 39.004L38.808 24.5L24.304 9.996L20.825 13.475L29.4 22.05H9.8V26.95Z"
                fill="#FFFFFF"
                className="group-hover:fill-red transition-all duration-500 ease-in-out"
              />
            </svg>
          </button>
        </div>
      </nav>
    </>
  );
}
