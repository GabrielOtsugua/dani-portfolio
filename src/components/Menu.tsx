import { Instagram } from "lucide-react";
import { Button } from "./ui/button";
import { DrawerClose, DrawerContent } from "./ui/drawer";
import Link from "next/link";
import Container from "./Container";

export default function Menu() {
  return (
    <DrawerContent className="pb-16 bg-stone-600/60 text-stone-100 backdrop-blur-sm border-none">
      <Container className="space-y-8">
        <p className="flex items-center text-3xl font-custom italic font-light">
          Tratamentos
        </p>

        <main className="grid md:grid-cols-2 gap-4 text-2xl font-custom font-light italic pb-8">
          <DrawerClose asChild>
            <Link
              href="/tratamentos/tratamentos-capilares"
              className="hover:text-stone-400 w-fit"
            >
              Tratamentos capilares
            </Link>
          </DrawerClose>
          <DrawerClose asChild>
            <Link
              href="/tratamentos/injetaveis"
              className="hover:text-stone-400 w-fit"
            >
              Injetáveis
            </Link>
          </DrawerClose>
          <DrawerClose asChild>
            <Link
              href="/tratamentos/firmeza-e-sustentacao-da-pele"
              className="hover:text-stone-400 w-fit"
            >
              Firmeza e sustentação da pele
            </Link>
          </DrawerClose>
        </main>

        <footer className="grid grid-cols-2 gap-4">
          <div>
            <div>
              <p className="text-lg">Endereço</p>
              <p>Rua Canadá, 215, Jd. América – São Paulo SP</p>
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
