"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";

export default function QuoteForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    company: "",
    service: "",
    quantity: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendWhatsApp = () => {
    if (!form.name || !form.phone || !form.service) {
      alert("Please fill in Name, Phone Number and Service.");
      return;
    }

    const text = `*New Quote Request*

👤 Name: ${form.name}

📱 Phone: ${form.phone}

🏢 Company: ${form.company || "N/A"}

🖨️ Service: ${form.service}

📦 Quantity: ${form.quantity || "N/A"}

📝 Requirement:
${form.message || "No additional message."}`;

    window.open(
      `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section className="bg-zinc-950 text-white py-24 px-6">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-14">
          <p className="uppercase tracking-[6px] text-yellow-500 text-sm font-semibold">
            Get a Quote
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mt-4">
            Request a Custom Quote
          </h2>

          <p className="text-gray-400 mt-6">
            Fill in your details and continue the conversation on WhatsApp.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          <input
            type="text"
            name="name"
            placeholder="Your Name *"
            value={form.name}
            onChange={handleChange}
            className="bg-black p-4 rounded-xl border border-zinc-700 focus:border-yellow-500 outline-none"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number *"
            value={form.phone}
            onChange={handleChange}
            className="bg-black p-4 rounded-xl border border-zinc-700 focus:border-yellow-500 outline-none"
          />

          <input
            type="text"
            name="company"
            placeholder="Company (Optional)"
            value={form.company}
            onChange={handleChange}
            className="bg-black p-4 rounded-xl border border-zinc-700 focus:border-yellow-500 outline-none"
          />

          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="bg-black p-4 rounded-xl border border-zinc-700 focus:border-yellow-500 outline-none"
          >
            <option value="">Select Service *</option>
            <option>UV Printing</option>
            <option>Business Cards</option>
            <option>Wedding Invitations</option>
            <option>Acrylic Signage</option>
            <option>Sunboard Printing</option>
            <option>Corporate Branding</option>
            <option>Brochures & Flyers</option>
            <option>Other</option>
          </select>

          <input
            type="text"
            name="quantity"
            placeholder="Quantity"
            value={form.quantity}
            onChange={handleChange}
            className="bg-black p-4 rounded-xl border border-zinc-700 focus:border-yellow-500 outline-none md:col-span-2"
          />

          <textarea
            name="message"
            rows={5}
            placeholder="Tell us about your requirement..."
            value={form.message}
            onChange={handleChange}
            className="bg-black p-4 rounded-xl border border-zinc-700 focus:border-yellow-500 outline-none md:col-span-2"
          />

        </div>

        <div className="text-center mt-10">
          <button
            onClick={sendWhatsApp}
            className="bg-yellow-500 hover:bg-yellow-400 text-black px-10 py-4 rounded-full font-bold transition duration-300"
          >
            Send on WhatsApp
          </button>
        </div>

      </div>
    </section>
  );
}