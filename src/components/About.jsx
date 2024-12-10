import React from "react";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <div className="bg-black text-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-600">About Us</h1>
          <p className="mt-4 text-lg">
            Dedicated to saving lives, one drop at a time.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 items-center">
          <div className="flex justify-center">
            <img
              src="src/assets/Images/about-logo.jpg"
              alt="About Us"
              className="rounded-lg shadow-lg w-full lg:w-3/4"
            />
          </div>

          <div>
            <h2 className="text-3xl font-semibold ">Who We Are</h2>
            <p className="mt-4">
              <b>LifeSaver</b> is a non-profit organization committed to
              ensuring a safe and reliable supply of blood and its components to
              those in need. Our mission is to save lives through voluntary
              blood donations while fostering a culture of care and compassion
              within our community.
            </p>
            <h2 className="text-3xl font-semibold mt-8">Our Mission</h2>
            <p className="mt-4">
              To promote voluntary blood donation and ensure the availability of
              safe blood for patients in need. We strive to educate communities,
              dispel myths about blood donation, and create a sustainable
              network of donors.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-semibold">Our Core Values</h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold text-red-600">Compassion</h3>
              <p className="mt-4 text-gray-600">
                We care deeply about the lives we touch and work tirelessly to
                bring hope to those in need.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold text-red-600">Integrity</h3>
              <p className="mt-4 text-gray-600">
                We uphold the highest standards of safety, transparency, and
                ethics in all our operations.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold text-red-600">Community</h3>
              <p className="mt-4 text-gray-600">
                We believe in building strong connections and empowering
                communities to make a difference together.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-semibold">
            Join Us in Making a Difference
          </h2>
          <p className="mt-4 text-lg text-white">
            Your blood donation can save lives. Together, we can ensure no
            patient suffers due to a lack of blood.
          </p>
          <button className="mt-8 bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition duration-200">
            <NavLink to="/donate">Become a Donor</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
