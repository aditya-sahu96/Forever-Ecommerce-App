import React from "react";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-6 py-12 mt-22">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-[#1a0089] mb-4">Contact Us</h1>
      <p className="text-gray-600 max-w-xl text-center mb-10">
        Have questions, concerns, or feedback? We’d love to hear from you.  
        Reach out to us and we’ll get back to you as soon as possible.
      </p>

      {/* Contact Container */}
      <div className="grid md:grid-cols-2 gap-10 w-full max-w-5xl">
        {/* Left - Contact Info */}
        <div className="space-y-6">
          <div className="p-6 rounded-2xl shadow-lg border border-gray-200">
            <h2 className="text-xl font-semibold text-[#fa5e33] mb-2">📍 Our Office</h2>
            <p className="text-gray-700">123 E-Shop Lane, Tech City, India</p>
          </div>

          <div className="p-6 rounded-2xl shadow-lg border border-gray-200">
            <h2 className="text-xl font-semibold text-[#fa5e33] mb-2">📞 Phone</h2>
            <p className="text-gray-700">+91 98765 43210</p>
          </div>

          <div className="p-6 rounded-2xl shadow-lg border border-gray-200">
            <h2 className="text-xl font-semibold text-[#fa5e33] mb-2">📧 Email</h2>
            <p className="text-gray-700">support@eshop.com</p>
          </div>
        </div>

        {/* Right - Contact Form */}
        <form className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col space-y-5">
          <div>
            <label className="block text-[#1a0089] font-medium">Name</label>
            <input
              type="text"
              className="w-full mt-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#fa5e33]"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-[#1a0089] font-medium">Email</label>
            <input
              type="email"
              className="w-full mt-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#fa5e33]"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-[#1a0089] font-medium">Message</label>
            <textarea
              rows="4"
              className="w-full mt-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#fa5e33]"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#fa5e33] hover:bg-[#d94d28] text-white py-3 rounded-lg font-semibold transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
