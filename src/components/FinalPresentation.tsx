"use client";

import { ArrowRight } from "lucide-react";
import Container from "./Container";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { useGSAP } from "@gsap/react";
import { slideLeftScroll, slideRightScroll } from "@/animations/animations";

export default function FinalPresentation() {
  useGSAP(() => {
    slideRightScroll(".finalPresentation1", 0.5);
    slideLeftScroll(".finalPresentation2", 0.5);
  });

  return (
    <div className="bg-main/95 text-stone-100">
      <Container className="min-h-screen grid md:grid-cols-2 gap-8 items-center py-16">
        <main className="finalPresentation1 space-y-8">
          <p className="font-custom font-thin italic text-6xl md:w-full lg:w-[350px]">
            Cuidando da sua pele, cuidando de você
          </p>

          <Button variant={"secondary"} className="gap-1">
            AGENDAR UMA CONSULTA <ArrowRight size={16} />
          </Button>
        </main>
        <div className="finalPresentation2 hidden md:block">
          <Card className="bg-white md:w-full lg:w-96 h-96 flex justify-center items-center">
            Imagem profissional
          </Card>
        </div>
      </Container>
    </div>
  );
}
