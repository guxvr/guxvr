(() => {
  const PORTUGUESE = 'pt-BR';
  const ENGLISH = 'en';
  const STORAGE_KEY = 'portfolio-language';

  const portugueseText = new Map(Object.entries({
    "hypothesis": "hipótese",
    "building ideas with data": "construindo ideias com dados",
    "Skip to content": "Pular para o conteúdo",
    "Achievement": "Conquista",
    "Achievements": "Conquistas",
    "Projects": "Projetos",
    "About": "Sobre",
    "Contact": "Contato",
    "Available for internships": "Disponível para estágio",
    "I turn data into": "Transformo dados em",
    "intelligent decisions.": "decisões inteligentes.",
    "I'm Gustavo, a Software Engineering student at the University of Brasília. I build solutions at the intersection of": "Sou Gustavo, estudante de Engenharia de Software na Universidade de Brasília. Construo soluções na interseção entre",
    "Artificial Intelligence": "Inteligência Artificial",
    "Data": "Dados",
    ", and": " e",
    "— from hypothesis to working product.": "— da hipótese ao produto funcional.",
    "Explore projects": "Explorar projetos",
    "Let's talk": "Vamos conversar",
    "Brasília, Brazil": "Brasília, Brasil",
    "Software Engineering · UnB": "Engenharia de Software · UnB",
    "ai_pipeline.py": "pipeline_ia.py",
    "completed": "executado",
    "DATA": "DADOS",
    "MODEL": "MODELO",
    "best result": "melhor resultado",
    "macro F1 in blood cell": "F1 macro na classificação",
    "classification": "de células sanguíneas",
    "faster CoOps": "mais rapidez na extração",
    "data extraction": "de dados do CoOps",
    "fixed overhead measured": "de overhead fixo medido",
    "in the Hindsight experiment": "no experimento Hindsight",
    "Winner": "Vencedor",
    "Latest achievement": "Conquista recente",
    "hackathon winner.": "vencedor do hackathon.",
    "hackathon winner and attendee.": "vencedor do hackathon e participante.",
    "With team OsBiruBob, I built Hindsight and won the IBM TechXchange 2026 Pre-conference Dev Day Hackathon.": "Com a equipe OsBiruBob, desenvolvi o Hindsight e venci o IBM TechXchange 2026 Pre-conference Dev Day Hackathon.",
    "Our offline analyzer finds context waste in IBM Bob sessions, recommends better agent configurations, and verifies the impact through a controlled A/B experiment. The victory earned our team an invitation to IBM TechXchange 2026 in Atlanta.": "Nosso analisador local encontra desperdícios de contexto em sessões do IBM Bob, recomenda configurações melhores para agentes e verifica o impacto por meio de um experimento A/B controlado. A vitória rendeu à equipe um convite para o IBM TechXchange 2026, em Atlanta.",
    "Our offline analyzer finds context waste in IBM Bob sessions, recommends better agent configurations, and verifies the impact through a controlled A/B experiment. The win took our team to IBM TechXchange 2026 in Atlanta, where I joined hands-on labs and technical sessions on AI and software engineering.": "Nosso analisador local encontra desperdícios de contexto em sessões do IBM Bob, recomenda configurações melhores para agentes e verifica o impacto por meio de um experimento A/B controlado. A vitória levou nossa equipe ao IBM TechXchange 2026, em Atlanta, onde participei de laboratórios práticos e sessões técnicas sobre IA e engenharia de software.",
    "Team": "Equipe",
    "Next stop": "Próximo destino",
    "Conference": "Conferência",
    "Atlanta, USA · October 26–29, 2026": "Atlanta, EUA · 26–29 de outubro de 2026",
    "Attendee · Atlanta, USA · October 26–29, 2026": "Participante · Atlanta, EUA · 26–29 de outubro de 2026",
    "FCTE/UnB announcement": "Anúncio da FCTE/UnB",
    "Explore Hindsight": "Conhecer o Hindsight",
    "Professional certification": "Certificação profissional",
    "Earned through a proctored, in-person certification exam during IBM TechXchange 2026.": "Obtida em exame presencial supervisionado durante o IBM TechXchange 2026.",
    "Verify on Credly ↗": "Verificar no Credly ↗",
    "Selected work": "Trabalhos selecionados",
    "Projects built with method,": "Projetos com método,",
    "code, and results.": "código e resultado.",
    "Academic experiments and team products connecting research, engineering, and visual communication.": "Experimentos acadêmicos e produtos em equipe que conectam pesquisa, engenharia e comunicação visual.",
    "All": "Todos",
    "AI": "IA",
    "Algorithms": "Algoritmos",
    "Systems": "Sistemas",
    "Research": "Pesquisa",
    "projects": "projetos",
    "Research series": "Série de pesquisa",
    "Artificial Intelligence II": "Inteligência Artificial II",
    "Three reproducible studies moving from supervised learning to anomaly detection and retrieval-augmented generation.": "Três estudos reprodutíveis que avançam do aprendizado supervisionado à detecção de anomalias e à geração aumentada por recuperação.",
    "Applied AI · Computer vision": "IA aplicada · Visão computacional",
    "Article 1 · Computer vision": "Artigo 1 · Visão computacional",
    "Blood cell classification": "Classificação de células sanguíneas",
    "A reproducible study comparing logistic regression, a compact CNN, and ResNet18 with transfer learning on BloodMNIST.": "Estudo reprodutível que compara regressão logística, uma CNN compacta e ResNet18 com transferência de aprendizado no BloodMNIST.",
    "Result": "Resultado",
    "ResNet18 achieved a": "A ResNet18 alcançou",
    "98.19% macro F1 score": "98,19% de F1 macro",
    ". The CNN reached 97.61% with only 2.6% of the parameters, highlighting the models' performance-efficiency trade-off.": ". A CNN chegou a 97,61% com apenas 2,6% dos parâmetros, evidenciando o custo-benefício entre os modelos.",
    "My role:": "Minha atuação:",
    "reproducible pipeline, compact CNN implementation, methodology, and automated result generation.": "pipeline reprodutível, implementação da CNN compacta, metodologia e geração automatizada dos resultados.",
    "GitHub · code and paper": "GitHub · código e artigo",
    "Article 2 · Anomaly detection": "Artigo 2 · Detecção de anomalias",
    "Unsupervised sensor-fault detection": "Detecção não supervisionada de falhas de sensor",
    "A controlled comparison of a statistical threshold, PCA, and an LSTM autoencoder over 23,073 multivariate OBD-II telemetry windows and five injected fault classes.": "Comparação controlada entre limiar estatístico, PCA e autoencoder LSTM sobre 23.073 janelas multivariadas de telemetria OBD-II e cinco classes de falhas injetadas.",
    "Finding:": "Achado:",
    "the LSTM reached 0.5634 AUC-PR with mean aggregation, but the ranking nearly disappeared with max aggregation — evaluation design changed the verdict.": "o LSTM atingiu AUC-PR de 0,5634 com agregação pela média, mas a ordenação quase desapareceu com o máximo — o desenho da avaliação mudou o veredito.",
    "training and calibration pipeline, metrics, PCA and LSTM autoencoder implementations, result analysis, and paper writing.": "pipeline de treino e calibração, métricas, implementações do PCA e do autoencoder LSTM, análise dos resultados e redação do artigo.",
    "Time series": "Séries temporais",
    "Article 3 · Retrieval-augmented generation": "Artigo 3 · Geração aumentada por recuperação",
    "Chunking strategies for RAG in Portuguese": "Estratégias de chunking para RAG em português",
    "An experiment with multilingual E5, FAISS, and Qwen2.5-3B-Instruct comparing slide boundaries with 128, 256, and 512-token windows across seven configurations.": "Experimento com E5 multilíngue, FAISS e Qwen2.5-3B-Instruct que compara limites de slides com janelas de 128, 256 e 512 tokens em sete configurações.",
    "slides led MRR@5 at 0.87, while 512/0 led Recall@5 at 0.94 with higher context cost; 20% overlap showed no consistent advantage.": "slides lideraram o MRR@5 com 0,87, enquanto 512/0 liderou o Recall@5 com 0,94 e maior custo de contexto; sobreposição de 20% não apresentou vantagem consistente.",
    "deterministic token chunking, embedding and FAISS protocol, auditable retrieval evaluation, dataset validation, and final scientific revision.": "chunking determinístico por tokens, protocolo de embeddings e FAISS, avaliação auditável da recuperação, validação do dataset e revisão científica final.",
    "Evaluation": "Avaliação",
    "Read revised paper": "Ler artigo revisado",
    "Code and artifacts": "Código e artefatos",
    "Macro F1 · test": "F1 macro · teste",
    "Logistic regression": "Regressão logística",
    "Compact CNN": "CNN compacta",
    "17,092 images": "17.092 imagens",
    "98.19%": "98,19%",
    "97.61%": "97,61%",
    "74.57%": "74,57%",
    "−25.9%": "−25,9%",
    "10,439 tokens": "10.439 tokens",
    "7,740 tokens": "7.740 tokens",
    "3 seeds": "3 execuções",
    "Data · Generative AI": "Dados · IA generativa",
    "A platform that turns GitHub activity into collaboration metrics, interactive visualizations, and AI-generated explanations.": "Plataforma que transforma atividade do GitHub em métricas de colaboração, visualizações interativas e explicações geradas por IA.",
    "Impact:": "Impacto:",
    "Medallion pipeline and data extraction optimized from 4h to 30s.": "pipeline Medallion e extração otimizada de 4h para 30s.",
    "extraction optimization, support for 90+ languages, automated testing, and CI.": "otimização da extração, suporte a mais de 90 linguagens, testes automatizados e CI.",
    "Repository": "Repositório",
    "optimized": "otimizado",
    "context overhead": "overhead de contexto",
    "Hackathon winner · IBM TechXchange 2026": "Vencedor do hackathon · IBM TechXchange 2026",
    "Agents · Observability": "Agentes · Observabilidade",
    "A local tool that analyzes coding-agent sessions, identifies context waste, and generates improved configurations with A/B validation.": "Ferramenta local que analisa sessões de agentes de código, encontra desperdícios de contexto e gera configurações melhores com validação A/B.",
    "Result:": "Resultado:",
    "19.7% lower API cost and 25.9% less fixed overhead.": "19,7% menos custo de API e 25,9% menos overhead fixo.",
    "tool-call extraction and deterministic recommendations to reduce overhead.": "extração de chamadas de ferramentas e recomendações determinísticas para reduzir overhead.",
    "AI Agents": "Agentes de IA",
    "Experimentation": "Experimentação",
    "Academic paper · Responsible AI": "Artigo acadêmico · IA responsável",
    "AI and misinformation: public health and elections": "IA e desinformação: saúde pública e eleições",
    "A paper investigating how AI changes the production, circulation, and impact of misinformation in vaccination campaigns and electoral processes.": "Artigo que investiga como a IA altera a produção, a circulação e o impacto da desinformação em campanhas de vacinação e processos eleitorais.",
    "Contribution:": "Contribuição:",
    "compares empirical evidence, international reports, and documented incidents without conflating technical capability with causality.": "confronta evidências empíricas, relatórios internacionais e incidentes documentados sem transformar capacidade técnica em causalidade.",
    "sole authorship, literature review, evidence matrix, and critical analysis of the sociotechnical chain.": "autoria individual, pesquisa bibliográfica, matriz de evidências e análise crítica da cadeia sociotécnica.",
    "AI Ethics": "Ética em IA",
    "Read paper (PT-BR)": "Ler artigo",
    "Sources": "Fontes",
    "Academic projects": "Projetos acadêmicos",
    "Algorithms made observable": "Algoritmos tornados observáveis",
    "Interactive systems that expose search, routing, resilience, and multicriteria decisions instead of hiding the algorithm behind an answer.": "Sistemas interativos que expõem busca, roteamento, resiliência e decisões multicritério em vez de esconder o algoritmo atrás de uma resposta.",
    "shortest path · Wikipedia": "menor caminho · Wikipedia",
    "Algorithms · Graphs": "Algoritmos · Grafos",
    "Wikirace with bidirectional BFS": "Wikirace com BFS bidirecional",
    "An explorer that finds the shortest click path between two Wikipedia articles in real time and turns the search into a navigable graph.": "Explorador que encontra, em tempo real, o menor caminho de cliques entre dois artigos da Wikipedia e transforma a busca em um grafo navegável.",
    "Engineering:": "Engenharia:",
    "asynchronous batched requests, in-memory cache, global 429 handling, and interactive visualization.": "consultas assíncronas em lote, cache em memória, controle global anti-429 e visualização interativa.",
    "bidirectional search engine, NetworkX/Pyvis rendering, batching, rate limiting, and testing.": "motor de busca bidirecional, renderização com NetworkX/Pyvis, batching, rate limiting e testes.",
    "Video": "Vídeo",
    "100 nodes · 180 edges": "100 nós · 180 conexões",
    "Algorithms · Network resilience": "Algoritmos · Resiliência de redes",
    "Internet collapse simulator": "Simulador de colapso da internet",
    "An interactive global network that recalculates routes when cables or connection points fail and compares Dijkstra, Bellman-Ford, and A* under the same scenario.": "Malha mundial interativa que recalcula rotas quando cabos ou pontos de conexão falham e compara Dijkstra, Bellman-Ford e A* sob o mesmo cenário.",
    "Analysis:": "Análise:",
    "shortest paths, minimum cuts, articulation points, and resilience curves under progressive failures.": "menor caminho, corte mínimo, pontos de articulação e curvas de resiliência a falhas progressivas.",
    "weighted graph, Dijkstra, simulation engine, global dataset, Leaflet interface, and benchmarks.": "grafo ponderado, Dijkstra, motor de simulação, dataset mundial, interface Leaflet e benchmarks.",
    "Divide and conquer · Decision audit": "Dividir e conquistar · Auditoria de decisões",
    "An auditable toolkit for comparing rankings and multicriteria decisions, with Kendall inversions, closest-pair analysis, deterministic selection, and weight sensitivity.": "Ferramenta auditável para comparar rankings e decisões multicritério, com inversões de Kendall, análise do par mais próximo, seleção determinística e sensibilidade a pesos.",
    "Python standard-library runtime, CLI, reproducible JSON reports, local web visualizer, tests, and benchmarks.": "runtime apenas com a biblioteca padrão do Python, CLI, relatórios JSON reprodutíveis, visualizador web local, testes e benchmarks.",
    "domain modeling, divide-and-conquer algorithms, audit-report pipeline, interactive visualizer, and quality automation.": "modelagem de domínio, algoritmos de divisão e conquista, pipeline de relatório auditável, visualizador interativo e automação de qualidade.",
    "Divide & Conquer": "Dividir e Conquistar",
    "Kendall distance": "Distância de Kendall",
    "Systems engineering": "Engenharia de sistemas",
    "From source code to native execution": "Do código-fonte à execução nativa",
    "Compilers · Systems": "Compiladores · Sistemas",
    "Crusty — a C compiler in Rust": "Crusty — compilador C em Rust",
    "A compiler for a meaningful subset of C, with a complete pipeline from lexical analysis to native x86-64 ELF executable generation.": "Compilador para um subconjunto relevante de C, com pipeline completo da análise léxica à geração de executáveis ELF nativos para x86-64.",
    "Scope:": "Escopo:",
    "Pratt parser, semantic analysis, TAC IR, six optimization techniques, and a System V ABI backend.": "Pratt parser, análise semântica, IR em TAC, seis técnicas de otimização e backend System V ABI.",
    "semantic validation, function prototypes, fixed-size arrays in the IR, and constant folding, propagation, and DCE passes.": "validação semântica, protótipos de função, arrays fixos na IR e passes de constant folding, propagation e DCE.",
    "Compilers": "Compiladores",
    "360+ tests": "+360 testes",
    "View compiler": "Ver compilador",
    "pipeline completed": "pipeline concluído",
    "ELF ready": "ELF pronto",
    "361 tests": "361 testes",
    "About me": "Sobre mim",
    "Curiosity to investigate.": "Curiosidade para investigar.",
    "Discipline to deliver.": "Disciplina para entregar.",
    "I like to understand the problem before choosing the technology. My work combines reproducible experimentation, data pipelines, and interfaces that make complex results easier to interpret.": "Gosto de entender o problema antes de escolher a tecnologia. Meu trabalho combina experimentação reprodutível, pipelines de dados e interfaces que tornam resultados complexos mais fáceis de interpretar.",
    "As a Software Engineering undergraduate at the University of Brasília, I have been deepening my foundations in AI, machine learning, data engineering, and collaborative product development. I am looking for an internship where I can learn quickly and contribute to real-world deliverables.": "Na graduação em Engenharia de Software pela Universidade de Brasília, venho aprofundando fundamentos de IA, aprendizado de máquina, engenharia de dados e desenvolvimento de produtos em equipe. Procuro uma oportunidade de estágio onde eu possa aprender rápido e contribuir com entregas reais.",
    "Reproducibility": "Reprodutibilidade",
    "Code, data, and metrics should tell the same story.": "Código, dados e métricas devem contar a mesma história.",
    "Measurable impact": "Impacto mensurável",
    "A clear result matters more than a list of tools.": "Um resultado claro vale mais que uma lista de ferramentas.",
    "Collaboration": "Colaboração",
    "Documentation and communication are part of engineering.": "Documentação e comunicação fazem parte da engenharia.",
    "Tools I use to build": "Ferramentas que uso para construir",
    "Languages": "Linguagens",
    "AI & Data": "IA & Dados",
    "Engineering": "Engenharia",
    "Git · GitHub Actions · Docker · Testing": "Git · GitHub Actions · Docker · Testes",
    "Next step": "Próximo passo",
    "Have an interesting problem": "Tem um problema interessante",
    "to solve?": "para resolver?",
    "I am open to internship opportunities in AI, Data, and Software Engineering.": "Estou aberto a oportunidades de estágio em IA, Dados e Engenharia de Software.",
    "Get in touch": "Entrar em contato",
    "Designed and developed in Brasília, Brazil.": "Projetado e desenvolvido em Brasília.",
    "Back to top ↑": "Voltar ao topo ↑"
  }));

  const portugueseAttributes = new Map(Object.entries({
    "Portfolio of Gustavo Xavier, IBM TechXchange 2026 hackathon winner and Software Engineering student at UnB focused on Artificial Intelligence, Data, and software development.": "Portfólio de Gustavo Xavier, vencedor do hackathon IBM TechXchange 2026 e estudante de Engenharia de Software na UnB com foco em Inteligência Artificial, Dados e desenvolvimento de software.",
    "Portfolio of Gustavo Xavier, IBM-certified AI practitioner, TechXchange 2026 hackathon winner, and Software Engineering student at UnB focused on AI, Machine Learning, and GenAI.": "Portfólio de Gustavo Xavier, profissional certificado em IA pela IBM, vencedor do hackathon TechXchange 2026 e estudante de Engenharia de Software na UnB com foco em IA, Machine Learning e GenAI.",
    "Gustavo Xavier — AI & Data": "Gustavo Xavier — IA & Dados",
    "IBM TechXchange 2026 hackathon winner building artificial intelligence, data engineering, and software projects around real-world problems.": "Vencedor do hackathon IBM TechXchange 2026, desenvolvendo projetos de inteligência artificial, engenharia de dados e software orientados a problemas reais.",
    "IBM-certified AI practitioner and TechXchange 2026 hackathon winner building Machine Learning, RAG, agentic AI, data, and software projects.": "Profissional certificado em IA pela IBM e vencedor do hackathon TechXchange 2026, desenvolvendo projetos de Machine Learning, RAG, IA agêntica, dados e software.",
    "Go to homepage": "Ir para o início",
    "Open menu": "Abrir menu",
    "Main navigation": "Navegação principal",
    "Language selector": "Seletor de idioma",
    "View site in English": "Ver site em inglês",
    "View site in Portuguese": "Ver site em português",
    "Toggle theme": "Alternar tema",
    "Quick information": "Informações rápidas",
    "Interactive visualization of an artificial intelligence pipeline": "Visualização interativa de um pipeline de inteligência artificial",
    "Featured results": "Resultados em destaque",
    "Filter projects by field": "Filtrar projetos por área",
    "Project categories": "Categorias de projetos",
    "Technologies": "Tecnologias",
    "Macro F1 comparison across three models": "Comparação do F1 macro entre três modelos",
    "Shortest path found between Wikipedia articles": "Menor caminho encontrado entre artigos da Wikipedia",
    "Interactive world map with cable routes and connection points": "Mapa mundial interativo com rotas de cabos e pontos de conexão",
    "Verify IBM Artificial Intelligence v1 Associate credential on Credly": "Verificar a credencial IBM Artificial Intelligence v1 Associate no Credly"
  }));

  const dynamicText = {
    en: {
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      hypothesis: 'hypothesis',
      data: 'data',
      model: 'model',
      insight: 'insight',
    },
    'pt-BR': {
      openMenu: 'Abrir menu',
      closeMenu: 'Fechar menu',
      hypothesis: 'hipótese',
      data: 'dados',
      model: 'modelo',
      insight: 'insight',
    },
  };

  const normalize = (value) => value.replace(/\s+/g, ' ').trim();
  const textBindings = [];
  const attributeBindings = [];

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!normalize(node.nodeValue)) return NodeFilter.FILTER_REJECT;
      const parent = node.parentElement;
      if (!parent || parent.closest('script, style, [data-preloader-step], [data-counter], [data-language-switcher]')) {
        return NodeFilter.FILTER_REJECT;
      }
      return portugueseText.has(normalize(node.nodeValue)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    },
  });

  let textNode = walker.nextNode();
  while (textNode) {
    const english = normalize(textNode.nodeValue);
    textBindings.push({
      node: textNode,
      english,
      portuguese: portugueseText.get(english),
      leading: textNode.nodeValue.match(/^\s*/)[0],
      trailing: textNode.nodeValue.match(/\s*$/)[0],
    });
    textNode = walker.nextNode();
  }

  document.querySelectorAll('[content], [aria-label], [alt]').forEach((element) => {
    ['content', 'aria-label', 'alt'].forEach((attribute) => {
      const english = element.getAttribute(attribute);
      if (english && portugueseAttributes.has(english)) {
        attributeBindings.push({ element, attribute, english, portuguese: portugueseAttributes.get(english) });
      }
    });
  });

  const readStoredLanguage = () => {
    try {
      const language = localStorage.getItem(STORAGE_KEY);
      return language === PORTUGUESE ? PORTUGUESE : ENGLISH;
    } catch {
      return ENGLISH;
    }
  };

  let language = readStoredLanguage();

  const translate = (key) => dynamicText[language]?.[key] || dynamicText.en[key] || key;

  const applyLanguage = (nextLanguage, persist = true) => {
    language = nextLanguage === PORTUGUESE ? PORTUGUESE : ENGLISH;
    const usePortuguese = language === PORTUGUESE;

    document.documentElement.lang = language;
    document.title = usePortuguese ? 'Gustavo Xavier — IA & Dados' : 'Gustavo Xavier — AI & Data';
    document.querySelector('meta[property="og:locale"]')?.setAttribute('content', usePortuguese ? 'pt_BR' : 'en_US');

    textBindings.forEach(({ node, english, portuguese, leading, trailing }) => {
      node.nodeValue = `${leading}${usePortuguese ? portuguese : english}${trailing}`;
    });
    attributeBindings.forEach(({ element, attribute, english, portuguese }) => {
      element.setAttribute(attribute, usePortuguese ? portuguese : english);
    });

    document.querySelectorAll('[data-language]').forEach((button) => {
      const isActive = button.dataset.language === language;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });

    if (persist) {
      try { localStorage.setItem(STORAGE_KEY, language); } catch { /* Storage can be blocked. */ }
    }

    window.dispatchEvent(new CustomEvent('portfolio:languagechange', { detail: { language } }));
  };

  document.querySelectorAll('[data-language]').forEach((button) => {
    button.addEventListener('click', () => applyLanguage(button.dataset.language));
  });

  window.portfolioI18n = {
    get language() { return language; },
    applyLanguage,
    translate,
  };

  applyLanguage(language, false);
})();
