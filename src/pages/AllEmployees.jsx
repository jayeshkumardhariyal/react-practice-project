import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllEmployees = () => {
  const [employeeData, setEmployeeData] = useState([]);
  useEffect(() => {
    async function getRegisteredUser() {
      try {
        let resp = await axios.get("http://localhost:5000/employee");
        // console.log(resp);
        setEmployeeData(resp.data);
      } catch (error) {
        console.log(error);
        alert("Unable to fetch data ❌");
      }
    }
    getRegisteredUser();
  }, []);

  // const []
  // console.log(employeeData);
  const handleDelete = (id) => {
    try {
      // alert("Are you sure you want to delete selected data 🚨🚨🚨");
      let resp = axios.delete(`http://localhost:5000/employee/${id}`);
      // console.log(id);
      if (resp) {
        alert("Data deleted succefully✅");
      } else {
        alert("Failed to delete data ❌");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-3xl bg-white p-6 shadow-lg shadow-slate-200/80 ring-1 ring-slate-200 sm:p-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
              Employee Directory
            </p>
            <h1 className="mt-2 text-3xl font-semibold text-slate-900">
              All Employees
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              Browse every registered employee and manage their profile
              information.
            </p>
          </div>
          <div className="rounded-3xl bg-slate-100 px-4 py-3 text-sm text-slate-700 shadow-inner shadow-slate-200/60">
            Total employees:{" "}
            <span className="font-semibold text-slate-900">
              {employeeData.length}
            </span>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 text-sm">
              <thead className="bg-slate-50 text-left text-xs uppercase tracking-[0.16em] text-slate-500">
                <tr>
                  <th className="px-4 py-4 sm:px-6">ID</th>
                  <th className="px-4 py-4 sm:px-6">First Name</th>
                  <th className="px-4 py-4 sm:px-6">Last Name</th>
                  <th className="px-4 py-4 sm:px-6">Email</th>
                  <th className="px-4 py-4 sm:px-6">Age</th>
                  <th className="px-4 py-4 sm:px-6">Designation</th>
                  <th className="px-4 py-4 sm:px-6">Date Joined</th>
                  <th className="px-4 py-4 sm:px-6">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {employeeData?.length === 0 ? (
                  <tr className="bg-slate-50">
                    <td
                      className="px-4 py-6 text-center text-slate-500 sm:px-6"
                      colSpan="8"
                    >
                      No employee data available.
                    </td>
                  </tr>
                ) : (
                  employeeData?.map((ele) => {
                    let {
                      id,
                      firstName,
                      lastName,
                      email,
                      age,
                      designation,
                      doj,
                    } = ele;
                    return (
                      <tr key={id} className="hover:bg-slate-50/80">
                        <td className="whitespace-nowrap px-4 py-4 font-medium text-slate-900 sm:px-6">
                          {id}
                        </td>
                        <td className="px-4 py-4 text-slate-700 sm:px-6">
                          {firstName}
                        </td>
                        <td className="px-4 py-4 text-slate-700 sm:px-6">
                          {lastName}
                        </td>
                        <td className="px-4 py-4 text-slate-700 sm:px-6">
                          {email}
                        </td>
                        <td className="px-4 py-4 text-slate-700 sm:px-6">
                          {age}
                        </td>
                        <td className="px-4 py-4 text-slate-700 sm:px-6">
                          {designation}
                        </td>
                        <td className="px-4 py-4 text-slate-700 sm:px-6">
                          {doj}
                        </td>
                        <td className="px-4 py-4 sm:px-6">
                          <div className="flex flex-wrap gap-2">
                            <Link
                              to={`/edit/${id}`}
                              className="rounded-full bg-sky-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-sky-700"
                            >
                              Edit
                            </Link>
                            <button
                              onClick={() => handleDelete(id)}
                              className="rounded-full bg-rose-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-rose-700"
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllEmployees;
