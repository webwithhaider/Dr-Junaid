import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  HeartPulse,
} from "lucide-react";

const urduFont = {
  fontFamily: '"Noto Nastaliq Urdu", "Jameel Noori Nastaleeq", serif',
};

const articles = {
  "fatty-liver-masld": {
    category: "FATTY LIVER",
    urduCategory: "فیٹی لیور",
    title: "What Is Fatty Liver (MASLD)?",
    urduTitle: "فیٹی لیور کیا ہے؟",
    description:
      "Understand fatty liver, its possible causes, symptoms, diagnosis and practical ways to support liver health.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=85",
    intro:
      "Fatty liver occurs when excess fat builds up in the liver. Metabolic dysfunction-associated steatotic liver disease (MASLD) is a common form associated with metabolic risk factors such as obesity, type 2 diabetes and abnormal blood fats. It can occur even when a person feels completely well.",
    urduIntro:
      "فیٹی لیور اس وقت ہوتا ہے جب جگر میں ضرورت سے زیادہ چربی جمع ہو جائے۔ میٹابولک مسائل، موٹاپے، ٹائپ 2 ذیابیطس اور خون میں چربی کی زیادتی کا اس کیفیت سے تعلق ہو سکتا ہے۔ بعض افراد کو ابتدا میں کوئی واضح علامت محسوس نہیں ہوتی۔",
    sections: [
      {
        title: "What causes fatty liver?",
        urduTitle: "فیٹی لیور کی وجوہات کیا ہیں؟",
        paragraphs: [
          "Common risk factors include excess body weight, insulin resistance, type 2 diabetes, high triglycerides, low physical activity and a diet high in excess calories. Not everyone with fatty liver has obesity, and other liver conditions can also cause fat accumulation.",
        ],
        urdu:
          "عام خطرے کے عوامل میں زیادہ وزن، انسولین کے اثر میں کمی، ٹائپ 2 ذیابیطس، خون میں ٹرائی گلیسرائیڈز کی زیادتی، جسمانی سرگرمی کی کمی اور ضرورت سے زیادہ کیلوریز والی غذا شامل ہیں۔ بعض اوقات دوسری جگر کی بیماریاں بھی اس کیفیت کا سبب بن سکتی ہیں۔",
      },
      {
        title: "Symptoms to look out for",
        urduTitle: "کن علامات پر توجہ دیں؟",
        paragraphs: [
          "Fatty liver often has no symptoms in its early stages. Some people experience tiredness or discomfort in the upper-right abdomen. These symptoms are not specific to fatty liver, so medical assessment is important rather than self-diagnosis.",
        ],
        urdu:
          "ابتدائی مراحل میں اکثر کوئی علامت نہیں ہوتی۔ کچھ افراد کو تھکاوٹ یا پیٹ کے دائیں اوپری حصے میں تکلیف محسوس ہو سکتی ہے۔ یہ علامات صرف فیٹی لیور کی مخصوص علامات نہیں، اس لیے خود تشخیص کے بجائے طبی معائنہ ضروری ہے۔",
      },
      {
        title: "How is it diagnosed?",
        urduTitle: "تشخیص کیسے ہوتی ہے؟",
        paragraphs: [
          "A clinician may review your medical history and metabolic risk factors, request blood tests and recommend imaging such as an ultrasound. Additional tests may be needed to assess liver inflammation or scarring. A single blood test cannot rule out every form of liver disease.",
        ],
        urdu:
          "ڈاکٹر آپ کی طبی تاریخ اور خطرے کے عوامل کا جائزہ لے سکتے ہیں، خون کے ٹیسٹ کروا سکتے ہیں اور الٹراساؤنڈ جیسے معائنے تجویز کر سکتے ہیں۔ جگر میں سوزش یا داغ دار بافتوں کا اندازہ لگانے کے لیے مزید ٹیسٹ بھی درکار ہو سکتے ہیں۔",
      },
      {
        title: "Practical ways to support liver health",
        urduTitle: "جگر کی صحت بہتر رکھنے کے طریقے",
        paragraphs: [
          "If you have excess weight, gradual and sustainable weight loss may help reduce liver fat. Choose balanced meals with vegetables, fruit, whole grains and suitable protein. Limit sugary drinks, avoid crash diets, stay physically active and discuss alcohol use and medicines with your clinician. Do not start supplements marketed as liver cleanses without medical advice.",
        ],
        urdu:
          "اگر وزن زیادہ ہے تو آہستہ آہستہ اور مستقل انداز میں وزن کم کرنا جگر کی چربی گھٹانے میں مدد دے سکتا ہے۔ سبزیوں، پھلوں، ثابت اناج اور مناسب پروٹین پر مشتمل متوازن غذا کھائیں۔ میٹھے مشروبات کم کریں، سخت اور غیر محفوظ ڈائٹنگ سے بچیں، جسمانی سرگرمی جاری رکھیں اور ادویات یا سپلیمنٹس کے بارے میں ڈاکٹر سے مشورہ کریں۔",
      },
    ],
    tips: [
      "Choose water instead of sugary drinks.",
      "Build a regular walking or exercise routine suited to your ability.",
      "Keep diabetes, cholesterol and blood pressure under medical care.",
      "Arrange follow-up if a clinician has identified fatty liver.",
    ],
    urduTips: [
      "میٹھے مشروبات کے بجائے پانی کو ترجیح دیں۔",
      "اپنی صلاحیت کے مطابق چہل قدمی یا ورزش کا معمول بنائیں۔",
      "ذیابیطس، کولیسٹرول اور بلڈ پریشر کا مناسب علاج کروائیں۔",
      "اگر ڈاکٹر نے فیٹی لیور بتایا ہے تو باقاعدہ فالو اَپ کروائیں۔",
    ],
  },

  "control-blood-sugar": {
    category: "DIABETES",
    urduCategory: "ذیابیطس",
    title: "Habits That Help Control Blood Sugar",
    urduTitle: "بلڈ شوگر کنٹرول کرنے والی عادات",
    description:
      "Learn how food choices, physical activity, monitoring and prescribed treatment can support diabetes care.",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1400&q=85",
    intro:
      "Managing blood sugar is a daily process. A balanced eating pattern, regular physical activity, prescribed medicines and appropriate monitoring can help people with diabetes manage their condition. The best plan depends on the type of diabetes, other health conditions and individual treatment goals.",
    urduIntro:
      "بلڈ شوگر کو سنبھالنا روزمرہ کی توجہ کا تقاضا کرتا ہے۔ متوازن غذا، باقاعدہ جسمانی سرگرمی، تجویز کردہ ادویات اور مناسب نگرانی ذیابیطس کو کنٹرول کرنے میں مدد دے سکتی ہیں۔ ہر فرد کا علاج اس کی بیماری اور طبی ضروریات کے مطابق مختلف ہو سکتا ہے۔",
    sections: [
      {
        title: "Build balanced meals",
        urduTitle: "متوازن غذا کا انتخاب کریں",
        paragraphs: [
          "Include non-starchy vegetables, suitable protein, high-fibre foods and sensible portions of carbohydrate. Beans, whole grains and whole fruit can fit into a balanced eating plan. Sweetened drinks can raise blood glucose quickly, so water is often a useful everyday choice.",
        ],
        urdu:
          "اپنی غذا میں سبزیاں، مناسب پروٹین، فائبر والی غذائیں اور کاربوہائیڈریٹس کی مناسب مقدار شامل کریں۔ دالیں، ثابت اناج اور مکمل پھل متوازن غذا کا حصہ بن سکتے ہیں۔ میٹھے مشروبات بلڈ شوگر تیزی سے بڑھا سکتے ہیں، اس لیے عام طور پر پانی بہتر انتخاب ہے۔",
      },
      {
        title: "Move regularly",
        urduTitle: "باقاعدہ جسمانی سرگرمی اپنائیں",
        paragraphs: [
          "Walking, cycling, swimming or other activities you enjoy may improve insulin sensitivity and overall wellbeing. Start at a level that is safe for you and increase gradually. If you use insulin or medicines that can cause low blood sugar, ask your healthcare professional how to exercise safely.",
        ],
        urdu:
          "چہل قدمی، سائیکل چلانا، تیراکی یا اپنی پسند کی دوسری سرگرمیاں انسولین کے بہتر اثر اور مجموعی صحت میں مدد دے سکتی ہیں۔ اپنی صلاحیت کے مطابق آغاز کریں اور آہستہ آہستہ سرگرمی بڑھائیں۔ اگر آپ ایسی دوا لیتے ہیں جس سے شوگر کم ہو سکتی ہے تو ورزش کے محفوظ طریقے کے بارے میں ڈاکٹر سے پوچھیں۔",
      },
      {
        title: "Monitor and follow your treatment plan",
        urduTitle: "شوگر کی نگرانی اور علاج جاری رکھیں",
        paragraphs: [
          "Check blood glucose as recommended by your healthcare team and attend follow-up appointments. Your clinician may recommend an HbA1c test to understand your average glucose over time. Never change or stop prescribed diabetes medicine without discussing it with your clinician.",
        ],
        urdu:
          "اپنی طبی ٹیم کے مشورے کے مطابق بلڈ شوگر چیک کریں اور فالو اَپ معائنے کروائیں۔ ڈاکٹر گزشتہ چند ماہ کی اوسط شوگر جانچنے کے لیے HbA1c ٹیسٹ تجویز کر سکتے ہیں۔ ڈاکٹر سے مشورہ کیے بغیر ذیابیطس کی دوا بند یا تبدیل نہ کریں۔",
      },
      {
        title: "Recognise warning signs",
        urduTitle: "خطرے کی علامات پہچانیں",
        paragraphs: [
          "Shaking, sweating, sudden hunger, dizziness or confusion can be signs of low blood sugar, especially in people using insulin or certain medicines. Follow your personal hypoglycaemia plan. Severe confusion, seizures or unconsciousness require emergency assistance. Very high glucose with vomiting, abdominal pain, deep breathing or marked drowsiness also needs urgent assessment.",
        ],
        urdu:
          "کپکپی، پسینہ آنا، اچانک بھوک، چکر یا الجھن کم شوگر کی علامات ہو سکتی ہیں، خصوصاً انسولین یا بعض ادویات لینے والوں میں۔ اپنے ڈاکٹر کے بتائے ہوئے طریقۂ علاج پر عمل کریں۔ شدید الجھن، دورے یا بے ہوشی کی صورت میں فوری ہنگامی مدد لیں۔ بہت زیادہ شوگر کے ساتھ الٹی، پیٹ درد، گہری سانس یا شدید غنودگی بھی فوری طبی معائنے کا تقاضا کرتی ہے۔",
      },
    ],
    tips: [
      "Keep meal times and portions consistent where practical.",
      "Choose regular movement that suits your health and abilities.",
      "Take prescribed medicines as directed.",
      "Discuss individual glucose targets with your healthcare professional.",
    ],
    urduTips: [
      "جہاں ممکن ہو کھانے کے اوقات اور مقدار میں باقاعدگی رکھیں۔",
      "اپنی صحت کے مطابق باقاعدہ جسمانی سرگرمی اپنائیں۔",
      "تجویز کردہ ادویات ہدایات کے مطابق استعمال کریں۔",
      "اپنے لیے مناسب شوگر کی حد ڈاکٹر سے طے کریں۔",
    ],
  },

  "gas-and-bloating": {
    category: "DIGESTIVE HEALTH",
    urduCategory: "نظامِ ہاضمہ",
    title: "When to See a Doctor for Gas and Bloating",
    urduTitle: "گیس اور پیٹ پھولنے پر ڈاکٹر سے کب رجوع کریں؟",
    description:
      "Explore common causes of bloating, practical relief measures and symptoms that should not be ignored.",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1400&q=85",
    intro:
      "Gas and bloating are common digestive complaints. They may be related to swallowed air, certain foods, constipation or food intolerances. Symptoms that keep returning, persist or affect everyday life deserve medical assessment because several digestive conditions can cause similar problems.",
    urduIntro:
      "گیس اور پیٹ پھولنا نظامِ ہاضمہ کی عام شکایات ہیں۔ ان کا تعلق ہوا نگلنے، بعض غذاؤں، قبض یا کسی غذا سے عدم برداشت کے ساتھ ہو سکتا ہے۔ اگر علامات بار بار ہوں، مسلسل رہیں یا روزمرہ زندگی متاثر کریں تو طبی معائنہ کروانا ضروری ہے۔",
    sections: [
      {
        title: "Common causes",
        urduTitle: "عام وجوہات",
        paragraphs: [
          "Eating quickly, fizzy drinks, chewing gum, constipation and some carbohydrate-rich foods can contribute to gas. Some people experience symptoms with lactose or other specific foods. Irritable bowel syndrome and other digestive conditions may also cause bloating.",
        ],
        urdu:
          "جلدی کھانا، گیس والے مشروبات، چیونگم، قبض اور بعض کاربوہائیڈریٹ والی غذائیں گیس کا سبب بن سکتی ہیں۔ کچھ افراد کو دودھ میں موجود لیکٹوز یا مخصوص غذاؤں سے تکلیف ہوتی ہے۔ آنتوں کی حساسیت اور دیگر ہاضمے کی بیماریاں بھی پیٹ پھولنے کا باعث بن سکتی ہیں۔",
      },
      {
        title: "What may help at home?",
        urduTitle: "گھر پر کیا مدد کر سکتا ہے؟",
        paragraphs: [
          "Try eating slowly, taking smaller meals, drinking enough water and walking regularly. If constipation is present, gradually increasing fibre may help, although a sudden increase can worsen gas for some people. Keep a food and symptom diary to identify patterns rather than removing many foods unnecessarily.",
        ],
        urdu:
          "آہستہ کھائیں، تھوڑی مقدار میں کھانا کھائیں، مناسب پانی پئیں اور باقاعدہ چہل قدمی کریں۔ قبض ہو تو فائبر آہستہ آہستہ بڑھانا مددگار ہو سکتا ہے، لیکن اچانک زیادہ فائبر بعض افراد میں گیس بڑھا سکتا ہے۔ غذا اور علامات کا ریکارڈ رکھیں تاکہ ممکنہ وجوہات سمجھ سکیں۔",
      },
      {
        title: "When should you see a doctor?",
        urduTitle: "ڈاکٹر سے کب رجوع کرنا چاہیے؟",
        paragraphs: [
          "Arrange a medical appointment if bloating is persistent, repeatedly returns, or occurs with unexplained weight loss, ongoing bowel changes or loss of appetite. Your clinician can assess your symptoms and decide whether testing or treatment is needed.",
        ],
        urdu:
          "اگر پیٹ مسلسل پھولا رہے، بار بار یہ مسئلہ ہو، وزن بلاوجہ کم ہو، پاخانے کی عادات میں مسلسل تبدیلی آئے یا بھوک کم ہو تو ڈاکٹر سے وقت لیں۔ ڈاکٹر علامات کا جائزہ لے کر ضروری ٹیسٹ یا علاج تجویز کر سکتے ہیں۔",
      },
      {
        title: "Red flags: do not wait",
        urduTitle: "خطرے کی علامات: انتظار نہ کریں",
        paragraphs: [
          "Seek urgent medical care for severe or sudden abdominal pain, a very swollen abdomen with inability to pass stool or gas, repeated vomiting, vomiting blood, or black or bloody stools. Chest pain, breathing difficulty or fainting also require emergency assessment.",
        ],
        urdu:
          "پیٹ میں اچانک یا شدید درد، پیٹ بہت زیادہ پھولنے کے ساتھ پاخانہ یا گیس خارج نہ ہونا، بار بار الٹی، خون کی الٹی یا کالا یا خونی پاخانہ آنے پر فوری طبی مدد حاصل کریں۔ سینے میں درد، سانس لینے میں دشواری یا بے ہوشی بھی ہنگامی علامات ہیں۔",
      },
    ],
    tips: [
      "Eat slowly and consider smaller, more frequent meals.",
      "Stay hydrated and move regularly.",
      "Notice whether particular foods consistently trigger symptoms.",
      "Do not ignore persistent symptoms or warning signs.",
    ],
    urduTips: [
      "آہستہ کھائیں اور ضرورت ہو تو تھوڑا تھوڑا کھائیں۔",
      "مناسب پانی پئیں اور جسمانی سرگرمی جاری رکھیں۔",
      "دیکھیں کہ کیا مخصوص غذائیں بار بار علامات پیدا کرتی ہیں۔",
      "مسلسل علامات یا خطرے کی نشانیوں کو نظر انداز نہ کریں۔",
    ],
  },
};

