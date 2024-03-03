import React from "react";
import Link from "next/link";


const Header = () => {
return(
<header className="flex items-center h-16 shadow">
        <div className="container flex items-center gap-4 px-4">
          <Link className="flex items-center gap-2 text-lg font-semibold md:gap-4" href="/">
            home
          </Link>
          <nav className="ml-auto space-x-4 text-sm md:space-x-6">
          <Link className="font-medium" href="/login" >
              Login
            </Link>
            <Link className="font-medium" href="/" >
              Disconnettiti
            </Link>
            <Link className="font-medium" href="/">
              The Founder
            </Link>
          </nav>
        </div>
      </header>
)};

export default Header;