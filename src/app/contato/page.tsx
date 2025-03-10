"use client";

import { slideDown } from "@/animations/animations";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useGSAP } from "@gsap/react";
import { ArrowRight, InstagramIcon } from "lucide-react";
import Link from "next/link";

export default function Contato() {
  useGSAP(() => {
    slideDown(".contato1", 0);
    slideDown(".contato2", 0.5);
  });

  return (
    <div>
      <Container className="contato1 py-24">
        <p className="text-2xl font-custom italic mb-4">Entre em contato</p>

        <p className="text-lg">Nossos endereços</p>
        <p>- Centro Médico Canto do Forte:</p>
        <p className="text-sm mb-4">
          Rua Rui Barbosa, 836, Canto do Forte, Praia Grande SP, 11700-170
        </p>

        <p>- Instituto Cangussu:</p>
        <p className="text-sm mb-4">
          Rua Major Rebello,266, Canto do Morro, Iguape SP
        </p>

        <Separator className="mb-4" />

        <p className="text-lg">Contato</p>
        <p className="mb-4">(13) 99805-1611</p>

        <p className="text-sm mb-4">
          Clínica Dra. Danielle Moraes, atendimento de segunda a sexta das 09:00
          ás 19:00
        </p>

        <Button asChild className="gap-1">
          <Link href="https://wa.me/13998051611" target="_blank">
            AGENDAR UMA CONSULTA <ArrowRight size={16} />
          </Link>
        </Button>
      </Container>

      <Container className="contato2 relative mb-32">
        <p className="text-[40px] md:text-[80px] lg:text-[100px] xl:text-[110px] 2xl:text-[110px] 3xl:text-[140px] text-primary/20 font-custom italic">
          @dradanimoraess
        </p>

        <div className="absolute top-12 md:top-0 w-full h-full flex justify-center items-center">
          <Button asChild variant={"outline"}>
            <Link
              href="https://www.instagram.com/dradanimoraess/"
              target="_blank"
            >
              <InstagramIcon className="w-4 mr-2" /> Siga no Instagram
            </Link>
          </Button>
        </div>
      </Container>
    </div>
  );
}
