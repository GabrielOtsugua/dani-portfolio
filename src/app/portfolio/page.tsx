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
import { useRouter } from "next/navigation";

export default function Portfolio() {
  const router = useRouter();

  useGSAP(() => {
    fadeIn(".portfolio1", 0, 3);

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
          <p className="portfolio1 text-main2/20 text-[35px] md:text-[70px] xl:text-[130px] 2xl:text-[150px] font-custom italic font-extralight">
            Dra. Danielle Moraes
          </p>
        </div>

        <Container className="relative flex justify-center items-center h-full">
          <p className="portfolio2 absolute top-8 xl:top-16 left-0 text-stone-100 font-custom font-thin italic text-4xl">
            Confiança em cada tratamento
          </p>

          <Card className="portfolio3 flex justify-center items-center h-96 w-96 z-10 border bg-transparent">
            <p className="text-stone-100">Imagem profissional</p>
          </Card>

          <span className="absolute -bottom-12 left-0">
            <p>Sobre mim</p>
            <MoveDown
              size={96}
              strokeWidth={0.5}
              className="-translate-x-11 text-main2/40"
            />
          </span>
        </Container>
      </div>

      <Container className="space-y-32 py-32">
        <div className="portfolio4 flex flex-col items-center gap-4 md:w-full lg:w-[700px] m-auto">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit omnis
            sed quaerat? Facere et natus fuga repudiandae quasi porro odit,
            provident amet blanditiis quae illo, quibusdam soluta, facilis
            obcaecati expedita?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ea
            voluptate sapiente et nihil maxime temporibus ipsum, laboriosam
            dolores hic voluptas sint enim explicabo eum, vel repellendus! At,
            pariatur velit!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="portfolio5 flex justify-center items-center h-96 w-full z-10">
            <p>Imagem profissional</p>
          </Card>
          <Card className="portfolio6 flex justify-center items-center h-96 w-full z-10">
            <p>Imagem profissional</p>
          </Card>
        </div>

        <div className="portfolio7 grid md:grid-cols-2 items-center gap-8">
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              fugit iure fugiat autem voluptates beatae adipisci consequatur
              velit voluptas, reprehenderit cumque ut tempora, sequi saepe eius?
              Fugit consequatur eveniet enim!
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure,
              magnam vel, rerum quo velit expedita ab debitis est, sit voluptas
              voluptatum doloribus quam modi quod fugit labore. Aperiam, odio
              facere.
            </p>
          </div>
          <div>
            <Card className="flex justify-center items-center h-96 w-full z-10">
              <p>Imagem profissional</p>
            </Card>
          </div>
        </div>

        <div className="portfolio8 grid md:grid-cols-2 items-center gap-8">
          <Card className="flex justify-center items-center h-96">
            <p>Imagem profissional</p>
          </Card>
          <div className="space-y-4">
            <em className="text-4xl font-custom font-light">
              Pele saudável, vida saudável
            </em>
            <p className="leading-7">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
              molestias quisquam culpa omnis veniam sit atque. Laborum
              dignissimos, necessitatibus perferendis delectus blanditiis
              nostrum veniam voluptatibus suscipit doloremque atque ipsum
              cumque!
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
