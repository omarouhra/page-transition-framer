import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="w-full   h-screen max-w-6xl mx-auto">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
