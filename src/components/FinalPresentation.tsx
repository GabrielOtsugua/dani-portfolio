"use client";

import { ArrowRight } from "lucide-react";
import Container from "./Container";
import { Button } from "./ui/button";
import { useGSAP } from "@gsap/react";
import { slideLeft, slideRight } from "@/animations/animations";
import Link from "next/link";

export default function FinalPresentation() {
  useGSAP(() => {
    slideRight(".finalPresentation1", 0);
    slideLeft(".finalPresentation2", 0);
  });

  return (
    <div className="bg-primary800 text-stone-100">
      <Container className="min-h-screen grid md:grid-cols-2 gap-8 items-center py-16">
        <main className="finalPresentation1 space-y-8">
          <p className="font-custom font-thin italic text-6xl md:w-full lg:w-[350px]">
            Cuidando da sua pele, cuidando de você
          </p>

          <Button variant={"default"} asChild className="gap-1">
            <Link href="https://wa.me/13998051611" target="_blank">
              AGENDAR UMA CONSULTA <ArrowRight size={16} />
            </Link>
          </Button>
        </main>
      </Container>
    </div>
  );
}
