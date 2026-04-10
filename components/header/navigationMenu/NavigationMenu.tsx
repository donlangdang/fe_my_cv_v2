"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import pageAnimation from "@/lib/pageAnimation";
import { useTransitionRouter } from "next-view-transitions";
import { Button } from "@/components/ui/button";

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

export default function NavigationMenuDemo() {
  const router = useTransitionRouter();
  const pathName = usePathname();

  return (
    <div className="flex gap-4">
      {navLinks.map((link, index) => {
        const isActive: boolean = pathName === link.path;
        return (
          <Link
            key={index}
            href={link.path}
            onClick={(e) => {
              e.preventDefault();
              router.push(link.path, {
                onTransitionReady: pageAnimation,
              });
            }}
            className="cursor-pointer"
          >
            <Button
              variant="secondary"
              className={isActive ? "text-purple-400" : ""}
            >
              {link.name}
            </Button>
          </Link>
        );
      })}
    </div>
  );
}
