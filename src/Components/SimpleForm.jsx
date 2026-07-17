import React, { useState } from "react";

const testOptions = [
  "Gurgaon", "Delhi", "Noida", "Lucknow", "Bareily",
  "Varansi", "Panipat", "Amritsar", "Jaipur",
  "Karnal", "Kurukshetra", "Srinagar", "Guwahati",
  "Jammu", "Kolkata"
];

const SimpleForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    test: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 2000);
  };

  return (
    <div className="flex justify-center items-center py-10 ">
      
      <div className="bg-white w-full max-w-md rounded-xl p-6 shadow-xl font-roboto">
        
        <h2 className="text-xl font-semibold text-center text-black">
          Book Your Genetic Test
        </h2>

        <p className="text-center pb-5 text-sm text-gray-600">
          Enter your details below to schedule your test with a specialist.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div className="grid sm:grid-cols-2 gap-3">
            <input
              placeholder="Your Name*"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              className="bg-gray-50 text-gray-600 placeholder:text-gray-400 rounded-md px-4 py-2 w-full focus:outline-none"
            />

            <input
              placeholder="Phone Number*"
              type="tel"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              required
              className="bg-gray-50 text-gray-600 placeholder:text-gray-400 rounded-md px-4 py-2 w-full focus:outline-none"
            />
          </div>

          <select
            value={formData.test}
            onChange={(e) =>
              setFormData({ ...formData, test: e.target.value })
            }
            required
            className="bg-gray-50 text-gray-600 w-full px-4 py-2 rounded-md focus:outline-none"
          >
            <option value="" disabled>
              Select Your City*
            </option>
            {testOptions.map((test) => (
              <option key={test} value={test} className="text-black">
                {test}
              </option>
            ))}
          </select>

          <textarea
            placeholder="Message..."
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="bg-gray-50 text-gray-600 placeholder:text-gray-400 rounded-md px-4 py-2 w-full focus:outline-none"
          />

          <button
            type="submit"
            className="bg-gradient-to-r from-[#05AF79] to-[#0ECE91] w-full text-lg py-2 rounded-md cursor-pointer text-white hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition"
          >
            Submit
          </button>

          {submitted && (
            <p className="text-green-500 text-sm text-center">
              Your form submitted successfully! We will get back to you soon.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default SimpleForm;