"use client";

import {
  fadeIn,
  slideDown,
  slideDownScroll,
  slideLeftScroll,
  slideRightScroll,
} from "@/animations/animations";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useGSAP } from "@gsap/react";
import { ArrowRight, MoveDown } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import imagem_2 from "@/../public/imagem-2.jpg";
import imagem_3 from "@/../public/imagem-3.jpg";
import imagem_5 from "@/../public/imagem-5.jpg";
import imagem_4 from "@/../public/imagem-4.jpg";
import Link from "next/link";

export default function Portfolio() {
  const router = useRouter();

  useGSAP(() => {
    fadeIn(".portfolio1", 0, 2);

    slideDown(".portfolio2", 0);
    slideDown(".portfolio3", 0.5);

    slideDownScroll(".portfolio4", 0);
    slideRightScroll(".portfolio5", 0);
    slideLeftScroll(".portfolio6", 0);
    slideRightScroll(".portfolio7", 0);
    slideLeftScroll(".portfolio8", 0);
  });

  return (
    <div>
      <div className="h-screen bg-stone-800 text-stone-100">
        <div
          id="background"
          className="absolute h-full w-full flex justify-center z-0 items-center"
        >
          <p className="portfolio1 text-stone-500 text-[35px] md:text-[70px] xl:text-[130px] 2xl:text-[150px] font-custom italic font-extralight">
            Dra. Danielle Moraes
          </p>
        </div>

        <Container className="relative flex justify-center items-center h-full">
          <div className="portfolio2 flex justify-between w-full flex-wrap gap-2 absolute top-8 xl:top-16 left-0 text-stone-100 font-custom font-thin italic text-4xl">
            <p>Confiança em cada tratamento</p>
            <Button asChild className="gap-1">
              <Link href="https://wa.me/13998051611" target="_blank">
                AGENDAR UMA CONSULTA <ArrowRight size={16} />
              </Link>
            </Button>
          </div>

          {/* <Card className="portfolio3 h-[675px] w-[550px] z-10 border-none">
            <Image
              src={imagem_4}
              alt=""
              className="w-full h-full object-cover rounded"
            />
          </Card> */}

          <span className="absolute -bottom-12 left-0">
            <p>Sobre mim</p>
            <MoveDown
              size={96}
              strokeWidth={0.5}
              className="-translate-x-11 text-stone-500"
            />
          </span>
        </Container>
      </div>

      <Container className="space-y-32 py-32">
        <div className="portfolio4 flex flex-col items-center gap-4 md:w-full lg:w-[700px] m-auto">
          <p>
            Médica, pós-graduada em Dermatologia Clínica e Estética. A Dra.
            Danielle Moraes de Aguiar é graduada pela Faculdade de Medicina do
            Grande Rio (UNIGRANRIO) e possui pós-graduação em Dermatologia
            Clínica pelo Instituto Pele Saudável BWS, um serviço de referência
            em Dermatologia no bairro da Bela Vista, na cidade de São Paulo.
          </p>
          <p>
            Após concluir os estudos em Dermatologia Clínica, realizou sua
            segunda pós-graduação em Dermatologia Estética, aprofundando seus
            conhecimentos em procedimentos estéticos faciais e corporais.
          </p>
          <p>
            Devido à sua formação completa, a Dra. Danielle é referência em
            procedimentos estéticos como preenchimento e toxina botulínica,
            sempre buscando bom senso, elegância e naturalidade nos resultados.
            Também se destaca na tricologia (estudo dos cabelos), tratando
            inúmeros pacientes com queixas de queda capilar e alterações na
            haste capilar. Além disso, trata doenças de pele e unhas.
          </p>
          <p>
            Sua dedicação e competência resultam em tratamentos eficazes,
            refletidos na satisfação de seus muitos pacientes. Seu objetivo é
            claro e essencial: melhorar a saúde e a beleza da pele, dos cabelos
            e das unhas, com expertise dermatológica.
          </p>
          <p>CRM-SP 234151</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="portfolio5 h-[600px] border-none shadow-none">
            <Image
              src={imagem_3}
              alt="imagem profissional"
              className="h-full object-contain"
            />
          </Card>
          <Card className="portfolio6 h-[600px] border-none shadow-none">
            <Image
              src={imagem_5}
              alt="imagem profissional"
              className="h-full object-contain"
            />
          </Card>
        </div>

        <div className="portfolio7 grid md:grid-cols-2 items-center gap-8">
          <div>
            <p className="leading-7">
              Com um olhar atencioso e dedicação, Danielle oferece cuidados
              dermatológicos com protocolos exclusivos e personalizados,
              proporcionando uma abordagem única para cada paciente. Seu
              comprometimento em tornar o tratamento mais leve e acessível
              reflete sua expertise profissional e a atenção especial que dedica
              a cada caso.
            </p>
          </div>
          <div>
            <Card className="h-[600px] border-none shadow-none">
              <Image
                src={imagem_4}
                alt="imagem profissional"
                className="h-full object-contain"
              />
            </Card>
          </div>
        </div>

        <div className="portfolio8 grid md:grid-cols-2 items-center gap-8">
          <Card className="flex justify-center items-center h-[600px] border-none shadow-none">
            <Image
              src={imagem_2}
              alt="imagem profissional"
              className="h-full object-contain"
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
        </div>
      </Container>
    </div>
  );
}
