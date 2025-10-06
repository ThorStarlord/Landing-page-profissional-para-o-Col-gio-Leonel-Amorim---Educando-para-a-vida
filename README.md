# Colégio Leonel Amorim - Website de Marketing

## 📚 Sobre o Projeto

Landing page profissional desenvolvida para o Colégio Leonel Amorim, uma instituição de ensino que oferece educação completa desde a Educação Infantil até o Ensino Médio.

**Slogan:** Educando para a vida

## 🎯 Características Principais

### Diferenciais do Colégio
- ✅ Material didático atualizado à BNCC
- ✅ Sistema de ensino completo (Infantil, Fundamental e Médio)
- ✅ Tecnologias digitais aliadas à prática educacional
- ✅ Desenvolvimento de competências socioemocionais
- ✅ Acompanhamento do aluno desde o infantil até o vestibular
- ✅ Atividades esportivas
- ✅ Metodologia Ativa

## 🚀 Estrutura do Site

### Seções Incluídas:

1. **Hero Section** - Primeira impressão impactante com call-to-action
2. **Sobre Nós** - Apresentação da instituição e missão
3. **Diferenciais** - 8 cards destacando os pontos fortes do colégio
4. **Níveis de Ensino** - Detalhamento dos três níveis oferecidos
5. **Metodologia** - Explicação da metodologia ativa
6. **Depoimentos** - Feedback de pais e alunos
7. **Matrícula/Contato** - Formulário de contato e informações
8. **Footer** - Informações de contato e links rápidos

## 💻 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica e acessível
- **CSS3** - Design moderno e responsivo com animações
- **JavaScript** - Interatividade e funcionalidades dinâmicas
- **Google Fonts** - Tipografia Poppins

## 🎨 Características de Design

- ✨ Design moderno e profissional
- 📱 Totalmente responsivo (desktop, tablet, mobile)
- 🎭 Animações suaves e elegantes
- 🎨 Esquema de cores atraente e profissional
- 🔄 Menu mobile funcional
- ✉️ Formulário de contato integrado

## 📋 Como Usar

### 1. Abrir o Site
Simplesmente abra o arquivo `index.html` em qualquer navegador moderno.

### 2. Personalizar Informações

#### Atualizar Informações de Contato
Edite no arquivo `index.html` na seção de matrícula/contato:

```html
<!-- Linha ~351 -->
<div class="info-item">
    <h4>📍 Endereço</h4>
    <p>Rua Exemplo, 123 - Centro<br>Cidade - Estado - CEP</p>
</div>
<div class="info-item">
    <h4>📞 Telefone</h4>
    <p>(00) 0000-0000<br>(00) 00000-0000</p>
</div>
<div class="info-item">
    <h4>📧 Email</h4>
    <p>contato@colegioleonelamorim.com.br</p>
</div>
```

#### Adicionar Links de Redes Sociais
No footer, edite os links:

```html
<!-- Linha ~435 -->
<div class="social-links">
    <a href="https://facebook.com/seucolégio" class="social-link">Facebook</a>
    <a href="https://instagram.com/seucolégio" class="social-link">Instagram</a>
    <a href="https://youtube.com/seucolégio" class="social-link">YouTube</a>
</div>
```

### 3. Implementar o Formulário

O formulário atualmente exibe uma mensagem de alerta. Para conectá-lo a um backend real:

**Opção A: Usar um serviço como Formspree**
1. Crie uma conta em [Formspree.io](https://formspree.io)
2. No arquivo `index.html`, adicione o action ao form:

```html
<form id="enrollmentForm" action="https://formspree.io/f/seu-id" method="POST">
```

**Opção B: Integrar com seu próprio backend**
1. Edite o arquivo `script.js` (linha ~75)
2. Descomente e adapte o código de fetch para seu endpoint

### 4. Adicionar Imagens Reais

Atualmente, as seções usam placeholders coloridos. Para adicionar imagens reais:

1. Crie uma pasta `images` na raiz do projeto
2. Adicione suas imagens
3. No arquivo `styles.css`, atualize os backgrounds:

```css
.nivel-image.infantil {
    background-image: url('images/educacao-infantil.jpg');
}
```

## 📱 Responsividade

O site é totalmente responsivo e se adapta a:
- 📱 Smartphones (< 480px)
- 📱 Tablets (481px - 768px)
- 💻 Laptops e Desktops (> 768px)

## 🔧 Funcionalidades JavaScript

- Menu mobile funcional
- Scroll suave para navegação
- Efeitos de scroll no navbar
- Animações ao rolar a página
- Formatação automática de telefone (formato brasileiro)
- Validação de formulário
- Tratamento de envio de formulário

## 🎯 Próximos Passos Sugeridos

1. **Adicionar Galeria de Fotos** - Mostrar instalações e atividades
2. **Blog/Notícias** - Seção para compartilhar novidades
3. **Calendário de Eventos** - Open houses, reuniões, eventos
4. **Portal do Aluno** - Área restrita para alunos e pais
5. **Chat Online** - Atendimento em tempo real
6. **SEO** - Otimização para mecanismos de busca
7. **Analytics** - Integração com Google Analytics
8. **Backend** - Sistema para gerenciar leads e matrículas

## 📞 Suporte e Customização

Para customizar cores, fontes ou layout:
- **Cores:** Edite as variáveis CSS no arquivo `styles.css` (linhas 9-19)
- **Fontes:** Altere o link do Google Fonts no `index.html`
- **Layout:** Ajuste os grids e flexbox no `styles.css`

## 🚀 Deploy

### Opções de Hospedagem Gratuita:

1. **GitHub Pages** - Ideal para sites estáticos
2. **Netlify** - Deploy automático e rápido
3. **Vercel** - Ótimo desempenho
4. **Firebase Hosting** - Integração com outros serviços Google

### Passos Básicos para Deploy (Netlify):

1. Crie uma conta em [Netlify](https://netlify.com)
2. Arraste a pasta do projeto para o Netlify
3. Seu site estará online em segundos!

## 📄 Licença

Este projeto foi desenvolvido para uso do Colégio Leonel Amorim.

## 🤝 Contribuições

Para melhorias ou sugestões, entre em contato através do formulário do site.

---

**Desenvolvido com ❤️ para o Colégio Leonel Amorim - Educando para a vida**