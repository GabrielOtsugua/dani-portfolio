import { v4 as uuid } from "uuid";

export const menu = [
  {
    id: uuid(),
    href: "consulta-dermatologica",
    nome_tratamento: "Consulta dermatológica",
    descricao_tratamento:
      "A consulta dermatológica com a Dra. Danielle é um atendimento humanizado que vai além da simples análise da pele. Envolve acolhimento, escuta ativa e um olhar atento às necessidades individuais de cada paciente. O objetivo é não apenas diagnosticar e tratar doenças de pele, cabelos e unhas, mas também proporcionar conforto e segurança durante todo o processo. Veja como funciona uma consulta dermatológica humanizada e completa:",
    tipos: [
      {
        id: uuid(),
        nome: "Acolhimento e diálogo",
        descricao:
          "O primeiro passo é estabelecer uma relação de confiança. A Dra. Danielle faz perguntas sobre a queixa principal, histórico de saúde, hábitos diários e possíveis fatores emocionais que possam influenciar a condição da pele. A escuta ativa e a empatia são essenciais para que o paciente se sinta compreendido e respeitado.",
      },
      {
        id: uuid(),
        nome: "Exame clínico detalhado",
        descricao:
          "Após a conversa inicial, é realizada uma avaliação completa da pele, cabelos e unhas. Mesmo que o paciente tenha uma queixa específica, o exame abrange outras áreas do corpo para identificar sinais precoces de possíveis alterações dermatológicas.",
      },
      {
        id: uuid(),
        nome: "Dermatoscopia",
        descricao:
          "Esse exame complementar é fundamental para uma análise mais aprofundada das lesões cutâneas. A dermatoscopia é um método não invasivo que utiliza um aparelho chamado dermatoscópio para ampliar estruturas da pele que não são visíveis a olho nu. Ele é especialmente útil para: Avaliação de pintas e sinais (nevos), auxiliando na detecção precoce do câncer de pele, como o melanoma. Diagnóstico de doenças inflamatórias da pele. Investigação de doenças do couro cabeludo, como a alopecia.",
      },
      {
        id: uuid(),
        nome: "Plano de tratamento",
        descricao:
          "Após a avaliação, os achados são explicados de forma clara e acessível, esclarecendo dúvidas e apresentando as opções de tratamento. A abordagem é sempre individualizada, considerando as necessidades e preferências do paciente.",
      },
      {
        id: uuid(),
        nome: "Orientações preventivas",
        descricao:
          "Além do tratamento específico, a consulta inclui recomendações sobre cuidados diários com a pele, uso adequado de protetor solar, alimentação e outros hábitos saudáveis. A prevenção é uma parte essencial da dermatologia humanizada.",
      },
    ],
  },
  {
    id: uuid(),
    href: "tratamentos-faciais",
    nome_tratamento: "Tratamentos faciais",
    descricao_tratamento:
      "Nossos tratamentos faciais são personalizados para cuidar da pele, promovendo hidratação, rejuvenescimento e combate a sinais de envelhecimento, manchas e acne. Utilizamos técnicas avançadas e produtos de qualidade para deixar sua pele saudável e radiante.",
    tipos: [
      {
        id: uuid(),
        nome: "Manchas e cicatrizes",
        descricao:
          "Oferecemos tratamentos específicos para reduzir manchas e cicatrizes no rosto, promovendo uniformidade e suavidade da pele. Utilizamos técnicas avançadas para clareamento e regeneração, visando uma pele mais saudável e com aparência rejuvenescida.",
      },
      {
        id: uuid(),
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
        id: uuid(),
        nome: "Manchas e cicatrizes",
        descricao:
          "Tratamentos voltados para reduzir manchas e cicatrizes no corpo, melhorando a textura e o tom da pele. Utilizamos técnicas especializadas que promovem a regeneração e uniformização, deixando a pele mais saudável e uniforme.",
      },
      {
        id: uuid(),
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
