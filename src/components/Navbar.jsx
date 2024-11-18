import React from "react";

function Navbar() {
  return (
    <div>
      <div className="flex justify-around items-center">
        <img className="w-20" src="src/assets/Images/logo.jpg" alt="logo" />
        <div>
          <nav>
            <ul>
              <li className="flex justify-between gap-10">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Services</a>
                <a href="">Contact</a>
                <a href="">Donate Blood</a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <button>Login</button>
        </div>
      </div>
      <hr className="h-[2px] bg-rose-400" />
      {/* <div>
        <img className="w-screen" src="src/assets/Images/banner.jpg" alt="" />
      </div> */}
    </div>
  );
}

export default Navbar;
