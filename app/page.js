"use client";
import React from "react";
import Image from "next/image";

export default function ParabellumLandingPage() {
  const [form, setForm] = React.useState({
    facility: "",
    contact: "",
    email: "",
    costPerCase: "",
    casesPerMonth: "",
    notes: "",
  });

  const cost = Number(form.costPerCase) || 0;
  const monthlyCases = Number(form.casesPerMonth) || 0;
  const annualSpend = cost * monthlyCases * 12;

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
        `Email: ${form.email}\n` +
        `Current cost per case: $${form.costPerCase}\n` +
        `Cases per month: ${form.casesPerMonth}\n` +
        `Estimated annual spend: $${annualSpend.toLocaleString()}\n` +
        `Notes: ${form.notes}`
    );

    window.location.href = `mailto:info@parabellum-medtech.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>

              {/* 🔥 LOGO ROW (NEW) */}
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

              <div className="mb-4 inline-flex rounded-full border border-slate-200 px-4 py-1 text-sm font-medium text-slate-600">
                ASC-focused orthopedic solutions
              </div>

              <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
                High-quality orthopedic products built for the ASC model.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Parabellum helps ambulatory surgery centers lower implant spend
                without compromising quality, surgeon confidence, or case
                efficiency.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 p-5 shadow-sm">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    What we are about
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    We are focused on delivering reliable orthopedic technology
                    with a disciplined, ASC-first approach: practical systems,
                    efficient case support, and value-minded economics.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 p-5 shadow-sm">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    Why ASCs care
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    Lower case cost, predictable support, and products designed
                    to help centers protect margin while still delivering
                    excellent patient care.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
              <div className="mb-4">
                <h2 className="text-2xl font-semibold">ASC Cost Snapshot</h2>
                <p className="mt-2 text-sm text-slate-600">
                  Fill this out and Parabellum can review your estimated annual
                  spend and follow up directly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium">
                      Facility name
                    </label>
                    <input
                      name="facility"
                      value={form.facility}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300"
                      placeholder="Center or ASC name"
                      required
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium">
                      Contact name
                    </label>
                    <input
                      name="contact"
                      value={form.contact}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300"
                      placeholder="Your name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300"
                    placeholder="you@facility.com"
                    required
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium">
                      Current cost of goods per case ($)
                    </label>
                    <input
                      type="number"
                      name="costPerCase"
                      value={form.costPerCase}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300"
                      placeholder="1500"
                      min="0"
                      required
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium">
                      Cases per month
                    </label>
                    <input
                      type="number"
                      name="casesPerMonth"
                      value={form.casesPerMonth}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300"
                      placeholder="25"
                      min="0"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium">Notes</label>
                  <textarea
                    name="notes"
                    value={form.notes}
                    onChange={handleChange}
                    rows={4}
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300"
                    placeholder="Optional procedures, pain points, or product categories"
                  />
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="text-sm text-slate-500">
                    Estimated annual current spend
                  </div>
                  <div className="mt-1 text-3xl font-semibold">
                    ${annualSpend.toLocaleString()}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
                >
                  Submit for review
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold">ASC-first economics</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              We are built around helping surgery centers evaluate implant costs
              at the case level and find a more efficient path forward.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Quality without excess</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Thoughtful product strategy, dependable supply, and surgeon-ready
              systems designed to support growth.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Direct follow-up</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Every inquiry comes straight to your team so you can personally
              review opportunities and respond with projected savings.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}