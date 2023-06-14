import Link from 'next/link';
import React from 'react';

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 items-center px-4 justify-between shadow-md">
            <Link href="/" className="text-lg">
              Amazona
            </Link>
            <div>
              <Link href="/cart" className="p-2">
                Cart
              </Link>
              <Link href="/login" className="p-2">
                Login
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-42">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner">
          Copyright 2023 Amazona
        </footer>
      </div>
    </>
  );
};

export default Layout;