function UrduText({ children, className = "" }) {
  return (
    <p lang="ur" dir="rtl" style={urduFont} className={className}>
      {children}
    </p>
  );
}

function BlogArticle() {
  const { slug } = useParams();
  const article = articles[slug];

  if (!article) {
    return (
      <main className="min-h-screen bg-[#f5f9fa] px-5 pb-20 pt-36 text-center text-[#173b49]">
        <h1 className="text-3xl font-bold">Article not found</h1>
        <p className="mt-3 text-[#687b84]">
          The article you are looking for may have moved.
        </p>
        <Link
          to="/blog"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#173f50] px-5 py-3 font-bold text-white hover:bg-[#218487]"
        >
          <ArrowLeft size={18} /> Back to Blog
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f5f9fa] pt-[104px] text-[#173b49]">
      <section className="bg-[#123f50]">
        <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-14">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition hover:text-[#f0c94b]"
          >
            <ArrowLeft size={17} />
            Back to Blog
            <span lang="ur" dir="rtl" style={urduFont}>
              بلاگ پر واپس جائیں
            </span>
          </Link>

          <div className="mt-8 inline-flex flex-wrap items-center gap-3">
            <span className="rounded-md bg-[#f0c94b] px-3 py-2 text-xs font-bold tracking-wide">
              {article.category}
            </span>
            <span
              lang="ur"
              dir="rtl"
              style={urduFont}
              className="text-base text-white/80"
            >
              {article.urduCategory}
            </span>
          </div>

          <h1 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-5xl">
            {article.title}
          </h1>
          <UrduText className="mt-4 text-2xl font-medium leading-[2] text-[#f0c94b] sm:text-3xl">
            {article.urduTitle}
          </UrduText>

          <p className="mt-5 max-w-3xl text-base leading-8 text-white/75">
            {article.description}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-8 sm:py-12">
        <img
          src={article.image}
          alt={article.title}
          className="h-64 w-full rounded-2xl object-cover shadow-sm sm:h-[420px]"
        />

        <article className="mt-8 rounded-2xl border border-[#e0e9e9] bg-white p-5 shadow-sm sm:mt-10 sm:p-9 lg:p-12">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e8f4f2] text-[#218487]">
              <BookOpen size={23} />
            </div>
            <div>
              <p className="font-bold">Health Guide</p>
              <UrduText className="text-sm leading-[2] text-[#218487]">
                صحت سے متعلق رہنمائی
              </UrduText>
            </div>
          </div>

          <p className="mt-7 text-base leading-8 text-[#526872] sm:text-lg sm:leading-9">
            {article.intro}
          </p>
          <UrduText className="mt-5 text-lg leading-[2.3] text-[#526872] sm:text-xl">
            {article.urduIntro}
          </UrduText>

          {article.sections.map((section, index) => (
            <section
              key={section.title}
              className="mt-9 border-t border-[#e8eeee] pt-7 sm:mt-10 sm:pt-8"
            >
              <p className="text-xs font-bold uppercase tracking-[2px] text-[#218487]">
                Section 0{index + 1}
              </p>
              <h2 className="mt-3 text-xl font-bold leading-8 text-[#173b49] sm:text-2xl">
                {section.title}
              </h2>
              <UrduText className="mt-2 text-xl font-medium leading-[2.2] text-[#218487]">
                {section.urduTitle}
              </UrduText>

              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-4 text-sm leading-8 text-[#526872] sm:text-base sm:leading-9"
                >
                  {paragraph}
                </p>
              ))}

              <UrduText className="mt-4 text-base leading-[2.4] text-[#526872] sm:text-lg">
                {section.urdu}
              </UrduText>
            </section>
          ))}

          <section className="mt-10 rounded-2xl bg-[#f2f8f7] p-5 sm:p-7">
            <div className="flex items-center gap-3">
              <HeartPulse className="shrink-0 text-[#218487]" size={25} />
              <h2 className="text-xl font-bold sm:text-2xl">
                Practical Health Tips
              </h2>
            </div>
            <UrduText className="mt-2 text-lg leading-[2.2] text-[#218487]">
              صحت کے لیے مفید مشورے
            </UrduText>

            <ul className="mt-5 space-y-4">
              {article.tips.map((tip, index) => (
                <li key={tip} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-1 shrink-0 text-[#218487]"
                    size={19}
                  />
                  <div>
                    <p className="text-sm leading-7 text-[#526872] sm:text-base">
                      {tip}
                    </p>
                    <UrduText className="mt-1 text-base leading-[2.2] text-[#526872]">
                      {article.urduTips[index]}
                    </UrduText>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <div className="mt-8 border-l-4 border-[#f0c94b] bg-[#fffaf0] p-4 sm:p-5">
            <p className="text-sm leading-7 text-[#687b84]">
              <strong className="text-[#173b49]">Medical disclaimer:</strong>{" "}
              This article provides general educational information. It does
              not replace individual medical advice, diagnosis or treatment.
              Consult a qualified healthcare professional about your symptoms
              and treatment options.
            </p>
            <UrduText className="mt-3 text-base leading-[2.3] text-[#687b84]">
              <strong>طبی وضاحت:</strong> یہ مضمون صرف عمومی معلومات کے لیے ہے۔
              یہ ذاتی طبی مشورے، تشخیص یا علاج کا متبادل نہیں۔ اپنی علامات اور
              علاج کے لیے مستند ڈاکٹر سے مشورہ کریں۔
            </UrduText>
          </div>
        </article>

        <section className="mt-8 rounded-2xl bg-[#123f50] p-6 text-white sm:mt-10 sm:p-9">
          <p className="text-xs font-bold uppercase tracking-[2px] text-[#f0c94b]">
            Need medical advice?
          </p>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
            Get guidance from Dr. Junaid Mustafa
          </h2>
          <UrduText className="mt-3 text-xl leading-[2.2] text-[#f0c94b]">
            ڈاکٹر جنید مصطفیٰ سے رہنمائی حاصل کریں
          </UrduText>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/75">
            Discuss your concerns with a healthcare professional and get advice
            suited to your individual needs.
          </p>

          <Link
            to="/contact-us"
            className="mt-6 inline-flex min-h-12 flex-wrap items-center justify-center gap-3 rounded-lg bg-[#f0c94b] px-5 py-3 font-bold text-[#173b49] transition hover:bg-[#ffda65]"
          >
            Contact Us <ArrowRight size={18} />
            <span lang="ur" dir="rtl" style={urduFont}>
              رابطہ کریں
            </span>
          </Link>
        </section>

        <div className="mt-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 font-bold text-[#197b7e] hover:gap-3"
          >
            <ArrowLeft size={18} />
            Back to all articles
            <span lang="ur" dir="rtl" style={urduFont}>
              تمام مضامین
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default BlogArticle;