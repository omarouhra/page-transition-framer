import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
  const { pathname } = useRouter();

  return (
    <div className="flex items-center justify-between py-12 px-5 md:py-20 xl:px-0">
      <p className="font-semibold">Page Transition using Framer</p>

      <div className="space-x-5 ">
        <Link
          href="/"
          className={` ${
            pathname === "/"
              ? "text-black"
              : "text-brand_gray text-brand_gray/40 text-gray-400 "
          }  text-sm duration-200 md:text-base`}
        >
          Home
        </Link>
        <Link
          href="/work"
          className={` ${
            pathname === "/work"
              ? "text-black"
              : "text-brand_gray text-brand_gray/40 text-gray-400"
          }  text-sm duration-200 md:text-base`}
        >
          Work
        </Link>
        <Link
          href="/about"
          className={` ${
            pathname === "/about"
              ? "text-black"
              : "text-brand_gray text-brand_gray/40 text-gray-400"
          }  text-sm duration-200 md:text-base`}
        >
          About
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
