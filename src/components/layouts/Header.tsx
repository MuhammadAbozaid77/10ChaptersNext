"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();


  return (
    <>
      <ul className="flex justify-center items-center gap-2">
        <li>
          <Link href={""}>Home</Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === "/about" ? "active" : ""}`}
            href="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link href={""}>Product</Link>
        </li>
      </ul>
    </>
  );
}
