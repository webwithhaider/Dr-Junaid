
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Activity,
  HeartPulse,
  Calculator,
  Flame,
  Scale,
  Clock3,
  Star,
  MessageCircle,
  BookOpen,
} from "lucide-react";

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
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    readTime: "5 min read",
    urduReadTime: "5 منٹ کا مطالعہ",
  },
  {
    category: "DIABETES",
    urduCategory: "ذیابیطس",
    title: "Habits That Help Control Blood Sugar",
    urduTitle: "بلڈ شوگر کنٹرول کرنے کی عادات",
    description:
      "Small daily habits make a big difference in diabetes care and long-term metabolic health.",
    urduDescription:
      "روزمرہ کی چھوٹی چھوٹی اچھی عادات ذیابیطس کو سنبھالنے اور طویل مدتی صحت بہتر رکھنے میں مدد دے سکتی ہیں۔",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80",
    readTime: "4 min read",
    urduReadTime: "4 منٹ کا مطالعہ",
  },
  {
    category: "DIGESTIVE HEALTH",
    urduCategory: "نظامِ ہاضمہ",
    title: "When to See a Doctor for Gas and Bloating",
    urduTitle: "گیس اور پیٹ پھولنے پر ڈاکٹر سے کب رجوع کریں؟",
    description:
      "Occasional gas is common, but some symptoms may need medical assessment and attention.",
    urduDescription:
      "کبھی کبھار گیس ہونا عام بات ہے، لیکن بعض علامات کی صورت میں ڈاکٹر سے معائنہ کروانا ضروری ہو سکتا ہے۔",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    readTime: "6 min read",
    urduReadTime: "6 منٹ کا مطالعہ",
  },
];

const calculators = [
  {
    title: "BMI Calculator",
    urduTitle: "باڈی ماس انڈیکس کیلکولیٹر",
    description: "Check your Body Mass Index using your height and weight.",
    urduDescription:
      "اپنے قد اور وزن کی مدد سے باڈی ماس انڈیکس معلوم کریں۔",
    icon: Activity,
    path: "/health-tools/bmi-calculator",
    label: "Calculate BMI",
    urduLabel: "بی ایم آئی معلوم کریں",
  },
  {
    title: "Ideal Body Weight",
    urduTitle: "مناسب جسمانی وزن",
    description: "Estimate an ideal weight range based on your height.",
    urduDescription:
      "اپنے قد کی بنیاد پر مناسب وزن کا اندازہ لگائیں۔",
    icon: Scale,
    path: "/health-tools/ideal-body-weight-calculator",
    label: "Calculate Weight",
    urduLabel: "وزن معلوم کریں",
  },
  {
    title: "Daily Calorie Needs",
    urduTitle: "روزانہ کیلوریز کی ضرورت",
    description: "Estimate your daily calorie needs for your personal goals.",
    urduDescription:
      "اپنے روزمرہ معمولات اور اہداف کے مطابق کیلوریز کی ضرورت کا اندازہ لگائیں۔",
    icon: Flame,
    path: "/health-tools/daily-calorie-calculator",
    label: "Calculate Calories",
    urduLabel: "کیلوریز معلوم کریں",
  },
];

const urduFont = {
  fontFamily: '"Noto Nastaliq Urdu", "Jameel Noori Nastaleeq", serif',
};

function UrduText({ children, className = "" }) {
  return (
    <p
      lang="ur"
      dir="rtl"
      style={urduFont}
      className={className}
    >
      {children}
    </p>
  );
}

function SectionHeading({ eyebrow, urduEyebrow, title, urduTitle, description, urduDescription }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      <p className="text-[10px] font-extrabold uppercase tracking-[2.5px] text-[#b38a13] sm:text-[11px]">
        {eyebrow}
      </p>

      {urduEyebrow && (
        <UrduText className="mt-1 text-sm leading-[2] text-[#b38a13]">
          {urduEyebrow}
        </UrduText>
      )}

      <h2 className="mt-3 text-2xl font-extrabold leading-tight text-[#173f49] sm:text-3xl md:text-4xl">
        {title}
      </h2>

      {urduTitle && (
        <UrduText className="mt-2 text-xl font-medium leading-[2.1] text-[#14758a] sm:text-2xl">
          {urduTitle}
        </UrduText>
      )}

      {description && (
        <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[#687d83] sm:text-base">
          {description}
        </p>
      )}

      {urduDescription && (
        <UrduText className="mx-auto mt-2 max-w-xl text-sm leading-[2.2] text-[#687d83] sm:text-base">
          {urduDescription}
        </UrduText>
      )}
    </div>
  );
}

