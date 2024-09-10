"use client";

import {
  cascadeScroll,
  fadeIn,
  slideDown,
  slideDownScroll,
  slideLeftScroll,
  slideRightScroll,
} from "@/animations/animations";
import Container from "@/components/Container";
import Menu from "@/components/Menu";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Drawer, DrawerTrigger } from "@/components/ui/drawer";
import { useGSAP } from "@gsap/react";
import { ArrowDown, ArrowRight, MoveDown } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SaudeDaPele() {
  const route = useRouter();

  useGSAP(() => {
    fadeIn(".saude1", 0, 3);

    slideDown(".saude2", 0);
    slideDown(".saude3", 0.5);

    slideDownScroll(".saude4", 0);

    slideRightScroll(".saude5", 0);
    slideLeftScroll(".saude6", 0);

    slideDownScroll(".saude7", 0);

    cascadeScroll(".cascadeScroll");

    slideDownScroll(".saude8", 0);
  });

  return (
    <div>
      <div className="relative h-screen bg-stone-800 text-stone-100">
        <div
          id="background"
          className="absolute h-full w-full flex justify-center z-0 items-center"
        >
          <p className="saude1 text-stone-500/20 text-[44px] md:text-[80px] xl:text-[150px] 2xl:text-[180px] font-custom italic font-extralight">
            Cuidando da pele
          </p>
        </div>

        <Container className="relative flex justify-center items-center h-full">
          <p className="saude2 absolute top-8 xl:top-16 left-0 text-stone-100 font-custom font-thin italic text-4xl">
            Pele saudável, vida saudável
          </p>

          <Card className="saude3 flex justify-center items-center h-96 w-96 z-10 border bg-transparent">
            <p className="text-stone-100">Imagem profissional</p>
          </Card>

          <span className="absolute -bottom-12 left-0">
            <p>Saiba mais</p>
            <MoveDown
              size={96}
              strokeWidth={0.5}
              className="-translate-x-11 text-stone-500"
            />
          </span>
        </Container>
      </div>

      <Container className="space-y-32 py-32">
        <div className="saude4 w-full lg:w-[700px] m-auto leading-7">
          <p>
            Cuidar da pele vai além de questões estéticas—é um passo essencial
            para manter a saúde geral do corpo. A pele é o maior órgão do corpo
            humano e atua como uma barreira protetora contra fatores externos,
            como poluição, raios UV, e micro-organismos.
          </p>
          <br />
          <p>
            Manter uma rotina adequada de cuidados ajuda a prevenir problemas
            como acne, ressecamento, envelhecimento precoce e até mesmo doenças
            mais graves, como o câncer de pele. Investir no cuidado diário da
            pele é investir na sua saúde e bem-estar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="saude5 h-96 flex justify-center items-center">
            <p>Imagem trabalhando</p>
          </Card>
          <Card className="saude6 h-96 flex justify-center items-center">
            <p>Imagem trabalhando</p>
          </Card>
        </div>

        <div className="saude7 space-y-8">
          <p className="font-custom font-light text-3xl italic">
            Principais benefícios de cuidar da pele
          </p>

          <ul className="grid md:grid-cols-4 gap-4 text-center">
            <li className="cascadeScroll h-40 rounded flex flex-col justify-start items-center gap-2 p-4">
              <ArrowDown className="text-stone-500" /> Melhoria na aparência e
              autoestima
            </li>
            <li className="cascadeScroll h-40 rounded flex flex-col justify-start items-center gap-2 p-4">
              <ArrowDown className="text-stone-500" /> Prevenção do
              envelhecimento precoce
            </li>
            <li className="cascadeScroll h-40 rounded flex flex-col justify-start items-center gap-2 p-4">
              <ArrowDown className="text-stone-500" /> Proteção contra danos
              ambientais
            </li>
            <li className="cascadeScroll h-40 rounded flex flex-col justify-start items-center gap-2 p-4">
              <ArrowDown className="text-stone-500" /> Prevenção de doenças
            </li>
          </ul>
        </div>

        <div className="saude8 space-y-8 w-full lg:w-[700px] m-auto leading-7 text-center">
          <p>
            Seja para melhorar a aparência, tratar condições específicas ou
            manter a saúde da pele, há uma solução eficaz esperando por você.
            Descubra como cada tratamento pode beneficiar sua qualidade de vida
            e potencializar seu bem-estar.
          </p>

          <Drawer>
            <DrawerTrigger asChild>
              <Button className="gap-1">
                TRATAMENTOS <ArrowRight size={16} />
              </Button>
            </DrawerTrigger>
            <Menu />
          </Drawer>
        </div>
      </Container>
    </div>
  );
}
