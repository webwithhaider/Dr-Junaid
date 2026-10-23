
import { useState } from "react";
import { Scale, RotateCcw, ArrowRight } from "lucide-react";

function IdealBodyWeightCalculator() {
  const [unit, setUnit] = useState("metric");
  const [gender, setGender] = useState("male");
  const [height, setHeight] = useState("175");
  const [currentWeight, setCurrentWeight] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const calculate = (e) => {
    e.preventDefault();
    setError("");

    const enteredHeight = Number(height);
    const heightInches =
      unit === "metric" ? enteredHeight / 2.54 : enteredHeight;

    if (
      !enteredHeight ||
      enteredHeight <= 0 ||
      heightInches < 40 ||
      heightInches > 100
    ) {
      setError("Please enter a valid adult height.");
      setResult(null);
      return;
    }

    const inchesOverFiveFeet = heightInches - 60;
    const devine =
      (gender === "male" ? 50 : 45.5) + 2.3 * inchesOverFiveFeet;
    const robinson =
      (gender === "male" ? 52 : 49) + 1.9 * inchesOverFiveFeet;

    setResult({
      devine: Math.max(0, devine).toFixed(1),
      robinson: Math.max(0, robinson).toFixed(1),
    });
  };

  const reset = () => {
    setUnit("metric");
    setGender("male");
    setHeight("175");
    setCurrentWeight("");
    setResult(null);
    setError("");
  };

  const fieldClass =
    "mt-2 h-12 w-full rounded-xl border border-[#dce6ea] bg-white px-4 outline-none focus:border-[#16859a] focus:ring-2 focus:ring-[#16859a]/10";

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
                Ideal Body <span className="text-[#16859a]">Weight</span>
              </h1>
              <p className="mt-5 max-w-xl leading-7 text-[#56717d]">
                Estimate an ideal body weight range using your height and
                commonly used adult weight-estimation formulas.
              </p>
            </div>

            <div className="flex justify-start md:justify-end">
              <div className="flex h-36 w-36 items-center justify-center rounded-full bg-[#123f55] shadow-xl shadow-[#123f55]/10">
                <Scale size={70} className="text-[#f4c94e]" />
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
            <h2 className="text-2xl font-bold">Calculate Your Ideal Weight</h2>
            <p className="mt-2 text-sm leading-6 text-[#71858e]">
              Enter your measurements to view estimates from two established
              formulas.
            </p>

            <label className="mt-6 block text-sm font-semibold">
              Measurement Units
            </label>
            <div className="mt-2 flex rounded-xl bg-[#eef4f6] p-1">
              {["metric", "imperial"].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => {
                    setUnit(item);
                    setHeight(item === "metric" ? "175" : "69");
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

            <label className="mt-6 block text-sm font-semibold">Gender</label>
            <div className="mt-2 grid grid-cols-2 gap-3">
              {["male", "female"].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => {
                    setGender(item);
                    setResult(null);
                  }}
                  className={`rounded-xl border px-4 py-3 font-semibold capitalize transition ${
                    gender === item
                      ? "border-[#123f55] bg-[#123f55] text-white"
                      : "border-[#dce6ea] hover:border-[#16859a]"
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
              className={fieldClass}
              type="number"
              min="1"
              step="any"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              required
            />

            <label className="mt-5 block text-sm font-semibold">
              Current Weight (optional, kg)
            </label>
            <input
              className={fieldClass}
              type="number"
              min="1"
              step="any"
              value={currentWeight}
              onChange={(e) => setCurrentWeight(e.target.value)}
              placeholder="Enter current weight"
            />

            {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#123f55] px-5 py-4 font-semibold text-white transition hover:bg-[#16859a]"
              >
                Calculate <ArrowRight size={18} />
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

          <aside className="rounded-2xl bg-[#e7f1f4] p-6 md:p-9">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#16859a] shadow-sm">
              <Scale size={25} />
            </div>

            <h2 className="mt-5 text-2xl font-bold">Your Results</h2>
            <p className="mt-2 text-sm leading-6 text-[#56717d]">
              Your estimated ideal body weight will appear here.
            </p>

            {result ? (
              <div className="mt-7 space-y-4">
                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <p className="text-sm text-[#71858e]">Devine Formula</p>
                  <p className="mt-2 text-4xl font-bold text-[#123f55]">
                    {result.devine} <span className="text-lg">kg</span>
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <p className="text-sm text-[#71858e]">Robinson Formula</p>
                  <p className="mt-2 text-4xl font-bold text-[#123f55]">
                    {result.robinson} <span className="text-lg">kg</span>
                  </p>
                </div>

                {currentWeight && Number(currentWeight) > 0 && (
                  <div className="rounded-xl border border-[#c7dce2] bg-white/70 p-4 text-sm leading-6">
                    Current weight entered:{" "}
                    <strong>{currentWeight} kg</strong>. Compare this with
                    these estimates with a healthcare professional.
                  </div>
                )}
              </div>
            ) : (
              <div className="mt-7 rounded-2xl border border-dashed border-[#b8cfd7] bg-white/60 p-9 text-center">
                <Scale size={42} className="mx-auto text-[#16859a]/60" />
                <p className="mt-3 text-sm text-[#56717d]">
                  Submit your height and gender to see both estimates.
                </p>
              </div>
            )}

            <div className="mt-6 rounded-xl bg-white p-5">
              <h3 className="font-bold">Important information</h3>
              <p className="mt-2 text-sm leading-6 text-[#71858e]">
                These formulas provide estimates, not a definitive healthy
                weight range. Body composition, age, health conditions, and
                other factors also matter.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default IdealBodyWeightCalculator;
