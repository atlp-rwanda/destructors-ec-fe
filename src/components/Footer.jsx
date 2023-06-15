import React from "react";
import Logo from "../public/images/logo.svg";
import Facebook from "../public/icons/socials/facebook.svg";
import Instagram from "../public/icons/socials/instagram.svg";
import Twitter from "../public/icons/socials/twitter.svg";
import Pinterest from "../public/icons/socials/pinterest.svg";

const Footer = () => {
  const helpLinks = [
    "Privacy Policy",
    "Shipping & Delivery",
    "Refund Policy",
    "Track your order",
  ];
  const supportLinks = [
    "Feedback",
    "Contact us",
    "Download app",
    "Terms and conditions",
  ];
  const socialIcons = [Facebook, Instagram, Twitter, Pinterest];
  const additionalLinks = ["Privacy", "Security", "Terms"];
  return (
    <>
      <div className='px-24 flex mt-12 justify-between xs:flex-col xs:px-2 font-rubik'>
        <div className='w-[400px] xs:w-full mb-10'>
          <a href='/' className='flex items-center mb-3'>
            <img src={Logo} className='h-10 sm:h-9' alt='destructors Logo' />
          </a>
          <p className='mb-2'>
            Destructor is the a popular Ecommerce site. it is builded at Andela
            program which is called ATLP to improve trainee exprience.
          </p>
          <ul className='flex'>
            {socialIcons.map((icon, index) => (
              <li key={`footer_xs${index}`}>
                <a href='#'>
                  <img src={icon} alt='Social network icon' />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className='mb-10'>
          <h1 className='mb-3 font-bold text-gray-600'>Help</h1>
          <ul>
            {helpLinks.map((link) => (
              <li key={`vsxs${link}`} className='mb-2'>
                <a href='#'>{link}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className='mb-10'>
          <h1 className='mb-3 font-bold text-gray-600'>Supports</h1>
          <ul>
            {supportLinks.map((link) => (
              <li key={`footer_11212${link}`} className='mb-2'>
                <a href='#'>{link}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='px-24 xs:px-2'>
        <hr className='h-px my-2 bg-gray-200 border-0' />
      </div>
      <div className='px-24 xs:p-2 flex justify-between xs:flex-col my-4'>
        <p>&copy; 2023 Destructors - All rights reserved</p>
        <ul className='flex gap-4 xs:flex-col xs:mt-2 xs:gap-0'>
          {additionalLinks.map((link) => (
            <li key={`footer_0909${link}`}>
              <a href='#'>{link}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Footer;
