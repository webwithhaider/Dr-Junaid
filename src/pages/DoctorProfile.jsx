
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  GraduationCap,
  Languages,
  MapPin,
  Stethoscope,
} from "lucide-react";
import doctorImage from "../assets/doctor.png";

function DoctorProfile() {
  const expertise = [
    "General Medical Consultation",
    "Diagnosis and Treatment",
    "Preventive Healthcare",
    "Patient Health Management",
  ];

  const education = [
    {
      title: "Medical Education",
      detail:
        "Medical qualifications and academic background of Dr. Junaid Murtaza.",
    },
    {
      title: "Clinical Experience",
      detail:
        "Professional clinical experience and patient care background.",
    },
    {
      title: "Medical Specialization",
      detail:
        "Specialized medical services and areas of professional focus.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f3f9f7] text-[#173f3e]">
      
      <div className="h-[104px]" />

      
      <section className="overflow-hidden bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-12 sm:px-8 md:grid-cols-2 md:py-20">
          <div>
            <Link
              to="/"
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#087f80] hover:gap-3"
            >
              <ArrowLeft size={18} />
              Back to Home
            </Link>

            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#e4f4ef] px-4 py-2 text-sm font-semibold text-[#087f80]">
              <CheckCircle2 size={17} />
              Doctor Profile
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Dr. Junaid Murtaza
            </h1>

            <p className="mt-4 text-xl font-semibold text-[#087f80]">
              Medical Doctor
            </p>

            <p className="mt-5 max-w-xl leading-8 text-gray-600">
              Learn more about Dr. Junaid Murtaza, explore his professional
              profile and get in touch with the clinic to arrange a consultation.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-xl border border-[#dcebe6] px-4 py-3">
                <Stethoscope size={19} className="text-[#087f80]" />
                <span className="text-sm font-medium">Medical Care</span>
              </div>

              <div className="flex items-center gap-2 rounded-xl border border-[#dcebe6] px-4 py-3">
                <Languages size={19} className="text-[#087f80]" />
                <span className="text-sm font-medium">Contact Clinic for Languages</span>
              </div>
            </div>

            <Link
              to="/contact-us"
              className="mt-8 inline-flex items-center gap-3 rounded-lg bg-[#087f80] px-7 py-4 font-semibold text-white shadow-lg transition hover:bg-[#066768]"
            >
              <CalendarDays size={19} />
              Book an Appointment
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-4 rotate-6 rounded-[40px] bg-[#d8eee6]" />

            <div className="relative flex h-[400px] items-end justify-center overflow-hidden rounded-[32px] border border-white bg-[#e9f5f0] shadow-xl sm:h-[500px]">
              <img
                src={doctorImage}
                alt="Dr. Junaid Murtaza"
                className="h-full w-full object-contain object-bottom"
              />
            </div>

            <div className="absolute bottom-5 left-4 right-4 rounded-2xl border border-white bg-white/95 p-5 shadow-lg">
              <p className="font-bold text-[#173f3e]">
                Dr. Junaid Murtaza
              </p>
              <p className="mt-1 text-sm text-gray-600">
                Medical Doctor
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20">
        <div className="grid gap-8 md:grid-cols-[1.5fr_1fr]">
          <div className="rounded-3xl border border-[#e1eee8] bg-white p-7 shadow-sm sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#087f80]">
              About the Doctor
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Professional Biography
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              This section contains the professional biography of Dr. Junaid
              Murtaza. Add his verified medical background, clinical
              experience, qualifications and approach to patient care here.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              For details about available services, consultation fees and
              appointment timings, please contact the clinic.
            </p>
          </div>

          <div className="rounded-3xl bg-[#173f3e] p-7 text-white sm:p-9">
            <h2 className="text-2xl font-bold">Profile Information</h2>

            <div className="mt-7 space-y-6">
              <div className="flex gap-4">
                <div className="rounded-xl bg-white/10 p-3">
                  <Stethoscope size={22} />
                </div>
                <div>
                  <p className="text-sm text-white/65">Profession</p>
                  <p className="mt-1 font-semibold">Medical Doctor</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="rounded-xl bg-white/10 p-3">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <p className="text-sm text-white/65">Qualifications</p>
                  <p className="mt-1 font-semibold">
                    Contact clinic for details
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="rounded-xl bg-white/10 p-3">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-sm text-white/65">Clinic Location</p>
                  <p className="mt-1 font-semibold">
                    Confirm with the clinic
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="rounded-xl bg-white/10 p-3">
                  <Clock3 size={22} />
                </div>
                <div>
                  <p className="text-sm text-white/65">Consultation Hours</p>
                  <p className="mt-1 font-semibold">
                    Confirm availability
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#087f80]">
            Professional Background
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Education & Experience
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-gray-600">
            Add the doctor's verified qualifications, certifications and
            professional experience to complete this section.
          </p>

          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {education.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-[#e1eee8] bg-[#f8fcfa] p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e4f4ef] text-[#087f80]">
                  <GraduationCap size={25} />
                </div>

                <h3 className="mt-5 text-lg font-bold">{item.title}</h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

    
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#087f80]">
            Areas of Focus
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Medical Services
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
            Contact the clinic to confirm the services currently offered by
            Dr. Junaid Murtaza.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {expertise.map((item) => (
            <article
              key={item}
              className="rounded-2xl border border-[#dcebe6] bg-white p-6 text-center shadow-sm transition hover:border-[#087f80] hover:shadow-lg"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e4f4ef] text-[#087f80]">
                <Stethoscope size={25} />
              </div>

              <h3 className="mt-4 font-bold">{item}</h3>
            </article>
          ))}
        </div>
      </section>

     
      <section className="px-5 pb-16 sm:px-8 md:pb-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 rounded-3xl bg-[#087f80] p-8 text-white sm:p-12 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-bold">
              Book Your Consultation
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-white/85">
              Contact the clinic to request an appointment with Dr. Junaid
              Murtaza.
            </p>
          </div>

          <Link
            to="/contact-us"
            className="inline-flex shrink-0 items-center gap-3 rounded-lg bg-white px-7 py-4 font-bold text-[#087f80] transition hover:bg-[#eaf6f2]"
          >
            Book Appointment
            <CalendarDays size={19} />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default DoctorProfile;
