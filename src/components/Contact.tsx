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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: { [key: string]: string } = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.message) newErrors.message = "Please describe your reason";
    if (!formData.preferredTime) newErrors.preferredTime = "Add preferred time";
    if (!formData.agree) newErrors.agree = "You must agree to be contacted";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted!");
      // Optional: reset form or send to backend
    }
  };

  return (
    <section id="contact" className="bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-800 mb-8">Contact Dr. Blake</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 p-3 border rounded-lg"
              required
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div>
            <label className="block font-medium text-gray-700">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full mt-1 p-3 border rounded-lg"
              required
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>

          <div>
            <label className="block font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 p-3 border rounded-lg"
              required
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div>
            <label className="block font-medium text-gray-700">What brings you here?</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full mt-1 p-3 border rounded-lg"
              rows={4}
              required
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>

          <div>
            <label className="block font-medium text-gray-700">Preferred time to reach you</label>
            <input
              type="text"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              className="w-full mt-1 p-3 border rounded-lg"
              required
            />
            {errors.preferredTime && (
              <p className="text-red-500 text-sm">{errors.preferredTime}</p>
            )}
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="mr-2"
            />
            <label className="text-gray-700">
              I agree to be contacted
            </label>
          </div>
          {errors.agree && <p className="text-red-500 text-sm">{errors.agree}</p>}

          <button
            type="submit"
            className="bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
