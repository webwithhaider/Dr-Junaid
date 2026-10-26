import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Scale,
  Target,
  Activity,
  HeartPulse,
  UserRound,
  Ruler,
  CalendarDays,
  RotateCcw,
} from "lucide-react";

const questions = [
  {
    key: "age",
    title: "How old are you?",
    subtitle: "We use your age to understand your starting point.",
    icon: CalendarDays,
    type: "number",
    placeholder: "Enter your age",
    suffix: "years",
    min: 18,
    max: 120,
    validate: (v) => Number(v) >= 18 && Number(v) <= 120,
    error: "This assessment is intended for adults aged 18 and above.",
  },
  {
    key: "sex",
    title: "What is your sex?",
    subtitle: "Choose the option that best describes you.",
    icon: UserRound,
    type: "choice",
    options: [
      { value: "male", label: "Male", description: "Male" },
      { value: "female", label: "Female", description: "Female" },
    ],
  },
  {
    key: "height",
    title: "How tall are you?",
    subtitle: "Enter your height in centimetres.",
    icon: Ruler,
    type: "number",
    placeholder: "e.g. 175",
    suffix: "cm",
    min: 100,
    max: 250,
    validate: (v) => Number(v) >= 100 && Number(v) <= 250,
    error: "Please enter a height between 100 and 250 cm.",
  },
  {
    key: "weight",
    title: "What is your current weight?",
    subtitle: "Your current weight helps establish your starting point.",
    icon: Scale,
    type: "number",
    placeholder: "e.g. 90",
    suffix: "kg",
    min: 1,
    max: 500,
    validate: (v) => Number(v) > 0 && Number(v) <= 500,
    error: "Please enter a valid weight in kilograms.",
  },
  {
    key: "targetWeight",
    title: "What is your target weight?",
    subtitle: "Choose a goal that you can discuss with your healthcare professional.",
    icon: Target,
    type: "number",
    placeholder: "e.g. 80",
    suffix: "kg",
    min: 1,
    max: 500,
    validate: (v, form) =>
      Number(v) > 0 &&
      Number(v) < Number(form.weight) &&
      Number(v) <= 500,
    error: "Your target weight must be lower than your current weight.",
  },
  {
    key: "activity",
    title: "How active are you on a typical day?",
    subtitle: "Choose the option that best matches your usual routine.",
    icon: Activity,
    type: "choice",
    options: [
      {
        value: "low",
        label: "Mostly sitting",
        description: "Little planned exercise",
      },
      {
        value: "light",
        label: "Lightly active",
        description: "Occasional walks or light exercise",
      },
      {
        value: "moderate",
        label: "Moderately active",
        description: "Regular walks or exercise",
      },
      {
        value: "high",
        label: "Very active",
        description: "Frequent exercise or physically active work",
      },
    ],
  },
  {
    key: "previousAttempts",
    title: "Have you tried to lose weight before?",
    subtitle: "This helps you reflect on your previous experience.",
    icon: RotateCcw,
    type: "choice",
    options: [
      { value: "yes", label: "Yes", description: "I have tried before" },
      { value: "no", label: "No", description: "This is my first time" },
    ],
  },
  {
    key: "healthConditions",
    title: "Do you have any of these health conditions?",
    subtitle: "Select the closest answer. This is not a diagnosis.",
    icon: HeartPulse,
    type: "choice",
    options: [
      {
        value: "diabetes",
        label: "Diabetes",
        description: "Type 1 or Type 2",
      },
      {
        value: "thyroid",
        label: "Thyroid condition",
        description: "A diagnosed thyroid condition",
      },
      {
        value: "other",
        label: "Another health condition",
        description: "A different medical condition",
      },
      {
        value: "none",
        label: "None of these",
        description: "No known conditions listed above",
      },
      {
        value: "prefer_not_to_say",
        label: "Prefer not to say",
        description: "Skip this information",
      },
    ],
  },
];

const initialForm = {
  age: "",
  sex: "male",
  height: "",
  weight: "",
  targetWeight: "",
  activity: "",
  previousAttempts: "",
  healthConditions: "",
};

const inputClass =
  "mt-3 w-full rounded-xl border border-slate-200 bg-white px-4 py-4 text-lg text-slate-800 outline-none transition focus:border-[#087F8C] focus:ring-2 focus:ring-teal-100";

