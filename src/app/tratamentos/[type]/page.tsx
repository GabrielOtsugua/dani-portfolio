"use client";

import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

interface MenuParams {
  params: { type: string };
}

export default function Treatments({ params }: MenuParams) {
  const router = useRouter();

  return (
    <div>
      <Container className="relative flex flex-col items-center py-16 space-y-16">
        <header className="space-y-4 text-center">
          <p className="text-4xl font-custom italic font-light">
            {params.type.replaceAll("-", " ")}
          </p>
          <p className="w-[800px] leading-7">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
            itaque earum assumenda quas minus, est eligendi natus unde illum
            magni nobis voluptate fugiat explicabo asperiores delectus
            perferendis. Deserunt, sit iste.
          </p>
        </header>

        <Button className="gap-1">
          ENCONTRE O MELHOR TRATAMENTO PARA VOCÊ <ArrowRight size={16} />
        </Button>

        <div className="grid grid-cols-3 gap-4">
          <Card className="flex items-center justify-between p-8 w-80 border-main2/20 cursor-pointer hover:bg-muted">
            <p className="w-[90%] line-clamp-1">Tipos 1</p>
            <ArrowRight size={16} />
          </Card>
          <Card className="flex items-center justify-between p-8 w-80 border-main2/20 cursor-pointer hover:bg-muted">
            <p className="w-[90%] line-clamp-1">Tipos 2</p>
            <ArrowRight size={16} />
          </Card>
          <Card className="flex items-center justify-between p-8 w-80 border-main2/20 cursor-pointer hover:bg-muted">
            <p className="w-[90%] line-clamp-1">Tipos 3</p>
            <ArrowRight size={16} />
          </Card>
        </div>
      </Container>
    </div>
  );
}
