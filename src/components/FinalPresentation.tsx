"use client";

import { ArrowRight } from "lucide-react";
import Container from "./Container";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { useGSAP } from "@gsap/react";
import { slideLeft, slideRight } from "@/animations/animations";
import imagem_1_recortado from "@/../public/imagem-1-recortado.webp";
import Image from "next/image";

export default function FinalPresentation() {
  useGSAP(() => {
    slideRight(".finalPresentation1", 0);
    slideLeft(".finalPresentation2", 0);
  });

  return (
    <div className="bg-stone-800 text-stone-100">
      <Container className="min-h-screen grid md:grid-cols-2 gap-8 items-center py-16">
        <main className="finalPresentation1 space-y-8">
          <p className="font-custom font-thin italic text-6xl md:w-full lg:w-[350px]">
            Cuidando da sua pele, cuidando de você
          </p>

          <Button variant={"default"} className="gap-1 bg-stone-500">
            AGENDAR UMA CONSULTA <ArrowRight size={16} />
          </Button>
        </main>
        {/* <div className="finalPresentation2 hidden md:block">
          <Card className="h-[600px] border-none bg-transparent">
            <Image
              src={imagem_1_recortado}
              alt=""
              className="h-full rounded object-contain bg-transparent"
            />
          </Card>
        </div> */}
      </Container>
    </div>
  );
}
