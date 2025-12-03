# 🚀 PROMPT PARA CODEX — LANDING PAGE CHATPRO IA

> **Objetivo:** Criar uma Landing Page de alta conversão, moderna, escura e profissional para o produto chatPro IA — agentes inteligentes de IA para WhatsApp voltados para pequenas e médias empresas.

---

## 📋 CONTEXTO DO PROJETO

Você vai criar uma Landing Page 100% focada em vendas para o **chatPro IA** — uma solução de agentes de inteligência artificial para WhatsApp. O público-alvo são donos de pequenas e médias empresas que querem automatizar o atendimento e aumentar vendas.

A página deve transmitir: **simplicidade, praticidade e profissionalismo**. O tom é direto ao ponto, sem enrolação — assim como a marca chatPro.

**Site de referência:** https://www.chatpro.com.br/ia

---

## 🎨 IDENTIDADE VISUAL OBRIGATÓRIA

### Cores (usar exatamente estes valores):
```css
:root {
  /* Verdes */
  --verde-principal: #25D066;  /* Cor de destaque principal */
  --verde-2: #1BAD53;          /* Verde mais escuro */
  --verde-3: #24FF72;          /* Verde neon/claro */
  --verde-4: #EEFCF3;          /* Verde bem claro (backgrounds sutis) */
  
  /* Neutros */
  --preto: #000000;            /* Fundo principal */
  --preto-suave: #0D0D0D;      /* Fundo alternativo */
  --cinza-1: #D1D1D5;          /* Textos secundários */
  --cinza-2: #E6E5E8;          /* Bordas e divisores */
  --cinza-3: #F1F0F2;          /* Backgrounds claros se necessário */
  --branco: #FFFFFF;           /* Textos principais */
}
```

