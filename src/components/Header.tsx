"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Bell } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/my-tests", label: "My Tests" },
    { href: "/my-sessions", label: "My Sessions" },
    { href: "/career-library", label: "Career Library" },
    {
      href: "/your-report/personality-explorer/understanding",
      label: "Your Report",
    },
  ];

  const handleMobileNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 bg-white w-full z-50 border-b border-custom h-20 "
    >
      <div className="mx-auto px-6 md:px-20">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/Group.png"
                alt="Logo"
                width={32}
                height={32}
                className="h-8 w-8"
                unoptimized
              />
            </Link>
            <nav className="hidden md:flex space-x-6 ml-4">
              {navLinks.map(({ href, label }) => (
                <motion.div whileHover={{ scale: 1.1 }} key={href}>
                  <Link
                    href={href}
                    className={`px-3 py-2 rounded-md text-sm font-normal transition-all ${
                      pathname === href
                        ? "text-black"
                        : "text-[#5B6871] hover:text-black"
                    }`}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <motion.div whileHover={{ scale: 1.1 }}>
              <Bell />
            </motion.div>

            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                title="Profile"
                type="button"
                aria-haspopup="true"
                className="flex items-center space-x-2"
              >
                <Image
                  src="/profile.png"
                  alt="Profile"
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-44 bg-white border rounded-lg shadow-lg py-2"
                  >
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Profile
                    </Link>
                    <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Logout
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="md:hidden">
              <button
                title="Mobile Menu"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-600 hover:text-gray-900 p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden border-t"
            >
              <nav className="px-4 pt-2 pb-3 space-y-1 bg-white">
                {navLinks.map(({ href, label }) => (
                  <motion.div whileHover={{ scale: 1.05 }} key={href}>
                    <Link
                      href={href}
                      onClick={handleMobileNavClick}
                      className={`block px-3 py-2 rounded-md transition-all ${
                        pathname === href
                          ? "text-black font-bold"
                          : "text-gray-700 hover:text-gray-500"
                      }`}
                    >
                      {label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
