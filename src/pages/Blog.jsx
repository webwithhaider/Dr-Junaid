import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const articles = [
  {
    category: "FATTY LIVER",
    urduCategory: "فیٹی لیور",
    title: "What Is Fatty Liver (MASLD)?",
    urduTitle: "فیٹی لیور کیا ہے؟",
    description:
      "Fatty liver means extra fat builds up in the liver. It is often linked with weight gain and diabetes.",
    urduDescription:
      "فیٹی لیور ایسی کیفیت ہے جس میں جگر میں چربی جمع ہونے لگتی ہے۔ اس کا تعلق وزن میں اضافے اور ذیابیطس سے ہو سکتا ہے۔",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85",
    link: "/blog/fatty-liver-masld",
  },
  {
    category: "DIABETES",
    urduCategory: "ذیابیطس",
    title: "Habits That Help Control Blood Sugar",
    urduTitle: "بلڈ شوگر کنٹرول کرنے والی عادات",
    description:
      "Small daily habits make a big difference in diabetes care.",
    urduDescription:
      "روزمرہ کی چھوٹی چھوٹی اچھی عادات ذیابیطس کو سنبھالنے اور صحت بہتر رکھنے میں مدد دے سکتی ہیں۔",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=900&q=85",
    link: "/blog/control-blood-sugar",
  },
  {
    category: "DIGESTIVE HEALTH",
    urduCategory: "نظامِ ہاضمہ",
    title: "When to See a Doctor for Gas and Bloating",
    urduTitle: "گیس اور پیٹ پھولنے پر ڈاکٹر سے کب رجوع کریں؟",
    description:
      "Occasional gas is common, but some signs need prompt attention.",
    urduDescription:
      "کبھی کبھار گیس ہونا عام بات ہے، لیکن بعض علامات کی صورت میں ڈاکٹر سے جلد معائنہ کروانا ضروری ہو سکتا ہے۔",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=85",
    link: "/blog/gas-and-bloating",
  },
];

const urduFont = {
  fontFamily: '"Noto Nastaliq Urdu", "Jameel Noori Nastaleeq", serif',
};

function UrduText({ children, className = "" }) {
  return (
    <p lang="ur" dir="rtl" style={urduFont} className={className}>
      {children}
    </p>
  );
}

