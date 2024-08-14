import Container from "@/components/Container";
import { Card } from "@/components/ui/card";
import { ArrowRight, MoveDown } from "lucide-react";

export default function SaudeDaPele() {
  return (
    <div>
      <div className="h-screen bg-stone-800 text-stone-100">
        <div
          id="background"
          className="absolute h-full w-full flex justify-center z-0 items-center"
        >
          <p className="text-main2/20 text-[180px] font-custom italic font-extralight">
            Cuidando da pele
          </p>
        </div>

        <Container className="relative flex justify-center items-center h-full">
          <p className="absolute top-16 left-0 text-stone-100 font-custom font-thin italic text-4xl">
            Confiança em cada tratamento
          </p>

          <Card className="flex justify-center items-center h-96 w-96 z-10 border bg-transparent">
            <p className="text-stone-100">Imagem profissional</p>
          </Card>

          <span className="absolute -bottom-12 left-0">
            <p>Saiba mais</p>
            <MoveDown
              size={96}
              strokeWidth={0.5}
              className="-translate-x-11 text-main2/40"
            />
          </span>
        </Container>
      </div>

      <Container className="space-y-32 py-32">
        <div className="w-[700px] m-auto">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            deleniti? Ad consectetur temporibus assumenda animi libero corporis
            soluta, autem asperiores laboriosam? Porro odio est nisi aut tenetur
            atque ipsa explicabo?
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            iste, quam pariatur quo in assumenda a enim temporibus rem deserunt
            asperiores delectus est optio aliquam, officiis adipisci unde ullam
            neque?
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
            repudiandae sint totam ad dicta dolore placeat, est iusto rerum enim
            non magnam accusamus illo vero quo incidunt doloribus. Nihil,
            recusandae?
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <Card className="h-96 flex justify-center items-center">
            <p>Imagem trabalhando</p>
          </Card>
          <Card className="h-96 flex justify-center items-center">
            <p>Imagem trabalhando</p>
          </Card>
        </div>

        <div className="space-y-8">
          <p className="font-custom font-light text-3xl italic">
            Principais benefícios de cuidar da pele
          </p>

          <ul className="grid grid-cols-4 gap-4">
            <li className="h-40 border rounded flex justify-center items-center">
              Benefício 1
            </li>
            <li className="h-40 border rounded flex justify-center items-center">
              Benefício 2
            </li>
            <li className="h-40 border rounded flex justify-center items-center">
              Benefício 3
            </li>
            <li className="h-40 border rounded flex justify-center items-center">
              Benefício 4
            </li>
          </ul>
        </div>
      </Container>

      <div className="bg-stone-800 text-stone-100">
        <Container className="space-y-8 py-32">
          <p className="text-5xl font-custom font-extralight italic">
            Tratamentos exclusivos
          </p>

          <ul className="grid grid-cols-2 gap-4">
            <li className="h-60 flex flex-col justify-end rounded p-4 bg-stone-700 space-y-2 cursor-pointer hover:bg-stone-700/80">
              <p className="text-3xl font-custom italic font-light">
                Tratamento 1
              </p>
              <p className="flex items-center gap-1">
                Saiba mais <ArrowRight size={16} />
              </p>
            </li>
            <li className="h-60 flex flex-col justify-end rounded p-4 bg-stone-700 space-y-2 cursor-pointer hover:bg-stone-700/80">
              <p className="text-3xl font-custom italic font-light">
                Tratamento 2
              </p>
              <p className="flex items-center gap-1">
                Saiba mais <ArrowRight size={16} />
              </p>
            </li>
            <li className="h-60 flex flex-col justify-end rounded p-4 bg-stone-700 space-y-2 cursor-pointer hover:bg-stone-700/80">
              <p className="text-3xl font-custom italic font-light">
                Tratamento 3
              </p>
              <p className="flex items-center gap-1">
                Saiba mais <ArrowRight size={16} />
              </p>
            </li>
          </ul>
        </Container>
      </div>
    </div>
  );
}
