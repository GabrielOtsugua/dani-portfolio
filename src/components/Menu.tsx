import { Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { Button } from "./ui/button";
import { DrawerClose, DrawerContent } from "./ui/drawer";
import Link from "next/link";
import Container from "./Container";
import { menu } from "@/data/data";

export default function Menu() {
  return (
    <DrawerContent className="pb-16 bg-stone-600/60 text-stone-100 backdrop-blur-sm border-none">
      <Container className="space-y-8">
        <p className="flex items-center text-3xl font-custom italic font-light">
          Tratamentos
        </p>

        <main className="grid md:grid-cols-2 gap-4 text-2xl font-custom font-light italic pb-8">
          <DrawerClose asChild>
            <Link href="/" className="hover:text-stone-400 w-fit">
              Home
            </Link>
          </DrawerClose>

          {menu.map((item) => (
            <DrawerClose asChild key={item.id}>
              <Link
                href={`/tratamentos/${item.href}`}
                className="hover:text-stone-400 w-fit"
              >
                {item.nome_tratamento}
              </Link>
            </DrawerClose>
          ))}

          <DrawerClose asChild>
            <Link href="/portfolio" className="hover:text-stone-400 w-fit">
              Dra. Danielle Moraes
            </Link>
          </DrawerClose>
          <DrawerClose asChild>
            <Link href="/contato" className="hover:text-stone-400 w-fit">
              Contato
            </Link>
          </DrawerClose>
        </main>

        <footer className="grid grid-cols-2 gap-4">
          <div>
            <div>
              <p className="text-lg">Endereço</p>
              <p>
                Rua Luis Antônio de Andrade Vieira, 216, Boqueirão – Praia
                Grande SP (sala 512)
              </p>
            </div>
          </div>

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
                <Link href="https://wa.me/13998051611" target="_blank">
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
