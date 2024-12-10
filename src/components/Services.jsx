import React from "react";

function Services() {
  return (
    <div className="bg-black py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-600">Our Services</h1>
          <p className="mt-4 text-lg text-white">
            We offer a range of services to support blood donation and ensure a
            safe, reliable blood supply for those in need.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3 sm:grid-cols-2">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-red-500 text-4xl mb-4">
              <img className="" src="src/assets/images/img1.jpg" alt="img1" />
            </div>
            <h2 className="text-2xl font-semibold mb-2">
              Blood Donation Camps
            </h2>
            <p className="text-gray-600">
              Organizing regular camps at workplaces, schools, and community
              centers for convenient and safe blood donations.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-red-500 text-4xl mb-4">
              <img
                className="pb-14"
                src="src/assets/images/img2.jpg"
                alt="img2"
              />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Blood Testing</h2>
            <p className="text-gray-600">
              Conducting rigorous screening of all blood donations to ensure
              safety and quality for recipients.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-red-500 text-4xl mb-4">
              <img src="src/assets/images/img3.jpg" alt="img3" />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Blood Distribution</h2>
            <p className="text-gray-600">
              Supplying blood and its components to hospitals, clinics, and
              patients in emergencies.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-red-500 text-4xl mb-4">
              <img src="src/assets/images/img4.jpg" alt="img4" />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Donor Support</h2>
            <p className="text-gray-600">
              Providing resources, guidance, and recognition to all our donors
              to ensure a fulfilling donation experience.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-red-500 text-4xl mb-4 flex items-center justify-center">
              <img
                className="h-72 mb-10"
                src="src/assets/images/img5.jpg"
                alt="img5"
              />
            </div>
            <h2 className="text-2xl font-semibold mb-2">
              Rare Blood Group Assistance
            </h2>
            <p className="text-gray-600">
              Maintaining a database and facilitating quick access to donors
              with rare blood groups.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-red-500 text-4xl mb-4">
              <img src="src/assets/images/img6.jpg" alt="img6" />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Awareness Campaigns</h2>
            <p className="text-gray-600">
              Conducting campaigns to educate communities about the importance
              and benefits of blood donation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
