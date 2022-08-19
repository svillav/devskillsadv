import React from "react";

const Navbar = () => {
  return (
    <nav className="relative top-0 flex flex-nowrap justify-around items-center h-20 bg-black text-white">
      <div className="py-4">
        <span className="p-6">Home</span>
      </div>
      <div className="py-4">
        <span className="p-6">Other page</span>
      </div>
    </nav>
  )
}

export default Navbar;
