import React from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "sagar_portfolio_feedback",
        "template_5dfi77k",
        e.target,
        "mn3zUdE5zQlqtjmU-"
      )
      .then(
        () => {
          alert("Message sent!");
        },
        () => {
          alert("Something went wrong. Please try again.");
        }
      );

    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="pt-24 px-4 bg-black min-h-screen flex items-center justify-center"
    >
      <div className="max-w-2xl w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 rounded-3xl shadow-lg">
        <h2 className="text-4xl font-bold text-cyan-400 mb-6 text-center flex items-center justify-center gap-2">
          <span role="img" aria-label="mail">📬</span> Contact Me
        </h2>
        <form onSubmit={sendEmail} className="flex flex-col gap-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="5"
            className="p-3 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-600 transition duration-200 text-white font-semibold py-3 rounded-xl text-lg"
          >
            🚀 Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
