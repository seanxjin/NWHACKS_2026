"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const QuestionsSection = () => {
  // Store which index is currently open (null means all closed)
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Is Rambl really free to use?",
      answer:
        "Yes! We offer a generous free tier that includes unlimited personal projects and basic team collaboration. For larger teams needing advanced security and priority support, we have a Pro plan.",
    },
    {
      question: "Can I migrate my data from other tools?",
      answer:
        "Absolutely. We have one-click importers for Notion, Trello, and Asana. If you have a custom setup, our support team can help you map your data correctly.",
    },
    {
      question: "How secure is my data?",
      answer:
        "Security is our top priority. We use AES-256 encryption for data at rest and TLS 1.3 for data in transit. We also perform regular third-party security audits.",
    },
    {
      question: "Do you offer discounts for non-profits?",
      answer:
        "We love supporting causes that matter. Registered non-profits and educational institutions are eligible for a 50% lifetime discount on all our paid plans.",
    },
    {
      question: "What happens if I cancel my subscription?",
      answer:
        "You own your data. If you cancel, you can export everything in standard formats (CSV, JSON, PDF). Your account will simply revert to the Free plan at the end of your billing cycle.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="scroll-mt-24 py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-[#4A4A4A] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500">
            Have a different question?{" "}
            <a href="#" className="text-[#FFAEBC] font-bold hover:underline">
              Contact Support
            </a>
          </p>
        </div>

        {/* Accordion Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-gray-100 rounded-2xl transition-all duration-300 ${
                openIndex === index
                  ? "bg-gray-50 shadow-sm"
                  : "bg-white hover:border-gray-200"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <span
                  className={`text-lg font-bold ${openIndex === index ? "text-[#4A4A4A]" : "text-gray-600"}`}
                >
                  {faq.question}
                </span>
                <span
                  className={`ml-4 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                >
                  {openIndex === index ? (
                    <div className="w-8 h-8 bg-[#FFAEBC] rounded-full flex items-center justify-center text-white">
                      <Minus size={18} />
                    </div>
                  ) : (
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 group-hover:bg-gray-200">
                      <Plus size={18} />
                    </div>
                  )}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-6 text-gray-500 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuestionsSection;
