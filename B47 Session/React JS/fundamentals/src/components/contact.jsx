import React from "react";

// Icons
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaPhone,
} from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

function contact() {
  return (
    <section className="bg-[#474747] text-white">
      <div className="w-[90%] flex justify-between mx-auto items-center p-4">
        <div className="inline-flex space-x-5 font-sans">
          <span className="inline-flex space-x-2 items-center">
            <FaPhone />
            <p>044-90786532</p>
          </span>
          <span className="inline-flex space-x-2 items-center">
            <IoMailOutline />
            <p>bookatable@Lazio.com</p>
          </span>
        </div>
        <div className="inline-flex space-x-5">
          <FaTwitter size={20} color="white" />
          <FaFacebook size={20} color="white" />
          <FaInstagram size={20} color="white" />
          <FaGithub size={20} color="white" />
        </div>
      </div>
    </section>
  );
}

export default contact;
