"use client";

import { AlignRight, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import Menu from "./Menu";
import { Drawer, DrawerTrigger } from "./ui/drawer";

export default function Header() {
  const [show, setShow] = useState(true);
  let lastScrollY = 0;

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY < lastScrollY) {
        setShow(true);
      } else {
        setShow(false);
      }
      lastScrollY = window.scrollY;
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-sm bg-background/80 flex justify-between items-center px-16 py-4 transition duration-500 shadow-sm ${
        show ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      <nav className="w-full flex items-center justify-between">
        <Drawer>
          <DrawerTrigger>
            <Button variant={"ghost"} className="text-xs gap-1">
              <AlignRight size={20} /> MENU
            </Button>
          </DrawerTrigger>
          <Menu />
        </Drawer>

        <span className="flex items-center gap-4">
          <Button variant={"outline"} className="gap-1">
            AGENDAR UMA CONSULTA <ArrowRight size={16} />
          </Button>
        </span>
      </nav>
    </header>
  );
}