### Tipografia:
- **Títulos/Headlines:** Paytone One (Google Fonts) — bold, impactante
- **Subtítulos e destaques:** Space Grotesk Bold
- **Textos corridos:** Space Grotesk Regular
- **Importar do Google Fonts:**
```html
<link href="https://fonts.googleapis.com/css2?family=Paytone+One&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### Logo:
Use o SVG do logo chatPro (versão branca sobre fundo escuro). O logo deve sempre incluir o símbolo ® e nunca ser distorcido.

```
<!-- Logo chatPro - usar versão branca (#FFFFFF) no header -->
<!-- A marca é masculina: "o chatPro" (não "a chatPro") -->
<!-- Escrita correta: chatPro (apenas P maiúsculo) -->
```

### Ícones:
- Família: **Phosphor Icons** (peso Regular)
- Usar via CDN ou Lucide como alternativa
- Cor: branco ou verde principal

---

## 📐 ESPECIFICAÇÕES TÉCNICAS

### Stack:
- HTML5 semântico
- CSS3 moderno (variáveis CSS, Flexbox, Grid)
- JavaScript vanilla (para interações e animações)
- **Arquivo único** (HTML com CSS e JS inline/incorporado)

### Responsividade:
- Mobile-first obrigatório
- Breakpoints: 480px, 768px, 1024px, 1280px
- Menu hambúrguer no mobile
- Cards empilhados no mobile, grid no desktop

### Performance:
- Lazy loading em imagens
- CSS crítico inline
- Fontes com display=swap
- Animações com GPU (transform, opacity)

---

## 📝 COPY OFICIAL DA EQUIPE (RESPEITAR INTEGRALMENTE)

### HERO / HEADLINE
**Título Principal:**
```
IA para WhatsApp da sua empresa sem complicação
```

**Subtítulo:**
```
Agentes inteligentes que atendem 24/7 — para pequenas e médias empresas que querem vender mais e atender melhor.
```

**CTA Principal:**
```
[Agende com um Especialista]
```

---

### SUBHEADLINE / O QUE OFERECEMOS

**Título da Seção:**
```
O que oferecemos
```

**Cards/Benefícios:**

1. **Atendimento automático e humanizado, inclusive por áudio**
   - Nosso chatbot entende e responde, sem precisar de equipe 24h.

2. **Transcrição automática de áudio**
   - Ganhe tempo, não perca nenhuma mensagem importante.

3. **Sugestões inteligentes de resposta**
   - Ideal para equipes novas ou para dar um "up" no atendimento.

4. **Correção automática de texto**
   - Gere respostas com tom ideal e profissional, sem esforço.

---

### POR QUE USAR O CHATPRO IA

**Título da Seção:**
```
Por que usar o chatPro IA
```

**Diferenciais:**

1. **Disponível 24/7**
   - Sua empresa responde mesmo fora do expediente. Nunca perca vendas por demora no atendimento.

2. **Economia e eficiência**
   - Reduza custos com atendimento humano intensivo. Deixe que a IA cuide do volume e sua equipe foca no que realmente importa.

3. **Fácil implementação**
   - Sem complicação, sem necessidade de programar — a IA já vai "pronta para usar".

4. **Flexível e escalável**
   - Ideal para pequenas e médias empresas, mas com robustez suficiente para crescer com você.

---

### PROVA SOCIAL / CONFIANÇA

**Número em Destaque:**
```
Mais de 1.000 empresas já atendem com seus próprios agentes de IA
```

**Texto de Apoio:**
```
Isso significa que muitos negócios já confiaram na nossa tecnologia para melhorar o atendimento e captar mais leads.
```

---

### CHAMADA PARA AÇÃO (CTA FINAL)

**Título:**
```
Quer automatizar seu atendimento e aumentar vendas sem complicação?
```

**Formulário de Contato:**
```
- Nome
- E-mail
- Telefone / WhatsApp
- Empresa
- Tamanho da empresa (dropdown)
```

**CTA Alternativo:**
```
[Agende com um Especialista] — vamos te mostrar como aplicar no seu negócio.
```

---

## 🏗️ ESTRUTURA DA PÁGINA (Seções na Ordem)

### 1. HEADER (fixo no topo)
- Logo chatPro à esquerda (versão branca)
- Menu de navegação: O que oferecemos | Por que nós | Contato
- CTA: botão "Agende com um Especialista" (verde principal)
- Fundo: preto com leve transparência ao scrollar (backdrop-filter: blur)

---

### 2. HERO SECTION (100vh)

**Headline (usar Paytone One):**
```
IA para WhatsApp da sua empresa sem complicação
```

**Subheadline (usar Space Grotesk):**
```
Agentes inteligentes que atendem 24/7 — para pequenas e médias empresas que querem vender mais e atender melhor.
```

**CTA Principal:** 
- Botão grande verde: "Agende com um Especialista"

**CTA Secundário:** 
- Link discreto: "Saiba mais ↓"

**Visual:**
- Criar um mockup visual de conversa WhatsApp com a IA respondendo (pode ser feito em CSS/HTML puro)
- Partículas ou linhas conectadas sutis no background (efeito tech)
- Gradiente sutil de preto para verde muito escuro na base

---

### 3. SEÇÃO "O QUE OFERECEMOS" (4 cards)

**Título da seção (Paytone One):**
```
O que oferecemos
```

**Cards (grid 2x2 no desktop, 1 coluna no mobile):**

| Ícone | Título | Descrição |
|-------|--------|-----------|
| 🤖 (Robot/Chat) | Atendimento automático e humanizado, inclusive por áudio | Nosso chatbot entende e responde, sem precisar de equipe 24h. |
| 🎤 (Microphone) | Transcrição automática de áudio | Ganhe tempo, não perca nenhuma mensagem importante. |
| 💡 (Lightbulb) | Sugestões inteligentes de resposta | Ideal para equipes novas ou para dar um "up" no atendimento. |
| ✏️ (Pencil/Edit) | Correção automática de texto | Gere respostas com tom ideal e profissional, sem esforço. |

**Estilo dos cards:**
- Fundo: rgba(255,255,255,0.03) ou #111111
- Borda: 1px solid rgba(37,208,102,0.2)
- Border-radius: 16px
- Ícone em círculo com fundo verde principal
- Hover: borda mais verde, leve elevação (box-shadow verde)

---

### 4. SEÇÃO "POR QUE USAR O CHATPRO IA"

**Título (Paytone One):**
```
Por que usar o chatPro IA
```

**Layout:** Grid de 4 itens ou 2 colunas

**Itens com ícones:**

| Ícone | Título | Descrição |
|-------|--------|-----------|
| ⏰ (Clock) | Disponível 24/7 | Sua empresa responde mesmo fora do expediente. Nunca perca vendas por demora no atendimento. |
| 💰 (Money) | Economia e eficiência | Reduza custos com atendimento humano intensivo. Deixe que a IA cuide do volume e sua equipe foca no que realmente importa. |
| 🚀 (Rocket) | Fácil implementação | Sem complicação, sem necessidade de programar — a IA já vai "pronta para usar". |
| 📈 (Chart) | Flexível e escalável | Ideal para pequenas e médias empresas, mas com robustez suficiente para crescer com você. |

**Visual opcional à direita:** 
- Mockup de dashboard/interface da plataforma
- Ou animação de mensagens chegando e sendo respondidas

---

### 5. SEÇÃO PROVA SOCIAL / CONFIANÇA

**Número em destaque (animado ao entrar na viewport):**
```
Mais de 1.000 empresas
```

**Subtítulo:**
```
já atendem com seus próprios agentes de IA
```

**Texto de apoio:**
```
Isso significa que muitos negócios já confiaram na nossa tecnologia para melhorar o atendimento e captar mais leads.
```

**Visual:**
- Número grande com efeito de contagem (contador animado)
- Espaço para 4-6 logos de clientes (usar placeholders cinza com bordas arredondadas)
- Fundo com gradiente verde sutil ou padrão de grid

---

### 6. SEÇÃO CTA FINAL + FORMULÁRIO

**Título (Paytone One):**
```
Quer automatizar seu atendimento e aumentar vendas sem complicação?
```

**Formulário (estilizado, escuro):**
```html
<form>
  <input type="text" name="nome" placeholder="Nome" required>
  <input type="email" name="email" placeholder="E-mail" required>
  <input type="tel" name="telefone" placeholder="Telefone / WhatsApp" required>
  <input type="text" name="empresa" placeholder="Empresa" required>
  <select name="tamanho" required>
    <option value="">Tamanho da empresa</option>
    <option value="1-10">1 a 10 funcionários</option>
    <option value="11-50">11 a 50 funcionários</option>
    <option value="51-200">51 a 200 funcionários</option>
    <option value="200+">Mais de 200 funcionários</option>
  </select>
  <button type="submit">Agende com um Especialista</button>
</form>
```

**Estilo do formulário:**
- Inputs com fundo #111, borda cinza escuro
- Focus: borda verde principal, glow sutil
- Botão: verde principal, hover com brilho
- Labels animadas (floating labels) — opcional

**Texto alternativo abaixo do botão:**
```
Vamos te mostrar como aplicar no seu negócio.
```

---

### 7. FOOTER

- Logo chatPro (menor, versão branca)
- Tagline: "Descomplicando sua comunicação."
- Links: Política de Privacidade | Termos de Uso
- Copyright: © 2025 chatPro® Tecnologia Ltda.
- Borda superior verde (linha fina de destaque)

---

## ✨ MICRO-INTERAÇÕES E ANIMAÇÕES

### Obrigatórias:
1. **Scroll suave** entre seções (smooth scroll)
2. **Fade-in on scroll** nos elementos (intersection observer)
3. **Hover nos botões:** scale(1.02) + box-shadow verde com glow
4. **Hover nos cards:** border-color verde + translateY(-4px)
5. **Contador animado** na seção de prova social (de 0 até 1.000)
6. **Header fixo** que fica mais opaco ao scrollar

### Opcionais (se houver tempo):
- Partículas/linhas no hero (canvas ou CSS)
- Typing effect na headline do hero
- Parallax sutil em elementos do background
- Mockup de WhatsApp com mensagens aparecendo

---

## 🎯 DIRETRIZES DE CONVERSÃO

1. **Hierarquia visual clara:** O olho deve ir naturalmente para headline → benefício → CTA
2. **Contraste forte:** Verde sobre preto = máxima visibilidade
3. **CTAs repetidos:** Botão de conversão no header, hero, e no final (formulário)
4. **Prova social:** Número de empresas visível e impactante
5. **Mobile-first:** 70%+ do tráfego será mobile — formulário precisa ser fácil de preencher
6. **Texto da copy:** Usar EXATAMENTE os textos fornecidos pela equipe

---

## 🚫 O QUE NÃO FAZER

- ❌ Não usar cores fora da paleta (especialmente roxo, azul ou gradientes coloridos)
- ❌ Não usar fontes genéricas (Arial, Roboto, Inter)
- ❌ Não escrever "chatpro" ou "ChatPro" (correto: **chatPro**)
- ❌ Não usar a marca no feminino ("a chatPro" — correto: "o chatPro")
- ❌ Não aplicar logo em verde sobre fundo verde
- ❌ Não omitir o símbolo ® do logo
- ❌ Não criar seções muito longas sem CTAs intermediários
- ❌ Não usar imagens genéricas de banco de imagens
- ❌ Não exagerar em animações que prejudiquem performance
- ❌ Não alterar a copy fornecida pela equipe

---

## 📁 ENTREGA ESPERADA

Um arquivo único `index.html` contendo:
- HTML5 semântico completo
- CSS incorporado em `<style>`
- JavaScript em `<script>` para interações
- Comentários organizando as seções
- Meta tags para SEO básico e Open Graph
- Favicon placeholder

---

## 🎨 REFERÊNCIAS DE DESIGN

O visual deve transmitir:
- **Tech moderno** (como Vercel, Linear, Raycast)
- **Confiança corporativa** (como Salesforce, HubSpot)
- **Energia e conversão** (landing pages de SaaS)

Mas com a personalidade do chatPro: **simples, prático, direto ao ponto.**

---

## ⚡ RESUMO DAS SEÇÕES (ordem exata)

1. **Header** — Logo + Menu + CTA
2. **Hero** — Headline principal + Subheadline + CTA
3. **O que oferecemos** — 4 cards de funcionalidades
4. **Por que usar o chatPro IA** — 4 diferenciais
5. **Prova Social** — +1.000 empresas
6. **CTA Final + Formulário** — Conversão
7. **Footer** — Logo + Links + Copyright

---

## ⚡ COMECE AGORA

Crie a Landing Page completa seguindo todas estas especificações. Priorize:
1. **Fidelidade à copy** (usar textos exatos da equipe)
2. **Fidelidade à identidade visual** (cores, tipografia)
3. **Responsividade perfeita**
4. **Performance e carregamento rápido**
5. **Hierarquia visual que guia para conversão**
6. **Animações sutis que agregam sem distrair**

**Boa criação! O resultado deve ser uma página que converte visitantes em leads qualificados para o chatPro IA.**