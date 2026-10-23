import { useState } from "react";
import {
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  X,
  XCircle,
} from "lucide-react";

const API_URL = "http://localhost:5000/api/appointments";

const initialFormData = {
  fullName: "",
  phone: "",
  email: "",
  preferredDate: "",
  specialty: "Diabetes & Metabolic Health",
  doctorName: "Dr. Junaid Mustafa",
  message: "",
};

function DoctorHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [toast, setToast] = useState({
    show: false,
    type: "",
    message: "",
  });

  const showToast = (type, message) => {
    setToast({ show: true, type, message });

    setTimeout(() => {
      setToast({ show: false, type: "", message: "" });
    }, 4000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName.trim(),
          phone: formData.phone.trim(),
          preferredDate: formData.preferredDate,
          doctorName: "Dr. Junaid Mustafa",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to submit your request.");
      }

      setFormData(initialFormData);
      setIsModalOpen(false);

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
      <section className="relative overflow-hidden bg-[#10566b] text-white">
        <div className="mx-auto flex min-h-[340px] max-w-[1440px] flex-col items-center justify-center px-5 py-14 text-center sm:min-h-[390px] sm:px-8 sm:py-16 lg:min-h-[420px]">
          <p className="text-[9px] font-extrabold uppercase tracking-[2px] text-[#f3c83e] sm:text-[11px] sm:tracking-[2.5px]">
            Number One Online Doctor Consultation in Pakistan
          </p>

          <h1 className="mt-5 max-w-[950px] text-[34px] font-extrabold leading-[1.15] tracking-[-0.8px] sm:text-[46px] lg:text-[54px]">
            <span className="text-white">Metabolic Health.</span>{" "}
            <span className="text-[#f4c632]">Better Life.</span>
          </h1>

          <p className="mt-5 max-w-[650px] text-[12px] leading-[1.9] text-[#e0edf0] sm:text-[14px]">
            Consult Dr. Junaid Mustafa, Consultant Physician and diabetes expert
            with 20+ years of experience, by video call from anywhere in
            Pakistan. Specialised care for diabetes, obesity, fatty liver,
            hepatitis and digestive diseases.
          </p>

          <div className="mt-6 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex min-h-[43px] w-full items-center justify-center gap-2 rounded-full bg-[#f4c632] px-6 py-3 text-[12px] font-bold text-[#173f49] transition duration-300 hover:-translate-y-0.5 hover:bg-[#ffda58] sm:w-auto"
            >
              Book Video Consultation
              <CalendarDays size={15} />
            </button>

            <a
              href="#clinics"
              className="inline-flex min-h-[43px] w-full items-center justify-center rounded-full border border-[#b8d4dc] bg-transparent px-7 py-3 text-[12px] font-semibold text-white transition duration-300 hover:border-[#f4c632] hover:bg-white/10 sm:w-auto"
            >
              Our Clinics
            </a>
          </div>

          <div className="mt-6 flex max-w-[800px] flex-wrap items-center justify-center gap-2">
            {[
              "20+ Years Experience",
              "FCPS Medicine",
              "Online Video Consultation",
              "2 Clinics",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/20 bg-white/[0.04] px-3 py-1.5 text-[9px] font-medium tracking-[0.1px] text-[#e3eef1] sm:text-[10px]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-[150] flex items-center justify-center overflow-y-auto bg-black/60 px-3 py-5 backdrop-blur-sm sm:px-5"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget && !isSubmitting) {
              setIsModalOpen(false);
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="appointment-title"
            className="my-auto max-h-[94vh] w-full max-w-[760px] overflow-y-auto rounded-2xl bg-white text-[#24444a] shadow-2xl"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#e0ebed] bg-white px-5 py-5 sm:px-8">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#14758a]">
                  Dr. Junaid Mustafa
                </p>

                <h2
                  id="appointment-title"
                  className="mt-2 text-2xl font-extrabold text-[#10566b] sm:text-3xl"
                >
                  Book Video Consultation
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                disabled={isSubmitting}
                aria-label="Close appointment form"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#edf5f6] text-[#10566b] transition hover:bg-[#dcebee] disabled:opacity-50"
              >
                <X size={21} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-5 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="hero-full-name"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Full Name *
                  </label>

                  <input
                    id="hero-full-name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    autoComplete="name"
                    required
                    className="h-12 w-full rounded-lg border border-[#d5e2e5] px-4 text-sm outline-none focus:border-[#14758a] focus:ring-2 focus:ring-[#14758a]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="hero-phone"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Mobile Number *
                  </label>

                  <input
                    id="hero-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+92 3XX XXXXXXX"
                    autoComplete="tel"
                    required
                    className="h-12 w-full rounded-lg border border-[#d5e2e5] px-4 text-sm outline-none focus:border-[#14758a] focus:ring-2 focus:ring-[#14758a]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="hero-email"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Email Address
                  </label>

                  <input
                    id="hero-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                    className="h-12 w-full rounded-lg border border-[#d5e2e5] px-4 text-sm outline-none focus:border-[#14758a] focus:ring-2 focus:ring-[#14758a]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="hero-date"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Preferred Date *
                  </label>

                  <input
                    id="hero-date"
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    min={new Date().toLocaleDateString("en-CA")}
                    required
                    className="h-12 w-full rounded-lg border border-[#d5e2e5] px-4 text-sm outline-none focus:border-[#14758a] focus:ring-2 focus:ring-[#14758a]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="hero-specialty"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Consultation For
                  </label>

                  <div className="relative">
                    <select
                      id="hero-specialty"
                      name="specialty"
                      value={formData.specialty}
                      onChange={handleChange}
                      className="h-12 w-full appearance-none rounded-lg border border-[#d5e2e5] bg-white px-4 pr-10 text-sm outline-none focus:border-[#14758a]"
                    >
                      <option>Diabetes & Metabolic Health</option>
                      <option>Obesity</option>
                      <option>Fatty Liver</option>
                      <option>Liver & Hepatitis</option>
                      <option>Digestive Health</option>
                      <option>General Consultation</option>
                    </select>

                    <ChevronDown
                      size={17}
                      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="hero-doctor"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Doctor
                  </label>

                  <input
                    id="hero-doctor"
                    value="Dr. Junaid Mustafa"
                    readOnly
                    className="h-12 w-full rounded-lg border border-[#d5e2e5] bg-[#f4f8f9] px-4 text-sm"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="hero-message"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Message
                  </label>

                  <textarea
                    id="hero-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Tell us briefly about your consultation needs"
                    className="w-full rounded-lg border border-[#d5e2e5] px-4 py-3 text-sm outline-none focus:border-[#14758a] focus:ring-2 focus:ring-[#14758a]/10"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#f4c632] px-5 py-3 text-sm font-extrabold text-[#173f49] transition hover:bg-[#ffda58] disabled:cursor-not-allowed disabled:opacity-60"
              >
                <CalendarDays size={18} />
                {isSubmitting ? "Submitting..." : "Request Appointment"}
              </button>

              <p className="mt-3 text-center text-xs leading-5 text-gray-500">
                Your appointment is subject to confirmation by the clinic.
              </p>
            </form>
          </div>
        </div>
      )}

      {toast.show && (
        <div
          role="status"
          aria-live="polite"
          className="fixed right-4 top-5 z-[200] flex w-[calc(100%-2rem)] max-w-[390px] items-start gap-3 rounded-xl bg-white p-4 shadow-xl sm:right-6 sm:top-6"
        >
          {toast.type === "success" ? (
            <CheckCircle2 size={22} className="shrink-0 text-green-600" />
          ) : (
            <XCircle size={22} className="shrink-0 text-red-600" />
          )}

          <div className="min-w-0 flex-1">
            <p
              className={`text-sm font-bold ${
                toast.type === "success" ? "text-green-700" : "text-red-700"
              }`}
            >
              {toast.type === "success" ? "Success" : "Error"}
            </p>
            <p className="mt-1 text-sm leading-5 text-gray-600">
              {toast.message}
            </p>
          </div>

          <button
            type="button"
            aria-label="Dismiss notification"
            onClick={() => setToast({ show: false, type: "", message: "" })}
            className="text-gray-400 hover:text-gray-700"
          >
            <X size={17} />
          </button>
        </div>
      )}
    </>
  );
}

export default DoctorHero;
