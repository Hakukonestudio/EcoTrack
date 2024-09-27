'use client';

import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link href="/" className="flex items-center py-4 px-2">
                <span className="font-semibold text-gray-500 text-lg">EcoTrack</span>
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-3">
            {session ? (
              <>
                <span className="py-2 px-2 font-medium text-gray-500">
                  Tere, {session.user?.name}
                </span>
                <button
                  onClick={() => signOut()}
                  className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300"
                >
                  Logi välja
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300"
                >
                  Logi sisse
                </Link>
                <Link
                  href="/register"
                  className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300"
                >
                  Registreeru
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;