import { useState } from "react";
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  Calculator,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [healthOpen, setHealthOpen] = useState(false);

  const whatsappLink = "https://wa.me/923329671650";

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/#services" },
    { name: "Doctor", path: "/#doctor" },
    { name: "Blog", path: "/#blog" },
    { name: "Reviews", path: "/#reviews" },
    { name: "Contact Us", path: "/contact-us" },
    { name: "FAQs", path: "/#faqs" },
  ];

  const healthTools = [
    {
      name: "BMI Calculator",
      path: "/health-tools/bmi-calculator",
    },
    {
      name: "Ideal Body Weight",
      path: "/health-tools/ideal-body-weight-calculator",
    },
    {
      name: "Daily Calorie Needs",
      path: "/health-tools/daily-calorie-calculator",
    },
    {
      name: "Weight Loss Journey",
      path: "/health-tools/weight-loss-journey",
    },
  ];

  const closeMenu = () => {
    setIsOpen(false);
    setHealthOpen(false);
  };

  const linkClass = ({ isActive }) =>
    `whitespace-nowrap text-[14px] font-medium transition-colors duration-200 ${
      isActive
        ? "text-[#087F8C]"
        : "text-slate-700 hover:text-[#087F8C]"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-[100] border-b border-slate-200/80 bg-white/95 shadow-[0_4px_24px_rgba(15,40,50,0.06)] backdrop-blur-xl">
      <nav className="mx-auto max-w-[1440px] px-4 sm:px-6 xl:px-10">
        <div className="flex min-h-[88px] items-center justify-between gap-5">
          {/* Logo and Doctor Name */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex min-w-0 shrink-0 items-center gap-3"
          >
            <img
              src={logo}
              alt="Dr. Junaid Mustafa"
              className="h-12 w-auto max-w-[76px] object-contain sm:h-14"
            />

            <span className="block min-w-0">
              <span className="block whitespace-nowrap text-[15px] font-bold leading-tight tracking-[-0.4px] text-slate-900 sm:text-[17px]">
                Dr. Junaid Mustafa
              </span>

              <span className="mt-1 block whitespace-nowrap text-[10px] font-medium tracking-wide text-slate-500 sm:text-[11px]">
                MBBS, FCPS (Medicine)
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-5 lg:flex xl:gap-6">
            {navLinks.slice(0, 4).map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === "/"}
                className={linkClass}
              >
                {link.name}
              </NavLink>
            ))}

            {/* Health Tools Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setHealthOpen(true)}
              onMouseLeave={() => setHealthOpen(false)}
            >
              <div className="flex items-center gap-1">
                <Link
                  to="/#health-tools"
                  onClick={() => setHealthOpen(false)}
                  className="whitespace-nowrap text-[14px] font-medium text-slate-700 transition hover:text-[#087F8C]"
                >
                  Health Tools
                </Link>

                <button
                  type="button"
                  onClick={() =>
                    setHealthOpen((prev) => !prev)
                  }
                  aria-label="Open health tools menu"
                  aria-expanded={healthOpen}
                  className="text-slate-700 transition hover:text-[#087F8C]"
                >
                  <ChevronDown
                    size={15}
                    className={`transition-transform ${
                      healthOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {healthOpen && (
                <div className="absolute right-0 top-full w-64 pt-4">
                  <div className="overflow-hidden rounded-xl border border-slate-100 bg-white p-2 shadow-[0_16px_45px_rgba(15,40,50,0.14)]">
                    {healthTools.map((tool) => (
                      <Link
                        key={tool.path}
                        to={tool.path}
                        onClick={closeMenu}
                        className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-slate-700 transition hover:bg-teal-50 hover:text-[#087F8C]"
                      >
                        <Calculator size={16} />
                        {tool.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navLinks.slice(4).map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={linkClass}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop WhatsApp Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            className="hidden shrink-0 items-center gap-2 rounded-lg bg-[#087F8C] px-4 py-3 text-sm font-semibold text-white shadow-md shadow-teal-900/10 transition hover:bg-[#066975] xl:flex"
          >
            <Phone size={17} />
            <span>+92 332 9671650</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => {
              setIsOpen((prev) => !prev);
              setHealthOpen(false);
            }}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:bg-teal-50 lg:hidden"
            aria-label={
              isOpen ? "Close navigation" : "Open navigation"
            }
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="max-h-[75vh] overflow-y-auto border-t border-slate-100 bg-white py-3 lg:hidden">
            <div className="flex flex-col">
              {navLinks.slice(0, 4).map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={closeMenu}
                  className="border-b border-slate-100 px-3 py-3.5 text-sm font-medium text-slate-700 transition hover:text-[#087F8C]"
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile Health Tools Dropdown */}
              <div className="border-b border-slate-100">
                <div className="flex items-center justify-between px-3 py-3.5">
                  <Link
                    to="/#health-tools"
                    onClick={closeMenu}
                    className="text-sm font-medium text-slate-700 hover:text-[#087F8C]"
                  >
                    Health Tools
                  </Link>

                  <button
                    type="button"
                    onClick={() =>
                      setHealthOpen((prev) => !prev)
                    }
                    aria-label="Toggle health tools"
                    aria-expanded={healthOpen}
                    className="text-slate-700 hover:text-[#087F8C]"
                  >
                    <ChevronDown
                      size={17}
                      className={`transition-transform ${
                        healthOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                {healthOpen && (
                  <div className="pb-2 pl-4">
                    {healthTools.map((tool) => (
                      <Link
                        key={tool.path}
                        to={tool.path}
                        onClick={closeMenu}
                        className="flex items-center gap-2 rounded-lg px-3 py-3 text-sm text-slate-600 hover:bg-teal-50 hover:text-[#087F8C]"
                      >
                        <Calculator size={15} />
                        {tool.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {navLinks.slice(4).map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={closeMenu}
                  className="border-b border-slate-100 px-3 py-3.5 text-sm font-medium text-slate-700 transition hover:text-[#087F8C]"
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile WhatsApp Button */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
                className="mx-3 mt-4 flex items-center justify-center gap-2 rounded-lg bg-[#087F8C] px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-[#066975]"
              >
                <Phone size={17} />
                +92 332 9671650
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;