import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Languages,
  Search,
  UserRound,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import doctor from "../assets/doctor.png";

const doctors = [
  {
    name: "Dr. Ayman Ahmed Foad Gadkarim",
    specialty: "General Practitioner",
    languages: "Arabic, English",
    experience: "10+ Years",
    image:
      "https://www.adminpanel.royalmedical.ae/api/view-media/1790314592767/dr._ayman_gadkarim_profile_image.webp",
    profile: "/doctor-details/dr-ayman-ahmed-foad-gadkarim/en",
  },

  {
    name: "Dr. Roaa Mohammed Abdulsalam Ajab",
    specialty: "General Practitioner",
    languages: "Arabic, English",
    experience: "6+ Years",
    image:
      "https://www.adminpanel.royalmedical.ae/api/view-media/1780381884668/dr._roa.webp",
    profile: "/doctor-details/dr-roaa-mohammed-abdulsalam-ajab/en",
  },

  {
    name: "Dr. Ahmed Bashir Yagan",
    specialty: "Orthopedic Surgeon",
    languages: "Arabic, English",
    experience: "18+ Years",
    image:
      "https://www.adminpanel.royalmedical.ae/api/view-media/1778307675548/dr._ahmad_bashir.webp",
    profile: "/doctor-details/dr-ahmed-bashir-yagan/en",
  },

  {
    name: "Dr. Narmin fayed",
    specialty: "Specialist Dermatologist",
    languages: "Arabic, English",
    experience: "23+ Years",
    image:
      "https://www.adminpanel.royalmedical.ae/api/view-media/1714717926281/narmin_copy.png",
    profile: "/doctor-details/dr-narmin-fayed/en",
  },

  {
    name: "Dr. Manoj Poovelil",
    specialty: "Specialist Pediatric Dentistry",
    languages: "English, Arabic, Hindi, Malayalam, Tamil",
    experience: "21+ Years",
    image:
      "https://www.adminpanel.royalmedical.ae/api/view-media/1774441381117/dr_manoj_%281%29.webp",
    profile: "/doctor-details/dr-manoj-poovelil/en",
  },

  {
    name: "Dr. Alaa Alkoutiny",
    specialty: "Specialist Urologist",
    languages: "Arabic, English",
    experience: "8+ Years",
    image:
      "https://www.adminpanel.royalmedical.ae/api/view-media/1769842115947/dr._alaa_alkoutiny.webp",
    profile: "/doctor-details/dr-alaa-alkoutiny/en",
  },

  {
    name: "Dr. Khaled Prince",
    specialty: "Specialist Plastic Surgeon",
    languages: "Arabic, English",
    experience: "13+ Years",
    image:
      "https://www.adminpanel.royalmedical.ae/api/view-media/1767341988132/dr._khaled_prince.webp",
    profile: "/doctor-details/dr-khaled-prince/en",
  },

  {
    name: "Dr. Dina Ahmad Fahmawi",
    specialty: "General Practitioner",
    languages: "Arabic, English, and Urdu",
    experience: "2+ Years",
    image:
      "https://www.adminpanel.royalmedical.ae/api/view-media/1762430203496/dr_dina.webp",
    profile: "/doctor-details/dr-dina-ahmad-fahmawi/en",
  },

  {
    name: "Dr. Jerome Paris",
    specialty: "Facial Plastic Surgeon",
    languages: "English, French",
    experience: "26+ Years",
    image:
      "https://www.adminpanel.royalmedical.ae/api/view-media/1760034737725/dr_je%C3%AC%C2%81ro%C3%AC%C2%82me.webp",
    profile: "/doctor-details/dr-jerome-paris/en",
  },

  {
    name: "Dr. Maitha Jaafar Salem Saeed Al Jaberi",
    specialty: "General Dentist",
    languages: "Arabic and English",
    experience: "21+ Years",
    image:
      "https://www.adminpanel.royalmedical.ae/api/view-media/1758283626860/dr_maitha.webp",
    profile: "/doctor-details/dr-maitha-jaafar-salem-saeed-al-jaberi/en",
  },

  {
    name: "Dr. Najm Abdullah Dawood",
    specialty: "Consultant Internal Medicine",
    languages: "Arabic, English",
    experience: "52+ Years",
    image:
      "https://www.adminpanel.royalmedical.ae/api/view-media/1751604688533/dr_najm.webp",
    profile: "/doctor-details/dr-najm-abdullah-dawood/en",
  },

  {
    name: "Dr. Leleian Osama Mohammed Hamad",
    specialty: "General Dentist",
    languages: "Arabic and English",
    experience: "2+ Years",
    image:
      "https://www.adminpanel.royalmedical.ae/api/view-media/1751457337924/dr_leleian_%281%29.webp",
    profile: "/doctor-details/dr-leleian-osama-mohammed-hamad/en",
  },

  {
    name: "Dr. Yaser Alchhadat",
    specialty: "Gastroenterologist",
    languages: "Arabic, English",
    experience: "29+ Years",
    image:
      "https://www.adminpanel.royalmedical.ae/api/view-media/1754994872885/2025-08-12_14-26-30_dr_yaser.webp",
    profile: "/doctor-details/dr-yaser-alchhadat/en",
  },

  {
    name: "Dr. Samah Khalifa",
    specialty: "Specialist Obstetrics and Gynecology",
    languages: "Arabic, English",
    experience: "9+ Years",
    image:
      "https://www.adminpanel.royalmedical.ae/api/view-media/1736149167044/dr_samah.png",
    profile: "/doctor-details/dr-samah-khalifa/en",
  },

  {
    name: "Dr. Abbas Hamadi",
    specialty: "Specialist General Surgery",
    languages: "Arabic, English",
    experience: "17+ Years",
    image:
      "https://www.adminpanel.royalmedical.ae/api/view-media/1735880711137/dr_abbas.png",
    profile: "/doctor-details/dr-abbas-hamadi/en",
  },

  {
    name: "Dr. Siraj Mohamad Sulaiman",
    specialty: "Specialist Otolaryngology",
    languages: "Arabic, English",
    experience: "22+ Years",
    image:
      "https://www.adminpanel.royalmedical.ae/api/view-media/1734619752416/dr_siraj_copy.png",
    profile: "/doctor-details/dr-siraj-mohamad-sulaiman/en",
  },

  {
    name: "Dr. Jadalkareim Saeed Hneidi",
    specialty: "Specialist Pediatrics",
    languages: "Arabic, English",
    experience: "12+ Years",
    image:
      "https://www.adminpanel.royalmedical.ae/api/view-media/1782978235699/dr_jad_copy.webp",
    profile: "/doctor-details/dr-jadalkareim-saeed-hneidi/en",
  },

  {
    name: "Dr. Nuha Nossar",
    specialty: "Specialist Dermatology",
    languages: "Arabic, English",
    experience: "17+ Years",
    image:
      "https://www.adminpanel.royalmedical.ae/api/view-media/1733974903853/dr_nuha.png",
    profile: "/doctor-details/dr-nuha-nossar/en",
  },

  {
    name: "Dr. Rana Mohammad Abd Elhady",
    specialty: "Family Medicine Specialist",
    languages: "Arabic and English",
    experience: "14+ Years",
    image:
      "https://www.adminpanel.royalmedical.ae/api/view-media/1732709618455/dr_rana.png",
    profile: "/doctor-details/dr-rana-mohammad-abd-elhady/en",
  },

  {
    name: "Dr. Dalia Wahba",
    specialty: "Anesthesiologist",
    languages: "Arabic, English",
    experience: "23+ Years",
    image:
      "https://www.adminpanel.royalmedical.ae/api/view-media/1720178124570/dr_dalia_copy2.png",
    profile: "/doctor-details/dr-dalia-wahba/en",
  },

  {
    name: "Dr. Iyad Omar Alaqqad",
    specialty: "Consultant Pediatrician",
    languages: "Arabic, English",
    experience: "14+ Years",
    image:
      "https://www.adminpanel.royalmedical.ae/api/view-media/1780479670734/dr_iyad.avif",
    profile: "/doctor-details/dr-iyad-omar-alaqqad/en",
  },

  {
    name: "Dr. Michael George Rebeiro",
    specialty: "Consultant Plastic Surgeon",
    languages: "English, Kiswahili, and French",
    experience: "15+ Years",
    image:
      "https://www.adminpanel.royalmedical.ae/api/view-media/1783689833461/dr_michael.webp",
    profile: "/doctor-details/dr-michael-george-rebeiro/en",
  },

  {
    name: "Dr. Ammar Suleiman Alahmad",
    specialty: "Specialist Cardiologist",
    languages: "Arabic, English",
    experience: "10+ Years",
    image:
      "https://www.adminpanel.royalmedical.ae/api/view-media/1785824669706/dr._ammar_suleiman__profile_image.webp",
    profile: "/doctor-details/dr-ammar-suleiman-alahmad/en",
  },

  {
    name: "Dr. Aidroos Al Aidroos",
    specialty: "Specialist Psychiatrist",
    languages: "Arabic, English",
    experience: "5+ Years",
    image:
      "https://www.adminpanel.royalmedical.ae/api/view-media/1715709545610/dr_aidroos_copy.png",
    profile: "/doctor-details/dr-aidroos-al-aidroos/en",
  },

  {
    name: "Dr. Wafaa El-Saidi",
    specialty: "Specialist Obstetrics and Gynecology",
    languages: "Arabic & English",
    experience: "20+ Years",
    image:
      "https://www.adminpanel.royalmedical.ae/api/view-media/1738473681908/dr_wafaa_new.png",
    profile: "/doctor-details/dr-wafaa-el-saidi/en",
  },

  {
    name: "Mohamed Saheer A P",
    specialty: "Physiotherapist",
    languages: "Arabic, English",
    experience: "9+ Years",
    image:
      "https://www.adminpanel.royalmedical.ae/api/view-media/1760364852972/mohamed_saheer.avif",
    profile: "/doctor-details/mohamed-saheer-a-p/en",
  },

  {
    name: "Dr. Omer Safieldin",
    specialty: "Specialist Orthopedic Surgery",
    languages: "English, Arabic",
    experience: "9+ Years",
    image:
      "https://www.adminpanel.royalmedical.ae/api/view-media/1716364546478/dr_omer_copy.png",
    profile: "/doctor-details/dr-omer-safieldin/en",
  },

  {
    name: "Dr. Khaled Ibrahim",
    specialty: "Specialist Radiologist",
    languages: "Arabic, English",
    experience: "15+ Years",
    image:
      "https://www.adminpanel.royalmedical.ae/api/view-media/1714406522307/ezgif.com-jpg-to-avif-converter_%2828%29.avif",
    profile: "/doctor-details/dr-khaled-ibrahim/en",
  },

  {
    name: "Dr. Hanadi Osman Ibrahim",
    specialty: "General Practitioner",
    languages: "Arabic & English",
    experience: "10+ Years",
    image:
      "https://www.adminpanel.royalmedical.ae/api/view-media/1714428575567/ezgif.com-jpg-to-avif-converter_%2835%29.avif",
    profile: "/doctor-details/dr-hanadi-osman-ibrahim/en",
  },

 {
  name: "Dr. Junaid Mustafa",
  specialty: "Internal Medicine Specialist",
  languages: "Arabic, English",
  experience: "20+ Years",
  image: doctor,
  profile: "/doctor-details/dr-junaid-mustafa/en",
},

  {
    name: "Dr. Faiza Othman Elbadry",
    specialty: "General Practitioner",
    languages: "Arabic, English",
    experience: "14+ Years",
    image:
      "https://www.adminpanel.royalmedical.ae/api/view-media/1714465365784/dr._faiza_othman_elbadry.avif",
    profile: "/doctor-details/dr-faiza-othman-elbadry/en",
  },

  {
    name: "Dr. Shadi AlTarsha",
    specialty: "Pediatrics Specialist",
    languages: "Arabic and English",
    experience: "20+ Years",
    image:
      "https://www.adminpanel.royalmedical.ae/api/view-media/1714428520112/ezgif.com-jpg-to-avif-converter_%2834%29.avif",
    profile: "/doctor-details/dr-shadi-altarsha/en",
  },

  {
    name: "Dr Randa Mohamed Soliman",
    specialty: "General Practitioner",
    languages: "Arabic, English",
    experience: "22+ Years",
    image:
      "https://www.adminpanel.royalmedical.ae/api/view-media/1734617440540/dr_randa.png",
    profile: "/doctor-details/dr-randa-mohamed-soliman/en",
  },

  {
    name: "Dr. Loubna Salha",
    specialty: "Pediatrics Specialist",
    languages: "Arabic, English",
    experience: "13+ Years",
    image:
      "https://www.adminpanel.royalmedical.ae/api/view-media/1714428462618/ezgif.com-jpg-to-avif-converter_%2833%29.avif",
    profile: "/doctor-details/dr-loubna-salha/en",
  },

  {
    name: "Dr. Hayam Aly Abdel Hamid",
    specialty: "General Practitioner",
    languages: "Arabic, English",
    experience: "21+ Years",
    image:
      "https://www.adminpanel.royalmedical.ae/api/view-media/1720275225037/dr_hiyam.png",
    profile: "/doctor-details/dr-hayam-aly-abdel-hamid/en",
  },

  {
    name: "Dr. Ashraf Nabil Alhaj Ali",
    specialty: "Consultant Otolaryngology",
    languages: "Arabic, English",
    experience: "10+ Years",
    image:
      "https://www.adminpanel.royalmedical.ae/api/view-media/1714465443667/dr._ashraf_nabil_alhaj_ali.avif",
    profile: "/doctor-details/dr-ashraf-nabil-alhaj-ali/en",
  },
];

