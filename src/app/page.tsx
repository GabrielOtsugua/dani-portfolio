import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  AlignRight,
  ArrowDown,
  ArrowRight,
  Instagram,
  MoveDown,
  MoveDownLeft,
  MoveDownRight,
  MoveRight,
} from "lucide-react";

export default function Home() {
  return (
    <div>
      <div className="relative bg-stone-100 w-full h-[600px] p-16 flex flex-col items-start justify-end">
        <em className="absolute bottom-0 left-0 z-0 font-custom font-thin text-[450px] text-stone-200/30">
          Dermatologista
        </em>

        <span className="w-[500px] flex flex-col items-start gap-4 z-10">
          <em className="text-6xl font-custom font-thin">
            Cuidando da sua pele, cuidando de você
          </em>
          <p className="flex gap-2 mt-8">
            Conheça os tratamentos <ArrowDown className="text-main/60" />
          </p>
          <Button className="gap-1 w-">
            <AlignRight /> MENU
          </Button>
        </span>
      </div>

      <div className="flex flex-col items-center gap-8 p-16">
        <p className="text-2xl w-[650px] text-center font-extralight">
          Um objetivo claro e essencial: melhorar a saúde e a beleza da sua pele
          com expertise dermatológica.
        </p>
      </div>

      <MoveDown className="w-full my-8 text-main/60" />

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
        </div>
      </div>

      <MoveDown className="w-full my-8 text-main/60" />

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
        </div>
      </div>

      <footer className="grid grid-cols-4 bg-yellow-950 text-background gap-8 p-16">
        <div className="flex justify-center items-center">
          <em className="text-center font-custom tracking-widest">
            <p className="text-sm text-yellow-600">Clínica</p>
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
            className="rounded-full p-2 ml-2 text-yellow-600"
          >
            <Instagram />
          </Button>
        </div>
      </footer>
    </div>
  );
}