function WeightLossJourney() {
  const [form, setForm] = useState(initialForm);
  const [step, setStep] = useState(-1);
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  const currentQuestion = questions[step];
  const progress =
    step === -1 ? 0 : Math.round(((step + 1) / questions.length) * 100);

  const handleChange = (key, value) => {
    setForm((previous) => ({ ...previous, [key]: value }));
    setError("");
  };

  const handleNext = () => {
    if (step < 0) {
      setStep(0);
      setError("");
      return;
    }

    const question = questions[step];
    const value = form[question.key];

    if (!value) {
      setError("Please answer this question to continue.");
      return;
    }

    if (question.validate && !question.validate(value, form)) {
      setError(question.error);
      return;
    }

    setError("");

    if (step < questions.length - 1) {
      setStep((previous) => previous + 1);
      return;
    }

    const heightM = Number(form.height) / 100;
    const weight = Number(form.weight);
    const targetWeight = Number(form.targetWeight);
    const bmi = weight / (heightM * heightM);
    const difference = weight - targetWeight;

    setResult({
      bmi: bmi.toFixed(1),
      difference: difference.toFixed(1),
      weeks: Math.ceil(difference / 0.5),
      bmiCategory:
        bmi < 18.5
          ? "Below the usual adult BMI range"
          : bmi < 25
            ? "Within the usual adult BMI range"
            : bmi < 30
              ? "Overweight BMI range"
              : "Obesity BMI range",
    });

    setStep(questions.length);
  };

  const handleBack = () => {
    setError("");
    if (step > 0) setStep((previous) => previous - 1);
    else if (step === 0) setStep(-1);
  };

  const restart = () => {
    setForm(initialForm);
    setStep(-1);
    setError("");
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-[#F7F9FA]">
      <div className="h-[104px]" />

      <section className="bg-gradient-to-br from-[#EAF6F6] via-white to-[#F4F7F8] px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <Link
            to="/"
            className="mb-7 inline-flex items-center gap-2 text-sm font-medium text-[#087F8C] hover:underline"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#087F8C] sm:text-sm">
            Your Health, Your Journey
          </p>

          <h1 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            Begin Your Weight Loss Journey
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Answer a few simple questions to understand your starting point
            and prepare for a more informed conversation about your goals.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        {step === -1 && (
          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-10">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-50 text-[#087F8C]">
              <HeartPulse size={32} />
            </div>

            <h2 className="mt-6 text-center text-2xl font-bold text-slate-900 sm:text-3xl">
              Let’s learn more about you
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-center leading-7 text-slate-600">
              Answer a few questions about your body measurements, daily
              activity and goals. Your answers will help create a simple
              educational summary.
            </p>

            <div className="mt-7 space-y-3">
              {[
                "One question at a time",
                "Review your answers as you go",
                "Get a summary at the end",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-slate-50 p-4 text-sm text-slate-700"
                >
                  <CheckCircle2 size={19} className="shrink-0 text-[#087F8C]" />
                  {item}
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-[#087F8C] px-6 py-4 font-semibold text-white transition hover:bg-[#066975]"
            >
              Start Assessment
              <ArrowRight size={19} />
            </button>

            <p className="mt-4 text-center text-xs leading-5 text-slate-500">
              For adults aged 18 and above. This assessment is educational
              and does not replace medical advice.
            </p>
          </div>
        )}

        {step >= 0 && step < questions.length && currentQuestion && (
          <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm">
            <div className="border-b border-slate-100 px-5 py-5 sm:px-9">
              <div className="flex items-center justify-between gap-3 text-sm">
                <button
                  type="button"
                  onClick={handleBack}
                  className="inline-flex items-center gap-2 font-medium text-slate-500 hover:text-[#087F8C]"
                >
                  <ArrowLeft size={16} />
                  Back
                </button>
                <span className="font-semibold text-[#087F8C]">
                  Question {step + 1} of {questions.length}
                </span>
              </div>

              <div
                className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100"
                role="progressbar"
                aria-valuenow={progress}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Assessment progress"
              >
                <div
                  className="h-full rounded-full bg-[#087F8C] transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <div className="px-5 py-8 sm:px-9 sm:py-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-[#087F8C]">
                <currentQuestion.icon size={27} />
              </div>

              <h2 className="mt-6 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
                {currentQuestion.title}
              </h2>

              <p className="mt-3 leading-7 text-slate-500">
                {currentQuestion.subtitle}
              </p>

              {currentQuestion.type === "number" && (
                <div className="mt-7">
                  <label
                    htmlFor={currentQuestion.key}
                    className="text-sm font-semibold text-slate-700"
                  >
                    Your answer
                  </label>

                  <div className="relative">
                    <input
                      autoFocus
                      id={currentQuestion.key}
                      type="number"
                      min={currentQuestion.min}
                      max={currentQuestion.max}
                      step="any"
                      value={form[currentQuestion.key]}
                      onChange={(event) =>
                        handleChange(currentQuestion.key, event.target.value)
                      }
                      onKeyDown={(event) => {
                        if (event.key === "Enter") handleNext();
                      }}
                      placeholder={currentQuestion.placeholder}
                      className={`${inputClass} pr-16`}
                    />

                    <span className="absolute right-4 top-1/2 mt-1 -translate-y-1/2 text-sm text-slate-400">
                      {currentQuestion.suffix}
                    </span>
                  </div>
                </div>
              )}

              {currentQuestion.type === "choice" && (
                <div className="mt-7 grid gap-3">
                  {currentQuestion.options.map((option) => {
                    const selected =
                      form[currentQuestion.key] === option.value;

                    return (
                      <button
                        type="button"
                        key={option.value}
                        onClick={() =>
                          handleChange(currentQuestion.key, option.value)
                        }
                        aria-pressed={selected}
                        className={`flex w-full items-center justify-between gap-4 rounded-xl border p-4 text-left transition sm:p-5 ${
                          selected
                            ? "border-[#087F8C] bg-teal-50 ring-1 ring-[#087F8C]"
                            : "border-slate-200 bg-white hover:border-teal-300 hover:bg-slate-50"
                        }`}
                      >
                        <span>
                          <span className="block font-semibold text-slate-800">
                            {option.label}
                          </span>
                          <span className="mt-1 block text-sm text-slate-500">
                            {option.description}
                          </span>
                        </span>

                        <span
                          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                            selected
                              ? "border-[#087F8C] bg-[#087F8C]"
                              : "border-slate-300"
                          }`}
                        >
                          {selected && (
                            <span className="h-2 w-2 rounded-full bg-white" />
                          )}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}

              {error && (
                <p role="alert" className="mt-4 text-sm text-red-600">
                  {error}
                </p>
              )}

              <button
                type="button"
                onClick={handleNext}
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-[#087F8C] px-6 py-4 font-semibold text-white transition hover:bg-[#066975]"
              >
                {step === questions.length - 1
                  ? "Complete Assessment"
                  : "Next Question"}
                <ArrowRight size={19} />
              </button>

              <p className="mt-4 text-center text-xs text-slate-400">
                Your progress is kept in this page while you complete the assessment.
              </p>
            </div>
          </div>
        )}

        {step === questions.length && result && (
          <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm sm:p-9">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal-50 text-[#087F8C]">
              <CheckCircle2 size={34} />
            </div>

            <h2 className="mt-5 text-center text-2xl font-bold text-slate-900 sm:text-3xl">
              Your Assessment Summary
            </h2>

            <p className="mt-3 text-center leading-7 text-slate-600">
              Thanks for answering the questions. Here is your educational
              starting-point summary.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-teal-50 p-5">
                <Scale className="text-[#087F8C]" size={25} />
                <p className="mt-3 text-sm text-slate-600">Your BMI</p>
                <p className="mt-1 text-3xl font-bold text-slate-900">
                  {result.bmi}
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  {result.bmiCategory}
                </p>
              </div>

              <div className="rounded-2xl bg-teal-50 p-5">
                <Target className="text-[#087F8C]" size={25} />
                <p className="mt-3 text-sm text-slate-600">
                  Difference to your target
                </p>
                <p className="mt-1 text-3xl font-bold text-slate-900">
                  {result.difference} kg
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  From {form.weight} kg to {form.targetWeight} kg
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-900">
                Your answers at a glance
              </h3>

              <dl className="mt-4 space-y-3 text-sm">
                {[
                  ["Age", `${form.age} years`],
                  ["Sex", form.sex === "male" ? "Male" : "Female"],
                  ["Height", `${form.height} cm`],
                  ["Current weight", `${form.weight} kg`],
                  ["Target weight", `${form.targetWeight} kg`],
                  [
                    "Activity",
                    {
                      low: "Mostly sitting",
                      light: "Lightly active",
                      moderate: "Moderately active",
                      high: "Very active",
                    }[form.activity],
                  ],
                  [
                    "Previous weight-loss attempts",
                    form.previousAttempts === "yes" ? "Yes" : "No",
                  ],
                  [
                    "Health conditions",
                    {
                      diabetes: "Diabetes",
                      thyroid: "Thyroid condition",
                      other: "Another health condition",
                      none: "None of these",
                      prefer_not_to_say: "Prefer not to say",
                    }[form.healthConditions],
                  ],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-start justify-between gap-4 border-b border-slate-100 pb-3 last:border-0 last:pb-0"
                  >
                    <dt className="text-slate-500">{label}</dt>
                    <dd className="text-right font-semibold text-slate-800">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-5 rounded-2xl bg-slate-50 p-5">
              <h3 className="font-bold text-slate-900">
                Your next step
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Weight management is individual. A qualified healthcare
                professional can help review your goals, medical history,
                nutrition and activity before recommending a suitable plan.
                This assessment does not determine treatment or medication
                eligibility.
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                The timeframe for weight change cannot be reliably predicted
                from these answers alone.
              </p>
            </div>

            <Link
              to="/#clinics"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#087F8C] px-6 py-4 text-center font-semibold text-white transition hover:bg-[#066975]"
            >
              Contact the Clinic
              <ArrowRight size={19} />
            </Link>

            <button
              type="button"
              onClick={restart}
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 px-6 py-4 font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              <RotateCcw size={17} />
              Start Again
            </button>

            <p className="mt-5 text-xs leading-6 text-slate-500">
              BMI is a screening measure, not a diagnosis. Results may not
              fully reflect individual health. This tool is educational and
              does not replace medical assessment or personalized medical advice.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}

export default WeightLossJourney;