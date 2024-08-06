import React from "react";

const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <h1 className="text-4xl font-bold">INVENTORY MANAGEMENT</h1>
        </a>
      </div>
    </header>
  );
};

export default Header;
