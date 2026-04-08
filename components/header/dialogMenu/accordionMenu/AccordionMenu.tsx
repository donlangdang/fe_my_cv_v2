import { DialogClose } from "@/components/ui/dialog";
import Link from "next/link";

export default function AccordionMenu() {
  return (
    <DialogClose>
      <div>
        <Link href="contact-me">ABOUT ME</Link>
      </div>
    </DialogClose>
  );
}

//TODO: ABOUT ME, PRODUCTS, LIFE, CONTACT ME
