"use client";
import { motion } from "framer-motion";
import { Ghost } from "lucide-react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <Ghost className="w-24 h-24 text-gray-800 " />
        </motion.div>
        <h1 className="text-6xl font-bold mt-4">404</h1>
        <p className="text-lg mt-2">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition duration-300"
        >
          Go Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
