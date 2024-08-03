import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div>
      <div className="bg-slate-100 w-full h-[600px] p-16 flex flex-col items-start justify-end">
        <span className="w-[500px] flex flex-col items-start gap-4">
          <p className="text-2xl font-semibold">Bem vindo a minha pagina!</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
            nulla esse rem, reiciendis architecto nisi iste ipsum qui assumenda.
            Iste cum vel reiciendis neque veniam debitis, consequatur velit
            deserunt explicabo!
          </p>
        </span>
      </div>

      <div className="w-full flex flex-col justify-center items-center gap-4 px-64 py-32">
        <p className="text-xl font-semibold">Minha missão</p>
        <p className="text-center px-16">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut molestiae
          alias perspiciatis doloribus minima quidem, dolorem, repudiandae sint,
          eaque ullam nam omnis deserunt nihil ut iure dolorum inventore
          tempora? Placeat!
        </p>
        <Button>SAIBA MAIS</Button>
      </div>

      <div className="bg-slate-700 w-full text-background flex flex-col justify-center items-center gap-8 px-64 py-32">
        <p className="text-xl font-semibold">Meus serviços</p>
        <div className="grid grid-cols-3 gap-8">
          <Card className="bg-transparent text-background p-4">
            <p className="text-lg mb-4 font-medium">Comprehensive care</p>
            <p className="line-clamp-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
              exercitationem, minus alias nulla.
            </p>
          </Card>
          <Card className="bg-transparent text-background p-4">
            <p className="text-lg mb-4 font-medium">Primary care</p>
            <p className="line-clamp-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
              exercitationem, minus alias nulla.
            </p>
          </Card>
          <Card className="bg-transparent text-background p-4">
            <p className="text-lg mb-4 font-medium">Non-member primary</p>
            <p className="line-clamp-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
              exercitationem, minus alias nulla.
            </p>
          </Card>
        </div>
        <Button variant={"secondary"}>SAIBA MAIS</Button>
      </div>

      <div className="w-full grid grid-cols-2 gap-16 px-64 py-32 items-center">
        <div>
          <Card className="h-[450px] flex justify-center items-center">
            Imagem
          </Card>
        </div>
        <div className="flex flex-col items-start gap-4">
          <p className="text-xl font-semibold">Sobre mim</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            nostrum qui, officia fuga reiciendis aperiam totam laborum ratione
            et a sapiente aliquid beatae ipsum ex veritatis obcaecati ducimus
            fugiat quia!
          </p>
          <Button>SAIBA MAIS</Button>
        </div>
      </div>

      <footer className="relative w-full flex flex-col justify-center items-center gap-4 bg-slate-100 px-64 py-32">
        <em className="text-xl font-semibold">
          Cuidando da sua saúde com conhecimento e carinho
        </em>
        <p>Pronto para começar?</p>
        <Button>AGENDAR UMA CONSULTA</Button>

        <div className="absolute flex justify-between items-end bottom-8 left-8 right-8">
          <p>
            <span className="text-yellow-600">Dra.</span> Dani Moraes -
            Dermatologista
          </p>
          <p className="text-sm">
            Direitos reservados <span className="text-yellow-600">&copy;</span>{" "}
            2024
          </p>
        </div>
      </footer>
    </div>
  );
}
