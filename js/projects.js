const projetos = [
  {
    nome: "Background Effect",
    descricao: "TECNOLOGIAS",
    previewType: "img",
    img_src: "https://raw.githubusercontent.com/cardosokks/css-background_effect_1/main/images/preview.gif",
    link_preview: "https://cardosokks.github.io/css-background_effect_1/",
    link_github: "https://github.com/cardosokks/css-background_effect_1",
    techs: [
      { bg: "#e44d26", iconClass: "fab fa-html5", iconColor: "white" },
      { bg: "#f7df1e", iconClass: "fab fa-js", iconColor: "#323330" },
      { bg: "#2965f1", iconClass: "fab fa-css3-alt", iconColor: "white" },
    ],
  },
  {
    nome: "Drag And Drop Video",
    descricao: "TECNOLOGIAS",
    previewType: "img",
    img_src: "https://raw.githubusercontent.com/cardosokks/drag_and_drop_video/main/images/preview.gif",
    link_preview: "https://cardosokks.github.io/drag_and_drop_video/",
    link_github: "https://github.com/cardosokks/drag_and_drop_video",
    techs: [
      { bg: "#e44d26", iconClass: "fab fa-html5", iconColor: "white" },
      { bg: "#f7df1e", iconClass: "fab fa-js", iconColor: "#323330" },
      { bg: "#2965f1", iconClass: "fab fa-css3-alt", iconColor: "white" },
    ],
  },
  {
    nome: "IFB - Exercício 1",
    descricao: "TECNOLOGIAS",
    previewType: "iframe",
    iframe_src: "https://cardosokks.github.io/ifb_atividade_html/",
    link_preview: "https://cardosokks.github.io/ifb_atividade_html/",
    link_github: "https://github.com/cardosokks/ifb_atividade_html/",
    techs: [
      { bg: "#e44d26", iconClass: "fab fa-html5", iconColor: "white" },
      { bg: "#f7df1e", iconClass: "fab fa-js", iconColor: "#323330" },
      { bg: "#2965f1", iconClass: "fab fa-css3-alt", iconColor: "white" },
    ],
  },
  {
    nome: "IFB - Exercício 2",
    descricao: "TECNOLOGIAS",
    previewType: "iframe",
    iframe_src: "https://cardosokks.github.io/ifb_atividade_html_2/",
    link_preview: "https://cardosokks.github.io/ifb_atividade_html_2/",
    link_github: "https://github.com/cardosokks/ifb_atividade_html_2/",
    techs: [
      { bg: "#e44d26", iconClass: "fab fa-html5", iconColor: "white" },
      { bg: "#f7df1e", iconClass: "fab fa-js", iconColor: "#323330" },
      { bg: "#2965f1", iconClass: "fab fa-css3-alt", iconColor: "white" },
    ],
  },
  {
    nome: "IFB - Exercício 3",
    descricao: "TECNOLOGIAS",
    previewType: "iframe",
    iframe_src: "https://cardosokks.github.io/ifb_atividade_html_3/",
    link_preview: "https://cardosokks.github.io/ifb_atividade_html_3/",
    link_github: "https://github.com/cardosokks/ifb_atividade_html_3/",
    techs: [
      { bg: "#e44d26", iconClass: "fab fa-html5", iconColor: "white" },
      { bg: "#2965f1", iconClass: "fab fa-css3-alt", iconColor: "white" },
    ],
  },
  {
    nome: "IFB - Exercício 4",
    descricao: "TECNOLOGIAS",
    previewType: "iframe",
    iframe_src: "https://cardosokks.github.io/ifb_atividade_html_4/",
    link_preview: "https://cardosokks.github.io/ifb_atividade_html_4/",
    link_github: "https://github.com/cardosokks/ifb_atividade_html_4/",
    techs: [
      { bg: "#e44d26", iconClass: "fab fa-html5", iconColor: "white" },
      { bg: "#2965f1", iconClass: "fab fa-css3-alt", iconColor: "white" },
    ],
  },
];


function criarCard(proj) {
  const card = document.createElement("div");
  card.className = "card";

  const previewContainer = document.createElement("div");
  previewContainer.className = "preview-container";

  if (proj.previewType === "img" && proj.img_src) {
    const img = document.createElement("img");
    img.src = proj.img_src;
    previewContainer.appendChild(img);
  } else if (proj.previewType === "iframe" && proj.iframe_src) {
    const iframeWrapper = document.createElement("div");
    iframeWrapper.className = "iframe-wrapper";
    const iframe = document.createElement("iframe");
    iframe.src = proj.iframe_src;
    iframeWrapper.appendChild(iframe);
    previewContainer.appendChild(iframeWrapper);
  }

  card.appendChild(previewContainer);

  const cardContent = document.createElement("div");
  cardContent.className = "card-content";

  const h3 = document.createElement("h3");
  h3.textContent = proj.nome;
  cardContent.appendChild(h3);

  const techIcons = document.createElement("div");
  techIcons.className = "tech-icons";

  proj.techs.forEach((tech) => {
    const span = document.createElement("span");
    span.style.background = tech.bg;


    const i = document.createElement("i");
    i.className = tech.iconClass;
    i.style.color = tech.iconColor;
    i.style.fontSize = "20px";

    span.appendChild(i);
    techIcons.appendChild(span);
  });

  cardContent.appendChild(techIcons);

  const cardButtons = document.createElement("div");
  cardButtons.className = "card-buttons";

  const aPreview = document.createElement("a");
  aPreview.href = proj.link_preview;
  aPreview.className = "bt1";
  aPreview.textContent = "Pré-visualizar";
  aPreview.target = "_blank";

  const aGithub = document.createElement("a");
  aGithub.href = proj.link_github;
  aGithub.className = "bt2";
  aGithub.textContent = "GitHub";
  aGithub.target = "_blank";

  cardButtons.appendChild(aPreview);
  cardButtons.appendChild(aGithub);

  cardContent.appendChild(cardButtons);

  card.appendChild(cardContent);

  return card;
}


// função para inserir os cards na section
function carregarCards() {
  const container = document.querySelector(".card-container");
  if (!container) return;

  projetos.forEach((proj) => {
    const card = criarCard(proj);
    container.appendChild(card);
  });
}

// chama a função quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", carregarCards);