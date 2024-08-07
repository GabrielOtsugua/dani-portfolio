import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Instagram, MoveDown } from "lucide-react";

export default function Home() {
  return (
    <div>
      <div className="relative w-full h-screen p-16 flex flex-col items-start justify-center">
        <em
          id="dermatologista"
          className="absolute top-[20%] left-0 z-0 font-custom font-thin text-[450px] text-stone-200/30 select-none"
        >
          Dermatologista
        </em>

        <span className="w-[500px] flex flex-col items-start gap-4 z-10">
          <em className="text-6xl font-custom font-thin">
            Cuidando da sua pele, cuidando de você
          </em>
          <p className="flex items-center gap-2 mt-8">
            Conheça os tratamentos{" "}
          </p>
          <Button className="gap-1">
            TRATAMENTOS <ArrowRight size={16} />
          </Button>
        </span>
      </div>

      <div className="flex flex-col items-center gap-8 p-16">
        <p className="text-2xl w-[650px] text-center font-extralight">
          Um objetivo claro e essencial: melhorar a saúde e a beleza da sua pele
          com expertise dermatológica.
        </p>
      </div>

      <MoveDown className="w-full my-8 text-main2/40" />

      <div className="grid grid-cols-2 p-16 gap-8">
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
            dignissimos, necessitatibus perferendis delectus blanditiis nostrum
            veniam voluptatibus suscipit doloremque atque ipsum cumque!
          </p>
          <Button variant={"outline"} className="gap-1">
            INFORMAÇÃO <ArrowRight size={16} />
          </Button>
        </div>
      </div>

      <MoveDown className="w-full my-8 text-main2/40" />

      <div className="grid grid-cols-2 p-16 gap-8">
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
            dignissimos, necessitatibus perferendis delectus blanditiis nostrum
            veniam voluptatibus suscipit doloremque atque ipsum cumque!
          </p>
          <Button variant={"outline"} className="gap-1">
            INFORMAÇÃO <ArrowRight size={16} />
          </Button>
        </div>
      </div>

      <div className="h-screen grid grid-cols-2 gap-8 items-center bg-main/95 p-16 text-stone-100">
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
      </div>

      <footer className="grid grid-cols-4 bg-main text-background gap-8 p-16">
        <div className="flex justify-center items-center">
          <em className="text-center font-custom tracking-widest">
            <p className="text-sm text-main2">Clínica</p>
            <p className="text-lg leading-4">Dani Moraes</p>
          </em>
        </div>
        <div>
          <p className="mb-4">Endereço</p>
          <p>Rua Canadá, 215, Jd. América – São Paulo SP</p>
        </div>
        <div>
          <p className="mb-4">Contato</p>
          <p>WhatsApp: (11) 95776-1003</p>
        </div>
        <div>
          <p className="mb-4">Acompanhe</p>
          <Button
            variant={"ghost"}
            className="rounded-full p-2 ml-2 text-main2"
          >
            <Instagram />
          </Button>
        </div>
      </footer>
    </div>
  );
}
