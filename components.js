const components = [
  { tag: 'navbar-component', path: 'components/navbar.html', templateId: 'navbar-template' },
  { tag: 'sobre-component', path: 'components/sobre.html', templateId: 'sobre-template' },
  { tag: 'social-component', path: 'components/social.html', templateId: 'social-template' },
  { tag: 'projeto-component', path: 'components/projeto.html', templateId: 'projeto-template' },
  { tag: 'contato-component', path: 'components/contato.html', templateId: 'contato-template' },
  { tag: 'footer-component', path: 'components/footer.html', templateId: 'footer-template' }
];

components.forEach(({ tag, path, templateId }) => {
  fetch(path)
    .then(res => res.text())
    .then(html => {
      const container = document.createElement('div');
      container.innerHTML = html;
      const template = container.querySelector(`#${templateId}`);

      if (!template) {
        console.error(`Template com ID "${templateId}" não encontrado no arquivo ${path}.`);
        return;
      }

      class CustomComponent extends HTMLElement {
        connectedCallback() {
          this.appendChild(template.content.cloneNode(true)); // Sem Shadow DOM
        }
      }

      if (!customElements.get(tag)) {
        customElements.define(tag, CustomComponent);
      }
    })
    .catch(err => console.error(`Erro ao carregar componente ${tag}:`, err));
});
