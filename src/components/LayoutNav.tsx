"use client";

import { AlignRight, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import Menu from "./Menu";
import { Drawer, DrawerTrigger } from "./ui/drawer";
import Container from "./Container";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function LayoutNav() {
  const pathname = usePathname();
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
    <nav
      className={`sticky top-0 z-50 backdrop-blur-sm bg-background/80 flex justify-between items-center transition duration-500 shadow-sm ${
        show ? "transform translate-y-0" : "transform -translate-y-full"
      } ${
        pathname == "/portfolio" || pathname == "/saude-da-pele"
          ? "hidden"
          : "flex"
      }`}
    >
      <Container className="flex justify-between py-2">
        <span className="flex items-center space-x-4">
          <Drawer>
            <DrawerTrigger className="flex items-center text-xs gap-1 hover:scale-90 duration-200">
              <AlignRight size={20} className="text-primary" /> MENU
            </DrawerTrigger>
            <Menu />
          </Drawer>
        </span>

        <Button asChild variant={"outline"} className="gap-1">
          <Link
            href="https://wa.me/5513998051611?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Dra%20Danielle%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20consulta"
            target="_blank"
          >
            AGENDAR UMA CONSULTA <ArrowRight size={16} />
          </Link>
        </Button>
      </Container>
    </nav>
  );
}
