
import {
  Activity,
  Baby,
  Bone,
  Brain,
  ChevronLeft,
  ChevronRight,
  CircleDot,
  Ear,
  HeartPulse,
  Move,
  ScanLine,
  Scissors,
  Smile,
  Stethoscope,
  Syringe,
  VenusAndMars,
  Waves,
  ArrowRight,
  Search,
  ShieldCheck,
} from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Specialties() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const filterRef = useRef(null);

  const filters = [
    "All",
    "Family Medicine",
    "Dental",
    "Pediatric",
    "General Practitioner",
    "Dermatology",
    "ENT",
    "Internal Medicine",
    "Orthopedic",
    "Radiology",
    "Plastic Surgery",
    "Cardiology",
    "Gastroenterology",
    "Obstetrics and Gynecology",
    "Psychology and Psychiatry",
    "Pediatric Dentistry",
    "Laser",
    "General Surgery",
    "Urology",
    "Physiotherapy",
  ];

  const specialties = [
    {
      name: "Physiotherapy",
      category: "Physiotherapy",
      icon: Move,
      description:
        "Supporting recovery, relieving pain and improving mobility through personalized rehabilitation.",
    },
    {
      name: "Laser",
      category: "Laser",
      icon: Waves,
      description:
        "Advanced laser treatments for skin renewal, hair removal and selected aesthetic concerns.",
    },
    {
      name: "Pediatric Dentistry",
      category: "Pediatric Dentistry",
      icon: Smile,
      description:
        "Specialized dental care for infants, children and adolescents in a comfortable environment.",
    },
    {
      name: "Plastic Surgery",
      category: "Plastic Surgery",
      icon: Scissors,
      description:
        "Reconstructive and cosmetic procedures focused on safety, precision and natural results.",
    },
    {
      name: "Psychology and Psychiatry",
      category: "Psychology and Psychiatry",
      icon: Brain,
      description:
        "Professional psychological and psychiatric care supporting emotional and mental wellbeing.",
    },
    {
      name: "Dental",
      category: "Dental",
      icon: Smile,
      description:
        "Comprehensive dental care covering preventive, restorative and cosmetic treatments.",
    },
    {
      name: "Urology",
      category: "Urology",
      icon: Activity,
      description:
        "Diagnosis and treatment for urinary system and male reproductive health conditions.",
    },
    {
      name: "General Surgery",
      category: "General Surgery",
      icon: Scissors,
      description:
        "Expert surgical treatment using modern techniques with patient safety and recovery in mind.",
    },
    {
      name: "Cardiology",
      category: "Cardiology",
      icon: HeartPulse,
      description:
        "Specialized cardiovascular care for diagnosis, prevention and treatment of heart conditions.",
    },
    {
      name: "Dermatology",
      category: "Dermatology",
      icon: CircleDot,
      description:
        "Medical and aesthetic care for a wide range of skin, hair and nail conditions.",
    },
    {
      name: "Obstetrics and Gynecology",
      category: "Obstetrics and Gynecology",
      icon: VenusAndMars,
      description:
        "Comprehensive women's healthcare including reproductive, pregnancy and gynecological care.",
    },
    {
      name: "Gastroenterology",
      category: "Gastroenterology",
      icon: Syringe,
      description:
        "Specialized care for digestive system conditions involving the stomach, liver and intestines.",
    },
    {
      name: "Radiology",
      category: "Radiology",
      icon: ScanLine,
      description:
        "Advanced diagnostic imaging supporting accurate diagnosis and effective treatment planning.",
    },
    {
      name: "Orthopedic",
      category: "Orthopedic",
      icon: Bone,
      description:
        "Diagnosis and treatment of bone, joint, muscle and movement-related conditions.",
    },
    {
      name: "Internal Medicine",
      category: "Internal Medicine",
      icon: Stethoscope,
      description:
        "Comprehensive adult medical care for complex and chronic health conditions.",
    },
    {
      name: "ENT",
      category: "ENT",
      icon: Ear,
      description:
        "Specialized treatment for ear, nose and throat conditions in children and adults.",
    },
    {
      name: "Family Medicine",
      category: "Family Medicine",
      icon: Stethoscope,
      description:
        "Primary healthcare for individuals and families across all stages of life.",
    },
    {
      name: "General Medicine",
      category: "General Practitioner",
      icon: Stethoscope,
      description:
        "First-line medical care for common illnesses, health concerns and routine checkups.",
    },
    {
      name: "Pediatric",
      category: "Pediatric",
      icon: Baby,
      description:
        "Compassionate healthcare for infants, children and adolescents.",
    },
  ];

  const filteredSpecialties = useMemo(() => {
    return specialties.filter((item) => {
      const matchesFilter =
        activeFilter === "All" || item.category === activeFilter;

      const matchesSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchTerm]);

  const scrollFilters = (direction) => {
    if (!filterRef.current) return;

    filterRef.current.scrollBy({
      left: direction === "left" ? -350 : 350,
      behavior: "smooth",
    });
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f3f8fb] pt-[104px] text-[#173d4a]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#104f63]">
        <div className="pointer-events-none absolute -right-36 -top-40 h-[450px] w-[450px] rounded-full bg-[#277a8b]/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-36 h-[400px] w-[400px] rounded-full bg-[#082f40]/60 blur-3xl" />

        <div className="relative mx-auto flex min-h-[390px] max-w-[1400px] items-center justify-center px-5 py-20 text-center sm:px-8 sm:py-24 lg:min-h-[440px]">
          <div className="max-w-[850px]">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2">
              <ShieldCheck size={15} className="text-[#e9c957]" />
              <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#f0d36f]">
                Quality Healthcare
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Our Medical{" "}
              <span className="text-[#e9c957]">Specialties</span>
            </h1>

            <p className="mx-auto mt-5 max-w-[720px] text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
              Discover our range of medical specialties and find the right
              care for your needs. Our focus is on compassionate service,
              professional expertise and patient wellbeing.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/contact-us"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#e9c957] px-7 py-3 text-sm font-bold text-[#123d4b] transition hover:-translate-y-0.5 hover:bg-[#f5dd80]"
              >
                Book Your Consultation
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/doctors"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white/40 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Meet Our Doctors
                <ChevronRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SPECIALTIES */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1300px]">
          <div className="mx-auto max-w-[760px] text-center">
            <p className="text-[10px] font-bold uppercase tracking-[2.5px] text-[#a28b35]">
              Explore Our Services
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-[#153d4b] sm:text-4xl">
              Specialised Care, Tailored to You
            </h2>

            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#e9c957]" />

            <p className="mt-5 text-sm leading-7 text-[#71858e] sm:text-base">
              Browse our specialties to explore the services available and
              find the care that suits your needs.
            </p>
          </div>

          {/* SEARCH */}
          <div className="mx-auto mt-9 max-w-[520px]">
            <div className="flex h-[50px] items-center gap-3 rounded-full border border-[#dfe9ed] bg-white px-5 shadow-sm transition focus-within:border-[#155c71] focus-within:ring-2 focus-within:ring-[#155c71]/10">
              <Search size={18} className="shrink-0 text-[#155c71]" />
              <input
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search medical specialties..."
                aria-label="Search medical specialties"
                className="w-full bg-transparent text-sm text-[#173d4a] outline-none placeholder:text-[#8a9da5]"
              />
            </div>
          </div>

          {/* FILTER CAROUSEL */}
          <div className="relative mt-8">
            <button
              type="button"
              onClick={() => scrollFilters("left")}
              aria-label="Scroll filters left"
              className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-x-1/3 -translate-y-1/2 items-center justify-center rounded-full border border-[#dfe9ed] bg-white text-[#155c71] shadow-md transition hover:bg-[#155c71] hover:text-white sm:h-11 sm:w-11"
            >
              <ChevronLeft size={19} />
            </button>

            <div
              ref={filterRef}
              className="flex gap-2.5 overflow-x-auto scroll-smooth px-5 py-3 sm:gap-3"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {filters.map((filter) => {
                const isActive = activeFilter === filter;

                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    aria-pressed={isActive}
                    className={`shrink-0 whitespace-nowrap rounded-full border px-5 py-2.5 text-xs font-semibold transition-all duration-200 ${
                      isActive
                        ? "border-[#155c71] bg-[#155c71] text-white shadow-[0_5px_15px_rgba(21,92,113,0.18)]"
                        : "border-[#dce7eb] bg-white text-[#506c77] hover:border-[#155c71] hover:text-[#155c71]"
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => scrollFilters("right")}
              aria-label="Scroll filters right"
              className="absolute right-0 top-1/2 z-10 flex h-10 w-10 translate-x-1/3 -translate-y-1/2 items-center justify-center rounded-full border border-[#dfe9ed] bg-white text-[#155c71] shadow-md transition hover:bg-[#155c71] hover:text-white sm:h-11 sm:w-11"
            >
              <ChevronRight size={19} />
            </button>
          </div>

          {/* RESULT COUNT */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-[#71858e]">
              Showing{" "}
              <span className="font-bold text-[#155c71]">
                {filteredSpecialties.length}
              </span>{" "}
              {filteredSpecialties.length === 1 ? "specialty" : "specialties"}
            </p>

            {(activeFilter !== "All" || searchTerm) && (
              <button
                type="button"
                onClick={() => {
                  setActiveFilter("All");
                  setSearchTerm("");
                }}
                className="text-xs font-bold text-[#155c71] underline underline-offset-4"
              >
                Clear filters
              </button>
            )}
          </div>

          {/* SPECIALTY CARDS */}
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredSpecialties.map((specialty) => {
              const Icon = specialty.icon;

              return (
                <article
                  key={specialty.name}
                  className="group flex min-h-[270px] flex-col rounded-2xl border border-[#e3edf1] bg-white p-6 shadow-[0_4px_18px_rgba(17,63,78,0.025)] transition duration-300 hover:-translate-y-1 hover:border-[#c9e0e8] hover:shadow-[0_14px_35px_rgba(17,63,78,0.09)] sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-[54px] w-[54px] items-center justify-center rounded-2xl bg-[#eaf4f7] text-[#155c71] transition duration-300 group-hover:bg-[#155c71] group-hover:text-white">
                      <Icon size={26} strokeWidth={1.7} />
                    </div>

                    <span className="text-xs font-bold tracking-wider text-[#d0b54b]">
                      MEDICAL
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-bold leading-snug text-[#173d4a] transition-colors group-hover:text-[#155c71]">
                    {specialty.name}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-6 text-[#71858e]">
                    {specialty.description}
                  </p>

                  <div className="mt-5 border-t border-[#edf2f4] pt-4">
                    <Link
                      to="/contact-us"
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#155c71] transition-all group-hover:gap-3"
                    >
                      Enquire About This Service
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          {filteredSpecialties.length === 0 && (
            <div className="mt-8 rounded-2xl border border-[#e3edf1] bg-white px-5 py-16 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#eaf4f7] text-[#155c71]">
                <Search size={24} />
              </div>
              <h3 className="mt-4 text-lg font-bold text-[#173d4a]">
                No specialties found
              </h3>
              <p className="mt-2 text-sm text-[#71858e]">
                Try a different search term or choose another category.
              </p>
              <button
                type="button"
                onClick={() => {
                  setActiveFilter("All");
                  setSearchTerm("");
                }}
                className="mt-5 rounded-full bg-[#155c71] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#10495b]"
              >
                View All Specialties
              </button>
            </div>
          )}
        </div>
      </section>

    
      <section className="bg-white px-5 py-14 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-7 rounded-3xl bg-[#104f63] p-7 sm:p-10 md:flex-row md:items-center lg:p-12">
          <div className="max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#f0d36f]">
              Your Health Comes First
            </p>

            <h2 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl">
              Find the right care for your needs.
            </h2>

            <p className="mt-3 text-sm leading-7 text-white/75">
              Contact our team to enquire about services or arrange your
              consultation.
            </p>
          </div>

          <Link
            to="/contact-us"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-full bg-[#e9c957] px-7 py-3 text-sm font-bold text-[#123d4b] transition hover:bg-[#f5dd80]"
          >
            Contact Us
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Specialties;