function Blog() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f9fa] pt-[104px] text-[#173b49]">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#123f50]">
        <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -right-5 -top-10 h-60 w-60 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-[#218487]/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="inline-flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[2.5px] text-[#f0c94b]">
                <span className="h-[2px] w-8 bg-[#f0c94b]" />
                Health Insights
                <span
                  lang="ur"
                  dir="rtl"
                  style={urduFont}
                  className="text-sm font-medium normal-case tracking-normal"
                >
                  صحت سے متعلق معلومات
                </span>
              </p>

              <h1 className="mt-5 max-w-2xl text-3xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Simple Guidance.
                <span className="block text-[#f0c94b]">
                  Better Health.
                </span>
              </h1>

              <UrduText className="mt-4 max-w-2xl text-2xl font-medium leading-[2.1] text-[#f0c94b] sm:text-3xl">
                آسان رہنمائی، بہتر صحت
              </UrduText>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/75 sm:mt-6 sm:text-base sm:leading-8">
                General health information from our clinic. Explore practical
                guidance on diabetes, fatty liver and digestive health from Dr.
                Junaid Mustafa.
              </p>

              <UrduText className="mt-3 max-w-xl text-base leading-[2.2] text-white/80 sm:text-lg">
                ڈاکٹر جنید مصطفیٰ کی جانب سے ذیابیطس، فیٹی لیور اور نظامِ ہاضمہ
                سے متعلق مفید معلومات اور صحت کے بارے میں رہنمائی حاصل کریں۔
              </UrduText>

              <a
                href="#health-articles"
                className="mt-7 inline-flex min-h-12 flex-wrap items-center justify-center gap-3 rounded-lg bg-[#f0c94b] px-5 py-3.5 text-sm font-bold text-[#173b49] transition hover:bg-[#ffda65] sm:mt-8 sm:px-6"
              >
                <span>Explore Health Articles</span>
                <ArrowRight size={18} />
                <span lang="ur" dir="rtl" style={urduFont} className="text-sm">
                  صحت کے مضامین پڑھیں
                </span>
              </a>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm rounded-3xl border border-white/15 bg-white/[0.07] p-6 backdrop-blur-sm sm:p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f0c94b] text-[#173b49] sm:h-16 sm:w-16">
                  <BookOpen size={31} strokeWidth={1.7} />
                </div>

                <p className="mt-6 text-xl font-bold text-white sm:mt-7 sm:text-2xl">
                  Health knowledge
                  <span className="block text-[#f0c94b]">
                    for everyday life
                  </span>
                </p>

                <UrduText className="mt-3 text-xl font-medium leading-[2.1] text-[#f0c94b]">
                  روزمرہ زندگی کے لیے صحت کی معلومات
                </UrduText>

                <p className="mt-3 text-sm leading-7 text-white/65">
                  Understand common health conditions and learn when to seek
                  professional medical advice.
                </p>

                <UrduText className="mt-2 text-sm leading-[2.2] text-white/75">
                  عام طبی مسائل کو سمجھیں اور جانیں کہ مستند ڈاکٹر سے مشورہ کب
                  لینا چاہیے۔
                </UrduText>

                <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-white/15 sm:mt-7">
                  <div className="h-full w-2/3 rounded-full bg-[#f0c94b]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HEALTH ARTICLES */}
      <section
        id="health-articles"
        className="scroll-mt-28 py-14 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
          <div className="mb-9 flex flex-col justify-between gap-4 sm:mb-10 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[2.5px] text-[#218487]">
                HEALTH INSIGHTS
              </p>

              <UrduText className="mt-1 text-sm leading-[2] text-[#218487]">
                صحت سے متعلق معلومات
              </UrduText>

              <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#173b49] sm:text-4xl">
                Latest Health Articles
              </h2>

              <UrduText className="mt-2 text-xl font-medium leading-[2.1] text-[#218487] sm:text-2xl">
                صحت کے تازہ ترین مضامین
              </UrduText>

              <p className="mt-3 max-w-xl text-sm leading-7 text-[#687b84] sm:mt-4 sm:text-base">
                Reliable general health information to help you make more
                informed decisions about your wellbeing.
              </p>

              <UrduText className="mt-2 max-w-xl text-sm leading-[2.2] text-[#687b84] sm:text-base">
                اپنی صحت کے بارے میں بہتر فیصلے کرنے کے لیے مفید عمومی معلومات
                حاصل کریں۔
              </UrduText>
            </div>

            <div className="w-fit rounded-full border border-[#dce8e9] bg-white px-4 py-2 text-xs font-semibold text-[#547079]">
              <span>3 Health Topics</span>
              <span className="mx-2 text-[#b6c5c8]">·</span>
              <span lang="ur" dir="rtl" style={urduFont}>
                صحت کے 3 موضوعات
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => (
              <article
                key={article.title}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#e0e9e9] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#b8d9d7] hover:shadow-xl"
              >
                {/* Clickable image */}
                <Link
                  to={article.link}
                  aria-label={article.title}
                  className="relative block h-48 overflow-hidden bg-[#e5eeee] sm:h-56"
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#123f50]/65 via-transparent to-transparent" />

                  <div className="absolute bottom-3 left-3 right-3 flex flex-wrap items-end justify-between gap-2 sm:bottom-4 sm:left-4 sm:right-4">
                    <span className="rounded-md bg-[#f0c94b] px-3 py-2 text-[10px] font-bold tracking-wide text-[#173b49]">
                      {article.category}
                    </span>

                    <span
                      lang="ur"
                      dir="rtl"
                      style={urduFont}
                      className="rounded-md bg-white px-3 py-1.5 text-sm leading-[1.8] text-[#173b49]"
                    >
                      {article.urduCategory}
                    </span>
                  </div>
                </Link>

                <div className="flex flex-1 flex-col p-5 sm:p-7">
                  <span className="text-xs font-semibold text-[#218487]">
                    Article 0{index + 1}
                  </span>

                  {/* Clickable English title */}
                  <h3 className="mt-3 text-lg font-bold leading-7 text-[#173b49] transition-colors group-hover:text-[#218487] sm:text-xl">
                    <Link to={article.link}>
                      {article.title}
                    </Link>
                  </h3>

                  {/* Clickable Urdu title */}
                  <UrduText className="mt-2 text-lg font-medium leading-[2.1] text-[#218487]">
                    <Link to={article.link}>
                      {article.urduTitle}
                    </Link>
                  </UrduText>

                  <p className="mt-3 text-sm leading-7 text-[#687b84]">
                    {article.description}
                  </p>

                  <UrduText className="mt-2 text-sm leading-[2.2] text-[#687b84]">
                    {article.urduDescription}
                  </UrduText>

                  <div className="mt-auto border-t border-[#e8eeee] pt-5">
                    <Link
                      to={article.link}
                      className="inline-flex min-h-10 flex-wrap items-center gap-2 text-sm font-bold text-[#197b7e] transition-all hover:gap-3"
                    >
                      <span>Read more</span>
                      <ArrowRight size={17} />
                      <span
                        lang="ur"
                        dir="rtl"
                        style={urduFont}
                        className="text-sm font-medium"
                      >
                        مزید پڑھیں
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* CONSULTATION SECTION */}
          <div className="mt-10 flex flex-col gap-5 rounded-2xl border border-[#dce9e9] bg-white p-5 sm:mt-12 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-[2px] text-[#218487]">
                Need medical advice?
              </p>

              <UrduText className="mt-1 text-sm leading-[2] text-[#218487]">
                طبی مشورے کی ضرورت ہے؟
              </UrduText>

              <h3 className="mt-2 text-xl font-bold text-[#173b49] sm:text-2xl">
                Get guidance from Dr. Junaid Mustafa
              </h3>

              <UrduText className="mt-2 text-lg font-medium leading-[2.1] text-[#218487]">
                ڈاکٹر جنید مصطفیٰ سے رہنمائی حاصل کریں
              </UrduText>

              <p className="mt-2 text-sm leading-6 text-[#687b84]">
                Book a consultation to discuss your health concerns.
              </p>

              <UrduText className="mt-1 text-sm leading-[2.2] text-[#687b84]">
                اپنی صحت سے متعلق مسائل پر بات کرنے کے لیے وقت لیں۔
              </UrduText>
            </div>

            <Link
              to="/contact-us"
              className="inline-flex min-h-12 w-full shrink-0 flex-wrap items-center justify-center gap-3 rounded-lg bg-[#173f50] px-5 py-4 text-sm font-bold text-white transition hover:bg-[#218487] sm:w-auto sm:px-6"
            >
              <span>Book Consultation</span>
              <ArrowRight size={17} />
              <span lang="ur" dir="rtl" style={urduFont} className="text-sm">
                وقت لیں
              </span>
            </Link>
          </div>

          {/* MEDICAL DISCLAIMER */}
          <div className="mt-6 border-l-2 border-[#b8d9d7] pl-4">
            <p className="text-xs leading-6 text-[#819198] sm:text-sm">
              Health articles are for general information and do not replace
              individual medical advice, diagnosis or treatment.
            </p>

            <UrduText className="mt-2 text-sm leading-[2.2] text-[#819198]">
              یہ مضامین صرف عمومی معلومات کے لیے ہیں اور ذاتی طبی مشورے، تشخیص
              یا علاج کا متبادل نہیں ہیں۔
            </UrduText>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Blog;