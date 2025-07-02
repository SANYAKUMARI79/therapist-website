"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    preferredTime: "",
    agree: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.message) newErrors.message = "Please describe your reason";
    if (!formData.preferredTime) newErrors.preferredTime = "Please add time";
    if (!formData.agree) newErrors.agree = "You must agree to be contacted";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted!");
    }
  };

  return (
    <section id="contact" className="py-16 px-4 bg-gray-100">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          Contact Dr. Blake
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-semibold text-gray-800 text-base">Name</label>

            <input
              name="name"
              className="w-full p-2 border rounded"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>

          <div>
            <label className="block font-semibold text-gray-800 text-base">Phone</label>
            <input
              name="phone"
              className="w-full p-2 border rounded"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <p className="text-red-500">{errors.phone}</p>}
          </div>

          <div>
            <label className="block font-semibold text-gray-800 text-base">Email</label>
            <input
              name="email"
              type="email"
              className="w-full p-2 border rounded"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>

          <div>
            <label className="block font-semibold text-gray-800 text-base">What brings you here?</label>
            <textarea
              name="message"
              className="w-full p-2 border rounded"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <p className="text-red-500">{errors.message}</p>}
          </div>

          <div>
            <label className="block font-semibold text-gray-800 text-base">
              Preferred time to reach you
            </label>
            <input
              name="preferredTime"
              className="w-full p-2 border rounded"
              value={formData.preferredTime}
              onChange={handleChange}
            />
            {errors.preferredTime && (
              <p className="text-red-500">{errors.preferredTime}</p>
            )}
          </div>

          <div>
            <div className="flex items-center space-x-2">
  <input
    type="checkbox"
    name="agree"
    checked={formData.agree}
    onChange={handleChange}
    className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
  />
  <label className="text-gray-900 font-medium">I agree to be contacted</label>
</div>


            
          </div>
          {errors.agree && <p className="text-red-500">{errors.agree}</p>}

          <button
  type="submit"
  className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-6 rounded-md transition duration-200"
>
  Submit
</button>

        </form>
      </div>
    </section>
  );
}
