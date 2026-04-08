"use client";
import Link from "next/link";
import { useTransitionRouter } from "next-view-transitions";
import pageAnimation from "@/lib/pageAnimation";
import DialogMenu from "./dialogMenu/DialogMenu";
import NavigationMenuDemo from "./navigationMenu/NavigationMenu";

export default function Header() {
  const router = useTransitionRouter();
  return (
    <header className="w-full fixed bg-transparent z-50">
      <div className="w-full h-auto flex items-center justify-between px-6 py-6 md:px-16">
        <Link
          href="/"
          className="select-none cursor-pointer font-bold text-xl flex flex-col gap-0"
          onClick={(e) => {
            e.preventDefault();
            router.push("/", {
              onTransitionReady: pageAnimation,
            });
          }}
        >
          <div>
            <span className="">Don</span>
            <span className="text-purple-400">Dinh</span>
          </div>
          <h2 className="text-sm font-medium">Leather Craftsman</h2>
        </Link>
        <div className="hidden lg:block">
          <NavigationMenuDemo />
        </div>
        <DialogMenu />
      </div>
    </header>
  );
}

// About Me
// Product
// Blog  {cái này thêm sau}
// Life
// Contact Me
