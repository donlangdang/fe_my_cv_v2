import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Menu } from "lucide-react";
import AccordionMenu from "./accordionMenu/AccordionMenu";

export default function DialogMenu() {
  return (
    <Dialog>
      <div className="lg:hidden">
        <DialogTrigger asChild>
          <Menu />
        </DialogTrigger>
        <DialogContent className="sm:max-w-106.25 w-full h-full max-h-[calc(100%-2rem)]">
          <DialogHeader>
            <DialogTitle>Menu</DialogTitle>
          </DialogHeader>
          {/* nếu muốn bấm vào gì để dialog đóng lại thì phải bọc DialogClose aschild bên ngoài cáo đó  */}
          <AccordionMenu />
          {/* <ChangeMode /> */}
          <DialogFooter>
            <DialogClose asChild>close</DialogClose>
          </DialogFooter>
        </DialogContent>
      </div>
    </Dialog>
  );
}
