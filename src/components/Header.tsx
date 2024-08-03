"use client";

import { Instagram } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

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
      className={`sticky top-0 hover:-top-20 backdrop-blur-sm bg-background/70 flex justify-between items-center px-16 py-4 transition duration-500 shadow ${
        show ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      <nav className="flex items-center gap-4 text-xs">
        <em className="text-lg mr-8 font-serif">
          <span className="text-yellow-600">Dra.</span> Dani Moraes
        </em>
        <p className="text-yellow-600">SOBRE</p>
        <p>SERVIÇOS</p>
        <p>FAQS</p>
        <p>CONTATO</p>
      </nav>
      <nav className="flex items-center gap-4">
        <Instagram className="text-yellow-600" />
        <Button className="">AGENDAR UMA CONSULTA</Button>
      </nav>
    </header>
  );
}
