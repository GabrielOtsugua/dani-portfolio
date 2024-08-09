import Container from "@/components/Container";
import Menu from "@/components/Menu";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Drawer, DrawerTrigger } from "@/components/ui/drawer";
import { ArrowRight, Instagram, MoveDown } from "lucide-react";
import Link from "next/link";

export default function Home() {
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

          <span className="w-[500px] flex flex-col items-start gap-4 z-10">
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
        <p className="text-2xl w-[650px] text-center font-extralight">
          Um objetivo claro e essencial: melhorar a saúde e a beleza da sua pele
          com expertise dermatológica.
        </p>

        <MoveDown className="w-full my-8 text-main2/40" />
      </div>

      <div>
        <Container className="grid grid-cols-2 gap-8 py-16">
          <Card className="flex justify-center items-center">
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
            <Button variant={"outline"} className="gap-1">
              INFORMAÇÃO <ArrowRight size={16} />
            </Button>
          </div>
        </Container>
      </div>

      <div>
        <Container className="grid grid-cols-2 py-32 gap-8">
          <Card className="flex justify-center items-center">
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
            <Button variant={"outline"} className="gap-1">
              INFORMAÇÃO <ArrowRight size={16} />
            </Button>
          </div>
        </Container>
      </div>

      <div className="bg-main/95 text-stone-100">
        <Container className="h-screen grid grid-cols-2 gap-8 items-center">
          <main className="space-y-8">
            <p className="font-custom font-thin italic text-6xl w-[350px]">
              Cuidando da sua pele, cuidando de você
            </p>

            <Button variant={"secondary"} className="gap-1">
              AGENDAR UMA CONSULTA <ArrowRight size={16} />
            </Button>
          </main>
          <div>
            <Card className="bg-white w-96 h-96 flex justify-center items-center">
              Imagem profissional
            </Card>
          </div>
        </Container>
      </div>

      <footer className="bg-main text-background">
        <Container className="grid grid-cols-4 gap-8 py-8">
          <div className="flex flex-col items-start font-custom font-thin text-3xl italic text-yellow-200/60">
            <p>Dra.</p>
            <p>Dani</p>
            <p>Moraes</p>
          </div>
          <div className="">
            <p className="text-lg">Endereço</p>
            <p>Rua Canadá, 215, Jd. América – São Paulo SP</p>
          </div>
          <div className="">
            <p className="text-lg">Contato</p>
            <p>WhatsApp: (11) 95776-1003</p>
          </div>
          <div className="">
            <p className="text-lg">Acompanhe</p>
            <Button variant={"ghost"} className="rounded-full p-2 text-main2">
              <Link
                href="https://www.instagram.com/dradanimoraess/"
                target="_blanck"
              >
                <Instagram />
              </Link>
            </Button>
          </div>
        </Container>
      </footer>
    </div>
  );
}
