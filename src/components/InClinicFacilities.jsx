import {
  Activity,
  ArrowUpRight,
  Bandage,
  CheckCircle2,
  ShieldAlert,
  Stethoscope,
} from "lucide-react";

const facilities = [
  {
    number: "01",
    title: "Gastroscopy",
    urduTitle: "معدے کا معائنہ",
    description: "Examination of the stomach with endoscope",
    urduDescription: "ایک خاص کیمرے والی باریک نلکی کے ذریعے معدے کا معائنہ۔",
    icon: Stethoscope,
  },
  {
    number: "02",
    title: "Biopsy",
    urduTitle: "بایوپسی",
    description: "Of the stomach and food pipe",
    urduDescription:
      "معدے یا غذائی نالی سے ٹشو کا چھوٹا نمونہ لے کر جانچ کرنا۔",
    icon: Activity,
  },
  {
    number: "03",
    title: "Band Ligation",
    urduTitle: "ربڑ بینڈ کے ذریعے علاج",
    description: "Stopping bleeding without surgery",
    urduDescription:
      "مخصوص حالتوں میں ربڑ بینڈ کی مدد سے خون بہنا روکنے کا طریقہ۔",
    icon: Bandage,
  },
  {
    number: "04",
    title: "Emergency Care",
    urduTitle: "ہنگامی طبی سہولت",
    description: "Treatment of black stools and vomiting of blood",
    urduDescription:
      "کالے پاخانے یا خون کی الٹی جیسی علامات میں فوری طبی معائنہ اور علاج۔",
    icon: ShieldAlert,
  },
];

const urduFont = {
  fontFamily: '"Noto Nastaliq Urdu", "Jameel Noori Nastaleeq", serif',
};

function InClinicFacilities() {
  return (
    <section
      id="in-clinic-facilities"
      className="relative overflow-hidden bg-[#f4f7f8] py-16 sm:py-20 lg:py-24"
    >
      <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-[#d8e9e9]/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-[#e9e2cc]/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <div className="mb-6 inline-flex flex-wrap items-center gap-2 rounded-full border border-[#d8e4e5] bg-white px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#1b7779]" />

              <span className="text-xs font-bold uppercase tracking-[2px] text-[#24696b]">
                In-Clinic Facilities
              </span>

              <span
                lang="ur"
                dir="rtl"
                style={urduFont}
                className="text-sm text-[#8c8980]"
              >
                · کلینک کی سہولیات
              </span>
            </div>

            <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight text-[#173b49] sm:text-4xl lg:text-[48px]">
              Advanced Endoscopy
              <span className="mt-1 block text-[#237c7d]">at the Clinic</span>
              <span
                lang="ur"
                dir="rtl"
                style={urduFont}
                className="mt-4 block text-2xl font-medium leading-[2] text-[#237c7d] sm:text-3xl"
              >
                کلینک میں جدید اینڈوسکوپی کی سہولت
              </span>
            </h2>

            <p className="mt-5 max-w-lg text-base leading-8 text-[#63747b] sm:text-lg">
              Procedures that need a physical visit are available at our clinic.
            </p>

            <p
              lang="ur"
              dir="rtl"
              style={urduFont}
              className="mt-3 max-w-lg text-base leading-[2.2] text-[#63747b] sm:text-lg"
            >
              ایسے طبی معائنے اور طریقۂ علاج جن کے لیے کلینک آنا ضروری ہو، یہاں
              دستیاب ہیں۔
            </p>

            <div className="mt-8 flex items-start gap-4 rounded-2xl border border-[#dce8e7] bg-white p-5 shadow-sm sm:p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e6f2f0] text-[#237c7d]">
                <Stethoscope size={24} strokeWidth={1.8} />
              </div>

              <div className="min-w-0">
                <h3 className="font-semibold text-[#173b49]">
                  Specialist-led care
                </h3>

                <p
                  lang="ur"
                  dir="rtl"
                  style={urduFont}
                  className="mt-1 text-base leading-[2] text-[#237c7d]"
                >
                  ماہر ڈاکٹر کی نگرانی میں طبی سہولیات
                </p>

                <p className="mt-2 text-sm leading-6 text-[#6b7b81]">
                  Visit the clinic for procedures that require an in-person
                  assessment.
                </p>

                <p
                  lang="ur"
                  dir="rtl"
                  style={urduFont}
                  className="mt-2 text-sm leading-[2.1] text-[#6b7b81]"
                >
                  ان معائنوں کے لیے کلینک تشریف لائیں جن میں ڈاکٹر کا بالمشافہ
                  معائنہ ضروری ہو۔
                </p>
              </div>
            </div>

            <a
              href="#appointment"
              className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#1d7375] px-5 py-4 text-sm font-semibold text-white shadow-lg shadow-[#1d7375]/15 transition duration-300 hover:-translate-y-1 hover:bg-[#165d5f] sm:w-auto sm:px-6"
            >
              Request an Appointment
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {facilities.map((facility) => {
              const Icon = facility.icon;

              return (
                <article
                  key={facility.number}
                  className="group relative h-full overflow-hidden rounded-2xl border border-[#e0e9e9] bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#b8d7d5] hover:shadow-xl hover:shadow-[#173b49]/5 sm:p-6 lg:p-7"
                >
                  <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-[#f1f7f6] transition duration-300 group-hover:bg-[#e1f0ed]" />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e7f2f0] text-[#247779] transition duration-300 group-hover:bg-[#1d7375] group-hover:text-white">
                        <Icon size={23} strokeWidth={1.8} />
                      </div>

                      <span className="text-sm font-semibold tracking-widest text-[#b3c4c5]">
                        {facility.number}
                      </span>
                    </div>

                    <div className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="text-lg font-bold text-[#173b49] sm:text-xl">
                        {facility.title}
                      </h3>

                      <span
                        lang="ur"
                        dir="rtl"
                        style={urduFont}
                        className="text-base font-medium leading-[2] text-[#237c7d] sm:text-lg"
                      >
                        {facility.urduTitle}
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-7 text-[#687980]">
                      {facility.description}
                    </p>

                    <p
                      lang="ur"
                      dir="rtl"
                      style={urduFont}
                      className="mt-2 text-sm leading-[2.2] text-[#526c72]"
                    >
                      {facility.urduDescription}
                    </p>

                    <div className="mt-5 flex items-center gap-2 border-t border-[#edf1f1] pt-4 text-xs font-semibold text-[#418183]">
                      <CheckCircle2 size={15} className="shrink-0" />
                      <span>In-clinic facility</span>
                    </div>

                    <p
                      lang="ur"
                      dir="rtl"
                      style={urduFont}
                      className="mt-1 text-sm leading-[2] text-[#418183]"
                    >
                      کلینک میں دستیاب سہولت
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default InClinicFacilities;
