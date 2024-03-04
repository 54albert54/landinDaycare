import { useEffect, useState } from "react";

const navbarLinks = [
  
  {
    name: "Declaraciones",
    path: "#declaración",
  },
  {
    name: "Matriculas",
    path: "#matricula",
  },
  {
    name: "Operaciones",
    path: "#operaciones",
  },
  {
    name: "Galería",
    path: "#galería",
  },
  {
    name: "Contactos",
    path: "#footer",
  },
];


const NavbarReact = () => {
  const [stickyClass, setStickyClass] = useState('relative');
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
  
    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);
  
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 50 ? setStickyClass('fixed top-0 left-0 z-50 bg-gray-200/50 ') : setStickyClass('fixed text-white  bg-mainColor');
    }
  };
  return (
    // menu desktop
    <header className={`  sm:w-full z-50 ease-in font-semibold ${stickyClass}`} >
      <nav aria-label="Global" className="hidden sm:block ">
        <div className="mx-auto flex justify-between h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <a href="#home">
          <img className="size-20" src='../../logo.png' alt="logo.png" />
          </a>
          <nav>
            <ul className="flex items-center gap-6 text-sm">
              {navbarLinks.map((link) => (
                <li className="my-6 text-xl " key={link.name}>
                  <a href={link.path}>{link.name}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </nav>
      {/* menu mobile */}
      <nav className="fixed bg-mainColor w-screen z-30 top-0 sm:hidden flex justify-between px-6 h-12 items-center shadow-2xl">
      <a href="#home">
      <img className="size-10" src='../../logo.png' alt="logo.png" />
      </a>
        {showMenu && (
          <section className="absolute left-0 top-12 h-screen bg-mainWhite w-full z-20">
            <ul className="ml-6 pt-11">
              {navbarLinks.map((link) => (
                <li
                  onClick={() => setShowMenu(false)}
                  className="my-6 text-xl font-semibold"
                  key={link.name}
                >
                  <a href={link.path}>{link.name}</a>
                </li>
              ))}
            </ul>
          </section>
        )}
        <div
          onClick={() => setShowMenu((state) => !state)}
          className=" border border-black p-2 rounded-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </nav>
    </header>
  );
};

export default NavbarReact;



