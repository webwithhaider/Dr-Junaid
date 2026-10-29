import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Mail,
  MapPin,
  Phone,
  XCircle,
  MessageCircle,
  Building2,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";


const API_URL = import.meta.env.VITE_API_URL;

const initialForm = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

// const faqs = [
//   {
//     question: "Can I consult the doctor online?",
//     answer:
//       "Yes. Online video consultations are available for patients across Pakistan. Contact the clinic to confirm the appointment and available timings.",
//   },
//   {
//     question: "What are the appointment timings?",
//     answer:
//       "Appointments are generally available Monday to Saturday, between 10:00 AM and 2:00 PM. Please contact the clinic to confirm availability.",
//   },
//   {
//     question: "How long will I have to wait?",
//     answer:
//       "The expected maximum waiting time is 15 minutes, although it may vary depending on the clinic schedule and patient appointments.",
//   },
//   {
//     question: "Where are the clinics located?",
//     answer:
//       "The listed clinic locations are Islamabad Specialists Clinic in Rahim Yar Khan and Dr. Junaid Mustafa Metabolic Clinic in Sadiqabad.",
//   },
//   {
//     question: "Which conditions are treated?",
//     answer:
//       "The clinic focuses on diabetes, obesity, fatty liver, liver diseases, hepatitis and digestive health concerns.",
//   },
//   {
//     question: "Is endoscopy available?",
//     answer:
//       "Selected in-clinic procedures, including endoscopy-related services, may be available. Please contact the clinic to confirm the service you need.",
//   },
// ];

