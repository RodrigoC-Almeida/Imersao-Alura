let especies = [
    {
      titulo: "Jataí",
      imagem: "./img/jatai.jpg",
      descricao: "A Abelha Jataí: Um Tesouro da Natureza. A abelha jataí (Tetragonisca angustula) é uma espécie nativa do Brasil, conhecida por sua docilidade e importância ecológica. Sem ferrão, ela produz um mel de alta qualidade, rico em nutrientes e com propriedades medicinais. A jataí é uma polinizadora eficiente, contribuindo para a reprodução de diversas plantas nativas e cultivadas.",
      link: "https://pt.wikipedia.org/wiki/Tetragonisca_angustula",
      tags: "abelha jataí abelha Tetragonisca angustula mel polinizadora sem ferrão ecologia tenho"
    },
    {
      titulo: "Mandaçaia",
      imagem: "./img/mandacaia.jpg",
      descricao: "A Abelha Mandaçaia: Um Vigia Bonito. A mandaçaia (Melipona quadrifasciata) é uma abelha social brasileira, conhecida por sua beleza e importância ecológica. Seu nome, de origem indígena, significa vigia bonito, uma referência à abelha que guarda a entrada da colmeia. Com corpo robusto, cabeça e tórax pretos, abdome com faixas amarelas e asas ferrugíneas, a mandaçaia é uma polinizadora eficiente, contribuindo para a reprodução de diversas plantas nativas.",
      link: "https://pt.wikipedia.org/wiki/Melipona_quadrifasciata",
      tags: "abelha mandaçaia abelha Melipona quadrifasciata polinizadora sem ferrão ecologia"
    },
    {
      titulo: "Mandaguari",
      imagem: "./img/mandaguari.jpg",
      descricao: "A Abelha Mandaguari: Uma Guerreira Alada. A mandaguari (Scaptotrigona postica) é uma abelha sem ferrão nativa do Brasil, conhecida por sua natureza protetora e mel saboroso. Com corpo escuro e listras amarelas no abdômen, a mandaguari é uma polinizadora incansável, desempenhando um papel crucial na reprodução de diversas plantas. Apesar de sua aparência delicada, essa abelha é bastante defensiva de sua colmeia, utilizando suas mandíbulas fortes para morder invasores.",
      link: "https://pt.wikipedia.org/wiki/Scaptotrigona_postica",
      tags: "abelha mandaguari abelha Scaptotrigona postica polinizadora sem ferrão ecologia tenho"
    },
    {
      titulo: "Uruçu",
      imagem: "./img/urucu.jpg",
      descricao: "A Abelha Uruçu: Uma Gigante da Polinização. A uruçu (Melipona scutellaris) é uma das maiores abelhas sem ferrão do Brasil, conhecida por sua produção de mel de alta qualidade e sabor marcante. É uma polinizadora essencial para diversas culturas, como o cacau.",
      link: "https://pt.wikipedia.org/wiki/Melipona_scutellaris",
      tags: "abelha uruçu abelha Melipona scutellaris polinizadora sem ferrão mel cacau"
    },
    {
      titulo: "Jandaíra",
      imagem: "./img/jandaira.jpg",
      descricao: "A Abelha Jandaíra: Um Tesouro do Nordeste. A jandaíra (Melipona subnitida) é uma abelha nativa do Nordeste brasileiro, famosa por seu mel de sabor único e alto valor comercial. É uma espécie de grande importância para a biodiversidade local.",
      link: "https://pt.wikipedia.org/wiki/Melipona_subnitida",
      tags: "abelha jandaíra abelha Melipona subnitida polinizadora sem ferrão mel Nordeste"
    },
    {
      titulo: "Tiúba",
      imagem: "./img/tiuba.jpg",
      descricao: "A Abelha Tiúba: Uma Construção Perfeita. A tiúba (Melipona fasciculata) é conhecida por construir ninhos com potes de cera perfeitos, utilizados para armazenar mel e pólen. É uma espécie bastante rústica e adaptada a diferentes ambientes.",
      link: "https://pt.wikipedia.org/wiki/Melipona_fasciculata",
      tags: "abelha tiúba abelha Melipona fasciculata polinizadora sem ferrão mel cera"
    },
    {
      titulo: "Mirim",
      imagem: "./img/mirim.jpg",
      descricao: "A Abelha Mirim: Pequena, Mas Valiosa. As abelhas mirins são um grupo diversificado de abelhas sem ferrão, conhecidas por seu pequeno porte e ninhos geralmente construídos em cavidades de árvores. Desempenham um papel fundamental na polinização de diversas plantas.",
      link: "https://www.epagri.sc.gov.br/index.php/2020/09/22/abelhas-em-ferrao-um-mundo-fascinante-dentro-de-pequenas-caixas/",
      tags: "abelha mirim abelha polinizadora sem ferrão cavidades de árvores pequeno porte"
    },
    {
      titulo: "Iraí",
      imagem: "./img/irai.jpg",
      descricao: "A Abelha Iraí: Uma Construtora Incansável. A iraí (Trigona spinipes) é conhecida por construir ninhos complexos, com diversas camadas e compartimentos. Seu mel possui sabor característico e é bastante apreciado.",
      link: "https://www.epagri.sc.gov.br/index.php/2020/09/22/abelhas-em-ferrao",
      tags: "abelha iraí abelha Trigona spinipes polinizadora sem ferrão mel ninhos complexos"
    },
    {
      titulo: "Tubiba",
      imagem: "./img/tubiba.jpg",
      descricao: "A Abelha Tubiba: Uma Pequena Guerreira. A tubiba (Scaptotrigona tubiba) é uma abelha sem ferrão nativa do Brasil, conhecida por seu pequeno tamanho e comportamento agressivo na defesa de sua colmeia. Produz um mel de sabor levemente ácido e é uma polinizadora importante para diversas plantas.",
      link: "https://www.youtube.com/watch?v=2qT3m9I6lS8",
      tags: "abelha tubiba abelha Scaptotrigona tubiba polinizadora sem ferrão mel"
    },
    {
      titulo: "Mosquito",
      imagem: "./img/mosquito.jpg",
      descricao: "A Abelha Mosquito: Uma Mestra na Construção. A abelha mosquito (Plebeia droryana) é uma abelha sem ferrão nativa do Brasil, conhecida por sua habilidade em construir ninhos complexos e por seu mel de sabor suave. É uma polinizadora importante para diversas plantas, principalmente flores de pequeno porte.",
      link: "https://www.youtube.com/watch?v=2qT3m9I6lS8",
      tags: "abelha mosquito abelha Plebeia droryana polinizadora sem ferrão mel"
    },
    {
      titulo: "Boca-de-sapo",
      imagem: "./img/bocasapo.jpg",
      descricao: "A Abelha Boca-de-sapo: Uma Guardiã da Natureza. A abelha boca-de-sapo (Oxytrigona tataira) é uma abelha sem ferrão nativa do Brasil, conhecida por seu comportamento agressivo na defesa de sua colmeia. Produz um mel de sabor forte e é uma polinizadora importante para diversas plantas, especialmente árvores de grande porte.",
      link: "https://www.youtube.com/watch?v=2qT3m9I6lS8",
      tags: "abelha boca-de-sapo abelha Oxytrigona tataira polinizadora sem ferrão mel"
    },
    {
      titulo: "Guaraipo",
      imagem: "./img/guaraipo.jpg",
      descricao: "A Abelha Guaraipo: Uma Construtora Inovadora. A abelha guaraipo (Melipona bicolor) é uma abelha sem ferrão nativa do Brasil, conhecida por sua habilidade em construir ninhos em cavidades de árvores, com entradas camufladas. Produz um mel de sabor suave e é uma polinizadora importante para diversas plantas, principalmente flores de cor amarela.",
      link: "https://www.youtube.com/watch?v=2qT3m9I6lS8",
      tags: "abelha guaraipo abelha Melipona bicolor polinizadora sem ferrão mel"
    },
    {
      titulo: "Uruçu-amarela",
      imagem: "./img/uamarela.jpg",
      descricao: "A Abelha Uruçu-amarela: Uma Polinizadora Fiel. A abelha uruçu-amarela (Melipona flavipennis) é uma abelha sem ferrão nativa do Brasil, conhecida por sua cor amarela vibrante e sua fidelidade às flores. Produz um mel de sabor intenso e é uma polinizadora importante para diversas plantas, especialmente árvores frutíferas.",
      link: "https://www.youtube.com/watch?v=2qT3m9I6lS8",
      tags: "abelha uruçu-amarela abelha Melipona flavipennis polinizadora sem ferrão mel"
    },
    {
      titulo: "Uruçu-vermelha",
      imagem: "./img/uvermelha.jpg",
      descricao: "A Abelha Uruçu-vermelha: Uma Guardiã do Cerrado. A abelha uruçu-vermelha (Melipona seminigra) é uma abelha sem ferrão nativa do Brasil, conhecida por sua coloração avermelhada e por sua importância para a polinização de plantas do Cerrado. Produz um mel de sabor único e é considerada uma espécie ameaçada de extinção.",
      link: "https://www.youtube.com/watch?v=2qT3m9I6lS8",
      tags: "abelha uruçu-vermelha abelha Melipona seminigra polinizadora sem ferrão mel Cerrado"
    },
    {
      titulo: "Jataí-vermelha",
      imagem: "./img/jvermelha.jpg",
      descricao: "A Abelha Jataí-vermelha: Uma Pequena Construtora. A abelha jataí-vermelha (Tetragonisca fiebrigi) é uma abelha sem ferrão nativa do Brasil, conhecida por seu tamanho diminuto e por sua habilidade em construir ninhos em cavidades de árvores. Produz um mel de sabor suave e é uma polinizadora importante para diversas plantas, especialmente flores de pequeno porte.",
      link: "https://www.youtube.com/watch?v=2qT3m9I6lS8",
      tags: "abelha jataí-vermelha abelha Tetragonisca fiebrigi polinizadora sem ferrão mel"
    },
    {
      titulo: "Mandaçaia-do-mato",
      imagem: "./img/mdomato.jpg",
      descricao: "A Abelha Mandaçaia-do-mato: Uma Polinizadora do Cerrado. A abelha mandaçaia-do-mato (Melipona rufiventris) é uma abelha sem ferrão nativa do Brasil, conhecida por sua coloração marrom-avermelhada e por sua importância para a polinização de plantas do Cerrado. Produz um mel de sabor intenso e é considerada uma espécie vulnerável à extinção.",
      link: "https://www.youtube.com/watch?v=2qT3m9I6lS8",
      tags: "abelha mandaçaia-do-mato abelha Melipona rufiventris polinizadora sem ferrão mel Cerrado"
    },
    {
      titulo: "Caatingueira",
      imagem: "./img/caatingueira.jpg",
      descricao: "A Abelha Caatingueira: Uma Guardiã da Caatinga. A abelha caatingueira (Melipona asilvai) é uma abelha sem ferrão nativa do Brasil, conhecida por sua adaptação ao clima semiárido da Caatinga. Produz um mel de sabor único e é uma polinizadora importante para diversas plantas da região.",
      link: "https://www.youtube.com/watch?v=2qT3m9I6lS8",
      tags: "abelha caatingueira abelha Melipona asilvai polinizadora sem ferrão mel Caatinga"
    },
    {
      titulo: "Uruçu-cinzenta",
      imagem: "./img/ucinzenta.jpg",
      descricao: "A Abelha Uruçu-cinzenta: Uma Construtora Habilidosa. A abelha uruçu-cinzenta (Melipona marginata) é uma abelha sem ferrão nativa do Brasil, conhecida por sua coloração cinza e por sua habilidade em construir ninhos em cavidades de árvores. Produz um mel de sabor suave e é uma polinizadora importante para diversas plantas, especialmente flores de cor branca.",
      link: "https://www.youtube.com/watch?v=2qT3m9I6lS8",
      tags: "abelha uruçu-cinzenta abelha Melipona marginata polinizadora sem ferrão mel"
    },
    {
      titulo: "Iraí-do-mato",
      imagem: "./img/idomato.jpg",
      descricao: "A Abelha Iraí-do-mato: Uma Construtora Incansável. A abelha iraí-do-mato (Trigona fulviventris) é uma abelha sem ferrão nativa do Brasil, conhecida por sua habilidade em construir ninhos em cavidades de árvores, com entradas camufladas. Produz um mel de sabor intenso e é uma polinizadora importante para diversas plantas, especialmente flores de cor vermelha.",
      link: "https://www.youtube.com/watch?v=2qT3m9I6lS8",
      tags: "abelha iraí-do-mato abelha Trigona fulviventris polinizadora sem ferrão mel"
    },
    {
      titulo: "Jandaíra-do-mato",
      imagem: "./img/jdomato.jpg",
      descricao: "A Abelha Jandaíra-do-mato: Uma Polinizadora do Cerrado. A abelha jandaíra-do-mato (Melipona quadrifasciata) é uma abelha sem ferrão nativa do Brasil, conhecida por sua coloração marrom-avermelhada e por sua importância para a polinização de plantas do Cerrado. Produz um mel de sabor intenso e é considerada uma espécie vulnerável à extinção.",
      link: "https://www.youtube.com/watch?v=2qT3m9I6lS8",
      tags: "abelha jandaíra-do-mato abelha Melipona quadrifasciata polinizadora sem ferrão mel Cerrado"
    },
    {
      titulo: "Uruçu-verde",
      imagem: "./img/uverde.jpg",
      descricao: "A Abelha Uruçu-verde: Uma Guardiã da Amazônia. A abelha uruçu-verde (Melipona compressipes) é uma abelha sem ferrão nativa do Brasil, conhecida por sua coloração verde-escura e por sua importância para a polinização de plantas da Amazônia. Produz um mel de sabor único e é considerada uma espécie ameaçada de extinção.",
      link: "https://www.youtube.com/watch?v=2qT3m9I6lS8",
      tags: "abelha uruçu-verde abelha Melipona compressipes polinizadora sem ferrão mel Amazônia"
    }
  ];