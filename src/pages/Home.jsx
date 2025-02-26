import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <header className="h-screen bg-[url('/src/assets/Images/banner2.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Be the Lifeline for Someone in Need
          </h1>
          <p className="mt-6 text-lg md:text-xl">
            Every drop of blood is a gift of life. Join us in making a lasting
            impact.
          </p>
        </div>
      </header>

      <section className="py-16 px-6 md:px-16 lg:px-32 text-center bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Why Donate Blood?
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          Blood donation is a selfless act that provides hope, saves lives, and
          strengthens our communities. Every drop counts.
        </p>
        <div className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-red-600">Save Lives</h3>
            <p className="mt-4 text-gray-600">
              Your blood could be the reason someone gets a second chance at
              life.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-red-600">
              Support the Community
            </h3>
            <p className="mt-4 text-gray-600">
              Help ensure a steady supply of blood for those in need.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-red-600">
              Health Benefits
            </h3>
            <p className="mt-4 text-gray-600">
              Regular donation can improve your own health and well-being.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-red-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to Save a Life?
        </h2>
        <p className="mt-4 text-lg">
          Be a hero in someone's story. Donate blood today!
        </p>
        <div className="mt-8">
          <button className="bg-white text-red-600 py-3 px-8 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 mr-4">
            <NavLink to="/donate">Donate Now</NavLink>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
