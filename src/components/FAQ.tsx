"use client";
import { useState } from "react";

const faqs = [
  {
    question: "Do you accept insurance?",
    answer: "No, but a superbill is provided for self-submission.",
  },
  {
    question: "Are online sessions available?",
    answer: "Yes—all virtual sessions are conducted via Zoom.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "24-hour notice is required to avoid a cancellation fee.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-16 px-4 bg-white" id="faq">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-700 mb-10 text-center">
          Frequently Asked Questions
        </h2>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-300 py-4 cursor-pointer"
            onClick={() => toggle(index)}
          >
            <h3 className="text-xl font-semibold text-blue-600 flex justify-between items-center">
              {faq.question}
              <span className="text-2xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </h3>
            {openIndex === index && (
              <p className="text-gray-700 mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
