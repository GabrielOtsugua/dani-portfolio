"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import imagem_1 from "@/../public/imagem-4.jpg";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function WppClickToChat() {
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
    <div
      className={`fixed bottom-4 right-4 z-10 flex flex-col items-end gap-2 transition duration-500 ${
        show ? "transform translate-y-0" : "transform translate-y-24"
      }`}
    >
      <div className="flex gap-1">
        <Avatar className="w-7 h-7">
          <AvatarImage
            src={imagem_1.src}
            alt="@shadcn"
            className="object-cover object-top filter"
          />
          <AvatarFallback>D</AvatarFallback>
        </Avatar>
        <span className="py-1 px-2 rounded-t-xl rounded-l-xl bg-slate-200 text-sm">
          Olá, como posso ajudar?
        </span>
      </div>

      <Link
        href="https://wa.me/13998051611"
        target="_blank"
        className="after:content-['1'] after:text-xs after:bg-red-400 after:text-white after:w-3 after:h-3 after:rounded-full after:absolute after:top-8 after:right-0.5 after:flex after:justify-center after:items-center"
      >
        <FaWhatsapp size={30} color="lightgreen" />
      </Link>
    </div>
  );
}
