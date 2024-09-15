import { Instagram } from "lucide-react";
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
        </main>

        <footer className="grid grid-cols-2 gap-4">
          <div>
            <div>
              <p className="text-lg">Endereço</p>
              <p>Rua Exemplo, 111, Bairro Exemplo – São Paulo SP</p>
            </div>
          </div>

          <div>
            <p className="text-lg">Acompanhe</p>
            <Button variant={"ghost"} className="rounded-full p-2">
              <Link
                href="https://www.instagram.com/dradanimoraess/"
                target="_blank"
              >
                <Instagram />
              </Link>
            </Button>
          </div>
        </footer>
      </Container>
    </DrawerContent>
  );
}
