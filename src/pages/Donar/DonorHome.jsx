import React from "react";
import Layout from "../../components/shared/Layout/Layout";

const DonorHome = () => {
  return (
    <Layout>
      <main className="container mx-auto w-[83vw] flex-grow p-8 flex flex-col justify-center items-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4 text-red-600">
            Welcome to the Blood Bank App
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Your contribution can save lives. Donate blood today!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 text-red-600">
                Why Donate?
              </h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Saves lives in emergencies and surgeries.</li>
                <li>Helps patients with chronic illnesses.</li>
                <li>Replenishes your own blood supply.</li>
                <li>Creates a sense of community and giving.</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-red-600">
                How to Donate?
              </h3>
              <p className="text-gray-600 mb-4">
                1. Click on "Donate Blood" in the navigation.
              </p>
              <p className="text-gray-600 mb-4">
                2. Fill out the donation form with accurate information.
              </p>
              <p className="text-gray-600 mb-4">
                3. Schedule a convenient appointment.
              </p>
              <p className="text-gray-600">
                4. Visit the donation center and make a difference!
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 text-red-600">
                Who Benefits?
              </h3>
              <p className="text-gray-700">
                Patients with cancer, blood disorders, and those undergoing
                major surgeries rely on donations.
              </p>
            </div>
          </div>

          <a
            href="/donate-blood"
            className="mt-10 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full inline-block transition-colors duration-300"
          >
            Donate Blood Now
          </a>
        </div>
      </main>
    </Layout>
  );
};

export default DonorHome;
