"use client";
import React from "react";
import Image from "next/image";

export default function ParabellumLandingPage() {
  const [form, setForm] = React.useState({
    facility: "",
    contact: "",
    email: "",

    rcrCostPerCase: "",
    rcrCasesPerMonth: "",

    distalRadiusCostPerCase: "",
    distalRadiusCasesPerMonth: "",

    distalFibulaCostPerCase: "",
    distalFibulaCasesPerMonth: "",

    notes: "",
  });

  const rcrAnnualSpend =
    (Number(form.rcrCostPerCase) || 0) * (Number(form.rcrCasesPerMonth) || 0) * 12;

  const distalRadiusAnnualSpend =
    (Number(form.distalRadiusCostPerCase) || 0) *
    (Number(form.distalRadiusCasesPerMonth) || 0) *
    12;

  const distalFibulaAnnualSpend =
    (Number(form.distalFibulaCostPerCase) || 0) *
    (Number(form.distalFibulaCasesPerMonth) || 0) *
    12;

  const annualSpend =
    rcrAnnualSpend + distalRadiusAnnualSpend + distalFibulaAnnualSpend;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent("Parabellum ASC Savings Inquiry");
    const body = encodeURIComponent(
      `Facility: ${form.facility}\n` +
        `Contact: ${form.contact}\n` +
        `Email: ${form.email}\n\n` +
        `Rotator Cuff Repair (RCR)\n` +
        `Cost per case: $${form.rcrCostPerCase}\n` +
        `Cases per month: ${form.rcrCasesPerMonth}\n` +
        `Annual subtotal: $${rcrAnnualSpend.toLocaleString()}\n\n` +
        `Distal Radius\n` +
        `Cost per case: $${form.distalRadiusCostPerCase}\n` +
        `Cases per month: ${form.distalRadiusCasesPerMonth}\n` +
        `Annual subtotal: $${distalRadiusAnnualSpend.toLocaleString()}\n\n` +
        `Distal Fibula\n` +
        `Cost per case: $${form.distalFibulaCostPerCase}\n` +
        `Cases per month: ${form.distalFibulaCasesPerMonth}\n` +
        `Annual subtotal: $${distalFibulaAnnualSpend.toLocaleString()}\n\n` +
        `Estimated annual spend: $${annualSpend.toLocaleString()}\n\n` +
        `Notes: ${form.notes}`
    );

    window.location.href = `mailto:info@parabellum-medtech.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <Image
                  src="/logo-icon.png"
                  alt="Parabellum Logo"
                  width={70}
                  height={70}
                  priority
                />
                <Image
                  src="/logo-text.png"
                  alt="Parabellum Med Tech"
                  width={264}
                  height={66}
                  priority
                />
              </div>

              <div className="mb-4 inline-flex rounded-full border border-[#921F15]/25 bg-[#921F15]/5 px-4 py-1 text-sm font-medium text-[#921F15]">
                ASC-focused orthopedic solutions
              </div>

              <h1 className="max-w-2xl font-[family-name:var(--font-science-gothic)] text-4xl font-semibold tracking-tight text-[#121F37] sm:text-5xl">
                High-quality orthopedic products built for the ASC model.
              </h1>

              <div className="mt-5 h-1 w-24 rounded-full bg-[#921F15]" />

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Parabellum helps ambulatory surgery centers lower implant spend
                without compromising quality, surgeon confidence, or case
                efficiency.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                  <div className="mb-3 h-1 w-12 rounded-full bg-[#921F15]" />
                  <h3 className="font-[family-name:var(--font-science-gothic)] text-sm font-semibold uppercase tracking-wide text-[#121F37]/75">
                    What we are about
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    We are focused on delivering reliable orthopedic technology
                    with a disciplined, ASC-first approach: practical systems,
                    efficient case support, and value-minded economics.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                  <div className="mb-3 h-1 w-12 rounded-full bg-[#921F15]" />
                  <h3 className="font-[family-name:var(--font-science-gothic)] text-sm font-semibold uppercase tracking-wide text-[#121F37]/75">
                    Why ASCs care
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    Lower case cost, predictable support, and products designed
                    to help centers protect margin while still delivering
                    excellent patient care.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                  <div className="mb-3 h-1 w-12 rounded-full bg-[#921F15]" />
                  <h3 className="font-[family-name:var(--font-science-gothic)] text-sm font-semibold uppercase tracking-wide text-[#121F37]/75">
                    ASC-first economics
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    We are built around helping surgery centers evaluate implant
                    costs at the case level and find a more efficient path
                    forward.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                  <div className="mb-3 h-1 w-12 rounded-full bg-[#921F15]" />
                  <h3 className="font-[family-name:var(--font-science-gothic)] text-sm font-semibold uppercase tracking-wide text-[#121F37]/75">
                    Quality without excess
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    Thoughtful product strategy, dependable supply, and
                    surgeon-ready systems designed to support growth.
                  </p>
                </div>
              </div>

              <div className="mt-4 flex justify-center sm:mt-6">
                <div className="w-full max-w-sm rounded-2xl border border-slate-200 p-5 text-center shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                  <div className="mx-auto mb-3 h-1 w-12 rounded-full bg-[#921F15]" />
                  <h3 className="font-[family-name:var(--font-science-gothic)] text-sm font-semibold uppercase tracking-wide text-[#121F37]/75">
                    Direct follow-up
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    Every inquiry comes straight to your team so you can
                    personally review opportunities and respond with projected
                    savings.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
              <div className="mb-4">
                <div className="mb-3 h-1 w-14 rounded-full bg-[#921F15]" />
                <h2 className="font-[family-name:var(--font-science-gothic)] text-2xl font-semibold text-[#121F37]">
                  ASC Cost Snapshot
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Fill this out and Parabellum can review your estimated annual
                  spend and follow up directly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-[#121F37]">
                      Facility name
                    </label>
                    <input
                      name="facility"
                      value={form.facility}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#921F15]/40 focus:ring-2 focus:ring-[#921F15]/20"
                      placeholder="Center or ASC name"
                      required
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium text-[#121F37]">
                      Contact name
                    </label>
                    <input
                      name="contact"
                      value={form.contact}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#921F15]/40 focus:ring-2 focus:ring-[#921F15]/20"
                      placeholder="Your name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-[#121F37]">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#921F15]/40 focus:ring-2 focus:ring-[#921F15]/20"
                    placeholder="you@facility.com"
                    required
                  />
                </div>

                <div className="rounded-2xl border border-slate-200 p-4">
                  <div className="mb-3 font-[family-name:var(--font-science-gothic)] text-sm font-semibold uppercase tracking-wide text-[#121F37]">
                    Rotator Cuff Repair (RCR)
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-sm font-medium text-[#121F37]">
                        Cost of goods per case ($)
                      </label>
                      <input
                        type="number"
                        name="rcrCostPerCase"
                        value={form.rcrCostPerCase}
                        onChange={handleChange}
                        className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#921F15]/40 focus:ring-2 focus:ring-[#921F15]/20"
                        placeholder="1500"
                        min="0"
                        required
                      />
                    </div>

                    <div>
                      <label className="mb-1 block text-sm font-medium text-[#121F37]">
                        Cases per month
                      </label>
                      <input
                        type="number"
                        name="rcrCasesPerMonth"
                        value={form.rcrCasesPerMonth}
                        onChange={handleChange}
                        className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#921F15]/40 focus:ring-2 focus:ring-[#921F15]/20"
                        placeholder="25"
                        min="0"
                        required
                      />
                    </div>
                  </div>
                  <div className="mt-3 rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
                    Annual subtotal:{" "}
                    <span className="font-semibold text-[#121F37]">
                      ${rcrAnnualSpend.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 p-4">
                  <div className="mb-3 font-[family-name:var(--font-science-gothic)] text-sm font-semibold uppercase tracking-wide text-[#121F37]">
                    Distal Radius
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-sm font-medium text-[#121F37]">
                        Cost of goods per case ($)
                      </label>
                      <input
                        type="number"
                        name="distalRadiusCostPerCase"
                        value={form.distalRadiusCostPerCase}
                        onChange={handleChange}
                        className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#921F15]/40 focus:ring-2 focus:ring-[#921F15]/20"
                        placeholder="1500"
                        min="0"
                        required
                      />
                    </div>

                    <div>
                      <label className="mb-1 block text-sm font-medium text-[#121F37]">
                        Cases per month
                      </label>
                      <input
                        type="number"
                        name="distalRadiusCasesPerMonth"
                        value={form.distalRadiusCasesPerMonth}
                        onChange={handleChange}
                        className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#921F15]/40 focus:ring-2 focus:ring-[#921F15]/20"
                        placeholder="25"
                        min="0"
                        required
                      />
                    </div>
                  </div>
                  <div className="mt-3 rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
                    Annual subtotal:{" "}
                    <span className="font-semibold text-[#121F37]">
                      ${distalRadiusAnnualSpend.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 p-4">
                  <div className="mb-3 font-[family-name:var(--font-science-gothic)] text-sm font-semibold uppercase tracking-wide text-[#121F37]">
                    Distal Fibula
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-sm font-medium text-[#121F37]">
                        Cost of goods per case ($)
                      </label>
                      <input
                        type="number"
                        name="distalFibulaCostPerCase"
                        value={form.distalFibulaCostPerCase}
                        onChange={handleChange}
                        className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#921F15]/40 focus:ring-2 focus:ring-[#921F15]/20"
                        placeholder="1500"
                        min="0"
                        required
                      />
                    </div>

                    <div>
                      <label className="mb-1 block text-sm font-medium text-[#121F37]">
                        Cases per month
                      </label>
                      <input
                        type="number"
                        name="distalFibulaCasesPerMonth"
                        value={form.distalFibulaCasesPerMonth}
                        onChange={handleChange}
                        className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#921F15]/40 focus:ring-2 focus:ring-[#921F15]/20"
                        placeholder="25"
                        min="0"
                        required
                      />
                    </div>
                  </div>
                  <div className="mt-3 rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
                    Annual subtotal:{" "}
                    <span className="font-semibold text-[#121F37]">
                      ${distalFibulaAnnualSpend.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-[#121F37]">
                    Notes
                  </label>
                  <textarea
                    name="notes"
                    value={form.notes}
                    onChange={handleChange}
                    rows={4}
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#921F15]/40 focus:ring-2 focus:ring-[#921F15]/20"
                    placeholder="Optional procedures, pain points, or product categories"
                  />
                </div>

                <div className="rounded-2xl border border-[#921F15]/10 bg-slate-50 p-4">
                  <div className="text-sm text-slate-500">
                    Estimated annual spend
                  </div>
                  <div className="mt-1 text-3xl font-semibold text-[#121F37]">
                    ${annualSpend.toLocaleString()}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-[#121F37] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1B2B4D]"
                >
                  Submit for review
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}