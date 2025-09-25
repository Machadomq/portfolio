# Portfolio Moderno

Um portfolio pessoal moderno e responsivo construído com as tecnologias mais atuais.

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca para interfaces de usuário
- **TypeScript** - Superset JavaScript com tipagem estática
- **Vite** - Build tool rápido e moderno
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion** - Biblioteca para animações suaves
- **React Router** - Navegação SPA
- **Lucide React** - Ícones modernos
- **React Hook Form** - Gerenciamento de formulários

## ✨ Características

- 🎨 **Design Moderno e Minimalista** - Interface limpa e profissional
- 📱 **Totalmente Responsivo** - Funciona perfeitamente em todos os dispositivos
- 🌙 **Tema Escuro/Claro** - Alternância automática baseada na preferência do usuário
- ⚡ **Performance Otimizada** - Carregamento rápido e experiência fluida
- 🎭 **Animações Suaves** - Transições elegantes com Framer Motion
- 🔍 **SEO Otimizado** - Meta tags e estrutura semântica
- ♿ **Acessível** - Seguindo as melhores práticas de acessibilidade

## 📄 Páginas

- **Home** - Apresentação pessoal com call-to-actions
- **Sobre** - Informações pessoais, experiência e habilidades
- **Projetos** - Portfolio de projetos com filtros e busca
- **Contato** - Formulário funcional de contato

## 🛠️ Instalação

1. Clone o repositório:
\`\`\`bash
git clone https://github.com/machadomq/portfolio.git
cd portfolio
\`\`\`

2. Instale as dependências:
\`\`\`bash
npm install
\`\`\`

3. Execute o projeto em desenvolvimento:
\`\`\`bash
npm run dev
\`\`\`

4. Para build de produção:
\`\`\`bash
npm run build
\`\`\`

## 📦 Estrutura do Projeto

\`\`\`
src/
├── components/          # Componentes reutilizáveis
│   ├── Layout.tsx
│   ├── Navbar.tsx
│   └── Footer.tsx
├── contexts/            # Contextos React
│   └── ThemeContext.tsx
├── pages/               # Páginas da aplicação
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   └── Contact.tsx
├── App.tsx              # Componente raiz
├── main.tsx            # Ponto de entrada
└── index.css           # Estilos globais
\`\`\`

## 🎨 Personalização

### Cores e Tema
As cores principais podem ser personalizadas no arquivo \`tailwind.config.js\`. O tema escuro é gerenciado automaticamente pelo \`ThemeContext\`.

### Conteúdo
1. **Informações Pessoais**: Edite os arquivos das páginas para adicionar suas informações
2. **Projetos**: Modifique o array \`projects\` em \`src/pages/Projects.tsx\`
3. **Habilidades**: Atualize o array \`skills\` em \`src/pages/About.tsx\`
4. **Contato**: Configure o formulário em \`src/pages/Contact.tsx\`

### Imagens
- Substitua os placeholders de imagem pelos seus próprios assets
- Adicione uma foto de perfil real
- Inclua screenshots dos seus projetos

## 🎯 Instruções Específicas para machadomq

### 🚀 Deploy Rápido no seu GitHub:

1. **Criar repositório:**
   - Acesse: https://github.com/new
   - Nome: \`portfolio\`
   - Público ✅
   - Clique em "Create repository"

2. **Comandos no terminal:**
\`\`\`bash
cd c:\Users\pc\programa\machado\portfolio
git init
git add .
git commit -m "Portfolio moderno completo"
git branch -M main
git remote add origin https://github.com/machadomq/portfolio.git
git push -u origin main
\`\`\`

3. **Configurar GitHub Pages:**
   - Vá em: https://github.com/machadomq/portfolio/settings/pages
   - Source: "GitHub Actions"
   - Aguarde 3-5 minutos

4. **Seu portfolio estará em:**
   **🌐 https://machadomq.github.io/portfolio/**

### 📝 Para futuras atualizações:
\`\`\`bash
git add .
git commit -m "Atualização do portfolio"
git push
\`\`\`

## 🔧 Scripts Disponíveis

- \`npm run dev\` - Executa em modo desenvolvimento
- \`npm run build\` - Gera build de produção
- \`npm run preview\` - Preview do build de produção
- \`npm run lint\` - Executa o ESLint

## 📝 TODO

- [ ] Adicionar suas informações pessoais
- [ ] Substituir projetos exemplo pelos seus próprios
- [ ] Adicionar imagens reais
- [ ] Configurar formulário de contato com backend
- [ ] Adicionar Google Analytics
- [ ] Implementar PWA (opcional)

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar, modificar e distribuir.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

---

Feito com ❤️ e as melhores tecnologias modernas
