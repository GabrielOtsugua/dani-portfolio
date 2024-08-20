"use client";

import Container from "@/components/Container";
import Menu from "@/components/Menu";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Drawer, DrawerTrigger } from "@/components/ui/drawer";
import { ArrowRight, MoveDown } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <div className="relative w-full h-screen flex flex-col items-start justify-center">
        <Container className="grid z-10">
          <em
            id="dermatologista"
            className="absolute top-[20%] left-0 z-0 font-custom font-thin text-[450px] text-stone-200/30 select-none"
          >
            Dermatologista
          </em>

          <p className="absolute top-8 text-2xl font-light font-custom italic text-main2/60">
            <span className="text-main2/60">Dra.</span> Dani Moraes
          </p>

          <span className="w-full md:w-[500px] flex flex-col items-start gap-4 z-10">
            <em className="text-6xl font-custom font-extralight">
              Cuidando da sua pele, cuidando de você
            </em>
            <p className="flex items-center gap-2 mt-8">
              Conheça os tratamentos
            </p>

            <Drawer>
              <DrawerTrigger asChild>
                <Button className="gap-1">
                  TRATAMENTOS <ArrowRight size={16} />
                </Button>
              </DrawerTrigger>
              <Menu />
            </Drawer>
          </span>
        </Container>
      </div>

      <div className="flex flex-col items-center mb-8">
        <p className="text-2xl w-full md:w-[650px] mt-32 md:mt-0 text-center font-extralight">
          Um objetivo claro e essencial: melhorar a saúde e a beleza da sua pele
          com expertise dermatológica.
        </p>

        <MoveDown className="w-full my-8 text-main2/40" />
      </div>

      <div>
        <Container className="grid md:grid-cols-2 items-center gap-8 py-16">
          <Card className="flex justify-center items-center h-96">
            <p>Imagem profissional</p>
          </Card>
          <div className="space-y-4">
            <em className="text-4xl font-custom font-light">
              Confiança em cada tratamento
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
              onClick={() => router.push("/portfolio")}
              className="gap-1"
            >
              SOBRE MIM <ArrowRight size={16} />
            </Button>
          </div>
        </Container>
      </div>

      <div>
        <Container className="grid md:grid-cols-2 items-center py-32 gap-8">
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
        </Container>
      </div>
    </div>
  );
}
