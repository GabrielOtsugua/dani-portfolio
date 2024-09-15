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

        <Button className="tratamentos2 gap-1">
          ENCONTRE O TRATAMENTO IDEAL <ArrowRight size={16} />
        </Button>

        <div className="tratamentos3 grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 w-full">
          {tratamento_encontrado?.tipos?.map((item) => (
            <Dialog>
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
      </Container>
    </div>
  );
}
