import { Instagram } from "lucide-react";
import { Button } from "./ui/button";
import { DrawerContent } from "./ui/drawer";
import Link from "next/link";

export default function Menu() {
  return (
    <DrawerContent className="px-16 pb-16 space-y-8 bg-main/40 text-stone-100 backdrop-blur-sm border-none">
      <p className="flex items-center text-3xl font-custom italic font-light">
        Tratamentos
      </p>
      <main className="grid grid-cols-2 gap-4 text-2xl font-custom font-light italic pb-8">
        <Link href="" className="hover:text-main2 w-fit">
          Tratamento específico
        </Link>
        <Link href="" className="hover:text-main2 w-fit">
          Tratamento específico
        </Link>
        <Link href="" className="hover:text-main2 w-fit">
          Tratamento específico
        </Link>
        <Link href="" className="hover:text-main2 w-fit">
          Tratamento específico
        </Link>
        <Link href="" className="hover:text-main2 w-fit">
          Tratamento específico
        </Link>
        <Link href="" className="hover:text-main2 w-fit">
          Tratamento específico
        </Link>
        <Link href="" className="hover:text-main2 w-fit">
          Tratamento específico
        </Link>
        <Link href="" className="hover:text-main2 w-fit">
          Tratamento específico
        </Link>
        <Link href="" className="hover:text-main2 w-fit">
          Tratamento específico
        </Link>
        <Link href="" className="hover:text-main2 w-fit">
          Tratamento específico
        </Link>
      </main>
      <footer className="grid grid-cols-2">
        <div className="space-y-8">
          <div className="space-y-4">
            <p>Endereço</p>
            <p>Rua Canadá, 215, Jd. América – São Paulo SP</p>
          </div>
          <div className="space-y-4">
            <p>Contato</p>
            <p>WhatsApp: (11) 95776-1003</p>
          </div>
        </div>
        <div className="space-y-4">
          <p>Acompanhe</p>
          <Button variant={"ghost"} className="rounded-full p-2">
            <Instagram />
          </Button>
        </div>
      </footer>
    </DrawerContent>
  );
}
