import React from "react";
import { Link } from "react-router-dom";

const stats = [
  { label: "Total Employees", value: "124", detail: "Active staff members" },
  { label: "New Hires", value: "8", detail: "This month" },
  { label: "Open Roles", value: "5", detail: "Pending approvals" },
  { label: "Avg. Tenure", value: "3.2 yrs", detail: "Company average" },
];

const HomePage = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-700 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
                Employee Management
              </p>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                Company Dashboard
              </h1>
              <p className="mt-4 text-slate-400">
                Monitor employees, track hiring, and launch new team profiles
                from a single dashboard.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/create"
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:brightness-110"
              >
                Create Employee
              </Link>
              <Link
                to="/all"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-700 bg-slate-950/90 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300"
              >
                View All Employees
              </Link>
            </div>
          </div>

          <div className="mt-10 grid gap-6 xl:grid-cols-[1.8fr_1.2fr]">
            <div className="grid gap-6 md:grid-cols-2">
              {stats.map((stat) => (
                <article
                  key={stat.label}
                  className="rounded-3xl border border-slate-700 bg-slate-950/70 p-6 shadow-lg shadow-slate-950/20"
                >
                  <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-400">
                    {stat.label}
                  </p>
                  <p className="mt-4 text-4xl font-bold text-white">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-slate-400">{stat.detail}</p>
                </article>
              ))}
            </div>

            <aside className="rounded-3xl border border-slate-700 bg-slate-950/70 p-6 shadow-lg shadow-slate-950/20">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
                    Today’s update
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">
                    Hiring snapshot
                  </h2>
                </div>
                <span className="inline-flex rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-semibold text-cyan-300">
                  Live
                </span>
              </div>
              <div className="mt-6 space-y-4 text-slate-300">
                <div className="rounded-3xl bg-slate-900/80 p-4">
                  <p className="text-sm text-slate-400">
                    New candidate reviews
                  </p>
                  <p className="mt-2 text-3xl font-semibold text-white">24</p>
                </div>
                <div className="rounded-3xl bg-slate-900/80 p-4">
                  <p className="text-sm text-slate-400">Interviews scheduled</p>
                  <p className="mt-2 text-3xl font-semibold text-white">7</p>
                </div>
                <div className="rounded-3xl bg-slate-900/80 p-4">
                  <p className="text-sm text-slate-400">Pending approvals</p>
                  <p className="mt-2 text-3xl font-semibold text-white">3</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
