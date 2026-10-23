
import { useState } from "react";
import { Activity, RotateCcw, ArrowRight, HeartPulse } from "lucide-react";

function BMICalculator() {
  const [unit, setUnit] = useState("metric");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();
    setError("");

    const h = Number(height);
    const w = Number(weight);

    if (!h || !w || h <= 0 || w <= 0) {
      setError("Please enter a valid height and weight.");
      setResult(null);
      return;
    }

    const heightMeters = unit === "metric" ? h / 100 : h * 0.0254;
    const weightKg = unit === "metric" ? w : w * 0.453592;
    const bmi = weightKg / (heightMeters * heightMeters);

    let category;
    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 25) category = "Normal weight";
    else if (bmi < 30) category = "Overweight";
    else category = "Obesity";

    setResult({ bmi: bmi.toFixed(1), category });
  };

  const reset = () => {
    setHeight("");
    setWeight("");
    setResult(null);
    setError("");
  };

  return (
    <main className="min-h-screen bg-[#f4f8fa] pt-[104px] text-[#183b4e]">
      <section className="relative overflow-hidden bg-[#123f55] px-5 py-16 text-white md:py-20">
        <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#f4c94e]/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[3px] text-[#f4c94e]">
            Health Tools
          </p>

          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                BMI <span className="text-[#f4c94e]">Calculator</span>
              </h1>

              <p className="mt-5 max-w-xl leading-7 text-white/75">
                Check your Body Mass Index and understand how your weight
                relates to your height with this quick health assessment.
              </p>
            </div>

            <div className="hidden justify-end md:flex">
              <div className="flex h-40 w-40 items-center justify-center rounded-full border border-white/20 bg-white/10">
                <Activity size={76} className="text-[#f4c94e]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-7 lg:grid-cols-[1.1fr_0.9fr]">
          <form
            onSubmit={calculateBMI}
            className="rounded-2xl border border-[#e0e9ed] bg-white p-6 shadow-sm md:p-9"
          >
            <span className="text-sm font-bold uppercase tracking-widest text-[#16859a]">
              Calculate your BMI
            </span>

            <h2 className="mt-2 text-2xl font-bold md:text-3xl">
              Enter your measurements
            </h2>

            <div className="mt-7 flex rounded-xl bg-[#eef4f6] p-1">
              {["metric", "imperial"].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => {
                    setUnit(item);
                    setHeight("");
                    setWeight("");
                    setResult(null);
                    setError("");
                  }}
                  className={`flex-1 rounded-lg px-4 py-3 text-sm font-semibold capitalize transition ${
                    unit === item
                      ? "bg-[#123f55] text-white shadow"
                      : "text-[#56717d] hover:text-[#123f55]"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <label className="mt-6 block text-sm font-semibold">
              Height {unit === "metric" ? "(cm)" : "(inches)"}
            </label>
            <input
              type="number"
              min="1"
              step="any"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder={unit === "metric" ? "e.g. 175" : "e.g. 69"}
              className="mt-2 h-12 w-full rounded-xl border border-[#dce6ea] px-4 outline-none transition focus:border-[#16859a] focus:ring-2 focus:ring-[#16859a]/10"
            />

            <label className="mt-5 block text-sm font-semibold">
              Weight {unit === "metric" ? "(kg)" : "(lbs)"}
            </label>
            <input
              type="number"
              min="1"
              step="any"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder={unit === "metric" ? "e.g. 70" : "e.g. 154"}
              className="mt-2 h-12 w-full rounded-xl border border-[#dce6ea] px-4 outline-none transition focus:border-[#16859a] focus:ring-2 focus:ring-[#16859a]/10"
            />

            {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#123f55] px-5 py-4 font-semibold text-white transition hover:bg-[#16859a]"
              >
                Calculate BMI <ArrowRight size={18} />
              </button>

              <button
                type="button"
                onClick={reset}
                className="flex items-center justify-center gap-2 rounded-xl border border-[#dce6ea] px-5 py-4 font-semibold transition hover:bg-[#f4f8fa]"
              >
                <RotateCcw size={17} /> Reset
              </button>
            </div>
          </form>

          <div className="flex flex-col rounded-2xl bg-[#e7f1f4] p-6 md:p-9">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#16859a] shadow-sm">
              <HeartPulse size={25} />
            </div>

            <h2 className="mt-5 text-2xl font-bold">Your BMI Result</h2>
            <p className="mt-2 text-sm leading-6 text-[#56717d]">
              Your result will appear here after you enter your measurements.
            </p>

            {result ? (
              <div className="mt-7 rounded-2xl border border-white bg-white p-6">
                <p className="text-sm font-medium text-[#56717d]">
                  Your BMI is
                </p>
                <p className="mt-2 text-6xl font-bold text-[#123f55]">
                  {result.bmi}
                </p>
                <span className="mt-4 inline-flex rounded-full bg-[#fff3c8] px-4 py-2 text-sm font-bold text-[#795c00]">
                  {result.category}
                </span>
              </div>
            ) : (
              <div className="mt-7 flex flex-1 items-center justify-center rounded-2xl border border-dashed border-[#b8cfd7] bg-white/60 p-8 text-center">
                <div>
                  <Activity size={40} className="mx-auto text-[#16859a]/60" />
                  <p className="mt-3 text-sm text-[#56717d]">
                    Your calculated result will appear in this area.
                  </p>
                </div>
              </div>
            )}

            <div className="mt-6 rounded-xl bg-white p-5">
              <h3 className="font-bold">BMI categories</h3>
              <div className="mt-3 space-y-3 text-sm">
                {[
                  ["Below 18.5", "Underweight"],
                  ["18.5 – 24.9", "Normal weight"],
                  ["25 – 29.9", "Overweight"],
                  ["30 and above", "Obesity"],
                ].map(([range, label]) => (
                  <div key={label} className="flex justify-between gap-3">
                    <span className="text-[#56717d]">{range}</span>
                    <span className="font-semibold">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-6xl text-xs leading-6 text-[#71858e]">
          This calculator provides an estimate for adults and is not a medical
          diagnosis. Speak with a qualified healthcare professional for
          individual advice.
        </p>
      </section>
    </main>
  );
}

export default BMICalculator;