function RelatedArticles() {
  return (
    <>
     
      <section className="bg-[#f2f7f9] px-4 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Health Insights"
            urduEyebrow="صحت سے متعلق معلومات"
            title="Health & Wellness Blog"
            urduTitle="صحت اور تندرستی کا بلاگ"
            description="General health information from our clinic to help you make informed decisions about your health."
            urduDescription="صحت کے بارے میں مفید معلومات تاکہ آپ اپنی صحت سے متعلق بہتر فیصلے کر سکیں۔"
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <article
                key={article.title}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#e4ecef] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden bg-[#dcebed] sm:h-52">
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-2 text-[9px] font-extrabold tracking-wide text-[#12677a] shadow-sm sm:left-4 sm:top-4">
                    {article.category}
                  </span>

                  <span
                    lang="ur"
                    dir="rtl"
                    style={urduFont}
                    className="absolute right-3 top-3 max-w-[65%] rounded-full bg-white/95 px-3 py-1.5 text-xs leading-[1.8] text-[#12677a] shadow-sm sm:right-4 sm:top-4"
                  >
                    {article.urduCategory}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-[#829297]">
                    <Clock3 size={14} />
                    <span>{article.readTime}</span>
                    <span>·</span>
                    <span
                      lang="ur"
                      dir="rtl"
                      style={urduFont}
                      className="text-sm leading-[1.8]"
                    >
                      {article.urduReadTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold leading-snug text-[#173f49] transition group-hover:text-[#14758a]">
                    {article.title}
                  </h3>

                  <UrduText className="mt-2 text-base font-medium leading-[2.1] text-[#14758a]">
                    {article.urduTitle}
                  </UrduText>

                  <p className="mt-3 text-sm leading-6 text-[#6b7e83]">
                    {article.description}
                  </p>

                  <UrduText className="mt-2 text-sm leading-[2.2] text-[#6b7e83]">
                    {article.urduDescription}
                  </UrduText>

                  <Link
                    to="/blog"
                    className="mt-auto inline-flex min-h-11 items-center gap-2 pt-5 text-sm font-bold text-[#14758a] transition hover:gap-3"
                  >
                    <span>Read more</span>
                    <ArrowRight size={16} />
                    <span
                      lang="ur"
                      dir="rtl"
                      style={urduFont}
                      className="ml-1 text-sm font-medium"
                    >
                      مزید پڑھیں
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/blog"
              className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-[#14758a] px-5 py-3 text-sm font-bold text-[#14758a] transition hover:bg-[#14758a] hover:text-white sm:px-6"
            >
              <span>Explore All Articles</span>
              <ArrowRight size={16} />
              <span
                lang="ur"
                dir="rtl"
                style={urduFont}
                className="text-sm"
              >
                تمام مضامین دیکھیں
              </span>
            </Link>
          </div>
        </div>
      </section>

     
      <section className="bg-white px-4 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Health Tools"
            urduEyebrow="صحت کے ٹولز"
            title="Health Calculators"
            urduTitle="صحت کے کیلکولیٹرز"
            description="Quick checks for your weight and daily calorie needs."
            urduDescription="اپنے وزن اور روزانہ کیلوریز کی ضرورت کا فوری اندازہ لگائیں۔"
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {calculators.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group flex h-full flex-col rounded-2xl border border-[#e1eaed] bg-[#f8fbfc] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#a7d1d8] hover:shadow-lg sm:p-7"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e1f0f2] text-[#126b7c] transition group-hover:bg-[#126b7c] group-hover:text-white">
                    <Icon size={27} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-5 text-lg font-extrabold text-[#173f49]">
                    {item.title}
                  </h3>

                  <UrduText className="mt-2 text-base font-medium leading-[2.1] text-[#14758a]">
                    {item.urduTitle}
                  </UrduText>

                  <p className="mt-3 text-sm leading-6 text-[#6b7e83]">
                    {item.description}
                  </p>

                  <UrduText className="mt-2 text-sm leading-[2.2] text-[#6b7e83]">
                    {item.urduDescription}
                  </UrduText>

                  <Link
                    to={item.path}
                    className="mt-auto inline-flex min-h-12 flex-wrap items-center justify-center gap-2 rounded-xl bg-[#f4c632] px-4 py-3 text-sm font-bold text-[#173f49] transition hover:bg-[#ffda58] sm:rounded-full sm:px-5"
                  >
                    <Calculator size={17} />
                    <span>{item.label}</span>
                    <ArrowRight size={16} />
                  </Link>

                  <UrduText className="mt-3 text-center text-sm font-medium leading-[2] text-[#526c72]">
                    {item.urduLabel}
                  </UrduText>
                </div>
              );
            })}
          </div>

          <div className="mt-7 flex items-start gap-3 rounded-xl border border-[#e5ecee] bg-[#f7fafb] p-4 sm:p-5">
            <HeartPulse
              size={20}
              className="mt-1 shrink-0 text-[#14758a]"
            />

            <div className="min-w-0">
              <p className="text-xs leading-6 text-[#718187] sm:text-sm">
                These calculators provide estimates for general information
                only. They do not replace a personalised assessment by a
                qualified healthcare professional.
              </p>

              <UrduText className="mt-2 text-sm leading-[2.2] text-[#718187]">
                یہ کیلکولیٹر صرف عمومی معلومات کے لیے اندازے فراہم کرتے ہیں۔
                یہ کسی مستند طبی ماہر کے ذاتی معائنے اور مشورے کا متبادل نہیں
                ہیں۔
              </UrduText>
            </div>
          </div>
        </div>
      </section>

     
      <section
        id="reviews"
        className="scroll-mt-28 bg-[#f2f7f9] px-4 py-16 sm:px-8 sm:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Patient Reviews"
            urduEyebrow="مریضوں کی آراء"
            title="What Our Patients Say"
            urduTitle="ہمارے مریضوں کی رائے"
            description="Patient feedback helps us continue improving the care and consultation experience we provide."
            urduDescription="مریضوں کی آراء ہمیں اپنی طبی سہولیات اور مشورے کے تجربے کو بہتر بنانے میں مدد دیتی ہیں۔"
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="flex min-h-[220px] flex-col rounded-2xl border border-[#e3ecee] bg-white p-5 shadow-sm sm:p-7"
              >
                <div
                  className="flex items-center gap-1 text-[#e6b625]"
                  aria-label="Five decorative stars"
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={17}
                      fill="currentColor"
                      strokeWidth={1.5}
                    />
                  ))}
                </div>

                <div className="mt-5 flex flex-1 flex-col items-center justify-center text-center">
                  <MessageCircle
                    size={25}
                    className="text-[#8db9c2]"
                    strokeWidth={1.6}
                  />

                  <p className="mt-3 text-sm leading-6 text-[#687d83]">
                    Patient review will appear here.
                  </p>

                  <UrduText className="mt-2 text-sm leading-[2.1] text-[#14758a]">
                    مریض کی رائے یہاں دکھائی جائے گی۔
                  </UrduText>

                  <p className="mt-3 text-xs text-[#91a0a4]">
                    Patient feedback pending
                  </p>

                  <UrduText className="mt-1 text-xs leading-[2] text-[#91a0a4]">
                    مریض کی تصدیق شدہ رائے موصول ہونا باقی ہے
                  </UrduText>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 text-center">
            <p className="text-xs leading-5 text-[#87969b]">
              Reviews shown here are placeholders until verified patient
              feedback is provided.
            </p>

            <UrduText className="mt-2 text-sm leading-[2.1] text-[#87969b]">
              تصدیق شدہ مریضوں کی آراء موصول ہونے تک یہاں عارضی متن دکھایا
              جا رہا ہے۔
            </UrduText>
          </div>
        </div>
      </section>
    </>
  );
}

export default RelatedArticles;
