"use client";

import { slideDown, slideRight } from "@/animations/animations";
import Container from "@/components/Container";
import TreatmentsDialogData from "@/components/TreatmentsDialogData";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { menu } from "@/data/data";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import imagem_6 from "@/../public/imagem-6.jpg";
import imagem_7 from "@/../public/imagem-7.jpg";
import imagem_9 from "@/../public/imagem-9.jpg";
import { useEffect, useState } from "react";

interface MenuParams {
  params: { href: string };
}

export default function Tratamentos({ params }: MenuParams) {
  useGSAP(() => {
    slideDown(".tratamentos1", 0);
    slideDown(".tratamentos2", 0.2);

    slideRight(".tratamentos3", 0.4);
  });

  const tratamento_encontrado = menu.find((item) => item.href == params.href);

  const router = useRouter();
  const [specificPage, setSpecificPage] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    pathName === "/tratamentos/consulta-dermatologica" && setSpecificPage(true);
  });

  return (
    <div>
      <Container className="relative flex flex-col items-center py-16 space-y-16">
        <header className="tratamentos1 space-y-4 text-center">
          <p className="text-4xl font-custom italic font-light">
            {tratamento_encontrado?.nome_tratamento}
          </p>
          <p className="md:w-full lg:w-[800px] leading-7">
            {tratamento_encontrado?.descricao_tratamento}
          </p>
        </header>

        <Button asChild className="tratamentos2 gap-1">
          <Link href="https://wa.me/13998051611" target="_blank">
            AGENDAR UMA CONSULTA <ArrowRight size={16} />
          </Link>
        </Button>

        <div className="tratamentos3 grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 w-full">
          {tratamento_encontrado?.tipos?.map((item) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <Card className="flex items-center justify-between p-4 w-full border-stone-300 cursor-pointer hover:bg-muted">
                  <p className="w-[90%] line-clamp-1">{item.nome}</p>
                  <ArrowRight size={16} />
                </Card>
              </DialogTrigger>
              <TreatmentsDialogData descricao={item.descricao} />
            </Dialog>
          ))}
        </div>

        <div
          data-especificPage={specificPage}
          className="hidden data-[especificPage=true]:grid md:grid-cols-2 justify-items-center items-center gap-y-8 md:gap-y-28 gap-x-8 py-20"
        >
          <Image
            src={imagem_9}
            alt={""}
            className="h-[600px] w-96 object-cover rounded"
          />
          <p className="leading-7">
            A relação que temos com nossa pele vai muito além da estética.
            Sentir-se bem com a própria aparência influencia diretamente nossa
            autoestima, confiança e bem-estar emocional. Quando aceitamos e
            cuidamos da nossa pele com carinho, aprendemos a valorizar nossa
            individualidade e a respeitar nosso corpo.
          </p>
          <Image
            src={imagem_6}
            alt={""}
            className="h-[600px] w-96 object-cover rounded"
          />
          <Image
            src={imagem_7}
            alt={""}
            className="h-[600px] w-96 object-cover rounded"
          />
        </div>
      </Container>
    </div>
  );
}