function ContactUs() {
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const [openFaq, setOpenFaq] = useState(null);

  const [toast, setToast] = useState({
    show: false,
    type: "",
    message: "",
  });

  const showToast = (type, message) => {
    setToast({ show: true, type, message });

    setTimeout(() => {
      setToast({
        show: false,
        type: "",
        message: "",
      });
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

    if (!API_URL) {
      showToast(
        "error",
        "Server configuration is missing. Please try again later."
      );
      console.error("VITE_API_URL is not configured in the Vercel environment.");
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch(`${API_URL.replace(/\/+$/, "")}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to submit your message. Please try again."
        );
      }

      showToast(
        "success",
        data.message || "Thank you! Your message has been submitted successfully."
      );

      setFormData({ ...initialForm });
    } catch (error) {
      console.error("Contact Form Error:", error);

      showToast(
        "error",
        error.message === "Failed to fetch"
          ? "Unable to connect to the server. Please try again later."
          : error.message || "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-[#dce7eb] bg-[#f5f9fb] px-4 py-3.5 text-sm text-[#173c49] outline-none transition placeholder:text-[#8a9da5] focus:border-[#17647a] focus:bg-white focus:ring-2 focus:ring-[#17647a]/10";

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f3f8fb] pt-[104px] text-[#163b48]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#104f63] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full bg-[#24748a]/30 blur-3xl" />
        <div className="absolute -bottom-36 -left-16 h-80 w-80 rounded-full bg-[#0b3c4c]/70 blur-3xl" />

        <div className="relative mx-auto max-w-[1200px] text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#f0d36f]">
            <MessageCircle size={14} />
            Contact & Support
          </span>

          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            We&apos;re Here to Help You
          </h1>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-[#e9c957]" />

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
            Have a question about your health, an appointment, or our clinic
            services? Get in touch with Dr. Junaid Mustafa&apos;s team.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#contact-form"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#e9c957] px-7 py-3 text-sm font-bold text-[#123d4b] transition hover:bg-[#f3dc83]"
            >
              Send an Enquiry
              <ArrowRight size={17} />
            </a>

            <a
              href="tel:+923329671650"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/35 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <Phone size={16} />
              Call the Clinic
            </a>
          </div>
        </div>
      </section>

      {/* QUICK CONTACT STRIP */}
      <section className="relative z-10 px-5 sm:px-8 lg:px-12">
        <div className="mx-auto -mt-7 grid max-w-[1200px] gap-4 sm:grid-cols-3">
          <a
            href="tel:+923329671650"
            className="flex items-center gap-4 rounded-2xl border border-[#e5edf1] bg-white p-5 shadow-[0_8px_30px_rgba(17,63,78,0.06)] transition hover:-translate-y-1"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e7f2f6] text-[#155c71]">
              <Phone size={21} />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-medium text-[#718892]">Call Us</p>
              <p className="mt-1 text-sm font-bold text-[#153f4d]">
                +92 332 9671650
              </p>
            </div>
          </a>

          <a
            href="mailto:info@royalmedical.ae"
            className="flex items-center gap-4 rounded-2xl border border-[#e5edf1] bg-white p-5 shadow-[0_8px_30px_rgba(17,63,78,0.06)] transition hover:-translate-y-1"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#fff7dc] text-[#9a7b20]">
              <Mail size={21} />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-medium text-[#718892]">
                Email Enquiries
              </p>
              <p className="mt-1 break-all text-sm font-bold text-[#153f4d]">
                doctorjunaidmustafa@hotmail.com
              </p>
            </div>
          </a>

          <div className="flex items-center gap-4 rounded-2xl border border-[#e5edf1] bg-white p-5 shadow-[0_8px_30px_rgba(17,63,78,0.06)]">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e7f2f6] text-[#155c71]">
              <Clock3 size={21} />
            </div>
            <div>
              <p className="text-xs font-medium text-[#718892]">Clinic Hours</p>
              <p className="mt-1 text-sm font-bold text-[#153f4d]">
                Mon–Sat, 10:30 AM–1:30 PM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS + FORM */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
          {/* LEFT SIDE */}
          <div className="pt-2">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a28b35]">
              Get in Touch
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-[#153d4b] sm:text-4xl">
              Let&apos;s Talk About Your Health
            </h2>

            <div className="mt-5 h-1 w-16 rounded-full bg-[#e9c957]" />

            <p className="mt-5 text-sm leading-7 text-[#687f89] sm:text-base">
              Whether you need appointment assistance, have a general enquiry,
              or want to learn more about our services, our team is ready to
              help.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex gap-4 rounded-2xl border border-[#e3edf1] bg-white p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e8f3f6] text-[#155c71]">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#153d4b]">
                    General Enquiries
                  </h3>
                  <a
                    href="tel:+923329671650"
                    className="mt-2 block text-sm text-[#687f89] hover:text-[#155c71]"
                  >
                    +92 332 9671650
                  </a>
                  <a
                    href="mailto:doctorjunaidmustafa@hotmail.com"
                    className="mt-1 block break-all text-sm text-[#687f89] hover:text-[#155c71]"
                  >
                    doctorjunaidmustafa@hotmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl border border-[#e3edf1] bg-white p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fff7dc] text-[#9a7b20]">
                  <CalendarDays size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#153d4b]">
                    Appointments
                  </h3>
                  <a
                    href="tel:+923056798529"
                    className="mt-2 block text-sm text-[#687f89] hover:text-[#155c71]"
                  >
                    +92 305 6798529
                  </a>
                  <p className="mt-1 text-sm text-[#687f89]">
                    Monday to Saturday
                  </p>
                  <p className="mt-1 text-sm text-[#687f89]">
                    10:30 AM – 1:30 PM
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl border border-[#e3edf1] bg-white p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e8f3f6] text-[#155c71]">
                  <Building2 size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#153d4b]">
                    Our Clinics
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#687f89]">
                    Islamabad Specialists Clinic, Rahim Yar Khan
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[#687f89]">
                    Dr. Junaid Mustafa Al Murtaza Hospital, Sadiqabad
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-3 rounded-2xl border border-[#e8dba5] bg-[#fff9e7] p-5">
              <ShieldCheck
                size={23}
                className="mt-0.5 shrink-0 text-[#9a7b20]"
              />
              <div>
                <h3 className="text-sm font-bold text-[#604e19]">
                  Your enquiry matters
                </h3>
                <p className="mt-1 text-sm leading-6 text-[#7c704b]">
                  Please do not include highly sensitive medical or personal
                  information in this general contact form.
                </p>
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div
            id="contact-form"
            className="scroll-mt-28 rounded-3xl border border-[#e0eaee] bg-white p-5 shadow-[0_15px_50px_rgba(17,63,78,0.07)] sm:p-8 lg:p-10"
          >
            <div className="mb-7">
              <span className="inline-flex rounded-full bg-[#eaf4f7] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.17em] text-[#155c71]">
                Contact Form
              </span>

              <h2 className="mt-4 text-2xl font-bold text-[#153d4b] sm:text-3xl">
                Send Us a Message
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#71858e]">
                Fill in the details below and our team will get back to you.
                Fields marked with * are required.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-xs font-bold text-[#355560]"
                  >
                    Full Name <span className="text-[#bd5147]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    autoComplete="name"
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-xs font-bold text-[#355560]"
                  >
                    Email Address <span className="text-[#bd5147]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="mb-2 block text-xs font-bold text-[#355560]"
                  >
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+92 000 0000000"
                    autoComplete="tel"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="mb-2 block text-xs font-bold text-[#355560]"
                  >
                    Subject
                  </label>

                  <div className="relative">
                    <select
                      id="contact-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`${inputClass} appearance-none pr-10`}
                    >
                      <option value="">Select a subject</option>
                      <option value="General Enquiry">General Enquiry</option>
                      <option value="Appointment">Appointment</option>
                      <option value="Career">Career</option>
                      <option value="Procurement">Procurement</option>
                      <option value="Patient Rights">Patient Rights</option>
                      <option value="Other">Other</option>
                    </select>

                    <ChevronDown
                      size={17}
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#78909a]"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-xs font-bold text-[#355560]"
                >
                  Your Message <span className="text-[#bd5147]">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  required
                  rows={6}
                  className={`${inputClass} resize-y leading-6`}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 flex min-h-[52px] w-full items-center justify-center gap-3 rounded-full bg-[#155c71] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#10495b] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? (
                  "Submitting Your Message..."
                ) : (
                  <>
                    Submit Message
                    <ArrowRight size={17} />
                  </>
                )}
              </button>

              <p className="mt-4 text-center text-xs leading-5 text-[#81939b]">
                Our team will review your enquiry and respond as soon as
                possible.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* CLINIC LOCATIONS */}
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a28b35]">
              Find Us
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#153d4b] sm:text-4xl">
              Our Clinic Locations
            </h2>

            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#e9c957]" />

            <p className="mt-5 text-sm leading-7 text-[#71858e] sm:text-base">
              Visit a clinic in person or enquire about online consultations
              from anywhere in Pakistan.
            </p>
          </div>

          <div className="space-y-5">
            {/* RAHIM YAR KHAN */}
            <div className="grid overflow-hidden rounded-2xl border border-[#e2ebef] bg-white shadow-[0_8px_30px_rgba(17,63,78,0.05)] md:grid-cols-[0.9fr_1.1fr]">
              <div className="p-6 sm:p-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#a28b35]">
                  Islamabad Specialists Clinic
                </p>

                <h3 className="mt-3 text-2xl font-bold text-[#153d4b]">
                  Rahim Yar Khan
                </h3>

                <div className="mt-5 space-y-3 text-sm leading-6 text-[#71858e]">
                  <p className="flex items-start gap-2">
                    <MapPin
                      size={17}
                      className="mt-0.5 shrink-0 text-[#155c71]"
                    />
                    IDC Plaza, Plot #04, Shaikh Zayed Hospital, Rahim Yar Khan
                  </p>

                  <p className="flex items-center gap-2">
                    <Phone size={16} className="shrink-0 text-[#155c71]" />
                    <a
                      href="tel:+923056798529"
                      className="hover:text-[#155c71]"
                    >
                      +92 305 6798529
                    </a>
                  </p>

                  <p className="flex items-center gap-2">
                    <Phone size={16} className="shrink-0 text-[#155c71]" />
                    <a
                      href="tel:+923485928797"
                      className="hover:text-[#155c71]"
                    >
                      +92 348 5928797
                    </a>
                  </p>

                  <p className="flex items-center gap-2">
                    <Clock3 size={16} className="shrink-0 text-[#155c71]" />
                    Monday–Saturday, 10:30 AM–1:30 PM
                  </p>
                </div>

                <a
                  href="https://maps.app.goo.gl/biwB2irEpnuz9Er98?g_st=ic"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#155c71] px-5 py-3 text-xs font-bold text-white transition hover:bg-[#10495b]"
                >
                  Get Directions
                  <ArrowRight size={15} />
                </a>
              </div>

              <div className="relative min-h-[260px] bg-[#d8eaf0] md:min-h-[320px]">
                <iframe
                  title="Islamabad Specialists Clinic map, Rahim Yar Khan"
                  src="https://maps.app.goo.gl/biwB2irEpnuz9Er98?g_st=ic"
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* SADIQABAD */}
            <div className="grid overflow-hidden rounded-2xl border border-[#e2ebef] bg-white shadow-[0_8px_30px_rgba(17,63,78,0.05)] md:grid-cols-[0.9fr_1.1fr]">
              <div className="p-6 sm:p-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#a28b35]">
                  Dr. Junaid Mustafa Metabolic Clinic
                </p>

                <h3 className="mt-3 text-2xl font-bold text-[#153d4b]">
                  Sadiqabad
                </h3>

                <div className="mt-5 space-y-3 text-sm leading-6 text-[#71858e]">
                  <p className="flex items-start gap-2">
                    <MapPin
                      size={17}
                      className="mt-0.5 shrink-0 text-[#155c71]"
                    />
                    Shahi Road, Sadiqabad Tehsil, Punjab 64350, Pakistan
                  </p>

                  <p className="flex items-center gap-2">
                    <Phone size={16} className="shrink-0 text-[#155c71]" />
                    <a
                      href="tel:+923329671650"
                      className="hover:text-[#155c71]"
                    >
                      +92 332 9671650
                    </a>
                  </p>

                  <p className="flex items-center gap-2">
                    <Clock3 size={16} className="shrink-0 text-[#155c71]" />
                    Call to confirm clinic timings
                  </p>
                </div>

                <a
                  href="https://maps.app.goo.gl/K9oRc4w5Rv7XWxDK8"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#155c71] px-5 py-3 text-xs font-bold text-white transition hover:bg-[#10495b]"
                >
                  Get Directions
                  <ArrowRight size={15} />
                </a>
              </div>

              <div className="relative min-h-[260px] bg-[#d8eaf0] md:min-h-[320px]">
                <iframe
                  title="Dr. Junaid Mustafa Metabolic Clinic map, Sadiqabad"
                  src="https://maps.google.com/maps?q=28.4233262,70.3130453&z=15&output=embed"
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-[#104f63] px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-7 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f0d36f]">
              Dr. Junaid Mustafa
            </p>

            <h2 className="mt-3 max-w-2xl text-2xl font-bold leading-tight text-white sm:text-3xl">
              Have a question? We&apos;re just a call away.
            </h2>

            <p className="mt-3 text-sm leading-6 text-white/75">
              Contact the clinic for appointment enquiries and service
              information.
            </p>
          </div>

          <a
            href="tel:+923329671650"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-full bg-[#e9c957] px-7 py-3 text-sm font-bold text-[#123d4b] transition hover:bg-[#f3dc83]"
          >
            <Phone size={17} />
            Call Now
            <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* SUCCESS / ERROR TOAST */}
      {toast.show && (
        <div className="fixed right-4 top-24 z-[200] w-[calc(100%-2rem)] max-w-[390px] sm:right-6">
          <div
            role="status"
            aria-live="polite"
            className={`flex items-start gap-3 rounded-2xl border bg-white px-5 py-4 shadow-[0_15px_45px_rgba(17,63,78,0.18)] ${
              toast.type === "success"
                ? "border-[#b9dfcf]"
                : "border-[#f0c5c2]"
            }`}
          >
            {toast.type === "success" ? (
              <CheckCircle2
                size={23}
                className="shrink-0 text-[#198754]"
              />
            ) : (
              <XCircle size={23} className="shrink-0 text-[#b42318]" />
            )}

            <p
              className={`text-sm font-semibold leading-6 ${
                toast.type === "success"
                  ? "text-[#216747]"
                  : "text-[#a52a24]"
              }`}
            >
              {toast.message}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}

export default ContactUs;