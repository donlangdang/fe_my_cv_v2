"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { DialogClose } from "@/components/ui/dialog";

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "My Products",
    path: "/product-list",
  },
  {
    name: "About Me",
    path: "/profile",
  },
  {
    name: "Contact Me",
    path: "/contact-me",
  },
];

export default function AccordionMenu() {
  const pathName = usePathname();

  return (
    <div className="flex flex-col text-center gap-8 w-full">
      {navLinks.map((link, index) => {
        const isActive: boolean = pathName === link.path;

        return (
          <DialogClose asChild key={index}>
            <Link
              className={`font-semibold tracking-wide bg-zinc-800 p-4 rounded-2xl ${isActive ? "text-purple-400" : ""}`}
              href={link.path}
            >
              {link.name}
            </Link>
          </DialogClose>
        );
      })}
    </div>
  );
}

//TODO: ABOUT ME, PRODUCTS, CONTACT ME
