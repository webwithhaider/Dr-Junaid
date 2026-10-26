import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqItems = [
  {
    question: "Can I consult the doctor online?",
    urduQuestion: "کیا میں ڈاکٹر سے آن لائن مشورہ لے سکتا ہوں؟",
    answer:
      "Yes, you can book a video consultation with Dr. Junaid Mustafa from anywhere in Pakistan. Contact the clinic to arrange your appointment.",
    urduAnswer:
      "جی ہاں، آپ پاکستان میں کہیں سے بھی ڈاکٹر جنید مصطفیٰ کے ساتھ ویڈیو مشاورت کی بکنگ کر سکتے ہیں۔ اپائنٹمنٹ طے کرنے کے لیے کلینک سے رابطہ کریں۔",
  },
  {
    question: "What are the appointment timings?",
    urduQuestion: "اپائنٹمنٹ کے اوقات کیا ہیں؟",
    answer:
      "Clinic timings are Monday to Saturday, from 10:00 AM to 2:00 PM. Please contact the clinic to confirm your appointment slot.",
    urduAnswer:
      "کلینک پیر سے ہفتہ تک صبح 10 بجے سے دوپہر 2 بجے تک کھلا ہوتا ہے۔ اپنی اپائنٹمنٹ کے وقت کی تصدیق کے لیے کلینک سے رابطہ کریں۔",
  },
  {
    question: "How long will I have to wait?",
    urduQuestion: "مجھے کتنی دیر انتظار کرنا پڑے گا؟",
    answer:
      "Waiting time can vary depending on the appointment schedule and patient availability. Please arrive on time for your scheduled consultation.",
    urduAnswer:
      "انتظار کا دورانیہ اپائنٹمنٹ کے شیڈول اور مریضوں کی تعداد کے مطابق مختلف ہو سکتا ہے۔ براہِ کرم اپنی مقررہ اپائنٹمنٹ کے وقت پر پہنچیں۔",
  },
  {
    question: "Where are the clinics located?",
    urduQuestion: "کلینکس کہاں واقع ہیں؟",
    answer:
      "Islamabad Specialists Clinic is located at IDC Plaza, Plot #04, Shaikh Zayed Hospital, Rahim Yar Khan. Dr. Junaid Mustafa Metabolic Clinic is located on Shahi Road, Sadiqabad, Punjab.",
    urduAnswer:
      "اسلام آباد اسپیشلسٹس کلینک، آئی ڈی سی پلازہ، پلاٹ نمبر 04، شیخ زاید ہسپتال، رحیم یار خان میں واقع ہے۔ ڈاکٹر جنید مصطفیٰ میٹابولک کلینک شاہی روڈ، صادق آباد، پنجاب میں واقع ہے۔",
  },
  {
    question: "Which conditions are treated?",
    urduQuestion: "کن بیماریوں اور طبی مسائل کا علاج کیا جاتا ہے؟",
    answer:
      "Consultations focus on metabolic health, diabetes, obesity, fatty liver and digestive health concerns. Contact the clinic to discuss your specific condition.",
    urduAnswer:
      "مشاورت میں میٹابولک صحت، ذیابیطس، موٹاپا، فیٹی لیور اور نظامِ ہاضمہ سے متعلق مسائل پر توجہ دی جاتی ہے۔ اپنی مخصوص طبی کیفیت کے بارے میں جاننے کے لیے کلینک سے رابطہ کریں۔",
  },
  {
    question: "Is endoscopy available?",
    urduQuestion: "کیا اینڈوسکوپی کی سہولت دستیاب ہے؟",
    answer:
      "Endoscopy-related services include gastroscopy, biopsy and band ligation. Contact the clinic to confirm availability and discuss whether a procedure is appropriate for you.",
    urduAnswer:
      "اینڈوسکوپی سے متعلق سہولیات میں معدے کا معائنہ (گیسٹروسکوپی)، بایوپسی اور بینڈ لگانے کا طریقۂ علاج شامل ہیں۔ دستیابی کی تصدیق اور اپنے لیے موزوں طریقۂ علاج جاننے کے لیے کلینک سے رابطہ کریں۔",
  },
];

const urduFont = {
  fontFamily:
    '"Noto Nastaliq Urdu", "Jameel Noori Nastaleeq", serif',
};

