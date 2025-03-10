"use client";

import Container from "@/components/Container";
import Menu from "@/components/Menu";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Drawer, DrawerTrigger } from "@/components/ui/drawer";
import { ArrowRight, MoveDown } from "lucide-react";
import { useRouter } from "next/navigation";
import { useGSAP } from "@gsap/react";
import {
  fadeIn,
  slideDown,
  slideDownScroll,
  slideLeftScroll,
} from "@/animations/animations";
import Image from "next/image";
import imagem_1 from "@/../public/imagem-1.jpg";
import imagem_2 from "@/../public/imagem-2.jpg";
import Link from "next/link";

export default function Home() {
  const router = useRouter();

  useGSAP(() => {
    fadeIn(".home1", 0, 3);

    slideDown(".home2", 0);
    slideDown(".home3", 0.5);

    slideDownScroll(".home4", 0);
    slideLeftScroll(".home5", 0);
    slideLeftScroll(".home6", 0);
  });

  return (
    <div>
      <div className="relative w-full h-screen flex flex-col items-start justify-center">
        <Container className="grid z-10">
          <em
            id="dermatologista"
            className="home1 absolute top-[20%] left-0 z-0 font-custom font-thin text-[450px] text-primary/10 select-none"
          >
            Dermatologista
          </em>

          <p className="home2 absolute top-8 text-2xl font-light font-custom italic">
            Dra. Danielle Moraes
          </p>

          <span className="home3 w-full md:w-[500px] flex flex-col items-start gap-4 z-10">
            <em className="text-6xl font-custom font-extralight">
              Cuidando da sua pele, cuidando de você
            </em>
            <p className="flex items-center gap-2 mt-8">
              Fale com um profissional
            </p>

            <Button asChild className="gap-1">
              <Link href="https://wa.me/13998051611" target="_blank">
                AGENDAR UMA CONSULTA <ArrowRight size={16} />
              </Link>
            </Button>

            {/* <Drawer>
              <DrawerTrigger asChild>
                <Button className="gap-1">
                  TRATAMENTOS <ArrowRight size={16} />
                </Button>
              </DrawerTrigger>
              <Menu />
            </Drawer> */}
          </span>
        </Container>
      </div>

      <div className="home4 flex flex-col items-center mb-8">
        <p className="text-2xl w-full md:w-[650px] mt-32 md:mt-0 text-center font-extralight">
          Um objetivo claro e essencial: melhorar a saúde e a beleza da sua pele
          com expertise dermatológica.
        </p>

        <MoveDown className="w-full my-8 text-primary" />
      </div>

      <div>
        <Container className="home5 grid md:grid-cols-2 items-center py-16 gap-8">
          <Card className="h-[600px] border-none shadow-none">
            <Image
              src={imagem_1}
              alt="imagem profissional"
              className="h-full rounded object-contain opacity-85"
            />
          </Card>
          <div className="space-y-4">
            <em className="text-4xl font-custom font-light">
              Confiança em cada tratamento
            </em>
            <p className="leading-7">
              Formada no Rio de Janeiro, Danielle possui ampla experiência
              profissional e um vasto conhecimento médico. Sua dedicação e
              competência resultam em tratamentos eficazes, refletidos na
              satisfação de seus muitos pacientes.
            </p>
            <Button
              variant={"outline"}
              onClick={() => router.push("/portfolio")}
              className="gap-1"
            >
              SOBRE MIM <ArrowRight size={16} />
            </Button>
          </div>
        </Container>
      </div>

      <div className="mb-16">
        <Container className="home6 grid md:grid-cols-2 items-center py-16 gap-8 overflow-hidden">
          <Card className="h-[600px] border-none shadow-none">
            <Image
              src={imagem_2}
              alt=""
              className="h-full rounded object-contain opacity-85"
            />
          </Card>
          <div className="space-y-4">
            <em className="text-4xl font-custom font-light">
              Pele saudável, vida saudável
            </em>
            <p className="leading-7">
              A Dr.ª Danielle é dermatologista especializada em cuidados da pele
              e cabelos, combinando conhecimentos modernos com um atendimento
              acolhedor. Comprometida com a prevenção e educação em saúde, ela
              busca proporcionar aos seus pacientes uma pele saudável e
              bem-estar geral.
            </p>
            <Button
              variant={"outline"}
              onClick={() => router.push("/saude-da-pele")}
              className="gap-1"
            >
              SAIBA MAIS <ArrowRight size={16} />
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
}
