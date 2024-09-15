import { v4 as uuid } from "uuid";

export const menu = [
  {
    id: uuid(),
    href: "tratamentos-faciais",
    nome_tratamento: "Tratamentos faciais",
    descricao_tratamento:
      "Nossos tratamentos faciais são personalizados para cuidar da pele, promovendo hidratação, rejuvenescimento e combate a sinais de envelhecimento, manchas e acne. Utilizamos técnicas avançadas e produtos de qualidade para deixar sua pele saudável e radiante.",
    tipos: [
      {
        nome: "Manchas e cicatrizes",
        descricao:
          "Oferecemos tratamentos específicos para reduzir manchas e cicatrizes no rosto, promovendo uniformidade e suavidade da pele. Utilizamos técnicas avançadas para clareamento e regeneração, visando uma pele mais saudável e com aparência rejuvenescida.",
      },
      {
        nome: "Firmeza e sustentação",
        descricao:
          "Nossos tratamentos para firmeza e sustentação do rosto ajudam a combater a flacidez, restaurando a elasticidade e o contorno facial. Utilizamos técnicas que estimulam a produção de colágeno, garantindo uma pele mais firme e rejuvenescida.",
      },
    ],
  },
  {
    id: uuid(),
    href: "tratamentos-capilares",
    nome_tratamento: "Tratamentos capilares",
    descricao_tratamento:
      "Oferecemos tratamentos capilares para revitalizar, fortalecer e nutrir os fios, combatendo queda de cabelo, caspa e oleosidade. Utilizamos técnicas modernas e produtos específicos para garantir a saúde e beleza dos cabelos.",
  },
  {
    id: uuid(),
    href: "tratamentos-corporais",
    nome_tratamento: "Tratamentos corporais",
    descricao_tratamento:
      "Nossos tratamentos corporais promovem relaxamento, hidratação e melhora da aparência da pele. São indicados para combater celulite, flacidez e promover bem-estar geral, utilizando técnicas eficazes e produtos de qualidade.",
    tipos: [
      {
        nome: "Manchas e cicatrizes",
        descricao:
          "Tratamentos voltados para reduzir manchas e cicatrizes no corpo, melhorando a textura e o tom da pele. Utilizamos técnicas especializadas que promovem a regeneração e uniformização, deixando a pele mais saudável e uniforme.",
      },
      {
        nome: "Firmeza e sustentação",
        descricao:
          "Tratamentos para melhorar a firmeza e sustentação do corpo, combatendo a flacidez e restaurando a elasticidade da pele. Utilizamos técnicas que estimulam a produção de colágeno e tonificam a pele, promovendo um contorno mais definido e uma aparência mais jovem.",
      },
    ],
  },
  {
    id: uuid(),
    href: "injetaveis",
    nome_tratamento: "Injetáveis",
    descricao_tratamento:
      "Tratamentos injetáveis são utilizados para rejuvenescimento e correção estética. Incluem toxina botulínica, preenchedores faciais e outras substâncias que suavizam rugas, repõem volume e melhoram o contorno facial, garantindo resultados naturais e eficazes.",
  },
];
