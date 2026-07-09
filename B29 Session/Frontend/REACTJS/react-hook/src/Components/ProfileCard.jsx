import React from "react";

const ProfileCard = ({ user }) => {
  // Destructure the user data for clean template rendering
  const { name, username, id, email, phone, website, address, company } = user;

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl border border-gray-100 my-6">
      {/* Top Banner / Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white">
        <div className="flex justify-between items-start">
          <div>
            <h2 class="text-2xl font-bold leading-tight">{name}</h2>
            <p className="text-blue-100 text-sm">@{username}</p>
          </div>
          <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
            ID: {id}
          </span>
        </div>

        {/* Company Quick Details */}
        <div className="mt-4 pt-4 border-t border-white/20">
          <p className="text-xs text-blue-200 uppercase tracking-wider font-semibold">
            Company
          </p>
          <h3 className="text-lg font-semibold text-white mt-0.5">
            {company?.name}
          </h3>
          <p className="text-sm italic text-blue-100 mt-1">
            "{company?.catchPhrase}"
          </p>
        </div>
      </div>

      {/* Card Body Content */}
      <div className="p-6 space-y-6">
        {/* Contact Grid */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wide text-gray-400 mb-3">
            Contact Information
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Email */}
            <div className="flex items-center space-x-3 text-gray-700">
              <svg
                className="w-5 h-5 text-indigo-500 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
              <a
                href={`mailto:${email}`}
                className="text-sm hover:text-indigo-600 hover:underline truncate"
              >
                {email}
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-3 text-gray-700">
              <svg
                className="w-5 h-5 text-indigo-500 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                ></path>
              </svg>
              <span className="text-sm truncate">{phone}</span>
            </div>

            {/* Website */}
            <div className="flex items-center space-x-3 text-gray-700 md:col-span-2">
              <svg
                className="w-5 h-5 text-indigo-500 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                ></path>
              </svg>
              <a
                href={`https://${website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-indigo-600 hover:underline truncate"
              >
                {website}
              </a>
            </div>
          </div>
        </div>

        <hr className="border-gray-100" />

        {/* Address & Core Business */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Address */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">
              Address
            </h4>
            <div className="text-sm text-gray-600 space-y-1">
              <p>
                {address?.suite}, {address?.street}
              </p>
              <p>
                {address?.city}, {address?.zipcode}
              </p>

              {/* Geo Location Badge */}
              <div className="inline-flex items-center mt-2 px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                <svg
                  className="w-3.5 h-3.5 mr-1 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Lat: {address?.geo?.lat}, Lng: {address?.geo?.lng}
              </div>
            </div>
          </div>

          {/* Business Strategy */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">
              Core Strategy (BS)
            </h4>
            <p className="text-sm text-gray-600 capitalize">{company?.bs}</p>
            <span className="inline-flex items-center mt-3 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              Active Client
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
