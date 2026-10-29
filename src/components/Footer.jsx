import { Link } from "react-router-dom";
import {  MapPin, Clock3 } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaLinkedinIn,
  FaSnapchatGhost,
  FaWhatsapp,
} from "react-icons/fa";

import logo from "../assets/logo.png";

function Footer() {
  const socialLinks = [
    {
      name: "Facebook",
      icon: <FaFacebookF size={13} />,
      href: "https://www.facebook.com/share/1BmQMUyqYG/",
    },
    { name: "Instagram", icon: <FaInstagram size={14} />, href: "#" },
    { name: "TikTok", icon: <FaTiktok size={13} />, href: "#" },
    { name: "Twitter", icon: <FaTwitter size={13} />, href: "#" },
    { name: "LinkedIn", icon: <FaLinkedinIn size={13} />, href: "#" },
    { name: "Snapchat", icon: <FaSnapchatGhost size={14} />, href: "#" },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp size={14} />,
      href: "https://wa.me/923329671650",
    },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/specialties" },
    {
      name: "Doctor",
      path: "/doctor-details/dr-abdel-mohsen-madkour/en",
    },
    { name: "Blog", path: "/blog" },
    {
      name: "Health Tools",
      path: "/health-tools/bmi-calculator",
    },
    { name: "Reviews", path: "/#reviews" },
    { name: "FAQs", path: "/faqs" },
  ];

  return (
    <footer className="bg-[#103f4d] text-white">
      <div className="mx-auto max-w-[1200px] px-6 pb-8 pt-10 sm:px-8 sm:pt-12">
        {/* Four-column layout from the PDF */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr_1.15fr] lg:gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-2.5">
              <img
                src={logo}
                alt="Dr. Junaid Mustafa"
                className="h-10 w-10 rounded-full bg-white object-contain"
              />

              <div>
                <h3 className="text-[13px] font-bold leading-5 text-white">
                  Dr. Junaid Mustafa
                </h3>
                <p className="text-[10px] text-[#d1e0e4]">
                  MBBS, FCPS (Medicine)
                </p>
              </div>
            </Link>

            <p className="mt-3 text-xs leading-5 text-[#d1e0e4]">
              Metabolic Health. Better Life.
            </p>

            <p className="mt-2 max-w-[240px] text-xs leading-5 text-[#c2d5da]">
              Online video consultation across Pakistan.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  target={social.href === "#" ? undefined : "_blank"}
                  rel={social.href === "#" ? undefined : "noreferrer"}
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 text-[#d1e0e4] transition duration-300 hover:border-[#f1c744] hover:bg-[#f1c744] hover:text-[#103f4d]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold text-white">Quick Links</h3>

            <div className="mt-3 space-y-1.5">
              {quickLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block w-fit text-[11px] leading-[17px] text-[#d1e0e4] transition hover:text-[#f1c744]"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold text-white">Contact</h3>

            <div className="mt-3 space-y-2">
              <a
                href="tel:+923329671650"
                className="block text-[11px] leading-[17px] text-[#d1e0e4] transition hover:text-[#f1c744]"
              >
                +92 332 9671650
              </a>

              <a
                href="tel:+923056798529"
                className="block text-[11px] leading-[17px] text-[#d1e0e4] transition hover:text-[#f1c744]"
              >
                +92 305 6798529
              </a>

              <a
                href="tel:+923485928797"
                className="block text-[11px] leading-[17px] text-[#d1e0e4] transition hover:text-[#f1c744]"
              >
                +92 348 5928797
              </a>

              <p className="flex items-start gap-1.5 text-[11px] leading-[17px] text-[#d1e0e4]">
                <Clock3 size={12} className="mt-0.5 shrink-0" />
                Mon to Sat, 10:00 AM to 02:00 PM
              </p>
            </div>
          </div>

          {/* Clinics */}
          <div>
            <h3 className="text-xs font-bold text-white">Clinics</h3>

            <div className="mt-3 space-y-3">
              <div>
                <p className="text-[11px] leading-[17px] text-[#d1e0e4]">
                  Islamabad Specialists Clinic, Rahim Yar Khan
                </p>
              </div>

              <div>
                <p className="text-[11px] leading-[17px] text-[#d1e0e4]">
                  Dr. Junaid Mustafa Metabolic Clinic, Sadiqabad
                </p>
              </div>

              <div className="flex items-start gap-1.5">
                <MapPin
                  size={12}
                  className="mt-0.5 shrink-0 text-[#f1c744]"
                />
                <p className="text-[11px] leading-[17px] text-[#d1e0e4]">
                  Online video consultation all over Pakistan
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright — like the reference */}
        <div className="mt-8 border-t border-white/15 pt-4 text-center">
          <p className="text-[10px] leading-5 text-[#c2d5da]">
            © {new Date().getFullYear()} Dr. Junaid Mustafa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;