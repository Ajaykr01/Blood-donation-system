import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { toast } from "react-toastify";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "624885e7-f7c2-43b5-9328-774037d6ac85");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      toast(res.message);
      event.target.reset();
    }
  };
  return (
    <div className="bg-black py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-600">Contact Us</h1>
          <p className="mt-4 text-lg text-white">
            Have questions or want to get involved? Reach out to us, and we’ll
            be happy to assist you.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="bg-gray-200 shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Get in Touch
            </h2>
            <form className="space-y-6" onSubmit={onSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Full Name"
                  name="your name"
                  required
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your Email Address"
                  name="your email"
                  required
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Your Message"
                  name="your message"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="bg-gray-200 shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Contact Details
            </h2>
            <p className="text-gray-600 mb-4">
              Reach out to us via the following contact details or visit us at
              our center.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <i className="fas fa-phone-alt text-red-500 text-2xl mr-4"></i>
                <span className="text-gray-800 text-lg">
                  +91 (123) 456-7890
                </span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-envelope text-red-500 text-2xl mr-4"></i>
                <span className="text-gray-800 text-lg">
                  lifesaver@gmail.com
                </span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-map-marker-alt text-red-500 text-2xl mr-4"></i>
                <span className="text-gray-800 text-lg">
                  LifeSaver Blood Bank, Patna 800010
                </span>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Follow Us
              </h3>
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <FaGithub />
                  <a href="https://github.com/Ajaykr01">GitHub</a>
                </div>
                <div className="flex items-center gap-3">
                  <FaTwitter />
                  <a href="https://x.com/dev_ajay_87">Twitter</a>
                </div>
                <div className="flex items-center gap-3">
                  <FaLinkedin />
                  <a href="https://www.linkedin.com/in/ajay-kumar-a921a624b/">
                    Linkedin
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <FaInstagram />
                  <a href="https://www.instagram.com/mr_ajay_3472/">
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
