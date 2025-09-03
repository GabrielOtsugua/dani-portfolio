import { Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { Button } from "./ui/button";
import { DrawerClose, DrawerContent } from "./ui/drawer";
import Link from "next/link";
import Container from "./Container";
import { menu } from "@/data/data";

export default function Menu() {
  return (
    <DrawerContent className="pb-8 bg-primary700/60 text-stone-100 backdrop-blur-sm border-none">
      <Container className="space-y-4 pt-4">
        <main className="grid md:grid-cols-2 gap-3 text-2xl font-custom font-light italic pb-8">
          <DrawerClose asChild>
            <Link href="/" className="hover:text-primary w-fit">
              Home
            </Link>
          </DrawerClose>

          {menu.map((item) => (
            <DrawerClose asChild key={item.id}>
              <Link
                href={`/tratamentos/${item.href}`}
                className="hover:text-primary w-fit"
              >
                {item.nome_tratamento}
              </Link>
            </DrawerClose>
          ))}

          <DrawerClose asChild>
            <Link href="/portfolio" className="hover:text-primary w-fit">
              Dra. Danielle Moraes
            </Link>
          </DrawerClose>
          <DrawerClose asChild>
            <Link href="/contato" className="hover:text-primary w-fit">
              Contato
            </Link>
          </DrawerClose>
        </main>

        <footer className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-lg">Acompanhe</p>
            <span className="flex gap-2">
              <Button variant={"ghost"} className="rounded-full p-2">
                <Link
                  href="https://www.instagram.com/dradanimoraess/"
                  target="_blank"
                >
                  <Instagram />
                </Link>
              </Button>
              <Button variant={"ghost"} className="rounded-full p-2">
                <Link
                  href="https://wa.me/5513998051611?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Dra%20Danielle%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20consulta"
                  target="_blank"
                >
                  <FaWhatsapp size={24} />
                </Link>
              </Button>
            </span>
          </div>
        </footer>
      </Container>
    </DrawerContent>
  );
}
