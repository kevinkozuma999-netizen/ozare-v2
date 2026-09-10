# Ozare V2 — site pronto para Vercel

Projeto em **Next.js 15 + React + TypeScript**, criado para funcionar como site institucional real.

## 1. Rodar no seu computador

Você precisa ter o Node.js instalado.

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## 2. Publicar na Vercel

### Opção mais simples
1. Crie uma conta em https://vercel.com
2. Crie um repositório no GitHub e envie esta pasta para ele.
3. Na Vercel, clique em **Add New > Project**.
4. Importe o repositório.
5. A Vercel detectará Next.js automaticamente.
6. Clique em **Deploy**.

A Vercel criará uma URL parecida com:

`ozare-v2.vercel.app`

## 3. Conectar o domínio ozare.com.br

Na Vercel:
1. Abra o projeto.
2. Vá em **Settings > Domains**.
3. Adicione `ozare.com.br`.
4. A Vercel mostrará quais registros DNS precisam ser alterados.
5. No provedor onde o domínio está registrado, substitua os registros conforme a Vercel indicar.

Não altere o DNS antes da aprovação final do cliente.

## 4. O que trocar antes de publicar como site oficial

- Foto oficial do Rafael: hoje existe um placeholder estilizado.
- Logo oficial em vetor/SVG.
- Textos finais aprovados.
- Links específicos de cada solução, se existirem.
- Cases adicionais e dados validados.
- Favicon e imagem Open Graph.
- Política de privacidade / termos, se necessários.
- Analytics e pixels apenas depois de definir quais ferramentas serão usadas.

## 5. Onde editar

Conteúdo geral e números:
`lib/data.ts`

Home:
`app/page.tsx`

Soluções:
`app/solucoes/page.tsx`

Resultados:
`app/resultados/page.tsx`

Case Tulli:
`app/cases/tulli/page.tsx`

Sobre:
`app/sobre/page.tsx`

Contato:
`app/contato/page.tsx`

Visual:
`app/globals.css`

## 6. Direção visual

A estrutura usa as referências fornecidas como direção:
- editorial / brutalista;
- tipografia grande;
- grid rígido;
- preto + off-white + laranja;
- linguagem de engenharia abstrata;
- pouca decoração gratuita;
- foco em hierarquia, sistema e resultado.

## Importante

Os números e informações comerciais foram baseados no site público da Ozare em 10/09/2026. Valide-os com o cliente antes da publicação final.

Os resultados citados devem continuar acompanhados do aviso de que resultados individuais não representam garantia de faturamento.