function Doctors() {
  const [searchTerm, setSearchTerm] = useState("");
  const [specialty, setSpecialty] = useState("All Specialties");
  const [currentPage, setCurrentPage] = useState(1);

  const doctorsPerPage = 12;

  const specialties = useMemo(() => {
    const unique = [...new Set(doctors.map((doctor) => doctor.specialty))];

    return ["All Specialties", ...unique];
  }, []);

  const filteredDoctors = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    return doctors.filter((doctor) => {
      const matchesSearch =
        !search ||
        doctor.name.toLowerCase().includes(search) ||
        doctor.specialty.toLowerCase().includes(search) ||
        doctor.languages.toLowerCase().includes(search);

      const matchesSpecialty =
        specialty === "All Specialties" || doctor.specialty === specialty;

      return matchesSearch && matchesSpecialty;
    });
  }, [searchTerm, specialty]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredDoctors.length / doctorsPerPage),
  );

  const startIndex = (currentPage - 1) * doctorsPerPage;

  const paginatedDoctors = filteredDoctors.slice(
    startIndex,
    startIndex + doctorsPerPage,
  );

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const changePage = (page) => {
    if (page < 1 || page > totalPages) return;

    setCurrentPage(page);

    setTimeout(() => {
      document.getElementById("doctors-list")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleSpecialty = (value) => {
    setSpecialty(value);
    setCurrentPage(1);
  };

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  );

  return (
    <section className="min-h-screen bg-white pt-[104px]">
      <section className="relative overflow-hidden bg-[#7d2028]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.10),transparent_32%),radial-gradient(circle_at_85%_80%,rgba(0,0,0,0.16),transparent_35%)]" />

        <div className="relative mx-auto max-w-[1500px] px-6 py-[72px] text-center sm:px-8 lg:px-12 lg:py-[88px]">
          <p className="text-[12px] font-semibold uppercase tracking-[3px] text-[#d9b46a]">
            Royal Medical Center
          </p>

          <h1 className="mt-4 text-[42px] font-semibold leading-tight text-white sm:text-[52px] lg:text-[60px]">
            Our Doctors
          </h1>

          <p className="mx-auto mt-5 max-w-[780px] text-[15px] leading-7 text-white/80 sm:text-[16px]">
            Book an online doctor's appointment to get advanced healthcare
            services and treatments for the various medical specialties.
          </p>
        </div>
      </section>

      <section className="bg-[#faf8f6] py-8 sm:py-10">
        <div className="mx-auto max-w-[1350px] px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-[1.5fr_1fr]">
            <div className="relative">
              <Search
                size={19}
                strokeWidth={1.7}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8d8580]"
              />

              <input
                type="text"
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search doctors..."
                className="h-[54px] w-full rounded-[6px] border border-[#e4ddd8] bg-white pl-12 pr-4 text-[14px] text-[#333] outline-none transition focus:border-[#b23932] focus:ring-1 focus:ring-[#b23932]/20"
              />
            </div>

            <div className="relative">
              <select
                value={specialty}
                onChange={(e) => handleSpecialty(e.target.value)}
                className="h-[54px] w-full appearance-none rounded-[6px] border border-[#e4ddd8] bg-white px-4 pr-11 text-[14px] text-[#494441] outline-none transition focus:border-[#b23932] focus:ring-1 focus:ring-[#b23932]/20"
              >
                {specialties.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              <ChevronRight
                size={17}
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-[#777]"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="doctors-list"
        className="scroll-mt-[120px] bg-white py-16 sm:py-20 lg:py-[88px]"
      >
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <div className="mb-12 text-center">
            <p className="text-[12px] font-semibold uppercase tracking-[2.5px] text-[#b08a45]">
              Meet Our Specialists
            </p>

            <h2 className="mt-3 text-[32px] font-semibold text-[#641f26] sm:text-[40px]">
              Find The Right Doctor For You
            </h2>

            <div className="mx-auto mt-5 h-[2px] w-12 bg-[#b08a45]" />
          </div>

          {paginatedDoctors.length > 0 ? (
            <>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {paginatedDoctors.map((doctor) => (
                  <article
                    key={doctor.name}
                    className="group overflow-hidden rounded-[8px] border border-[#ebe5e1] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#d8c7bc] hover:shadow-[0_15px_40px_rgba(72,38,28,0.10)]"
                  >
                    <div className="relative h-[315px] overflow-hidden bg-[#f6f4f2]">
                      <div className="absolute left-4 top-4 z-10 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[1px] text-[#8b6b38] shadow-sm">
                        {doctor.specialty}
                      </div>

                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="h-full w-full object-contain object-bottom transition-transform duration-500 group-hover:scale-[1.035]"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="p-5">
                      <h3 className="min-h-[48px] text-[17px] font-semibold leading-6 text-[#5f2027]">
                        {doctor.name}
                      </h3>

                      <div className="mt-4 space-y-3 border-t border-[#eee9e5] pt-4">
                        <div className="flex items-start gap-3">
                          <UserRound
                            size={17}
                            strokeWidth={1.6}
                            className="mt-[1px] shrink-0 text-[#b08a45]"
                          />

                          <div>
                            <p className="text-[10px] font-semibold uppercase tracking-[1.2px] text-[#99918c]">
                              Specialty
                            </p>

                            <p className="mt-1 text-[13px] leading-5 text-[#4e4946]">
                              {doctor.specialty}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Languages
                            size={17}
                            strokeWidth={1.6}
                            className="mt-[1px] shrink-0 text-[#b08a45]"
                          />

                          <div>
                            <p className="text-[10px] font-semibold uppercase tracking-[1.2px] text-[#99918c]">
                              Languages
                            </p>

                            <p className="mt-1 text-[13px] leading-5 text-[#4e4946]">
                              {doctor.languages}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Clock3
                            size={17}
                            strokeWidth={1.6}
                            className="mt-[1px] shrink-0 text-[#b08a45]"
                          />

                          <div>
                            <p className="text-[10px] font-semibold uppercase tracking-[1.2px] text-[#99918c]">
                              Experience
                            </p>

                            <p className="mt-1 text-[13px] leading-5 text-[#4e4946]">
                              {doctor.experience}
                            </p>
                          </div>
                        </div>
                      </div>

                      <a
                        href={doctor.profile}
                        className="mt-5 flex h-[46px] items-center justify-center gap-2 rounded-[5px] border border-[#b23932] text-[12px] font-semibold uppercase tracking-[1.2px] text-[#a52f2a] transition-all duration-300 hover:bg-[#b23932] hover:text-white"
                      >
                        View Profile
                        <ChevronRight size={16} strokeWidth={1.8} />
                      </a>
                    </div>
                  </article>
                ))}
              </div>

              {totalPages > 1 && (
                <div className="mt-14 flex flex-wrap items-center justify-center gap-2">
                  <button
                    type="button"
                    onClick={() => changePage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`flex h-10 min-w-10 items-center justify-center rounded-full border transition ${
                      currentPage === 1
                        ? "cursor-not-allowed border-[#eee] text-[#c8c3bf]"
                        : "border-[#ded7d2] text-[#615b57] hover:border-[#b23932] hover:bg-[#b23932] hover:text-white"
                    }`}
                    aria-label="Previous page"
                  >
                    <ChevronLeft size={18} />
                  </button>

                  {pageNumbers.map((page) => (
                    <button
                      type="button"
                      key={page}
                      onClick={() => changePage(page)}
                      className={`flex h-10 min-w-10 items-center justify-center rounded-full px-3 text-[13px] font-medium transition ${
                        currentPage === page
                          ? "bg-[#b23932] text-white shadow-sm"
                          : "border border-[#ded7d2] bg-white text-[#615b57] hover:border-[#b23932] hover:text-[#b23932]"
                      }`}
                    >
                      {page}
                    </button>
                  ))}

                  <button
                    type="button"
                    onClick={() => changePage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`flex h-10 min-w-10 items-center justify-center rounded-full border transition ${
                      currentPage === totalPages
                        ? "cursor-not-allowed border-[#eee] text-[#c8c3bf]"
                        : "border-[#ded7d2] text-[#615b57] hover:border-[#b23932] hover:bg-[#b23932] hover:text-white"
                    }`}
                    aria-label="Next page"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="py-20 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#faf3f0] text-[#b23932]">
                <Search size={25} />
              </div>

              <h3 className="mt-5 text-[22px] font-semibold text-[#5f2027]">
                No doctors found
              </h3>

              <p className="mt-2 text-[14px] text-[#817a75]">
                Try changing your search or specialty filter.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setSpecialty("All Specialties");
                  setCurrentPage(1);
                }}
                className="mt-6 rounded-[5px] bg-[#b23932] px-6 py-3 text-[12px] font-semibold uppercase tracking-[1px] text-white transition hover:bg-[#982f29]"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </section>
  );
}

export default Doctors;
