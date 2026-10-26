import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  GraduationCap,
  MapPin,
  Phone,
  ShieldCheck,
  Stethoscope,
  Video,
} from "lucide-react";

import doctorImage from "../assets/doctor.png";

const treatments = [
  {
    title: "Diabetes",
    urdu: "شوگر",
    description: "Personalized support for diabetes management.",
    icon: Activity,
  },
  {
    title: "Obesity",
    urdu: "موٹاپا",
    description: "Guidance for weight and metabolic health.",
    icon: Activity,
  },
  {
    title: "Fatty Liver",
    urdu: "جگر پر چربی",
    description: "Assessment and care for fatty liver disease.",
    icon: ShieldCheck,
  },
  {
    title: "Liver & Jaundice",
    urdu: "یرقان اور جگر",
    description: "Consultation for liver-related concerns.",
    icon: Stethoscope,
  },
  {
    title: "Gas & Bloating",
    urdu: "گیس اور اپھارہ",
    description: "Medical guidance for digestive discomfort.",
    icon: Activity,
  },
  {
    title: "IBS & Digestion",
    urdu: "نظامِ ہاضمہ",
    description: "Support for digestive symptoms and concerns.",
    icon: Stethoscope,
  },
];

const consultationSteps = [
  {
    number: "01",
    title: "Book a Slot",
    description:
      "Request your preferred consultation date using the appointment form.",
    icon: CalendarDays,
  },
  {
    number: "02",
    title: "Share Your Reports",
    description:
      "Keep your previous prescriptions and medical reports ready for review.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Video Consultation",
    description:
      "Discuss your symptoms and health concerns during your consultation.",
    icon: Video,
  },
  {
    number: "04",
    title: "Get Your Care Plan",
    description:
      "Discuss the next steps and follow-up recommendations with your doctor.",
    icon: CheckCircle2,
  },
];

const timeSlots = [
  "10:00 AM",
  "10:15 AM",
  "10:30 AM",
  "10:45 AM",
  "11:00 AM",
  "11:15 AM",
  "11:30 AM",
  "11:45 AM",
  "12:00 PM",
  "12:15 PM",
  "12:30 PM",
  "12:45 PM",
  "1:00 PM",
  "1:15 PM",
  "1:30 PM",
  "1:45 PM",
];

function getLocalDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function DoctorBiography() {
  const [activeTab, setActiveTab] = useState("Biography");

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [toast, setToast] = useState({
    show: false,
    type: "",
    message: "",
  });

  const tabs = ["Biography", "Qualifications", "Focus Areas", "Schedule"];

  const showToast = (type, message) => {
    setToast({ show: true, type, message });

    setTimeout(() => {
      setToast({ show: false, type: "", message: "" });
    }, 4000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleDateChange = (e) => {
    const date = e.target.value;

    if (!date) {
      setFormData((previous) => ({
        ...previous,
        preferredDate: "",
        preferredTime: "",
      }));
      return;
    }

    const [year, month, day] = date.split("-").map(Number);
    const selectedDate = new Date(year, month - 1, day);
    const dayOfWeek = selectedDate.getDay();

    if (date < getLocalDate()) {
      showToast("error", "Please select today or a future date.");
      return;
    }

    if (dayOfWeek === 0) {
      showToast(
        "error",
        "Sunday is unavailable. Please select Monday to Saturday.",
      );
      return;
    }

    setFormData((previous) => ({
      ...previous,
      preferredDate: date,
      preferredTime: "",
    }));
  };

  const handleAppointmentSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    if (!formData.preferredDate || !formData.preferredTime) {
      showToast("error", "Please select your preferred date and time.");
      return;
    }

    const [year, month, day] = formData.preferredDate.split("-").map(Number);

    const selectedDate = new Date(year, month - 1, day);

    if (selectedDate.getDay() === 0) {
      showToast("error", "Appointments are unavailable on Sundays.");
      return;
    }

    if (formData.preferredDate < getLocalDate()) {
      showToast("error", "Please select today or a future date.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:5000/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName.trim(),
          phone: formData.phone.trim(),
          preferredDate: formData.preferredDate,
          preferredTime: formData.preferredTime,
          doctorName: "Dr. Junaid Mustafa",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to submit appointment.");
      }

      setFormData({
        fullName: "",
        phone: "",
        preferredDate: "",
        preferredTime: "",
      });

      showToast(
        "success",
        "Your appointment request has been submitted successfully.",
      );
    } catch (error) {
      console.error("Appointment Error:", error);

      showToast(
        "error",
        error.message || "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {toast.show && (
        <div
          role="status"
          aria-live="polite"
          className="fixed right-4 top-5 z-[200] flex max-w-[390px] items-start gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-xl"
        >
          {toast.type === "success" ? (
            <CheckCircle2 className="shrink-0 text-emerald-600" size={22} />
          ) : (
            <Activity className="shrink-0 text-red-600" size={22} />
          )}

          <div>
            <p
              className={`text-sm font-bold ${
                toast.type === "success" ? "text-emerald-700" : "text-red-700"
              }`}
            >
              {toast.type === "success" ? "Success" : "Error"}
            </p>

            <p className="mt-1 text-sm leading-5 text-gray-600">
              {toast.message}
            </p>
          </div>
        </div>
      )}

      <section id="services" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-extrabold uppercase tracking-[2px] text-[#087f80]">
              How We Can Help
            </span>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#173f3e] sm:text-4xl">
              Medical Care for Your Health
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
              Get medical guidance for metabolic health, liver conditions and
              common digestive concerns.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {treatments.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-[#e0eeea] bg-[#fbfefd] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#9ed2c9] hover:shadow-[0_15px_35px_rgba(8,127,128,0.08)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e2f4ef] text-[#087f80] transition group-hover:bg-[#087f80] group-hover:text-white">
                    <Icon size={23} />
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-3">
                    <h3 className="text-lg font-bold text-[#173f3e]">
                      {item.title}
                    </h3>

                    <span
                      lang="ur"
                      className="text-sm font-medium text-[#a4771c]"
                    >
                      {item.urdu}
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {item.description}
                  </p>

                  <a
                    href="#appointment"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#087f80] hover:text-[#065e5f]"
                  >
                    Book Consultation
                    <ArrowRight size={16} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="doctor"
        className="overflow-hidden bg-[#f1f9f7] py-16 sm:py-20"
      >
        <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-12">
          <div className="relative mx-auto w-full max-w-[430px]">
            <div className="absolute inset-x-5 bottom-0 top-10 rounded-[40%_40%_20px_20px] bg-[#d8eee8]" />

            <img
              src={doctorImage}
              alt="Dr. Junaid Mustafa"
              className="relative z-10 mx-auto max-h-[500px] w-full object-contain object-bottom"
            />

            <div className="absolute bottom-5 left-0 z-20 rounded-xl bg-white px-5 py-4 shadow-lg">
              <p className="text-xl font-extrabold text-[#087f80]">20+ Years</p>
              <p className="mt-1 text-xs font-medium text-gray-500">
                Clinical Experience
              </p>
            </div>
          </div>

          <div>
            <span className="text-xs font-extrabold uppercase tracking-[2px] text-[#087f80]">
              Meet Your Doctor
            </span>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#173f3e] sm:text-4xl">
              Dr. Junaid Mustafa
            </h2>

            <p className="mt-3 font-semibold text-[#a4771c]">
              MBBS, FCPS (Medicine)
            </p>

            <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">
              Dr. Junaid Mustafa is a consultant physician with a focus on
              metabolic health and internal medicine. His clinical interests
              include diabetes, fatty liver, hepatitis, obesity and digestive
              health. Consultations focus on understanding your concerns and
              discussing an appropriate plan for your individual needs.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="flex gap-3 rounded-xl border border-[#dcece7] bg-white p-4">
                <GraduationCap size={23} className="shrink-0 text-[#087f80]" />
                <div>
                  <p className="text-sm font-bold text-[#173f3e]">MBBS, FCPS</p>
                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    Medicine
                  </p>
                </div>
              </div>

              <div className="flex gap-3 rounded-xl border border-[#dcece7] bg-white p-4">
                <Stethoscope size={23} className="shrink-0 text-[#087f80]" />
                <div>
                  <p className="text-sm font-bold text-[#173f3e]">
                    Consultant Physician
                  </p>
                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    Internal medicine
                  </p>
                </div>
              </div>
            </div>

            <Link
              to="/doctor-profile"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#087f80] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#066b6c]"
            >
              Doctor's Profile
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <div className="overflow-hidden rounded-2xl border border-[#dcece7] bg-white">
            <div className="flex gap-1 overflow-x-auto border-b border-[#e3eeea] p-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`whitespace-nowrap rounded-lg px-4 py-3 text-sm font-semibold transition ${
                    activeTab === tab
                      ? "bg-[#087f80] text-white"
                      : "text-gray-600 hover:bg-[#eef8f5] hover:text-[#087f80]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="min-h-[220px] p-5 sm:p-8">
              {activeTab === "Biography" && (
                <div className="max-w-4xl">
                  <h3 className="text-xl font-bold text-[#173f3e]">
                    About Dr. Junaid Mustafa
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                    Dr. Junaid Mustafa provides consultations focused on
                    internal medicine, diabetes and metabolic health. Patients
                    can discuss their symptoms, relevant medical history and
                    existing reports to help determine appropriate next steps
                    for their care.
                  </p>
                </div>
              )}

              {activeTab === "Qualifications" && (
                <div>
                  <h3 className="text-xl font-bold text-[#173f3e]">
                    Education & Qualifications
                  </h3>
                  <div className="mt-5 flex items-start gap-4 rounded-xl bg-[#f3faf8] p-5">
                    <GraduationCap
                      size={26}
                      className="shrink-0 text-[#087f80]"
                    />
                    <div>
                      <p className="font-bold text-[#173f3e]">
                        MBBS, FCPS (Medicine),FPSIM, IDF FELLOW
                      </p>
                      <p className="mt-2 text-sm leading-6 text-gray-600">
                        American DiabetesAssociation (ADA) PROFESSIONAL MEMBER
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-xs leading-5 text-gray-500">
                    Member of the American Association of
Clinical Endocrinology (AACE)
                  </p>
                </div>
              )}

              {activeTab === "Focus Areas" && (
                <div>
                  <h3 className="text-xl font-bold text-[#173f3e]">
                    Areas of Focus
                  </h3>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {[
                      "Diabetes",
                      "Obesity",
                      "Fatty Liver / MASLD",
                      "Liver & Hepatitis",
                      "Digestive Health",
                      "Metabolic Health",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[#b9dfd5] bg-[#f1faf7] px-4 py-2.5 text-sm font-semibold text-[#087f80]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "Schedule" && (
                <div>
                  <h3 className="text-xl font-bold text-[#173f3e]">
                    Consultation Schedule
                  </h3>
                  <div className="mt-5 flex items-start gap-3 rounded-xl bg-[#fff8e5] p-5">
                    <Clock3 size={23} className="shrink-0 text-[#a4771c]" />
                    <div>
                      <p className="font-semibold text-[#173f3e]">
                        Online consultation slots
                      </p>
                      <p className="mt-2 text-sm leading-6 text-gray-600">
                        The clinic's provided online consultation window is
                        10:00 AM to 2:00 PM. Please confirm availability when
                        booking.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-extrabold uppercase tracking-[2px] text-[#087f80]">
              Simple & Convenient
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-[#173f3e] sm:text-4xl">
              How Online Consultation Works
            </h2>
            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
              Four simple steps to request an online medical consultation.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {consultationSteps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="rounded-2xl border border-[#e0eeea] bg-[#fbfefd] p-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-extrabold text-[#d3e9e3]">
                      {step.number}
                    </span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e2f4ef] text-[#087f80]">
                      <Icon size={22} />
                    </div>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-[#173f3e]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-9 text-center">
            <a
              href="https://wa.me/923329671650"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#087f80] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#066b6c]"
            >
              Contact on WhatsApp
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      <section id="appointment" className="bg-[#f1f9f7] py-16 sm:py-20">
        <div className="mx-auto grid max-w-[1280px] gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:px-12">
          <div className="rounded-2xl border border-[#dcece7] bg-white p-6 shadow-sm sm:p-8">
            <span className="text-xs font-extrabold uppercase tracking-[2px] text-[#087f80]">
              Request an Appointment
            </span>

            <h2 className="mt-3 text-2xl font-extrabold text-[#173f3e] sm:text-3xl">
              Book Your Appointment Today
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              Complete the form below to request your preferred consultation
              date and time. The clinic will confirm your appointment.
            </p>

            <form onSubmit={handleAppointmentSubmit} className="mt-7 space-y-5">
              <div>
                <label
                  htmlFor="bio-full-name"
                  className="mb-2 block text-sm font-semibold text-[#304b49]"
                >
                  Full Name *
                </label>
                <input
                  id="bio-full-name"
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  autoComplete="name"
                  required
                  className="h-12 w-full rounded-lg border border-[#d8e6e2] px-4 text-sm outline-none transition focus:border-[#087f80] focus:ring-2 focus:ring-[#087f80]/10"
                />
              </div>

              <div>
                <label
                  htmlFor="bio-phone"
                  className="mb-2 block text-sm font-semibold text-[#304b49]"
                >
                  Phone Number *
                </label>
                <input
                  id="bio-phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+92 3XX XXXXXXX"
                  autoComplete="tel"
                  required
                  className="h-12 w-full rounded-lg border border-[#d8e6e2] px-4 text-sm outline-none transition focus:border-[#087f80] focus:ring-2 focus:ring-[#087f80]/10"
                />
              </div>

              <div>
                <label
                  htmlFor="bio-date"
                  className="mb-2 block text-sm font-semibold text-[#304b49]"
                >
                  Preferred Date (Monday to Saturday) *
                </label>

                <div className="flex h-12 items-center gap-3 rounded-lg border border-[#d8e6e2] px-4 transition focus-within:border-[#087f80] focus-within:ring-2 focus-within:ring-[#087f80]/10">
                  <CalendarDays size={19} className="shrink-0 text-[#087f80]" />

                  <input
                    id="bio-date"
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleDateChange}
                    min={getLocalDate()}
                    required
                    className="w-full cursor-pointer bg-transparent text-sm text-[#173f3e] outline-none"
                  />
                </div>

                <p className="mt-2 text-xs text-gray-500">
                  Select any available date from Monday to Saturday. Sundays are
                  unavailable.
                </p>
              </div>

              <div>
                <div className="mb-3 flex items-center justify-between gap-3">
                  <label className="block text-sm font-semibold text-[#304b49]">
                    Available Time Slots *
                  </label>

                  <span className="text-xs font-semibold text-[#087f80]">
                    15-minute intervals
                  </span>
                </div>

                {!formData.preferredDate ? (
                  <div className="rounded-xl border border-dashed border-[#c8ded7] bg-[#f8fcfa] px-4 py-6 text-center">
                    <CalendarDays
                      size={25}
                      className="mx-auto text-[#087f80]"
                    />
                    <p className="mt-2 text-sm font-medium text-gray-600">
                      Please select a date to view time slots.
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {timeSlots.map((slot) => {
                      const isSelected = formData.preferredTime === slot;

                      return (
                        <button
                          key={slot}
                          type="button"
                          aria-pressed={isSelected}
                          onClick={() =>
                            setFormData((previous) => ({
                              ...previous,
                              preferredTime: slot,
                            }))
                          }
                          className={`rounded-lg border px-2 py-3 text-sm font-semibold transition duration-200 ${
                            isSelected
                              ? "border-[#087f80] bg-[#087f80] text-white shadow-md shadow-[#087f80]/15"
                              : "border-[#d8e6e2] bg-white text-[#304b49] hover:border-[#087f80] hover:bg-[#f0faf7] hover:text-[#087f80]"
                          }`}
                        >
                          {slot}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-[#f0dfad] bg-[#fff9e9] p-4">
                <Clock3 size={21} className="mt-0.5 shrink-0 text-[#a4771c]" />
                <div>
                  <p className="text-sm font-bold text-[#765719]">
                    Maximum Waiting Time: 15 Minutes
                  </p>
                  <p className="mt-1 text-xs leading-5 text-[#806b3d]">
                    Please arrive or be ready for your consultation at the
                    selected time. A short waiting period of up to 15 minutes
                    may apply.
                  </p>
                </div>
              </div>

              {formData.preferredDate && formData.preferredTime && (
                <div className="rounded-xl border border-[#cce8df] bg-[#f1faf7] p-4">
                  <p className="text-sm font-bold text-[#173f3e]">
                    Your selected appointment
                  </p>
                  <p className="mt-2 text-sm text-[#087f80]">
                    {formData.preferredDate} at {formData.preferredTime}
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={
                  isSubmitting ||
                  !formData.preferredDate ||
                  !formData.preferredTime
                }
                className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#087f80] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#066b6c] disabled:cursor-not-allowed disabled:opacity-60"
              >
                <CalendarDays size={18} />
                {isSubmitting ? "Submitting..." : "Request Appointment"}
              </button>

              <p className="text-center text-xs leading-5 text-gray-500">
                Your request will be sent to the clinic for confirmation.
              </p>
            </form>
          </div>

          <div id="clinics" className="space-y-5">
            <div className="rounded-2xl bg-[#173f3e] p-6 text-white sm:p-8">
              <span className="text-xs font-bold uppercase tracking-[2px] text-[#f2cb68]">
                Visit Our Clinic
              </span>

              <h2 className="mt-3 text-2xl font-extrabold">
                Al Murtaza Hospital
              </h2>

              <div className="mt-6 flex items-start gap-3">
                <MapPin className="mt-0.5 shrink-0 text-[#f2cb68]" size={21} />
                <p className="text-sm leading-7 text-white/80">
                  Shahi Road, Sadiqabad Tehsil, Punjab 64350, Pakistan
                </p>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <Phone className="shrink-0 text-[#f2cb68]" size={20} />
                <a
                  href="tel:+923329671650"
                  className="text-sm font-semibold hover:text-[#f2cb68]"
                >
                  +92 332 9671650
                </a>
              </div>

              <a
                href="https://maps.app.goo.gl/biwB2irEpnuz9Er98?g_st=ic"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#f2cb68] px-5 py-3 text-sm font-bold text-[#173f3e] transition hover:bg-white"
              >
                Get Directions
                <ArrowRight size={17} />
              </a>
            </div>

            <div className="rounded-2xl border border-[#dcece7] bg-white p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e2f4ef] text-[#087f80]">
                  <Clock3 size={23} />
                </div>
                <div>
                  <h3 className="font-bold text-[#173f3e]">
                    Consultation Hours
                  </h3>
                  <p className="mt-1 text-xs text-gray-500">
                    Please confirm before visiting
                  </p>
                </div>
              </div>

              <div className="mt-5 border-t border-[#e5efec] pt-5">
                <p className="text-sm font-semibold text-[#304b49]">
                  Online Consultation
                </p>
                <p className="mt-2 text-sm text-gray-600">10:00 AM – 2:00 PM</p>
                <p className="mt-2 text-xs leading-5 text-gray-500">
                  In-clinic timings may differ. Contact the clinic to confirm
                  the current schedule.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-[#dcece7] bg-white p-6 sm:p-8">
              <h3 className="text-lg font-bold text-[#173f3e]">
                Islamabad Specialists Clinic
              </h3>

              <div className="mt-4 flex items-start gap-3">
                <MapPin size={20} className="mt-0.5 shrink-0 text-[#087f80]" />
                <p className="text-sm leading-6 text-gray-600">
                  IDC Plaza, Plot #04, Shaikh Zayed Hospital, Rahim Yar Khan
                </p>
              </div>

              <div className="mt-4 flex items-start gap-3">
                <Phone size={20} className="mt-0.5 shrink-0 text-[#087f80]" />
                <div className="space-y-2 text-sm text-gray-600">
                  <a
                    href="tel:+923056798529"
                    className="block hover:text-[#087f80]"
                  >
                    +92 305 6798529
                  </a>
                  <a
                    href="tel:+923485928797"
                    className="block hover:text-[#087f80]"
                  >
                    +92 348 5928797
                  </a>
                </div>
              </div>

              <p className="mt-4 text-sm text-gray-600">
                Monday–Saturday, Daily 10:30 am till 1:30 pm
                Friday Sunday OFF
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DoctorBiography;
