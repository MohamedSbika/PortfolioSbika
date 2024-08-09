import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-white py-16 dark:bg-primary">
      <div className="text-center">
        <p className="text-primary font-normal text-base mb-2 dark:text-white">
          © {currentYear} sbika mohamed. All rights reserved.
        </p>

      </div>
    </div>
  );
};

export default Footer;
