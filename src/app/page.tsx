"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Button from "@mui/material/Button";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="h-screen bg-gradient-to-tr from-blue-500 to-green-500 flex justify-center items-center">
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: -50 }}
        transition={{ duration: 1 }}
      >
        <div className="cursor-pointer flex flex-row items-center">
          <Image
            src="/logos/logo_transparent.png"
            width={230}
            height={230}
            alt="biblelogo"
          />
          <div className="flex flex-col">
            <h1 className="text-9xl font-semibold mb-0">BibleGPT</h1>
            <h3 className=" text-5xl mt-0">AI-Powered Bible Tool</h3>
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <Link href="/books">
            <Button variant="contained">Get Started</Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
