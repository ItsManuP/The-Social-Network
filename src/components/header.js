import React from "react";
import Link from "next/link";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";



function disconnect_session(){
  const router = useRouter();
  if( getCookie('authToken') && getCookie('user')){
    const token = getCookie('authToken');
    const username = getCookie('user');
    console.log({username: username, token: token})
    deleteToken(username);
    router.push('/');
    }}



const Header = () => {

if( getCookie('authToken') || getCookie('user')){
  return(
      <header className="flex items-center h-16 shadow">
        <div className="container flex items-center gap-4 px-4">
          <Link className="flex items-center gap-2 text-lg font-semibold md:gap-4" href="/">
            home
          </Link>
          <nav className="ml-auto space-x-4 text-sm md:space-x-6">
            <Link className="font-medium" href="/" onClick={disconnect_session}>
              Disconnettiti
            </Link>
            <Link className="font-medium" href="/"  >
              The Founder
            </Link>
          </nav>
        </div>
      </header>
)
} else{
  return(
      <header className="flex items-center h-16 shadow">
              <div className="container flex items-center gap-4 px-4">
                <Link className="flex items-center gap-2 text-lg font-semibold md:gap-4" href="/">
                  home
                </Link>
                <nav className="ml-auto space-x-4 text-sm md:space-x-6">
                <Link className="font-medium" href="/" >
                    Login
                  </Link>
                  <Link className="font-medium" href="/"  >
                    The Founder
                  </Link>
                </nav>
              </div>
            </header>
)};
};

export default Header;