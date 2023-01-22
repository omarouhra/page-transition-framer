import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col max-w-4xl mx-auto  items-center justify-center mt-24">
      <h1 className="text-5xl  font-semibold">Home Page</h1>
    </div>
  );
}
