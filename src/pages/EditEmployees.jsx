import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const EditEmployees = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    designation: "",
    doj: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const params = useParams();
  // console.log(params);
  const navigate = useNavigate();

  useEffect(() => {
    async function getEditEmployee() {
      try {
        let resp = await axios.get(
          `http://localhost:5000/employee/${params.id}`,
        );
        setFormData(resp.data);

        console.log(resp);
      } catch (error) {
        console.log(error);
        alert("unable to fetch data to edit employee ❌");
      }
    }
    getEditEmployee();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let resp = await axios.put(
        `http://localhost:5000/employee/${params.id}`,
        formData,
      );
      console.log(resp);

      setFormData(resp.data);
      alert("Employee updated✅");
      navigate("/all");
    } catch (error) {
      console.log(error);
      alert("Failed to Create Employee ❌");
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 py-10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <section className="rounded-[2rem] border border-slate-700 bg-slate-900/85 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
                Create Employee
              </p>
              <h1 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
                Edit team member
              </h1>
            </div>
            <p className="max-w-xl text-slate-400">
              Complete the form below to add an employee profile to the
              directory.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-10 grid gap-6 sm:grid-cols-2"
          >
            <label className="space-y-2">
              <span className="text-sm font-semibold text-slate-300">
                First Name
              </span>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter first name"
                className="w-full rounded-2xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
              />
            </label>

            <label className="space-y-2">
              <span className="text-sm font-semibold text-slate-300">
                Last Name
              </span>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter last name"
                className="w-full rounded-2xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
              />
            </label>

            <label className="space-y-2 sm:col-span-2">
              <span className="text-sm font-semibold text-slate-300">
                Email
              </span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email address"
                className="w-full rounded-2xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
              />
            </label>

            <label className="space-y-2">
              <span className="text-sm font-semibold text-slate-300">Age</span>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Enter age"
                className="w-full rounded-2xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
              />
            </label>

            <label className="space-y-2">
              <span className="text-sm font-semibold text-slate-300">
                Designation
              </span>
              <input
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                placeholder="Enter designation"
                className="w-full rounded-2xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
              />
            </label>

            <label className="space-y-2 sm:col-span-2">
              <span className="text-sm font-semibold text-slate-300">
                Date of Joining
              </span>
              <input
                type="date"
                name="doj"
                value={formData.doj}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
              />
            </label>

            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:brightness-105"
              >
                Edit Employee
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
};

export default EditEmployees;
