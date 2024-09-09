"use client";

import { slideDown, slideRightScroll } from "@/animations/animations";
import Container from "@/components/Container";
import TreatmentsDialogData from "@/components/TreatmentsDialogData";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";

interface MenuParams {
  params: { type: string };
}

export default function Treatments({ params }: MenuParams) {
  useGSAP(() => {
    slideDown(".tratamentos1", 0);
    slideDown(".tratamentos2", 0.2);

    slideRightScroll(".tratamentos3", 0.4);
  });

  return (
    <div>
      <Container className="relative flex flex-col items-center py-16 space-y-16">
        <header className="tratamentos1 space-y-4 text-center">
          <p className="text-4xl font-custom italic font-light">
            {params.type.replaceAll("-", " ")}
          </p>
          <p className="md:w-full lg:w-[800px] leading-7">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
            itaque earum assumenda quas minus, est eligendi natus unde illum
            magni nobis voluptate fugiat explicabo asperiores delectus
            perferendis. Deserunt, sit iste.
          </p>
        </header>

        <Button className="tratamentos2 gap-1">
          ENCONTRE O TRATAMENTO IDEAL <ArrowRight size={16} />
        </Button>

        <div className="tratamentos3 grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 w-full">
          <Dialog>
            <DialogTrigger asChild>
              <Card className="flex items-center justify-between p-4 w-full border-main2/20 cursor-pointer hover:bg-muted">
                <p className="w-[90%] line-clamp-1">Tipos 1</p>
                <ArrowRight size={16} />
              </Card>
            </DialogTrigger>
            <DialogTrigger asChild>
              <Card className="flex items-center justify-between p-4 w-full border-main2/20 cursor-pointer hover:bg-muted">
                <p className="w-[90%] line-clamp-1">Tipos 2</p>
                <ArrowRight size={16} />
              </Card>
            </DialogTrigger>

            <TreatmentsDialogData />
          </Dialog>
        </div>
      </Container>
    </div>
  );
}
