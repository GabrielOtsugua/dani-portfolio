"use client";

import { AlignRight, AppWindow, Instagram, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { Separator } from "./ui/separator";

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
      className={`sticky top-0 z-50 backdrop-blur-sm bg-background/80 flex justify-between items-center px-16 py-4 transition duration-500 shadow ${
        show ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      <nav className="flex items-center">
        <Button
          variant={"secondary"}
          className="flex items-center gap-1 text-xs"
        >
          <AlignRight className="text-main/60" /> MENU
        </Button>
        <Separator orientation="vertical" className="h-8 mx-8 bg-stone-300" />
        <Logo />
      </nav>

      <nav className="flex items-center gap-4">
        <Button variant={"ghost"} className="rounded-full p-2">
          <Instagram className="text-main/60" />
        </Button>
        <Button>AGENDAR UMA CONSULTA</Button>
      </nav>
    </header>
  );
}
