
import { useState } from "react";
import { Flame, RotateCcw, ArrowRight } from "lucide-react";

function DailyCalorieCalculator() {
  const [form, setForm] = useState({
    gender: "male",
    age: "30",
    height: "175",
    weight: "70",
    activity: "1.2",
    goal: "maintain",
  });
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const update = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const calculate = (e) => {
    e.preventDefault();
    setError("");

    const age = Number(form.age);
    const height = Number(form.height);
    const weight = Number(form.weight);

    if (
      !age ||
      !height ||
      !weight ||
      age < 18 ||
      age > 120 ||
      height < 80 ||
      weight < 20
    ) {
      setError("Enter valid details. This calculator is designed for adults.");
      setResult(null);
      return;
    }

    const bmr =
      10 * weight +
      6.25 * height -
      5 * age +
      (form.gender === "male" ? 5 : -161);

    const maintenance = Math.round(bmr * Number(form.activity));
    const adjustment =
      form.goal === "lose" ? -500 : form.goal === "gain" ? 300 : 0;

    setResult({
      maintenance,
      target: maintenance + adjustment,
      bmr: Math.round(bmr),
    });
  };

  const reset = () => {
    setForm({
      gender: "male",
      age: "30",
      height: "175",
      weight: "70",
      activity: "1.2",
      goal: "maintain",
    });
    setResult(null);
    setError("");
  };

  const fieldClass =
    "mt-2 h-12 w-full rounded-xl border border-[#dce6ea] bg-white px-4 text-sm outline-none focus:border-[#16859a] focus:ring-2 focus:ring-[#16859a]/10";

  return (
    <main className="min-h-screen bg-[#f4f8fa] pt-[104px] text-[#183b4e]">
      <section className="bg-[#f4f8fa] px-5 py-14 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[3px] text-[#16859a]">
            Health Tools
          </p>

          <div className="mt-4 grid items-center gap-8 md:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                Daily Calorie <span className="text-[#16859a]">Needs</span>
              </h1>
              <p className="mt-5 max-w-xl leading-7 text-[#56717d]">
                Estimate how many calories your body needs each day based on
                your measurements, activity level, and personal goal.
              </p>
            </div>

            <div className="flex justify-start md:justify-end">
              <div className="flex h-36 w-36 items-center justify-center rounded-full bg-[#123f55] shadow-xl shadow-[#123f55]/10">
                <Flame size={70} className="text-[#f4c94e]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-16">
        <div className="mx-auto grid max-w-6xl gap-7 lg:grid-cols-[1.1fr_0.9fr]">
          <form
            onSubmit={calculate}
            className="rounded-2xl border border-[#e0e9ed] bg-white p-6 shadow-sm md:p-9"
          >
            <h2 className="text-2xl font-bold">Your Details</h2>
            <p className="mt-2 text-sm text-[#71858e]">
              Complete the fields to estimate your daily calorie requirements.
            </p>

            <label className="mt-6 block text-sm font-semibold">Gender</label>
            <div className="mt-2 grid grid-cols-2 gap-3">
              {["male", "female"].map((gender) => (
                <button
                  key={gender}
                  type="button"
                  onClick={() => update("gender", gender)}
                  className={`rounded-xl border px-4 py-3 font-semibold capitalize transition ${
                    form.gender === gender
                      ? "border-[#123f55] bg-[#123f55] text-white"
                      : "border-[#dce6ea] bg-white hover:border-[#16859a]"
                  }`}
                >
                  {gender}
                </button>
              ))}
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-semibold">Age (years)</label>
                <input
                  className={fieldClass}
                  type="number"
                  min="18"
                  max="120"
                  value={form.age}
                  onChange={(e) => update("age", e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="text-sm font-semibold">Height (cm)</label>
                <input
                  className={fieldClass}
                  type="number"
                  min="80"
                  value={form.height}
                  onChange={(e) => update("height", e.target.value)}
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-semibold">Weight (kg)</label>
                <input
                  className={fieldClass}
                  type="number"
                  min="20"
                  value={form.weight}
                  onChange={(e) => update("weight", e.target.value)}
                  required
                />
              </div>
            </div>

            <label className="mt-5 block text-sm font-semibold">
              Activity Level
            </label>
            <select
              className={fieldClass}
              value={form.activity}
              onChange={(e) => update("activity", e.target.value)}
            >
              <option value="1.2">Sedentary — little or no exercise</option>
              <option value="1.375">Lightly active — 1–3 days/week</option>
              <option value="1.55">Moderately active — 3–5 days/week</option>
              <option value="1.725">Very active — 6–7 days/week</option>
              <option value="1.9">Extra active — intense physical work</option>
            </select>

            <label className="mt-5 block text-sm font-semibold">
              Your Goal
            </label>
            <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                ["lose", "Lose weight"],
                ["maintain", "Maintain"],
                ["gain", "Gain weight"],
              ].map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => update("goal", value)}
                  className={`rounded-xl border px-3 py-3 text-sm font-semibold transition ${
                    form.goal === value
                      ? "border-[#f4c94e] bg-[#fff7d9] text-[#123f55]"
                      : "border-[#dce6ea] hover:border-[#16859a]"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#123f55] px-5 py-4 font-semibold text-white transition hover:bg-[#16859a]"
              >
                Calculate Calories <ArrowRight size={18} />
              </button>
              <button
                type="button"
                onClick={reset}
                className="flex items-center justify-center gap-2 rounded-xl border border-[#dce6ea] px-5 py-4 font-semibold hover:bg-[#f4f8fa]"
              >
                <RotateCcw size={17} /> Reset
              </button>
            </div>
          </form>

          <aside className="rounded-2xl bg-[#123f55] p-6 text-white md:p-9">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#f4c94e]">
              <Flame size={26} />
            </div>

            <p className="mt-6 text-sm font-bold uppercase tracking-[2px] text-[#f4c94e]">
              Your Daily Estimate
            </p>
            <h2 className="mt-2 text-3xl font-bold">Calorie Needs</h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Your estimated daily calorie target will appear here.
            </p>

            {result ? (
              <div className="mt-7 rounded-2xl bg-white p-6 text-[#183b4e]">
                <p className="text-sm text-[#71858e]">Suggested daily target</p>
                <p className="mt-2 text-5xl font-bold">
                  {result.target.toLocaleString()}
                </p>
                <p className="mt-1 font-semibold text-[#16859a]">kcal/day</p>

                <div className="mt-6 space-y-4 border-t border-[#e0e9ed] pt-5 text-sm">
                  <div className="flex justify-between gap-3">
                    <span className="text-[#71858e]">Maintenance estimate</span>
                    <strong>{result.maintenance.toLocaleString()} kcal</strong>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-[#71858e]">Estimated BMR</span>
                    <strong>{result.bmr.toLocaleString()} kcal</strong>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mt-7 rounded-2xl border border-white/20 bg-white/5 p-8 text-center">
                <Flame size={42} className="mx-auto text-[#f4c94e]" />
                <p className="mt-3 text-sm text-white/70">
                  Enter your details and calculate to see your results.
                </p>
              </div>
            )}

            <div className="mt-6 rounded-xl border border-white/15 p-5">
              <h3 className="font-bold text-[#f4c94e]">Remember</h3>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Calorie needs vary between individuals. This estimate is for
                general guidance and is not a personalized medical nutrition
                plan.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default DailyCalorieCalculator;