function FAQs() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <>
      {/* Navbar spacing */}
      <div className="h-[104px]" />

      {/* Full-width banner image - before FAQs */}
      <section className="w-full overflow-hidden bg-white">
        <img
          src="/faqs-hero.png"
          alt="Dr. Junaid Mustafa - Medical Clinic"
          className="block h-[220px] w-full object-cover object-center sm:h-[340px] lg:h-[480px]"
        />
      </section>

      {/* Existing FAQs Section */}
      <main className="min-h-[70vh] bg-[#F2F6F8] px-4 py-12 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-[850px]">
          {/* Heading */}
          <div className="mb-9 text-center">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[2px] text-[#A18A43]">
              Got Questions?
            </p>

            <h1 className="text-3xl font-bold tracking-tight text-[#193B46] sm:text-[36px]">
              Frequently Asked Questions
            </h1>

            <p
              lang="ur"
              dir="rtl"
              style={urduFont}
              className="mx-auto mt-3 text-base leading-[2.2] text-[#647681] sm:text-lg"
            >
              اکثر پوچھے جانے والے سوالات
            </p>

            <p className="mx-auto mt-3 max-w-[560px] text-sm leading-6 text-[#647681]">
              Find answers to common questions about appointments,
              online consultations, treatments and our clinics.
            </p>

            <p
              lang="ur"
              dir="rtl"
              style={urduFont}
              className="mx-auto mt-2 max-w-[650px] text-sm leading-[2.3] text-[#647681] sm:text-base"
            >
              اپائنٹمنٹ، آن لائن مشاورت، علاج اور ہمارے کلینکس سے متعلق
              عام سوالات کے جوابات یہاں حاصل کریں۔
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-3">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <article
                  key={item.question}
                  className={`overflow-hidden rounded-xl border bg-white transition-all duration-200 ${
                    isOpen
                      ? "border-[#C9DDE2] shadow-[0_5px_18px_rgba(16,63,77,0.05)]"
                      : "border-[#E5EBEE] shadow-[0_2px_8px_rgba(16,63,77,0.025)] hover:border-[#C9DDE2]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenIndex(isOpen ? -1 : index)
                    }
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left sm:px-6 sm:py-[17px]"
                  >
                    <span className="min-w-0 flex-1">
                      <span className="block text-[13px] font-semibold leading-6 text-[#193B46] sm:text-sm">
                        {item.question}
                      </span>

                      <span
                        lang="ur"
                        dir="rtl"
                        style={urduFont}
                        className="mt-1 block text-sm leading-[2.1] text-[#647681] sm:text-base"
                      >
                        {item.urduQuestion}
                      </span>
                    </span>

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F0F6F7] text-[#176477]">
                      {isOpen ? (
                        <Minus size={17} strokeWidth={1.8} />
                      ) : (
                        <Plus size={17} strokeWidth={1.8} />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-6">
                      <div className="border-t border-[#EDF1F3] pt-4">
                        <p className="text-[13px] leading-7 text-[#647681] sm:text-sm">
                          {item.answer}
                        </p>

                        <p
                          lang="ur"
                          dir="rtl"
                          style={urduFont}
                          className="mt-3 border-t border-[#EDF1F3] pt-3 text-sm leading-[2.4] text-[#647681] sm:text-base"
                        >
                          {item.urduAnswer}
                        </p>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>

          {/* Contact CTA */}
          <div className="mt-9 rounded-2xl border border-[#DCE8EB] bg-white px-5 py-7 text-center sm:px-8">
            <p className="text-base font-semibold text-[#193B46]">
              Still have questions?
            </p>

            <p
              lang="ur"
              dir="rtl"
              style={urduFont}
              className="mt-1 text-base leading-[2.2] text-[#647681]"
            >
              کیا آپ کا کوئی اور سوال ہے؟
            </p>

            <p className="mt-3 text-sm leading-6 text-[#647681]">
              Contact the clinic for more information or appointment
              assistance.
            </p>

            <p
              lang="ur"
              dir="rtl"
              style={urduFont}
              className="mt-1 text-sm leading-[2.3] text-[#647681]"
            >
              مزید معلومات یا اپائنٹمنٹ کے لیے کلینک سے رابطہ کریں۔
            </p>

            <a
              href="tel:+923329671650"
              className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-[#087F8C] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#066975] sm:w-auto"
            >
              Contact the Clinic
            </a>

            <p
              lang="ur"
              dir="rtl"
              style={urduFont}
              className="mt-2 text-sm leading-[2.2] text-[#087F8C]"
            >
              کلینک سے رابطہ کریں
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default FAQs;