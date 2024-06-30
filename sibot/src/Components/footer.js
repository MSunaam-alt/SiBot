export default function Footer() {
  return (
    <>
      <footer className="bg-secondary py-20 mt-20 text-white">
        <div className="container mx-auto px-20">
          <h1>
            <div className="font-bold text-white text-2xl tracking-wide">
              <span className="text-red">Si</span>bot.
            </div>
          </h1>
          <div className="grid grid-cols-6 mt-5 justify-items-stretch">
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-bold">Company</h3>
              <ul>
                <li className="transition-all duration-300 ease-in-out hover:text-red">
                  <a href="">Home</a>
                </li>
                <li className="transition-all duration-300 ease-in-out hover:text-red">
                  <a href="">About us</a>
                </li>
                <li className="transition-all duration-300 ease-in-out hover:text-red">
                  <a href="">Services</a>
                </li>
                <li className="transition-all duration-300 ease-in-out hover:text-red">
                  <a href="">FAQs</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-bold">Pages</h3>
              <ul>
                <li className="transition-all duration-300 ease-in-out hover:text-red">
                  <a href="">404</a>
                </li>
                <li className="transition-all duration-300 ease-in-out hover:text-red">
                  <a href="">Licensing</a>
                </li>
                <li className="transition-all duration-300 ease-in-out hover:text-red">
                  <a href="">Instructions</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-bold">Inquiries</h3>
              <ul>
                <li className="transition-all duration-300 ease-in-out hover:text-red">
                  <a href="mailto:msunaam2002@gmail.com">hello@website.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
